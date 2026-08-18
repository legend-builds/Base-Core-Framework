import { expect } from "chai";
import { ethers } from "hardhat";

describe("BaseVault Contract", function () {
  async function deployVaultFixture() {
    const [owner, otherAccount] = await ethers.getSigners();
    const BaseVault = await ethers.getContractFactory("BaseVault");
    const vault = await BaseVault.deploy();
    return { vault, owner, otherAccount };
  }

  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      const { vault, owner } = await deployVaultFixture();
      expect(await vault.owner()).to.equal(owner.address);
    });
  });

  describe("Deposits", function () {
    it("Should accept deposits and update balance", async function () {
      const { vault, otherAccount } = await deployVaultFixture();
      const depositAmount = ethers.parseEther("1.0");

      await expect(vault.connect(otherAccount).deposit({ value: depositAmount }))
        .to.emit(vault, "Deposited")
        .withArgs(otherAccount.address, depositAmount);

      expect(await vault.balances(otherAccount.address)).to.equal(depositAmount);
    });
  });
});

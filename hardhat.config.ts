import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    "base-mainnet": {
      url: "https://mainnet.base.org",
      accounts: [], // در پروژه‌های عمومی کلید خصوصی را خالی می‌گذاریم
    }
  }
};

export default config;
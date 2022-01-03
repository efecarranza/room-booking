import { ethers } from "ethers";
import sdk from "./initialize-sdk.js";
import { readFileSync } from "fs";

const app = sdk.getAppModule("0xC8dBB49c2949bC861B485853411e29D967C528CC");

(async () => {
  try {
    const bundleDropModule = await app.deployBundleDropModule({
      name: "PepsiCo. Employee NFT",
      description: "An NFT proving employment status for PepsiCo. The NFT grants the owner the ability to participate in COLA day.",
      image: readFileSync("scripts/img/pepsi.png"),
      primarySaleRecipientAddress: ethers.constants.AddressZero,
    });
    
    console.log(
      "✅ Successfully deployed bundleDrop module, address:",
      bundleDropModule.address,
    );
    console.log(
      "✅ bundleDrop metadata:",
      await bundleDropModule.getMetadata(),
    );
  } catch (error) {
    console.log("failed to deploy bundleDrop module", error);
  }
})()
import { ethers } from "ethers";
import sdk from "./initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule("0xB0403DB21E82587D3E40341577bcA250C9F7bE82",); // coke nft address

(async () => {
  try {
    const res = await bundleDrop.claim("0", 1);
    
    console.log("✅ Successfully received Cola Day NFT: ", res);
  } catch (error) {
    console.log("Failed to mint Cola Day NFT", error);
  }
})();

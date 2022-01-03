import { ethers } from "ethers";
import sdk from "./initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule("0xB0403DB21E82587D3E40341577bcA250C9F7bE82",); // coke nft address

(async () => {
  try {
    const res = await bundleDrop.safeTransferFrom(
    	"0x81beED0e09895649A93ac4B6628B7f36c90c7664",
    	"0x960029d2b66B87B7cb67378E6370a0d22562A8A5",
    	"0",
    	1
    );
    
    console.log("✅ Successfully received Cola Day NFT: ", res);
  } catch (error) {
    console.log("Failed to mint Cola Day NFT", error);
  }
})();

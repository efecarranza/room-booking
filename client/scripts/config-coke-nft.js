import sdk from "./initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule("0xB0403DB21E82587D3E40341577bcA250C9F7bE82",);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Coca-Cola Logo",
        description: "This NFT proves employment status at The Coca-Cola Company.",
        image: readFileSync("scripts/img/coke.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();

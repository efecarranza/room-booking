import sdk from "./initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule("0x537832F32280Bb8d49fA2De874c845929b3920d2",);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "PepsiCo. Logo",
        description: "This NFT proves employment status at PepsiCo.",
        image: readFileSync("scripts/img/pepsi.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();

import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0xD619FECC2A7A124B6C7738bC7E0B67cAbC5B0971");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "TesakToken",
        description: "This NFT will give you access to CC_DAO!",
        image: readFileSync("scripts/assets/3.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
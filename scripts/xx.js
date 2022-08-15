import sdk from "./1-initialize-sdk.js";

const walletAddresses = await editionDrop.history.getAllClaimerAddresses(0);
console.log (walletAddresses)
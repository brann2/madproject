// missing-asset-registry-path.js
module.exports = {
  // This is a workaround for the error with missing asset registry path
  registerAsset: (asset) => {
    return asset;
  }
}; 
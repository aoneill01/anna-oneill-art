const testFolder = "./images/2025";
const fs = require("fs");

const images = fs.readdirSync(testFolder).map((file) => ({
  srcThumbnail: `images/2025/${file}`,
  srcFull: `images/2025/${file}`,
  alt: "TODO",
}));

console.log(JSON.stringify(images, null, 2));

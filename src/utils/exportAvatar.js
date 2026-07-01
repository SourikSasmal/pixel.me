import {
  getBody,
  getHair,
  getEyes,
  getMouth,
  getTop,
  getBottom,
  getAccessory,
} from "./assetLoader";

function loadImage(src) {
  return new Promise((resolve) => {
    const img = new Image();

    img.src = src;

    img.onload = () => resolve(img);
  });
}
export async function exportAvatar(avatar) {
  // Small canvas (original sprite)
  const canvas = document.createElement("canvas");
  canvas.width = 64;
  canvas.height = 64;

  const ctx = canvas.getContext("2d");
  ctx.imageSmoothingEnabled = false;

  // Draw layers
  ctx.drawImage(await loadImage(getBody(avatar.body)), 0, 0);
  ctx.drawImage(await loadImage(getBottom(avatar.bottom)), 0, 0);
  ctx.drawImage(
    await loadImage(getHair(avatar.hairStyle, avatar.hairColor)),
    0,
    0,
  );
  ctx.drawImage(await loadImage(getTop(avatar.top)), 0, 0);
  ctx.drawImage(await loadImage(getEyes(avatar.eyes)), 0, 0);
  ctx.drawImage(await loadImage(getMouth(avatar.mouth)), 0, 0);

  if (avatar.accessory) {
    ctx.drawImage(await loadImage(getAccessory(avatar.accessory)), 0, 0);
  }

  // Create a larger canvas
  const exportCanvas = document.createElement("canvas");
  exportCanvas.width = 512;
  exportCanvas.height = 512;

  const exportCtx = exportCanvas.getContext("2d");

  // Keep pixels crisp
  exportCtx.imageSmoothingEnabled = false;

  // Draw the 64x64 sprite scaled up to 512x512
  exportCtx.drawImage(canvas, 0, 0, 512, 512);

  // Download
  const link = document.createElement("a");
  link.download = "my-avatar.png";
  link.href = exportCanvas.toDataURL("image/png");
  link.click();
}

// Body
const bodyImages = import.meta.glob("../assets/body/*.png", {
  eager: true,
  import: "default",
});

// Eyes
const eyeImages = import.meta.glob("../assets/eyes/*.png", {
  eager: true,
  import: "default",
});

// Mouth
const mouthImages = import.meta.glob("../assets/mouth/*.png", {
  eager: true,
  import: "default",
});

// Tops
const topImages = import.meta.glob("../assets/tops/*.png", {
  eager: true,
  import: "default",
});

// Bottoms
const bottomImages = import.meta.glob("../assets/bottoms/*.png", {
  eager: true,
  import: "default",
});

// Accessories
const accessoryImages = import.meta.glob("../assets/accessories/*.png", {
  eager: true,
  import: "default",
});

// Hair
const hairImages = import.meta.glob("../assets/hair/**/*.png", {
  eager: true,
  import: "default",
});

export function getBody(color) {
  return bodyImages[`../assets/body/${color}.png`];
}

export function getEyes(name) {
  return eyeImages[`../assets/eyes/${name}.png`];
}

export function getMouth(name) {
  return mouthImages[`../assets/mouth/${name}.png`];
}

export function getTop(name) {
  return topImages[`../assets/tops/${name}.png`];
}

export function getBottom(name) {
  return bottomImages[`../assets/bottoms/${name}.png`];
}

export function getAccessory(name) {
  if (!name) return null;

  return accessoryImages[`../assets/accessories/${name}.png`];
}

export function getHair(style, color) {
  return hairImages[`../assets/hair/${style}/${color}.png`];
}

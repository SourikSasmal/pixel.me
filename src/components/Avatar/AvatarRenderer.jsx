import {
  getBody,
  getHair,
  getEyes,
  getMouth,
  getTop,
  getBottom,
  getAccessory,
} from "../../utils/assetLoader";

function AvatarRenderer({ avatar, className = "" }) {
  return (
    <div className={className}>
      <img src={getBody(avatar.body)} className="layer" alt="" />

      <img
        src={getHair(avatar.hairStyle, avatar.hairColor)}
        className="layer"
        alt=""
      />

      <img src={getBottom(avatar.bottom)} className="layer" alt="" />

      <img src={getTop(avatar.top)} className="layer" alt="" />

      <img src={getEyes(avatar.eyes)} className="layer" alt="" />

      <img src={getMouth(avatar.mouth)} className="layer" alt="" />

      {avatar.accessory && (
        <img src={getAccessory(avatar.accessory)} className="layer" alt="" />
      )}
    </div>
  );
}

export default AvatarRenderer;
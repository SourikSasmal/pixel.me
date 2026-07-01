import "./RandomButton.css";
import { avatarData } from "../../data/avatarData";

function RandomButton({ avatar, setAvatar }) {
  function randomFrom(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  function randomize() {
    setAvatar({
      body: randomFrom(avatarData.body),
      hairStyle: randomFrom(avatarData.hair),
      hairColor: randomFrom(avatarData.hairColors),
      eyes: randomFrom(avatarData.eyes),
      mouth: randomFrom(avatarData.mouth),
      top: randomFrom(avatarData.tops),
      bottom: randomFrom(avatarData.bottoms),
      accessory: randomFrom(avatarData.accessories),
    });
  }

  return (
    <button className="random-btn" onClick={randomize}>
      🎲 Random
    </button>
  );
}

export default RandomButton;

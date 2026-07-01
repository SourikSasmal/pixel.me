import "./Avatar.css";
import AvatarRenderer from "./AvatarRenderer";

function Avatar({ avatar }) {
  return (
    <div className="avatar-window">
      <div className="avatar">
        <AvatarRenderer avatar={avatar} />
      </div>
    </div>
  );
}

export default Avatar;
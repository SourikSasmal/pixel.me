import "./DownloadButton.css";
import { exportAvatar } from "../../utils/exportAvatar";

function DownloadButton({ avatar }) {
  return (
    <button className="download-btn" onClick={() => exportAvatar(avatar)}>
      💾 Download PNG
    </button>
  );
}

export default DownloadButton;

import "./ItemGrid.css";
import AvatarRenderer from "../Avatar/AvatarRenderer";

function ItemGrid({ items, onSelect, avatar, currentCategory }) {
  function isSelected(item) {
    switch (currentCategory) {
      case "hair":
        return avatar.hairStyle === item;

      case "body":
        return avatar.body === item;

      case "eyes":
        return avatar.eyes === item;

      case "mouth":
        return avatar.mouth === item;

      case "tops":
        return avatar.top === item;

      case "bottoms":
        return avatar.bottom === item;

      case "accessories":
        return avatar.accessory === item;

      default:
        return false;
    }
  }

  function getPreviewAvatar(item) {
    const preview = { ...avatar };

    switch (currentCategory) {
      case "hair":
        preview.hairStyle = item;
        break;

      case "body":
        preview.body = item;
        break;

      case "eyes":
        preview.eyes = item;
        break;

      case "mouth":
        preview.mouth = item;
        break;

      case "tops":
        preview.top = item;
        break;

      case "bottoms":
        preview.bottom = item;
        break;

      case "accessories":
        preview.accessory = item;
        break;

      default:
        break;
    }

    return preview;
  }

  return (
    <div className="item-grid">
      {items.map((item) => (
        <button
          key={item}
          className={`item-btn ${isSelected(item) ? "selected" : ""}`}
          onClick={() => onSelect(item)}
        >
          <AvatarRenderer
            avatar={getPreviewAvatar(item)}
            className="preview-avatar"
          />

          <span>{item}</span>
        </button>
      ))}
    </div>
  );
}

export default ItemGrid;

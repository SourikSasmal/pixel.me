import { useState } from "react";

import Avatar from "./components/Avatar/Avatar";
import ItemGrid from "./components/ItemGrid/ItemGrid";
import CategoryTabs from "./components/CategoryTabs/CategoryTabs";
import DownloadButton from "./components/DownloadButton/DownloadButton";

import { defaultAvatar } from "./data/defaultAvatar";
import { avatarData } from "./data/avatarData";

import HairColors from "./components/HairColors/HairColors";

import RandomButton from "./components/RandomButton/RandomButton";

function App() {
  const [avatar, setAvatar] = useState(defaultAvatar);

  const [currentCategory, setCurrentCategory] = useState("hair");

  function handleSelection(item) {
    switch (currentCategory) {
      case "hair":
        setAvatar({
          ...avatar,
          hairStyle: item,
        });
        break;

      case "body":
        setAvatar({
          ...avatar,
          body: item,
        });
        break;

      case "eyes":
        setAvatar({
          ...avatar,
          eyes: item,
        });
        break;

      case "mouth":
        setAvatar({
          ...avatar,
          mouth: item,
        });
        break;

      case "tops":
        setAvatar({
          ...avatar,
          top: item,
        });
        break;

      case "bottoms":
        setAvatar({
          ...avatar,
          bottom: item,
        });
        break;

      case "accessories":
        setAvatar({
          ...avatar,
          accessory: item,
        });
        break;

      default:
        break;
    }
  }

  return (
    <main className="app">
      <div className="editor">
        <Avatar avatar={avatar} />

        <CategoryTabs
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
        />

        <ItemGrid
          items={avatarData[currentCategory]}
          onSelect={handleSelection}
          avatar={avatar}
          currentCategory={currentCategory}
        />
        {currentCategory === "hair" && (
          <HairColors avatar={avatar} setAvatar={setAvatar} />
        )}

        <div className="action-buttons">
          <RandomButton avatar={avatar} setAvatar={setAvatar} />
          <DownloadButton avatar={avatar} />
        </div>
      </div>
    </main>
  );
}

export default App;

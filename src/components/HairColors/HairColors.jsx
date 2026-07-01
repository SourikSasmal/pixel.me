import "./HairColors.css";

const colors = [
  "black",
  "brown",
  "blonde",
  "blue",
  "pink",
  "white",
];

function HairColors({ avatar, setAvatar }) {
  return (
    <div className="hair-colors">
      {colors.map((color) => (
        <button
          key={color}
          className={`color-btn ${color}`}
          onClick={() =>
            setAvatar({
              ...avatar,
              hairColor: color,
            })
          }
        />
      ))}
    </div>
  );
}

export default HairColors;
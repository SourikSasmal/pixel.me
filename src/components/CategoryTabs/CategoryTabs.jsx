import "./CategoryTabs.css";

const categories = [
  "hair",
  "body",
  "eyes",
  "mouth",
  "tops",
  "bottoms",
  "accessories",
];

function CategoryTabs({ currentCategory, setCurrentCategory }) {
  return (
    <div className="category-tabs">
      {categories.map((category) => (
        <button
          key={category}
          className={`category-btn ${
            currentCategory === category ? "active" : ""
          }`}
          onClick={() => setCurrentCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryTabs;

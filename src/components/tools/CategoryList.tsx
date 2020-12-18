import { useSelector } from "react-redux";
import CategoryBadge from "./CategoryBadge";

const CategoryList = (props) => {
  const { eventCategories } = useSelector((state: ReduxState) => state);

  return (
    <div className="absolute top-0 left-0 py-2 px-1 w-full overflow-auto whitespace-nowrap">
      <CategoryBadge id={-1} title="Show All" />

      {eventCategories.map((cat) => (
        <CategoryBadge
          key={`event-cat-${cat.id}`}
          id={cat.id}
          title={cat.title}
        />
      ))}
    </div>
  );
};

export default CategoryList;

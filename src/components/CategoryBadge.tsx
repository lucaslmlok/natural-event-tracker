import { Dispatch } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as ReduxActions from "../store/actionCreator";

type Props = {
  id: number | null;
  title: string;
};

const CategoryBadge = ({ id, title }: Props) => {
  const dispatch: Dispatch<any> = useDispatch();
  const { selectedCategory } = useSelector((state: ReduxState) => state);
  let isActive: boolean;

  if (id !== null) {
    isActive = selectedCategory !== null && selectedCategory.id === id;
  } else {
    isActive = !selectedCategory;
  }

  const btnClassNames = isActive
    ? "bg-green-600 text-white"
    : "bg-gray-400 text-gray-200 hover:bg-gray-500";

  const cat = id ? { id, title } : null;

  return (
    <button
      className={`mx-1 py-2 px-4 rounded-full border shadow-lg transition ease-in-out duration-200 ${btnClassNames}`}
      onClick={() => {
        if (true || !isActive) {
          dispatch(ReduxActions.selectCategory(cat));
        }
      }}
    >
      {title}
    </button>
  );
};

export default CategoryBadge;

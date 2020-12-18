import { Dispatch } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as ReduxActions from "../../store/actionCreator";
import { getEventColor } from "../../utils/functions";
import EventIcon from "../EventIcon";

type Props = {
  id: number | null;
  title: string;
};

const CategoryBadge = ({ id, title }: Props) => {
  const dispatch: Dispatch<any> = useDispatch();

  const { selectedCategory } = useSelector((state: ReduxState) => state);

  let isActive: boolean;
  if (id !== -1) {
    isActive = selectedCategory !== null && selectedCategory.id === id;
  } else {
    isActive = !selectedCategory;
  }

  return (
    <div
      className={`
      custom-badge shadow-md cursor-pointer
      transition-all text-gray-100 hover:text-white
      `}
      style={{
        backgroundColor: isActive ? getEventColor(id) : "#999",
      }}
      onClick={() => {
        if (!isActive) {
          dispatch(
            ReduxActions.selectCategory(id !== -1 ? { id, title } : null)
          );
        }
      }}
    >
      <EventIcon category={id} customClass="badge-icon" />
      <span>{title}</span>
    </div>
  );
};

export default CategoryBadge;

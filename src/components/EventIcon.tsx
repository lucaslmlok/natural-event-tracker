import {
  RiFireFill,
  RiQuestionLine,
  RiTyphoonLine,
  RiUserLocationLine,
} from "react-icons/ri";

const EventIcon = ({ category, customClass, style }) => {
  switch (category) {
    case -1:
      return null;
    case 0:
      return <RiUserLocationLine className={customClass} style={style} />;
    case 8:
      return <RiFireFill className={customClass} style={style} />;
    case 10:
      return <RiTyphoonLine className={customClass} style={style} />;
    default:
      return <RiQuestionLine className={customClass} style={style} />;
  }
};

EventIcon.defaultProps = {
  category: null,
  customClass: "",
  style: null,
};

export default EventIcon;

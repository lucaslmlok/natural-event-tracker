import { RiUserLocationLine } from "react-icons/ri";

interface Props {
  onClick: Function;
}

const MyLocation = (props: Props) => {
  return (
    <div
      className={`
      absolute bottom-8 left-2
      w-12 h-12 bg-gray-800 rounded-full cursor-pointer
      border-2 border-white shadow-md
      flex items-center justify-center text-2xl text-gray-300
      transition-colors hover:bg-gray-900 hover:text-white
      `}
      onClick={() => props.onClick()}
    >
      <RiUserLocationLine />
    </div>
  );
};

export default MyLocation;

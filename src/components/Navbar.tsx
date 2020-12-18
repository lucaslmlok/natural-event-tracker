import { FaSearchLocation } from "react-icons/fa";
import { RiGithubLine, RiInformationLine } from "react-icons/ri";
import { GoLogoGithub } from "react-icons/go";

const Header = ({ navInfo, setNavInfo }) => {
  return (
    <nav className="bg-gray-800">
      <div className="mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex justify-center items-center text-white">
              <FaSearchLocation className="block h-8 w-8" />
              <div className="text-xl font-bold pl-2 hidden sm:block">
                Natural Event Tracker
              </div>
              <div className="text-xl font-bold pl-2 sm:hidden">N.E.T.</div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="relative">
              <div>
                <a
                  href="https://github.com/lucaslmlok/natural-event-tracker"
                  target="_blank"
                >
                  <RiGithubLine className="text-white text-3xl" />
                </a>
              </div>
            </div>
            <div className="ml-3 relative">
              <div>
                <button
                  className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  onClick={() => setNavInfo(!navInfo)}
                >
                  <RiInformationLine className="text-white text-3xl" />
                </button>
              </div>

              <div
                className={`
                origin-top-right absolute z-20 -right-4 mt-2 p-6 pb-4 w-screen sm:w-96
                rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5
                ${navInfo ? "block" : "hidden"}
                `}
              >
                <div className="mb-2">
                  This app is powered by NASA Open APIs.
                </div>
                <div className="mb-2">
                  Learn more about it at{" "}
                  <a href="https://api.nasa.gov/" target="_blank">
                    https://api.nasa.gov/
                  </a>
                </div>
                <div className="font-bold mt-8">
                  Developed by Lucas Lo
                  <a
                    href="https://github.com/lucaslmlok"
                    target="_blank"
                    className="ml-2"
                  >
                    <GoLogoGithub className="inline-block text-gray-800 text-5xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;

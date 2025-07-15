import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
  return (
    <div className="flex justify-center px-4 md:py-2">
      <nav className=" flex justify-between items-center w-full md:w-[70%] lg:w-[75%] my-4 px-4 md:px-5 py-2  border border-slate-800 rounded-2xl">
        <div className="cursor-pointer font-bold hover:text-indigo-600">
          TransferX
        </div>
        <div className="hidden lg:block">
          <ul className="flex justify-evenly items-center gap-4 font-normal">
            <li className="cursor-pointer font-medium hover:bg-gray-800 px-3 py-2 hover:rounded-lg hover:py-2">
              Features
            </li>
            <li className="cursor-pointer px-3 py-2  hover:bg-gray-800 hover:rounded-lg hover:py-2">
              Team
            </li>
            <li className="cursor-pointer px-3 py-2  hover:bg-gray-800 hover:rounded-lg hover:py-2">
              Contact
            </li>
            <li className="cursor-pointer px-3 py-2  hover:bg-gray-800 hover:rounded-lg hover:py-2">
              FAQ
            </li>
          </ul>
        </div>
        <div className="cursor-pointer hidden lg:block px-3 py-2  hover:bg-gray-800 hover:rounded-lg hover:py-2">
          Login
        </div>
        <div className="lg:hidden">
          <FontAwesomeIcon icon={faBars} />
        </div>
      </nav>
    </div>
  );
}

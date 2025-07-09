import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
  return (
    <div className="flex justify-center px-4">
      <nav className=" flex justify-between w-full my-4 px-4 py-2 border border-slate-800 rounded-2xl">
        <div className="cursor-pointer font-bold">TransferX</div>
        <div className="hidden">
          <ul className="flex justify-evenly gap-4 font-normal">
            <li className="cursor-pointer font-medium">Features</li>
            <li className="cursor-pointer">Team</li>
            <li className="cursor-pointer">Contact</li>
            <li className="cursor-pointer">FAQ</li>
          </ul>
        </div>
        <div className="cursor-pointer hidden">Login</div>
        <div>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </nav>
    </div>
  );
}

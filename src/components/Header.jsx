import React from "react";

export default function Header() {
  return (
    <div className="flex justify-center">
      <nav className=" flex justify-between w-9/12 my-7 px-4 py-3 border border-slate-800 rounded-2xl">
        <div className="cursor-pointer text-lg font-bold">TransferX</div>
        <div>
          <ul className="flex justify-evenly gap-4 font-normal">
            <li className="cursor-pointer font-medium">Features</li>
            <li className="cursor-pointer">Team</li>
            <li className="cursor-pointer">Contact</li>
            <li className="cursor-pointer">FAQ</li>
          </ul>
        </div>
        <div className="cursor-pointer">Login</div>
      </nav>
    </div>
  );
}

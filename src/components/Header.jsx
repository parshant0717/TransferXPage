import React from "react";

export default function Header() {
  return (
    <div className="flex justify-center">
      <nav className=" flex justify-between max-w-screen-xl my-7 p-4 border border-solid text-white rounded-xl">
        <div>TransferX</div>
        <div>
          <ul className="flex justify-evenly gap-8">
            <li>Features</li>
            <li>Team</li>
            <li>Contact</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div>Login</div>
      </nav>
    </div>
  );
}

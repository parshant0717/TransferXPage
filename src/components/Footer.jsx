import React from "react";

export default function Footer() {
  return (
    <footer className="my-10 md:py-20 p-8 mx-auto max-w-screen-xl ">
      <div className="border border-gray-800 rounded-lg">
        <div className=" px-8 py-10 flex flex-col lg:flex-row items- gap-10 lg:gap-20">
          <div className="text-[10vw] lg:text-6xl">TransferX.in</div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-10">
            <div className="flex flex-col gap-2">
              <h2 className="text-lg lg:text-xl font-medium">Plateforms</h2>
              <p className="text-sm lg:text-lg text-gray-400">Web</p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-lg lg:text-xl font-medium">About</h2>
              <p className="text-sm lg:text-lg text-gray-400">About us</p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-lg lg:text-xl font-medium">Policies</h2>
              <p className="text-sm lg:text-lg text-gray-400">
                Terms & Services
              </p>
              <p className="text-sm lg:text-lg text-gray-400">
                Privacy & Policy
              </p>
              <p className="text-sm lg:text-lg text-gray-400">
                Refund & Cancellation
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 py-4 mx-6 ">
          <p>
            © 2024 Designed and developed by{" "}
            <span className="text-indigo-600">team TransferX</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

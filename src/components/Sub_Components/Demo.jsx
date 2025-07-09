import React from "react";

export default function Demo() {
  return (
    <section className="container my-14">
      <div>
        <div className="flex flex-col justify-center items-center px-2 mb-4 gap-2">
          <h2 className="text-indigo-600 text-lg">Demo</h2>
          <p className="font-bold text-2xl">How to Use TransferX</p>
          <p className="text-gray-400 text-center">
            Watch this short video to see how easy it is to share and store
            files with TransferX.
          </p>
        </div>
        <div>
          <video
            className="rounded-lg p-2"
            src="https://adnaan-personal.s3.us-east-1.amazonaws.com/landing-page-see-it-in-action.mp4"
            controls
          ></video>
        </div>
      </div>
    </section>
  );
}

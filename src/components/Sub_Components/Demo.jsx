import React from "react";

export default function Demo() {
  return (
    <section className="my-14 md:py-20">
      <div>
        <div className="flex flex-col justify-center items-center px-2 mb-4 gap-2">
          <h2 className="text-indigo-600 text-lg lg:text-xl">Demo</h2>
          <p className="font-bold text-2xl md:text-3xl lg:text-4xl">
            How to Use TransferX
          </p>
          <p className="text-gray-400 text-center lg:text-lg">
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

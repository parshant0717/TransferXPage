import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <div className="flex justify-center items-center flex-col container my-10">
      <div className="flex flex-wrap flex-col justify-center items-center text-center gap-4">
        <div className="border border-slate-800 rounded-full text-sm px-2 py-0.5 inline-block">
          <button className="m-1 bg-indigo-600 rounded-full px-2.5 py-0.5 font-medium">
            New
          </button>
          <span className="font-semibold">Discounts are active!</span>
        </div>
        <div>
          <h1 className="font-bold text-4xl text-wrap">
            Your Ultimate Storage Solution
            <span className="text-indigo-600 ml-1">TransferX</span>
          </h1>
        </div>
        <div>
          <p className="text-lg max-w-screen-sm text-gray-400">
            Transform the way you store and manage your data with TransferX –
            The all-in-one platform offering scalable, secure, and efficient
            storage for all your needs.
          </p>
        </div>
        <div>
          <button className="group bg-indigo-600 rounded-lg px-5  py-2 font-semibold  hover:text-white hover:bg-indigo-700">
            Login
            <FontAwesomeIcon
              icon={faArrowRight}
              className="ml-5 font- transition-transform duration-200 group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>
      <div>
        <div className="rounded-lg relative my-10">
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 bg-indigo-600/70 rounded-full blur-3xl lg:-top-8 lg:h-80"></div>
          <img
            src="https://transferx.in/_next/image?url=%2FHero.png&w=3840&q=75"
            alt=""
            srcset=""
            loading="lazy"
            className="z-10 relative rounded-lg border-t-2 border-t-indigo-600/80"
          />
          <div className="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-primary/30 via-primary/50 to-primary blur-3xl"></div>
        </div>
      </div>
    </div>
  );
}

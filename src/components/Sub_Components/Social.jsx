import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";

export default function Social() {
  return (
    <section className="flex felx-col justify-center items-center my-10 md:py-20 border-y border-gray-800">
      <div className="py-10 lg:py-20 my-10 lg:w-[60%] text-center flex flex-col justify-center items-center gap-4">
        <div>
          <FontAwesomeIcon icon={faDiscord} className="text-5xl lg:text-6xl" />
        </div>
        <p className="font-bold text-3xl md:text-4xl lg:text-5xl text-wrap text-center">
          Ready to join this{" "}
          <span className="text-indigo-600 ml-1">Community?</span>
        </p>
        <p className="text-lg lg:text-xl lg:w-[85%] px-6 text-gray-400">
          Join our vibrant Discord community! Connect, share, and grow with
          like-minded enthusiasts. Click to dive in! 🚀
        </p>
        <button className="border border-gray-600 rounded-lg w-auto self-center px-3 py-2 text-sm bg-gray-800">
          Join discord
        </button>
      </div>
    </section>
  );
}

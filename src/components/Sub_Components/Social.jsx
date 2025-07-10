import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";

export default function Social() {
  return (
    <section className="container flex felx-col justify-center items-center">
      <div className="border-y py-10 my-10 lg:w-[60%] border-gray-600 text-center flex flex-col justify-center items-center gap-4">
        <div>
          <FontAwesomeIcon icon={faDiscord} className="text-5xl" />
        </div>
        <p className="font-bold text-3xl text-wrap text-center">
          Ready to join this{" "}
          <span className="text-indigo-600 ml-1">Community?</span>
        </p>
        <p className="text-lg lg:w-[80%] p-6 pt-0 text-gray-400">
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

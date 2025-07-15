import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function Pricing() {
  return (
    <section className="container my-10 md:py-20">
      <div>
        <div className="flex flex-col justify-center items-center px-2 mb-8 gap-2">
          <h2 className="text-indigo-600 text-lg lg:text-xl">Pricing</h2>
          <p className="font-bold text-2xl md:text-3xl lg:text-4xl text-center">
            Choose a Plan That Fits Your Needs
          </p>
          <p className="text-gray-400 text-center lg:text-lg lg:w-3/5">
            Upload your files and access them anytime with our budget-friendly
            plans. Simple, secure, and affordable!
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-3">
          <div className="bg-gray-800 rounded-lg p-6 flex flex-col hover:lg:scale-[1.1] hover:lg:border-2 border-blue-800 hover:z-10 gap-2">
            <h2 className="font-medium text-xl lg:text-2xl">Free</h2>
            <p className="font-bold text-3xl">
              ₹ 0{" "}
              <span className="font-normal text-base text-gray-400">
                / month
              </span>
            </p>
            <div className="font-thin flex flex-col gap-2 ">
              <p>
                <FontAwesomeIcon icon={faCheck} className="text-indigo-600" />{" "}
                50GB of storage
              </p>
              <p>
                <FontAwesomeIcon icon={faCheck} className="text-indigo-600" />{" "}
                10MB file upload size
              </p>
              <p>
                <FontAwesomeIcon icon={faCheck} className="text-indigo-600" />{" "}
                24*7 support
              </p>
              <p>
                <FontAwesomeIcon icon={faCheck} className="text-indigo-500" />{" "}
                Secure data encryption
              </p>
            </div>
            <button className="text-sm bg-gray-500 mt-2 py-2 rounded-lg hover:bg-indigo-600 ">
              Get Started
            </button>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 flex flex-col hover:lg:scale-[1.1] hover:lg:border-2 border-blue-800 gap-2">
            <h2 className="font-medium text-xl lg:text-2xl">Basic</h2>
            <p className="font-bold text-3xl">
              ₹ 29{" "}
              <span className="font-normal text-base text-gray-400">
                <span className="line-through">₹ 99</span> / 3 months
              </span>
            </p>
            <div className="font-thin flex flex-col gap-2 ">
              <p>
                <FontAwesomeIcon icon={faCheck} className="text-indigo-600" />{" "}
                100GB of storage
              </p>
              <p>
                <FontAwesomeIcon icon={faCheck} className="text-indigo-600" />{" "}
                3GB file upload size
              </p>
              <p>
                <FontAwesomeIcon icon={faCheck} className="text-indigo-600" />{" "}
                24*7 support
              </p>
              <p>
                <FontAwesomeIcon icon={faCheck} className="text-indigo-500" />{" "}
                Secure data encryption
              </p>
            </div>
            <button className="text-sm bg-gray-500 mt-2 py-2 rounded-lg hover:bg-indigo-600">
              Get Started
            </button>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 flex flex-col hover:lg:scale-[1.1] hover:lg:border-2 border-blue-800 hover:z-10 gap-2">
            <h2 className="font-medium text-xl lg:text-2xl">Premium</h2>
            <p className="font-bold text-3xl">
              ₹ 399{" "}
              <span className="font-normal text-base text-gray-400">
                <span className="line-through">₹ 899</span> / 3 months
              </span>
            </p>
            <div className="font-thin flex flex-col gap-2 ">
              <p>
                <FontAwesomeIcon icon={faCheck} className="text-indigo-600" />{" "}
                500GB of storage
              </p>
              <p>
                <FontAwesomeIcon icon={faCheck} className="text-indigo-600" />{" "}
                6GB file upload size
              </p>
              <p>
                <FontAwesomeIcon icon={faCheck} className="text-indigo-600" />{" "}
                24*7 support
              </p>
              <p>
                <FontAwesomeIcon icon={faCheck} className="text-indigo-500" />{" "}
                Secure data encryption
              </p>
            </div>
            <button className="text-sm bg-gray-500 mt-2 py-2 rounded-lg hover:bg-indigo-600">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

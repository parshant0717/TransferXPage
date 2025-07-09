import { faFileShield } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Benifit() {
  return (
    <div className="flex flex-col justify-center container items-center gap-10">
      <div>
        <div className="flex flex-col gap-2">
          <h2 className="text-indigo-600 text-lg">Benefits</h2>
          <p className="font-bold text-2xl">Why Choose TransferX?</p>
          <p className="text-gray-400">
            TransferX simplifies file sharing and storage, offering a secure,
            efficient, and developer-friendly platform designed to make your
            digital life easier.
          </p>
        </div>
      </div>
      <div className="w-full">
        <div className="flex flex-col justify-center gap-2">
          <div className="flex flex-col justify-between dark:bg-gray-800 p-6 rounded-lg">
            <div className="flex justify-between w-full">
              <FontAwesomeIcon
                icon={faFileShield}
                className="text-indigo-600 text-2xl"
              />
              <span className="text-gray-600 opacity-80 text-4xl font-semibold">
                01{" "}
              </span>
            </div>
            <h2 className="text-xl font-semibold">Secure File Sharing</h2>
            <div>
              <p className="text-gray-400">
                Transfer files with confidence, knowing your data is protected
                with top-notch security protocols.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between dark:bg-gray-800 p-6 rounded-lg">
            <div className="flex justify-between w-full">
              <FontAwesomeIcon
                icon={faFileShield}
                className="text-indigo-600 text-2xl"
              />
              <span className="text-gray-600 opacity-80 text-4xl font-semibold">
                01{" "}
              </span>
            </div>
            <h2 className="text-xl font-semibold">Secure File Sharing</h2>
            <div>
              <p className="text-gray-400">
                Transfer files with confidence, knowing your data is protected
                with top-notch security protocols.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between dark:bg-gray-800 p-6 rounded-lg">
            <div className="flex justify-between w-full">
              <FontAwesomeIcon
                icon={faFileShield}
                className="text-indigo-600 text-2xl"
              />
              <span className="text-gray-600 opacity-80 text-4xl font-semibold">
                01{" "}
              </span>
            </div>
            <h2 className="text-xl font-semibold">Secure File Sharing</h2>
            <div>
              <p className="text-gray-400">
                Transfer files with confidence, knowing your data is protected
                with top-notch security protocols.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between dark:bg-gray-800 p-6 rounded-lg">
            <div className="flex justify-between w-full">
              <FontAwesomeIcon
                icon={faFileShield}
                className="text-indigo-600 text-2xl"
              />
              <span className="text-gray-600 opacity-80 text-4xl font-semibold">
                01{" "}
              </span>
            </div>
            <h2 className="text-xl font-semibold">Secure File Sharing</h2>
            <div>
              <p className="text-gray-400">
                Transfer files with confidence, knowing your data is protected
                with top-notch security protocols.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import {
  faChartLine,
  faFileShield,
  faSearch,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Benifit() {
  return (
    <section className="my-20">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-24 my-10 md:py-20">
        <div>
          <div className="flex flex-col gap-2">
            <h2 className="text-indigo-500 text-lg lg:text-xl">Benefits</h2>
            <p className="font-bold text-2xl md:text-3xl lg:text-4xl">
              Why Choose TransferX?
            </p>
            <p className="text-gray-400 lg:text-lg">
              TransferX simplifies file sharing and storage, offering a secure,
              efficient, and developer-friendly platform designed to make your
              digital life easier.
            </p>
          </div>
        </div>
        <div className="w-full">
          <div className="grid gap-2 lg:grid-cols-2 ">
            <div className="flex flex-col  gap-2 lg:gap-4 dark:bg-gray-800 p-6 rounded-lg">
              <div className="flex justify-between w-full">
                <FontAwesomeIcon
                  icon={faFileShield}
                  className="text-indigo-600 text-2xl"
                />
                <span className="text-gray-700 opacity-80 text-4xl lg:text-5xl font-semibold">
                  01{" "}
                </span>
              </div>
              <h2 className="text-xl lg:text-2xl font-semibold">
                Secure File Sharing
              </h2>
              <div>
                <p className="text-gray-400">
                  Transfer files with confidence, knowing your data is protected
                  with top-notch security protocols.
                </p>
              </div>
            </div>
            <div className="flex flex-col  gap-2 lg:gap-4 dark:bg-gray-800 p-6 rounded-lg">
              <div className="flex justify-between w-full">
                <FontAwesomeIcon
                  icon={faChartLine}
                  className="text-indigo-600 text-2xl"
                />
                <span className="text-gray-700 opacity-80 text-4xl lg:text-5xl font-semibold">
                  02{" "}
                </span>
              </div>
              <h2 className="text-xl lg:text-2xl font-semibold">Cheap Plans</h2>
              <div>
                <p className="text-gray-400">
                  Enjoy affordable storage options that fit your needs, with
                  plans designed to give you more for less.
                </p>
              </div>
            </div>
            <div className="flex flex-col  gap-2 lg:gap-4 dark:bg-gray-800 p-6 rounded-lg">
              <div className="flex justify-between w-full">
                <FontAwesomeIcon
                  icon={faWallet}
                  className="text-indigo-600 text-2xl"
                />
                <span className="text-gray-700 opacity-80 text-4xl lg:text-5xl font-semibold">
                  03{" "}
                </span>
              </div>
              <h2 className="text-xl lg:text-2xl font-semibold">
                Cost-Effective Storage
              </h2>
              <div>
                <p className="text-gray-400">
                  Get ample storage options without breaking the bank, tailored
                  to suit your needs.
                </p>
              </div>
            </div>
            <div className="flex flex-col  gap-2 lg:gap-4 dark:bg-gray-800 p-6 rounded-lg">
              <div className="flex justify-between w-full">
                <FontAwesomeIcon
                  icon={faSearch}
                  className="text-indigo-600 text-2xl"
                />
                <span className="text-gray-700 opacity-80 text-4xl lg:text-5xl font-semibold">
                  04{" "}
                </span>
              </div>
              <h2 className="text-xl lg:text-2xl font-semibold">
                Advanced Search
              </h2>
              <div>
                <p className="text-gray-400">
                  Quickly find files with powerful search capabilities,
                  including filters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

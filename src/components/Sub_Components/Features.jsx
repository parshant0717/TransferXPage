import {
  faArrowPointer,
  faCalendarDay,
  faLaptopFile,
  faMobileScreenButton,
  faSearch,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Features() {
  return (
    <section className="my-10 py-20">
      <div className="flex flex-col items-center">
        <div className="flex flex-col justify-center items-center px-2 mb-4 gap-2">
          <h2 className="text-indigo-600 text-lg lg:text-xl">Features</h2>
          <p className="font-bold text-2xl md:text-3xl lg:text-4xl text-center">
            What Makes TransferX Unique
          </p>
          <p className="text-gray-400 text-center lg:w-3/5 lg:text-lg">
            Discover how TransferX makes file sharing and storage effortless,
            secure, and tailored for individuals and businesses alike.
          </p>
        </div>
        <div className="my-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <div>
            <div className="text-center mb-4">
              <FontAwesomeIcon
                icon={faMobileScreenButton}
                className="bg-indigo-600/20 ring-8 ring-indigo-600/10  rounded-full p-4 mb-4 text-indigo-600"
              />
              <p className="font-medium lg:text-lg">Mobile Friendly</p>
            </div>
            <div>
              <p className="text-gray-400 text-center text-sm lg:text-base">
                Access your files seamlessly on any device, ensuring
                productivity wherever you go.
              </p>
            </div>
          </div>
          <div>
            <div className="text-center mb-4">
              <FontAwesomeIcon
                icon={faShieldHalved}
                className="bg-indigo-600/20 ring-8 ring-indigo-600/10  rounded-full p-4 mb-4 text-indigo-600"
              />
              <p className="font-medium lg:text-lg">Reliable Security</p>
            </div>
            <div>
              <p className="text-gray-400 text-center text-sm lg:text-base">
                Access your files seamlessly on any device, ensuring
                productivity wherever you go.
              </p>
            </div>
          </div>
          <div>
            <div className="text-center mb-4">
              <FontAwesomeIcon
                icon={faSearch}
                className="bg-indigo-600/20 ring-8 ring-indigo-600/10  rounded-full p-4 mb-4 text-indigo-600"
              />
              <p className="font-medium lg:text-lg">Advanced Search</p>
            </div>
            <div>
              <p className="text-gray-400 text-center text-sm lg:text-base">
                Quickly find files with powerful search capabilities, including
                filters and tags.
              </p>
            </div>
          </div>
          <div>
            <div className="text-center mb-4">
              <FontAwesomeIcon
                icon={faLaptopFile}
                className="bg-indigo-600/20 ring-8 ring-indigo-600/10  rounded-full p-4 mb-4 text-indigo-600"
              />
              <p className="font-medium lg:text-lg">High-Quality Previews</p>
            </div>
            <div>
              <p className="text-gray-400 text-center text-sm lg:text-base">
                Preview files, including images and documents, directly in the
                platform without downloading.
              </p>
            </div>
          </div>
          <div>
            <div className="text-center mb-4">
              <FontAwesomeIcon
                icon={faArrowPointer}
                className="bg-indigo-600/20 ring-8 ring-indigo-600/10  rounded-full p-4 mb-4 text-indigo-600"
              />
              <p className="font-medium lg:text-lg">User-Friendly Interface</p>
            </div>
            <div>
              <p className="text-gray-400 text-center text-sm lg:text-base">
                An intuitive design makes managing your files quick and
                effortless for everyone.
              </p>
            </div>
          </div>
          <div>
            <div className="text-center mb-4">
              <FontAwesomeIcon
                icon={faCalendarDay}
                className="bg-indigo-600/20 ring-8 ring-indigo-600/10  rounded-full p-4 mb-4 text-indigo-600"
              />
              <p className="font-medium lg:text-lg">Flexible Plans</p>
            </div>
            <div>
              <p className="text-gray-400 text-center text-sm lg:text-base">
                Choose a plan that fits your needs, from free options to premium
                solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

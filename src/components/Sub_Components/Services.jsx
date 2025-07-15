export default function Services() {
  return (
    <section className="my-10 md:py-20">
      <div className="flex flex-col items-center">
        <div className="flex flex-col justify-center items-center px-2 mb-8 gap-2">
          <h2 className="text-indigo-600 text-lg lg:text-xl">Services</h2>
          <p className="font-bold text-2xl md:text-3xl lg:text-4xl text-center">
            Empower Your File Upload
          </p>
          <p className="text-gray-400 text-center lg:text-lg lg:w-1/2">
            From flexible storage solutions to secure file sharing, TransferX
            provides all the tools you need to streamline your file management
            and enhance collaboration.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:w-3/4 gap-4">
          <div className="flex flex-col gap-2 dark:bg-gray-800 p-4 rounded-lg">
            <h2 className="text-xl lg:text-2xl font-semibold">
              File Upload & Sharing
            </h2>
            <p className="text-gray-400">
              Easily upload & share files with anyone using secure links,
              ensuring fast and hassle-free transfers.
            </p>
          </div>
          <div className="flex flex-col gap-2 dark:bg-gray-800 p-4 rounded-lg">
            <h2 className="text-xl lg:text-2xl font-semibold">
              Personal Dashboard
            </h2>
            <p className="text-gray-400">
              Easily manage your account, files, and folders in one unified
              dashboard.
            </p>
          </div>
          <div className="flex flex-col gap-2 dark:bg-gray-800 p-4 rounded-lg">
            <h2 className="text-xl lg:text-2xl font-semibold">
              Advanced Search
            </h2>
            <p className="text-gray-400">
              Quickly find files with powerful search capabilities, including
              filters.
            </p>
          </div>
          <div className="relative flex flex-col gap-2 dark:bg-gray-800 p-4 rounded-lg">
            <span className="absolute -top-2 -right-2 bg-gray-800 border border-gray-600 rounded-xl text-xs font-medium py-px px-2 ">
              PRO
            </span>
            <h2 className="text-xl lg:text-2xl font-semibold">
              Extend Storage as per Plan
            </h2>
            <p className="text-gray-400">
              Scale your storage space based on your requirements with flexible
              and affordable plans.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

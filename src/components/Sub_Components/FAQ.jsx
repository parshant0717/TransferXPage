import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function FAQ() {
  return (
    <section className="container my-10 md:py-20">
      <div className="my-10">
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-indigo-600 text-lg lg:text-xl">FAQS</h2>
          <p className="font-bold text-2xl md:text-3xl lg:text-4xl text-center">
            Common Questions
          </p>
        </div>
      </div>
      <div>
        <details className="border-b border-gray-800 py-2.5 px-2 group open">
          <summary className=" list-none cursor-pointer text-white hover:underline flex justify-between items-center my-2">
            <span>
              If my plan expires, can I still access already uploaded data?
            </span>
            <span className=" group-open:rotate-180 transition-transform duration-200">
              <FontAwesomeIcon icon={faChevronDown} className="text-xs" />
            </span>
          </summary>
          <p className="text-sm">
            Yes, you can still access your previously uploaded data. However,
            you won't be able to upload new data with premium capacity until you
            renew your plan.
          </p>
        </details>
      </div>
      <div>
        <details className="border-b border-gray-800 py-2.5 px-2 group open">
          <summary className=" list-none cursor-pointer text-white hover:underline flex justify-between items-center my-2">
            <span>Can I upgrade my plan anytime?</span>
            <span className=" group-open:rotate-180 transition-transform duration-200">
              <FontAwesomeIcon icon={faChevronDown} className="text-xs" />
            </span>
          </summary>
          <p className="text-sm">
            Yes, you can upgrade your plan anytime. The new plan will be
            activated immediately, and any remaining credits from your current
            plan will be adjusted accordingly. However, downgrades are not
            supported as we follow the RATA(Raise And Then Adjust) approach.
          </p>
        </details>
      </div>
      <div>
        <details className="border-b border-gray-800 py-2.5 px-2 group open">
          <summary className=" list-none cursor-pointer text-white hover:underline flex justify-between items-center my-2">
            <span>Does TransferX have a free plan?</span>
            <span className=" group-open:rotate-180 transition-transform duration-200">
              <FontAwesomeIcon icon={faChevronDown} className="text-xs" />
            </span>
          </summary>
          <p className="text-sm">
            Yes, TransferX offers a free plan with 100 GB of storage and
            essential features. You can upgrade anytime for additional storage
            and advanced features.
          </p>
        </details>
      </div>
      <div>
        <details className="border-b border-gray-800 py-2.5 px-2 group open">
          <summary className=" list-none cursor-pointer text-white hover:underline flex justify-between items-center my-2">
            <span>
              Can I share files with users who don't have a TransferX account?
            </span>
            <span className=" group-open:rotate-180 transition-transform duration-200">
              <FontAwesomeIcon icon={faChevronDown} className="text-xs" />
            </span>
          </summary>
          <p className="text-sm">
            Yes, you can generate shareable links to send files to non-TransferX
            users. They can access the files without needing to create an
            account.
          </p>
        </details>
      </div>
      <div>
        <details className="border-b border-gray-800 py-2.5 px-2 group open">
          <summary className=" list-none cursor-pointer text-white hover:underline flex justify-between items-center my-2">
            <span>What file formats are supported?</span>
            <span className=" group-open:rotate-180 transition-transform duration-200">
              <FontAwesomeIcon icon={faChevronDown} className="text-xs" />
            </span>
          </summary>
          <p className="text-sm">
            TransferX supports all major file formats, including documents,
            images, videos, and zip files.
          </p>
        </details>
      </div>
      <div>
        <details className="border-b border-gray-800 py-2.5 px-2 group open">
          <summary className=" list-none cursor-pointer text-white hover:underline flex justify-between items-center my-2">
            <span>How does TransferX ensure my data is safe?</span>
            <span className=" group-open:rotate-180 transition-transform duration-200">
              <FontAwesomeIcon icon={faChevronDown} className="text-xs" />
            </span>
          </summary>
          <p className="text-sm">
            TransferX ensures your data's safety by securely hosting it on AWS,
            a trusted cloud provider with industry-standard security measures.
          </p>
        </details>
      </div>
      <div>
        <details className="border-b border-gray-800 py-2.5 px-2 group open">
          <summary className=" list-none cursor-pointer text-white hover:underline flex justify-between items-center my-2">
            <span>Can I recover deleted files?</span>
            <span className=" group-open:rotate-180 transition-transform duration-200">
              <FontAwesomeIcon icon={faChevronDown} className="text-xs" />
            </span>
          </summary>
          <p className="text-sm">
            Deleted files can be recovered within 30 days from the 'Trash'
            section. After 30 days, the data will be permanently deleted and
            cannot be recovered.
          </p>
        </details>
      </div>
      <div>
        <details className="border-b border-gray-800 py-2.5 px-2 group open">
          <summary className=" list-none cursor-pointer text-white hover:underline flex justify-between items-center my-2">
            <span>Is there a limit on the file size for uploads?</span>
            <span className=" group-open:rotate-180 transition-transform duration-200">
              <FontAwesomeIcon icon={faChevronDown} className="text-xs" />
            </span>
          </summary>
          <p className="text-sm">
            Yes, the maximum file size depends on your plan. Free plans allow up
            to 10 MB per file, while Basic and Premium plans support uploads up
            to 2 GB per file.
          </p>
        </details>
      </div>
      <div>
        <details className="border-b border-gray-800 py-2.5 px-2 group open">
          <summary className=" list-none cursor-pointer text-white hover:underline flex justify-between items-center my-2">
            <span>Can I cancel my plan at any time?</span>
            <span className=" group-open:rotate-180 transition-transform duration-200">
              <FontAwesomeIcon icon={faChevronDown} className="text-xs" />
            </span>
          </summary>
          <p className="text-sm">
            Plans are non-cancelable once purchased. After the plan's validity
            expires, it will automatically switch to the free tier.
          </p>
        </details>
      </div>
    </section>
  );
}

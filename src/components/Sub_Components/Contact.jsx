import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <section className="container my-10 md:py-20">
      <div className="flex flex-col md:flex-row my-10 gap-10">
        <div className="flex flex-col md:w-1/2 gap-4">
          <div className="flex flex-col gap-2">
            <h2 className="text-indigo-600 text-lg lg:text-xl">Contact</h2>
            <p className="font-bold text-2xl md:text-3xl lg:text-4xl">
              Need More Storage?
            </p>
            <p className="text-gray-400 lg:text-lg">
              Looking for storage options beyond our current plans? Drop us an
              email, and we’ll be happy to discuss a solution that works for
              you!
            </p>
          </div>
          <div>
            <p className="font-medium lg:text-lg">
              <FontAwesomeIcon icon={faEnvelope} /> Mail Us
            </p>
            <p>support@transferx.in</p>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <form
            action="#"
            className="flex flex-col bg-gray-800 rounded-lg px-5 py-10"
          >
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="username"
              placeholder="Your Name"
              id="name"
              required
              autoComplete="on"
              className="bg-primary rounded-md py-2 px-3 text-sm mb-4 mt-1"
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              autoComplete="on"
              placeholder="yourname@example.com"
              className="bg-primary rounded-md py-2 px-3 text-sm mb-4 mt-1"
            />
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              placeholder="Your Message..."
              required
              rows={5}
              className="min-h-[80px] bg-primary rounded-md py-2 px-3 text-sm mb-4 mt-1 resize-none"
            ></textarea>
            <button className="bg-indigo-600 rounded-md p-1.5 text-sm">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import liftpic from "../../../public/liftpic.png"

export default function Contact() {
  return (
    <section className="bg-cover bg-center max-w-screen-2xl mx-auto pb-20" style={{ backgroundImage: "url('/contactbg.png')" }}>
    <div className="flex flex-col lg:flex-row md:pr-40 lg:pr-40">
    <div className="flex-1 flex items-center justify-center lg:pl-52 lg:pt-24 md:pl-52 md:pt-24 pt-24 pl-6">
        <form className="md:bg-white lg:bg-white bg-gray-400 shadow-md rounded-lg p-8 w-full max-w-lg">
          <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="name">Name</label>
            <input className="border border-teal-500 rounded-lg p-2 w-full" type="text" id="name" required />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
            <input className="border border-teal-500 rounded-lg p-2 w-full" type="email" id="email" required />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="message">Message</label>
            <textarea className="border border-teal-500 -300 rounded-lg p-2 w-full" id="message" required></textarea>
          </div>
          <button type="submit" className="w-full py-2 border-2 border-teal-500 transition duration-300 ease-in-out bg-sky-500 hover:bg-teal-400 p-2 pl-10 pr-10 text-lg font-semibold rounded-md text-teal-900 hover:text-sky-500">
            Send
          </button>
            <p className=" text-center pt-5 font-semibold text-gray-600 ">Or reach out to directly at:</p>
            <p className="text-center font-semibold text-lg ">moizqureshi782008@gmail.com</p>
        </form>
      </div>
      <div className="flex-1 flex pt-24 sm:pl-52 lg:pl-3 hidden md:block lg:block xl:block">
        <Image src={liftpic} alt="Contact Image" width={370} height={200} className="rounded "/>
      </div>
    </div>
    </section>
  );
}
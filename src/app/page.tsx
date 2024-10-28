import Image from "next/image";
import moiz from "../../public/moiz.jpg"

export default function Hero (){

  return(
    <main className="bg-cover bg-center max-w-screen-2xl mx-auto" style={{ backgroundImage: "url('/background.png')" }}>
      <div className="lg:pl-20 lg:pr-36 lg:flex lg:pt-40 pt-10 px-10 pb-32">
          <Image src={moiz} alt="moizimage" width={230} height={100} className="border-4 border-blue-800 rounded-full lg:ml-10 ml-14"/>
        <div className="lg:pl-14">
          <h2 className="text-6xl font-bold text-white lg:pb-6 pb-3">Hello! <br /> I m Moiz Qureshi</h2>
          <p className="lg:pr-60 text-black font-semibold">As a front-end developer, I excel in HTML, CSS, and JavaScript, creating dynamic and responsive web applications. Proficient in Next.js for optimized performance and SEO. <span className="hidden lg:block">Committed to delivering intuitive user experiences and collaborating effectively with design and development teams.</span></p>
          <div className="lg:mt-12 mt-5 ">
            <a href="https://www.linkedin.com/in/moiz-qureshi-0884592b9/" target="blank"><button className="border-2 border-teal-500 transition duration-300 ease-in-out bg-sky-500 hover:bg-teal-400 p-2 pl-10 pr-10 text-lg font-semibold mr-8 rounded-md text-teal-900 hover:text-sky-500">Hire Me</button></a>
            <a href="https://github.com/MoizQureshi1" target="blank"><button className="border-2 border-teal-500 transition duration-300 ease-in-out bg-sky-500 hover:bg-teal-400 p-2 pl-10 pr-10 mt-4 text-lg font-semibold rounded-md text-teal-900 hover:text-sky-500">Projects</button></a>
          </div>
        </div>
      </div>
    </main>
  )
}
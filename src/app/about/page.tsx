import Image from "next/image";
import moizabout from "../../../public/moizabout.jpg"
import Skill from "../component/skill";

export default function Aboutpage (){
    return(
        <main className="bg-cover bg-center max-w-screen-2xl mx-auto" style={{ backgroundImage: "url('/aboutbg.png')" }}>
            <div className="flex flex-col px-20 pb-14">
                <h2 className="text-4xl font-bold text-white text-center py-8">About <span className="text-cyan-300">Me</span></h2>
                <div className="lg:ml-96 lg:pl-24 md:pl-52 sm:pl-20">
                <Image src={moizabout} alt="mypic" width={230} height={100} className=" border-8 border-blue-800 p-3 rounded-full "/>
                </div>
                <div>
                    <h2 className="text-4xl font-bold text-white text-center py-5">Frontend <span className="text-cyan-300">Developer</span></h2>
                    <p className="text-center font-semibold text-gray-300">As a front-end developer, I excel in HTML, CSS, and JavaScript, creating dynamic and responsive web applications. Proficient in Next.js for optimized performance and SEO. Committed to delivering intuitive user experiences and collaborating effectively with design and development teams.</p>
                </div>
                <div className="text-center py-8">
                    <a href="/about"><button className="border-2 p-2 pl-8 pr-8 border-teal-500 transition duration-300 ease-in-out bg-sky-500 hover:bg-teal-400 text-lg font-semibold rounded-md text-teal-900 hover:text-sky-500">Read More</button></a>
                </div>
            </div>
            <Skill/>
        </main>
    )
}
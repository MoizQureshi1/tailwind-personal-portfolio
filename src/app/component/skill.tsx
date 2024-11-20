import { FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { RiJavascriptFill, RiNextjsFill, RiReactjsLine } from "react-icons/ri";

export default function Skill (){
    return(
        <main>
            <div className="pb-24">
                <h1 className="text-white text-center mt-20 text-6xl font-bold">Skills</h1>
                <h2 className="text-cyan-300 ml-10 mt-6 md:ml-24 mb-5 text-4xl font-bold">Coding</h2>
                <div className="border-8 border-cyan-200 rounded-xl mx-10 md:mx-24 p-7 lg:pl-24 md:mr-36">
                    <div>
                        <div className="md:flex text-9xl text-cyan-400 gap-16">
                            <FaHtml5 />
                            <FaCss3Alt />
                            <RiJavascriptFill />
                            <RiNextjsFill />
                            <RiReactjsLine />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
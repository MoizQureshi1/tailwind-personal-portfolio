import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { ImYoutube2 } from "react-icons/im";

export default function Footer (){
    return(
        <footer className="bg-gradient-to-r from-cyan-200 via-sky-200 to-cyan-200 text-gray-950 max-w-screen-2xl mx-auto">
            <div className="pt-12 pb-6 pl-2 text-center sm:text-start lg:flex lg:justify-around">
                <div>
                    <h2 className="lg:text-3xl text-2xl font-bold text-black">Moiz <span className="text-cyan-700">Qureshi</span></h2>
                    <p className="text-gray-600 font-semibold pt-2">Proficient in Next.js for optimized performance <br /> and SEO. <span className="hidden md:block lg:block">Committed to delivering intuitive user <br /> experiences and collaborating effectively with <br /> design and development teams.</span></p>
                </div>
                <div className="flex gap-10 text-gray-500 font-semibold pt-4 sm:pt-6">
                    <div className="pr-8">
                        <h2 className="text-xl font-bold text-gray-800 pb-4">About Us</h2>
                        <a href="/about" className="hover:underline">Home</a><br />
                        <a href="/contact" className="hover:underline">Contact</a><br />
                        <a href="https://www.linkedin.com/in/moiz-qureshi-0884592b9/" target="blank" className="hover:underline">Hire Me</a><br />
                        <a href="https://github.com/MoizQureshi1" target="blank" className="hover:underline">project</a>
                    </div>
                    <div className="pr-8">
                        <h2 className="text-xl font-bold text-gray-800 pb-4">Help</h2>
                        <a href="/contact" className="hover:underline">Contact Us</a><br />
                        <a href="/contact" className="hover:underline">FAQs</a><br />
                        <a href="/contact" className="hover:underline">Support</a><br />
                        <a href="/contact" className="hover:underline">Feedback</a>
                    </div>
                    <div className="pr-8">
                        <h2 className="text-xl font-bold text-gray-800 pb-4">Projects</h2>
                        <a href="https://shop-sphere-gamma.vercel.app/" target="blank" className="hover:underline">Shop Sphere</a><br />
                        <a href="https://travel-world-moiz.vercel.app/"target="blank" className="hover:underline">Travel World</a><br />
                        <a href="https://milestone-5-resume-one.vercel.app/" target="blank" className="hover:underline">Unique Resume</a>
                    </div>    
                </div>
            </div>
            <hr />
            <div className="flex gap-5 pt-4 text-2xl pl-24 lg:pl-40">
                <a href="https://www.facebook.com/profile.php?id=100089981983705" target="blank" className="border-2 text-black border-gray-500 hover:bg-gray-300 p-2 rounded-full"><FaFacebookF /></a>
                <a href="https://www.linkedin.com/in/moiz-qureshi-0884592b9/" target="blank" className="border-2 text-black border-gray-500 hover:bg-gray-300 p-2 rounded-full"><FaLinkedinIn /></a>
                <a href="https://www.youtube.com/@solve-swift" target="blank" className="border-2 text-black border-gray-500 hover:bg-gray-300 p-2 rounded-full"><ImYoutube2 /></a>
            </div>
            <p className="lg:pl-96 ml-20 pb-10 pt-5 text-md text-gray-600 font-semibold ">Copyright &copy; 2024 Adventour.</p>
        </footer>
    )
}
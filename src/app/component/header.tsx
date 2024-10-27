import Link from "next/link";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { IoMdMenu } from "react-icons/io";
  

export default function Header (){
    return(
        <header className="bg-gradient-to-r from-sky-700 via-cyan-500 to-sky-600 text-gray-950 max-w-screen-2xl mx-auto">
            <div className="flex justify-between md:pt-6 md:pb-3 md:px-24 px-12 py-4 ">
                <h2 className="text-3xl font-bold">Prtfolio.</h2>
                <nav>
                    <ul className="hidden md:block">
                        <li className="flex gap-6 text-lg font-semibold pt-1 ">
                            <Link href="/" className="hover:text-gray-300 underline">Home</Link>
                            <Link href="/about" className="hover:text-gray-300 underline">About</Link>
                            <Link href="/contact" className="hover:text-gray-300 underline">Contact</Link>
                        </li>
                    </ul>
                    <Sheet>
                        <SheetTrigger className="md:hidden text-3xl"><IoMdMenu /></SheetTrigger>
                        <SheetContent>
                        <ul>
                            <li className="flex flex-col gap-6 text-lg font-semibold pt-1 ">
                                <Link href="/" className="hover:text-gray-300 underline">Home</Link>
                                <Link href="/about" className="hover:text-gray-300 underline">About</Link>
                                <Link href="/contact" className="hover:text-gray-300 underline">Contact</Link>
                            </li>
                        </ul>
                        </SheetContent>
                    </Sheet>
                </nav>
            </div>
        </header>
    )
}
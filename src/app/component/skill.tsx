export default function Skill (){
    return(
        <main>
            <div className="pb-24">
                <h1 className="text-white text-center mt-20 text-5xl font-bold">Skills</h1>
                <h2 className="text-cyan-300 md:ml-24 mb-5 text-4xl font-bold">Coding</h2>
                <div className="border-2 border-cyan-600 rounded-xl md:mx-24 md:p-7 md:pl-24 md:mr-36">
                    <div>
                        <div className="flex justify-between text-2xl text-cyan-400 font-semibold">
                            <h2>HTML</h2>
                            <span>90%</span>
                        </div>
                        <div className="border-2 border-blue-500 rounded-xl p-1 pr-24 mb-7">
                            <div className="border-2 border-cyan-500"></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between text-2xl text-cyan-400 font-semibold">
                            <h2>CSS</h2>
                            <span>80%</span>
                        </div>
                        <div className="border-2 border-blue-500 rounded-xl p-1 pr-48 mb-7">
                            <div className="border-2 border-cyan-500"></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between text-2xl text-cyan-400 font-semibold">
                            <h2>Typecsript</h2>
                            <span>71%</span>
                        </div>
                        <div className="border-2 border-blue-500 rounded-xl p-1 pr-64 mb-7">
                            <div className="border-2 border-cyan-500"></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between text-2xl text-cyan-400 font-semibold">
                            <h2>NEXT.JS</h2>
                            <span>75%</span>
                        </div>
                        <div className="border-2 border-blue-500 rounded-xl p-1 pr-56 mb-7">
                            <div className="border-2 border-cyan-500"></div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
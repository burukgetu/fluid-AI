import Select from "../Select"

const JoinSection = () => {
  return (
    <div className="relative">
        <div className="absolute z-10 w-full h-full flex flex-col md:flex-row justify-center">
            <div className="lg:w-[40vw] p-8 gap-4 flex flex-col justify-center">
                <p className="text-[10vw] md:text-[5vw] leading-[50px] sm:leading-[70px] md:leading-8 lg:leading-[70px]">
                    Join the Fluid AI Waitlist Today!
                </p>
                <form className="md:w-[90%]">
                    <label className="text-gray-400" htmlFor="name">Name</label><br/>
                    <input className="bg-transparent focus:border-b-white py-2 w-full border-b-2 border-b-gray-500 mb-4" id="name" /><br/>
                    <label className="text-gray-400" htmlFor="email">Email</label><br/>
                    <input className="bg-transparent py-2 w-full border-b-2 border-b-gray-500 mb-6" id="email" />

                    <Select/>

                    <button className="mt-6 bg-white text-sm text-black py-3 px-8 rounded-full shadow-[0_0_15px_2px_rgba(255,255,255,0.7)] hover:shadow-[0_0_15px_5px_rgba(255,255,255,0.7)] transition-shadow duration-300 ease-in-out">
                        Join waitlist
                    </button>
                </form>
            </div>
            <img className="md:w-[50%] right-0" src="hand.png" alt="" />
        </div>
        <img className="h-[180vw] md:h-auto -scale-y-100" src="Join-Waitlist.png" alt="" />
    </div>
  )
}

export default JoinSection
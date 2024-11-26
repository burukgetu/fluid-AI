

const Navbar = () => {
  return (
    <div className="flex w-full px-12 justify-between items-center h-16">
        <img className="sm:hidden flex" src="drop-icon.svg" alt="" />
        <div className="hidden md:flex gap-12">
            <p className="font-[--font-family]">Our features</p>
            <p>Areas</p>
        </div>
        <div className="hidden md:flex gap-12">
            <p>FAQs</p>
            <p>The waitlist</p>
        </div>
    </div>
  )
}

export default Navbar
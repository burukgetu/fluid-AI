

const Navbar = () => {
  return (
    <div className="flex w-full px-4 justify-between items-center h-16">
        <img className="sm:hidden flex" src="drop-icon.svg" alt="" />
        <div className="hidden sm:flex gap-6">
            <p className="font-[--font-family]">Our features</p>
            <p>Areas</p>
        </div>
        <div className="hidden sm:flex gap-6">
            <p>FAQs</p>
            <p>The waitlist</p>
        </div>
    </div>
  )
}

export default Navbar
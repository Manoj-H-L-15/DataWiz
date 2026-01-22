const Header = () => {
    return (
        <div className="relative z-20 w-full py-4 flex justify-between px-7 text-black text-xl shadow-xl">
            <h1 className="font-semibold font-mono text-white bg-transparent p-2 rounded-lg shadow-2xl">DataWiz</h1>
            <div className="flex space-x-9 text-white">
                <button>Home</button>
                <button>About Us</button>
                <button>Events</button>
            </div>
        </div>
    )
}

export default Header;
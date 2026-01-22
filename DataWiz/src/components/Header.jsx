import logo from "../assets/logo.jpeg";
const Header = () => {
    return (
        <div className="relative z-20 w-full py-4 flex justify-between px-7 text-black shadow-2xl text-xl items-center">
            <div className="flex flex-col items-center">
                <img className="size-14 rounded-full animate-spin [animation-duration:4s]" src={logo} alt="Logo" />
                {/* <h1 className="font-thin text-white bg-transparent p-2 rounded-lg shadow-2xl">
                    DataWiz
                </h1> */}
            </div>

            <div className="flex space-x-9 text-white">
                <button>Home</button>
                <button>About Us</button>
                <button>Events</button>
            </div>
        </div>
    );
};

export default Header;

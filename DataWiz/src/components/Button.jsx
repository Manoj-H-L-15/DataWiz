import { useNavigate } from "react-router-dom";

const Button = ({button_name, path}) => {
    const navigate = useNavigate();
    return (
        <button onClick={() => {navigate(`/home/${path}`)}} className="bg-white shadow-2xl text-black font-semibold text-xl transition-all duration-150 hover:bg-blue-400 hover:text-white hover:scale-105 px-36 py-2 rounded-md">{button_name}</button>
    )
}

export default Button;
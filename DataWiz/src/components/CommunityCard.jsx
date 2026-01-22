import { useNavigate } from "react-router-dom";

const CommunityCard = ({heading, content, button, url}) => {
    const navigate = useNavigate();
    return (
        <div className="bg-white rounded-ss-2xl transition-all duration-200 ease-in-out hover:scale-105 shadow-2xl items-start justify-between p-10 flex flex-col space-y-6">
            <h1 className="text-3xl font-bold">{heading}</h1>
            <p className="italic text-xl">{content}</p>
            <button className="bg-purple-800 px-16 py-3 text-lg text-white font-semibold transition-all duration-200 ease-in-out hover:scale-105 rounded-3xl" onClick={() => {navigate(url)}}>{button}</button>
        </div>
    )
}

export default CommunityCard;
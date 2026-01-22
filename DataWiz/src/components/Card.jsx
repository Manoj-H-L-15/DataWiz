const Card = ({heading, content}) => {
    return (
        <div className="bg-white text-black flex flex-col p-9 m-2 shadow-2xl rounded-2xl transition-all duration-200 hover:scale-125 ease-out">
            <h1 className="text-xl font-semibold">{heading}</h1>
            <p className="text-lg">{content}</p>
        </div>
    )
}

export default Card;
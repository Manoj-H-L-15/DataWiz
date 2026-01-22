const Card = ({heading, content}) => {
    return (
        <div className="bg-transparent text-white flex flex-col p-9 m-2 shadow-[24px_12px_48px_rgba(1.5,0,0,0.7)] rounded-2xl transition-all duration-200 hover:scale-125 ease-out space-y-10 ">
            <h1 className="text-xl font-semibold min-h-16">{heading}</h1>
            <p className="text-lg italic">{content}</p>
        </div>
    )
}

export default Card;
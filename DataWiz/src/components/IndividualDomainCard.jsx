const IndividualDomainCard = ({ heading, data }) => {
    const renderElements = (element) => {
        const renderedElement = (
            <div className="flex flex-col justify-center items-center min-h-64 shadow-[24px_12px_48px_rgba(1.5,0,0,0.7)] hover:scale-110 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(255,255,255,0.2)] gap-10 p-10 rounded-full text-white">
                <img
                    className="size-44 rounded-full"
                    src={element.image}
                    alt="Individual Picture"
                />
                <div className="text-center">
                    <h1 className="text-2xl font-black">{element.name}</h1>
                    <p className="text-xl">{element.description}</p>
                </div>
            </div>
        );

        return renderedElement;
    };

    return (
        <div className="grid lg:grid-cols-4 lg:grid-rows-none grid-cols-1 mt-6 gap-y-10 gap-x-8 mb-20">
            {data.map((element, index) => {
                return renderElements(element);
            })}
        </div>
    );
};

export default IndividualDomainCard;

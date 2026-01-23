const DomainCard = ({ data }) => {
    const renderElements = (element, index) => {
        const renderedElement = <div className="bg-transparent text-white p-10 w-full text-center flex flex-col space-y-10 transition-all duration-200 hover:scale-105 ease-out shadow-[24px_12px_48px_rgba(1.5,0,0,0.7)] hover:shadow-[0_8px_30px_rgba(255,255,255,0.2)] rounded-tr-[100px]">
            <h1 className="text-4xl font-bold">{element.title}</h1>
            <p>{element.description}</p>
        </div>

        return renderedElement;
    }
    return (
        <div>
            <div className="text-black grid grid-cols-3 gap-20 items-stretch p-20 shadow-[0_8px_30px_rgba(255,255,255,0.2)] rounded-2xl w-full">
                {
                    data.map((element, index) => {
                        return renderElements(element, index);
                    })
                }
            </div>
        </div>
    );
};

export default DomainCard;

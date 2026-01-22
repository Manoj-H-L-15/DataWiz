import BottomWave from "../components/BottomWave";
import Button from "../components/Button";
import Header from "../components/Header";
import Wave from "../components/wave";
import Card from "../components/Card";

const LandingPage = () => {
    return (
        <div className="relative min-h-screen">
            {/* <div className="mb-24 z-10">
                <Wave />
            </div> */}
            <Header />
            <main className="">
                <div className="max-w-7xl mx-auto text-center p-10 flex flex-col space-y-7 z-0">
                    <h1 className="text-white text-7xl font-bold font-serif">
                        WELCOME TO{" "}
                        <span className="italic underline">DATAWIZ</span>
                    </h1>
                    <p className="text-xl italic animate-bounce text-white">
                        Discover Analyze Conquer
                    </p>
                </div>
                <div className="relative z-20 bg-transparent max-w-7xl mx-auto hover:scale-105 transition-all duration-200 text-white rounded-3xl shadow-[24px_12px_48px_rgba(1.5,0,0,0.7)] p-10 flex space-y-2 mt-8">
                    <div className="w-1/2 flex flex-col justify-center space-y-2">
                        <h1 className="text-2xl font-semibold">
                            ABOUT DATAWIZ
                        </h1>
                        <p className="text-md">
                            DataWiz is a technical club focused on data-driven
                            technologies and real-world problem solving. We
                            explore domains like Data Science, Machine Learning,
                            Web Development, and Analytics through hands-on
                            projects, workshops, and events. Our goal is to help
                            students build practical skills beyond the
                            classroom.
                        </p>
                    </div>
                    <div className="flex flex-col mx-auto space-y-5">
                        <Button button_name="Events" path="events" />
                        <Button button_name="Team" />
                        <Button button_name="Gallery" />
                    </div>
                </div>

                <div className="relative z-20 flex flex-col mt-10 shadow-[24px_12px_48px_rgba(1.5,0,0,0.7)] p-10 rounded-2xl max-w-full mx-4 text-center space-y-4 bg-transparent">
                    <h1 className="ml-3 text-3xl font-semibold text-white">Why Join Us</h1>
                    <div className="flex">
                        <Card
                            heading="Hackathons and Coding Events"
                            content="Problem-solving focused technical competitions and challenges."
                        />
                        <Card
                            heading="Data Science & AI Workshops"
                            content="Hands-on sessions covering data, analysis, and core AI concepts."
                        />
                        <Card
                            heading="Odoo Hackathon"
                            content="Our annual flagship event focused on ERP and real-world systems."
                        />
                        <Card
                            heading="Technical Talks & Peer Learning"
                            content="Knowledge-sharing through talks, discussions, and peer sessions."
                        />
                    </div>
                </div>
            </main>
            {/* <div className="relative z-10 bottom-[-5rem] left-0 w-full">
                <BottomWave />
            </div> */}
        </div>
    );
};

export default LandingPage;

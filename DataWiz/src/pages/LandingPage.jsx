import BottomWave from "../components/BottomWave";
import Button from "../components/Button";
import Header from "../components/Header";
import Wave from "../components/wave";
import Card from "../components/Card";
import logo from '../assets/logo.jpeg'

const LandingPage = () => {
    return (
        <div className="relative min-h-screen">
            {/* <div className="mb-24 z-10">
                <Wave />
            </div> */}
            <Header />
            <main className="mx-auto">
                
                <div className="max-w-7xl mx-auto text-center p-10 flex flex-col space-y-7 z-0">
                    <h1 className="text-white text-7xl font-thin">
                        WELCOME TO{" "}
                        <span className="italic">DATAWIZ</span>
                    </h1>
                    <div className="">
                        <img className="max-w-40 mx-auto mt-2 rounded-full " src={logo} alt="logo" />
                    </div>
                    <p className="text-xl italic animate-bounce text-white">
                        Discover, Analyze, Conquer
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
                            heading="Odoo x NMIT Hackathon"
                            content="Our annual flagship event focused on ERP and real-world systems."
                        />
                        <Card
                            heading="Technical Talks & Peer Learning"
                            content="Knowledge-sharing through talks, discussions, and peer sessions."
                        />
                    </div>
                </div>
                <div className="max-w-5xl mx-auto m-14 text-white flex justify-center items-center space-x-28 shadow-[24px_12px_48px_rgba(1.5,0,0,0.7)] p-20 rounded-s-full">
                    <h1 className="text-4xl font-bold">Our Journey ➨</h1>
                    <div className="shadow-[24px_12px_48px_rgba(1.5,0,0,0.7)] p-20 rounded-e-full">
                        <div className="bg-white text-black px-10 py-2">2023 — DataWiz founded</div>
                        <div>2023 — First Odoo Hackathon</div>
                        <div>2024 — Workshops and technical sessions</div>
                        <div>2025 — Expanded events and collaborations</div>

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

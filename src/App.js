import Head from "./Components/Main/Main_Head";
import Navbar from "./Components/Main/Main_Navbar";
import Choice from "./Components/Main/Main_Choice";
import BusinessTrafic from "./Components/Main/Main_BusinessTrafic";
import Companies from "./Components/Main/Main_Companies";
import Ways from "./Components/Main/Main_Ways";
import NextProject from "./Components/Main/Main_NextProject";
import Business from "./Components/Main/Main_Business";
import Information from "./Components/Main/Main_Information";
import Reasons from "./Components/Main/Main_Reasons";
function App() {
    return (
        <>
            <div className="bg1">
                <div className="container">
                    <Navbar />
                    <Head />
                </div>
                <div className="bg2">
                    <Companies />
                    <Choice />
                </div>
            </div>
            <div className="container">
                <BusinessTrafic />
                <Ways/>
                <NextProject/>
                <Business/>
                <Information/>
                <Reasons/>
            </div>
        </>
    );
}

export default App;

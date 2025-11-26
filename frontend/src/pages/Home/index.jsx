import SectionOffer from "./SectionOffer";
import SectionFood from "./SectionFood";
import SectionAbout from "./SectionAbout";
import SectionBook from "./SectionBook";
import SectionClient from "./SectionClient";





function LandingPage() {
    return (
        <div>
            <SectionOffer />
            <SectionFood />
            <SectionAbout />
            <SectionBook />
            <SectionClient />


        </div>
    );
}


export default LandingPage;
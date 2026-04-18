import React from "react";
import Homepage from "./Hompage";
import Timeline from "./timeline";
import Contact from "./contact";
import FAQ from "../Components/FAQ";
import Footer from "../Components/Footer";

export default function Home() {
    return (
        <div className="bg-[#050505] min-h-screen w-full overflow-x-hidden">
            <div id="homepage">
                <Homepage />
            </div>
            <div id="timeline">
                <Timeline />
            </div>
            <div id="contact">
                <Contact />
            </div>
            <div id="faq">
                <FAQ />
            </div>
            <div id="footer">
                <Footer />
            </div>
        </div>
    );
}

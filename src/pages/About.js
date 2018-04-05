import React from "react";

import Header from "../components/Header";
import PageContainer from "../components/PageContainer";
import Footer from "../components/Footer";

const content = {
    main: "hi"
};

const AboutPage = () => (
    <div>
        <Header />
        <PageContainer content={content}/>
        <p>I am the about page</p>
        <Footer />
    </div>
);

export default AboutPage;
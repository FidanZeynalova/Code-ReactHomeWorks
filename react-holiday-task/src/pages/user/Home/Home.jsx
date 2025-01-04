import React from "react";
import UserHome from "../../../components/User/UserHome/UserHome";
import SectionTwo from "../../../components/User/SectionTwo/SectionTwo";
import UserThree from "../../../components/User/UserThree/UserThree";
import SectionFour from "../../../components/User/SectionFour/SectionFour";
import SectionFive from "../../../components/User/SectionFive/SectionFive";
import Contact from "../../../components/User/Contact/Contact";
import SectionSeven from "../../../components/User/SectionSeven/SectionSeven";
import SectionEight from "../../../components/User/SectionEight/SectionEight";
import SectionTen from "../../../components/User/SectionTen/SectionTen";
import SectionSix from "../../../components/User/SectionSix/SectionSix";

function Home() {

  return (
    <>
<UserHome/>
<SectionTwo/>
<UserThree/>
<SectionFour/>
<SectionFive/>
<SectionSix/>
<SectionSeven/>
<SectionEight/>
<SectionTen/>
<Contact/>
    </>
  );
}

export default Home;

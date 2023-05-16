"use client";

import HeroBanner from '../component/HeroBanner/HeroBanner';
import AboutUs from '../component/AboutUs/AboutUs';
import PublishBar from '../component/PublishBar/PublishBar';

export default function Page() {

  const onTextChange = (e) => {
    console.log("parent text change");
  }

    return (
      <div>
        <HeroBanner></HeroBanner>
        <AboutUs></AboutUs>
        
        <PublishBar></PublishBar>
      </div>
    );
  }
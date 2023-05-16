"use client";

import HeroBanner from '../../component/HeroBanner/HeroBanner';
import AboutUs from '../../component/AboutUs/AboutUs';
import styles from'./page.module.css';
import Image from 'next/image';

export default function Page() {

  var textToShow = "This is the text to show";
  var moreTextToShow = "This is more text to edit";

  const onTextChange = (e) => {
    console.log("parent text change");
  }

    return (
      <div>
        <HeroBanner></HeroBanner>
        <AboutUs></AboutUs>
      </div>
    );
  }
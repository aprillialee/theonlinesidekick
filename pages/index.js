import Head from "next/head";

import styled from "styled-components";

import LandingArea from "../components/LandingArea/LandingArea";
import HomeText from "../components/TextAreas/HomeText";
import ImageNav from "../components/LandingArea/ImageNav";
import TouchText from "../components/TextAreas/TouchText";

export default function Home() {
  return (
    <>
      <LandingArea />
      <HomeText
        titleText="If you are not going to do something, get it done properly"
        paragraphText="We take pride in lightening your load and giving you more time to focus on the bigger picture. Whether it is general admin, website updates, marketing or even gift purchasing, the online sidekick has got your back."
      />
      <ImageNav />
      <TouchText paragraphText="We are available to help today. Get in touch for a free discovery call and we will get started on getting your sh*t done." />
    </>
  );
}

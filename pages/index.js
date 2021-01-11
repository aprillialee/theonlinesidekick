import Head from "next/head";

import styled from "styled-components";

import LandingArea from "../components/LandingArea/LandingArea";
import HomeText from "../components/LandingArea/HomeText";

export default function Home() {
  return (
    <>
      <LandingArea />
      <HomeText />
    </>
  );
}

import React from "react";
import Page1 from "../pages/Page1";
import useViewport from "../viewport";
import "../CSS/Home.css";
import Page2 from "../pages/Page2";
import Page3 from "../pages/Page3";
import Page4 from "../pages/Page4";
import Appbar from "./Appbar";

const Home = () => {
  const { width, height, isMobile, isTablet } = useViewport();
  return (
    <div
      className="home"
      style={{
        width: isMobile ? "414px" : isTablet ? "1024px" : "1280px",
        height: isMobile ? "2817px" : "1776px",
      }}
    >
      <Appbar />
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <div
        className="fig1"
        style={{
          position: "absolute",
          display: isMobile ? "none" : isTablet || "block",
          marginTop: "305px",
          width: "92px",
          height: "87px",
        }}
      />
      <div
        className="fig2"
        style={{
          position: "absolute",
          display: isMobile ? "none" : isTablet || "block",
          width: isTablet ? "78px" : "97px",
          height: "170px",
          marginLeft: isTablet ? "944px" : "1187px",
          marginTop: "0px",
        }}
      />
      <div
        className="fig3"
        style={{
          position: "absolute",
          display: isMobile ? "none" : isTablet || "block",
          width: "85px",
          height: "350px",
          marginTop: "1300px",
        }}
      />
      <div
        className="fig4"
        style={{
          position: "absolute",
          width: isMobile ? "41px" : "55px",
          height: isMobile ? "46px" : "65px",
          marginLeft: isMobile ? "14px" : isTablet ? "606px" : "759px",
          marginTop: isMobile ? "2435px" : "1004px",
        }}
      />
      <div
        className="footer"
        style={{
          position: "absolute",
          display: isMobile ? "none" : "block",
          width: "1285px",
          height: "285px",
          marginTop: "1471px",
        }}
      />
      <div
        className="footer1"
        style={{
          position: "absolute",
          display: isMobile ? "block" : "none",
          width: "414px",
          height: "266px",
          marginTop: "2552px",
        }}
      />
    </div>
  );
};

export default Home;

import { Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import "../CSS/Home.css";
import useViewport from "../viewport";
import Clang from "./Clang";
import Html from "./Html";
import Javalang from "./Javalang";
import Weblang from "./Weblang";

const Page2 = () => {
  const { width, height, isMobile, isTablet } = useViewport();

  return (
    <Paper
      elevation={4}
      style={{
        position: "absolute",
        width: isMobile ? "387px" : isTablet ? "482px" : "625px",
        height: isMobile ? "1127px" : "1023px",
        marginLeft: isMobile ? "14px" : isTablet ? "96px" : "105px",
        marginTop: isMobile ? "398px" : "355px",
      }}
    >
      <div style={{ fontFamily: "Poppins", display: "flex" }}>
        <div
          className="second"
          style={{
            height: "55px",
            width: isMobile ? "40px" : "45px",
            marginTop: "16px",
            marginLeft: "12px",
            zIndex: "1",
          }}
        />
        <Typography
          variant={isMobile ? "h5" : "h4"}
          fontWeight="600"
          style={{
            height: "35px",
            marginTop: isTablet ? "17px" : "15px",
            marginLeft: "11px",
            textAlign: "center",
            fontSize: isMobile || isTablet ? "25px" : "30px",
          }}
        >
          Upcoming Classes
        </Typography>
      </div>
      <div
        style={{
          fontFamily: "Poppins",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h5"
          color="#000000"
          style={{
            height: isMobile ? "35px" : "20px",
            marginTop: "7px",
            marginLeft: isTablet ? "-7px" : "11px",
            fontSize: "13px",
          }}
        >
          Today
        </Typography>
        <div
          className="box"
          style={{
            width: isMobile ? "302px" : isTablet ? "407px" : "541px",
            marginTop: isMobile ? "-6px" : isTablet ? "13px" : "11px",
            marginLeft: "8px",
          }}
        ></div>
      </div>
      <div
        style={{
          width: isMobile ? "387px" : isTablet ? "482px" : "623px",
          height: "128px",
          marginTop: "5px",
          background: "#FFFFFF",
          border: "1.5px solid #FAFAFA",
          boxSizing: "border-box",
          borderRadius: "21px",
        }}
      >
        <Clang />
      </div>
      <div
        style={{
          width: isMobile ? "387px" : isTablet ? "482px" : "623px",
          height: "128px",
          background: "#FFFFFF",
          border: "1.5px solid #FAFAFA",
          boxSizing: "border-box",
          borderRadius: "21px",
          marginTop: "10px",
        }}
      >
        {isMobile ? <Javalang /> : <Html />}
      </div>
      <div
        style={{
          fontFamily: "Poppins",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h5"
          color="000000"
          style={{
            height: isMobile ? "35px" : "20px",
            marginTop: "15px",
            marginLeft: "11px",
            fontSize: "13px",
            opacity: "0.4",
          }}
        >
          16/09/21
        </Typography>
        <div
          className="box"
          style={{
            opacity: "0.4",
            width: isMobile ? "303px" : "541px",
            marginTop: isMobile ? "6px" : "34px",
            marginLeft: "8px",
          }}
        ></div>
      </div>
      <div
        style={{
          width: isMobile ? "387px" : isTablet ? "482px" : "623px",
          height: "128px",
          background: "#FFFFFF",
          border: "1.5px solid #FAFAFA",
          boxSizing: "border-box",
          borderRadius: "21px",
          marginTop: isMobile ? "-3px" : "11px",
        }}
      >
        {isMobile ? <Html /> : <Clang />}
      </div>
      <div
        style={{
          width: isMobile ? "387px" : isTablet ? "482px" : "623px",
          height: "128px",
          background: "#FFFFFF",
          border: "1.5px solid #FAFAFA",
          boxSizing: "border-box",
          borderRadius: "21px",
          marginTop: isMobile ? "10px" : "15px",
        }}
      >
        {isMobile ? <Weblang /> : <Html />}
      </div>
      <div
        style={{
          width: isMobile ? "387px" : isTablet ? "482px" : "623px",
          height: "128px",
          background: "#FFFFFF",
          border: "1.5px solid #FAFAFA",
          boxSizing: "border-box",
          borderRadius: "21px",
          marginTop: isMobile ? "10px" : "15px",
        }}
      >
        <Clang />
      </div>
      <div
        style={{
          width: isMobile ? "387px" : isTablet ? "482px" : "623px",
          height: "128px",
          background: "#FFFFFF",
          border: "1.5px solid #FAFAFA",
          boxSizing: "border-box",
          borderRadius: "21px",
          marginTop: isMobile ? "10px" : "15px",
        }}
      >
        {isMobile ? <Javalang /> : <Html />}
      </div>
      <div
        style={{
          width: isMobile ? "387px" : isTablet ? "482px" : "623px",
          display: isMobile ? "block" : "none",
          height: "128px",
          background: "#FFFFFF",
          border: "1.5px solid #FAFAFA",
          boxSizing: "border-box",
          borderRadius: "21px",
          marginTop: isMobile ? "10px" : "15px",
        }}
      >
        <Html />
      </div>
    </Paper>
  );
};

export default Page2;

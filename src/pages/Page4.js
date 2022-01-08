import { Paper, Typography } from "@mui/material";
import React from "react";
import Course1 from "../components/Course1";
import Course2 from "../components/Course2";
import Course3 from "../components/Course3";
import Course4 from "../components/Course4";
import Course5 from "../components/Course5";
import "../CSS/Home.css";
import useViewport from "../viewport";

const Page4 = () => {
  const { width, height, isMobile, isTablet } = useViewport();
  return (
    <Paper
      elevation={4}
      style={{
        position: "absolute",
        width: isMobile ? "387px" : isTablet ? "326px" : "397px",
        height: isMobile ? "708px" : "724px",
        marginLeft: isMobile ? "14px" : isTablet ? "606px" : "759px",
        marginTop: isMobile ? "1716px" : "255px",
        background: "#FFFFFF",
        // opacity: "0.7",
        // boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.06)",
        borderRadius: "7px",
      }}
    >
      <div style={{ fontFamily: "Poppins", display: "flex" }}>
        <div
          className="fourth"
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
            height: "38px",
            color: "#000237",
            marginTop: "15px",
            marginLeft: "11px",
            textAlign: "center",
            fontSize: isMobile ? "25px" : "30px",
          }}
        >
          My Courses
        </Typography>
      </div>
      <Course1 />
      <Course2 />
      <Course3 />
      <Course4 />
      <Course5 />
    </Paper>
  );
};

export default Page4;

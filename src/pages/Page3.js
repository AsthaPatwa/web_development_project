import { Paper, Typography } from "@mui/material";
import React from "react";
import "../CSS/Home.css";
import useViewport from "../viewport";

const Page3 = () => {
  const { width, height, isMobile, isTablet } = useViewport();
  return (
    <Paper
      elevation={4}
      style={{
        position: "absolute",
        width: isMobile ? "387px" : isTablet ? "326px" : "397px",
        height: isMobile ? "166px" : "170px",
        marginLeft: isMobile ? "14px" : isTablet ? "606px" : "759px",
        marginTop: isMobile ? "1538px" : "52px",
        background:
          "radial-gradient(116.76% 600.99% at 2.14% 0%, #89DCFF 0%, #89FF95 100%)",
        boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.06)",
        borderRadius: "7px",
      }}
    >
      <div style={{ display: " flex" }}>
        <div
          className="third"
          style={{
            height: isMobile || isTablet ? "83px" : "85px",
            width: isMobile || isTablet ? "83px" : "85px",
            marginTop: isMobile ? "31px" : "27px",
            marginLeft: isMobile ? "31px" : "27px",
            zIndex: "1",
          }}
        />
        <div style={{ fontFamily: "Poppins" }}>
          <Typography
            variant={isMobile ? "h5" : "h4"}
            fontWeight="600"
            color="#FFFFFF"
            style={{
              height: "20px",
              width: "160px",
              marginTop: "27px",
              marginLeft: isMobile || isTablet ? "50px" : "75px",
              textAlign: "center",
              fontSize: "18px",
            }}
          >
            Any Any Doubts?
          </Typography>
          <ul className="circle">
            <li
              style={{
                color: "#FFFFFF",
                marginLeft: isMobile || isTablet ? "35px" : "49px",
              }}
            >
              <Typography
                style={{
                  height: "13px",
                  width: "134px",
                  marginTop: "-9px",
                  marginLeft: isMobile || isTablet ? "-11px" : "-9px",
                  textAlign: "center",
                  fontSize: "12px",
                  fontWeight: "400",
                  color: "#FFFFFF",
                }}
              >
                Talk to our mentors
              </Typography>
            </li>
            <li
              style={{
                color: "#FFFFFF",
                marginLeft: isMobile || isTablet ? "35px" : "49px",
              }}
            >
              <Typography
                style={{
                  height: "14px",
                  width: "141px",
                  marginTop: "10px",
                  marginLeft: isMobile || isTablet ? "-11px" : "-9px",
                  textAlign: "center",
                  fontSize: "12px",
                  fontWeight: "400",
                  color: "#FFFFFF",
                }}
              >
                Get expert Guidence
              </Typography>
            </li>
            <li
              style={{
                color: "#FFFFFF",
                marginLeft: isMobile || isTablet ? "35px" : "49px",
              }}
            >
              <Typography
                style={{
                  height: "13px",
                  width: "134px",
                  marginTop: "10px",
                  marginLeft: isMobile || isTablet ? "-11px" : "-9px",
                  textAlign: "center",
                  fontSize: "12px",
                  fontWeight: "400",
                  color: "#FFFFFF",
                }}
              >
                Talk to our mentors
              </Typography>
            </li>
          </ul>
        </div>
      </div>
      <div
        style={{
          width: isMobile ? "367px" : isTablet ? "312px" : "377px",
          height: isMobile ? "29px" : "30px",
          border: "1px solid #FFFFFF",
          borderRadius: "3px",
          background:
            "radial-gradient(116.76% 600.99% at 2.14% 0%, #89DCFF 0%, #89FF95 100%)",
          marginLeft: isMobile ? "10px" : isTablet ? "3px" : "8px",
          marginTop: isMobile || isTablet ? "-5px" : "0px",
        }}
      >
        <Typography
          style={{
            height: "23px",
            width: isMobile ? "323px" : isTablet ? "303px" : "323px",
            marginTop: "3px",
            marginLeft: isMobile ? "13px" : isTablet ? "3px" : "13px",
            textAlign: "center",
            fontSize: "16px",
            fontWeight: "500",
            color: "#FFFFFF",
          }}
        >
          Book Your Free Mentorship Session Now!
        </Typography>
      </div>
    </Paper>
  );
};

export default Page3;

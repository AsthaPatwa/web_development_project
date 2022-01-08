import React, { useState } from "react";
import useViewport from "../viewport";
import "../CSS/Home.css";
import { Button, Typography } from "@mui/material";

export const Html = () => {
  const { width, height, isMobile, isTablet } = useViewport();
  const [opac, setOpac] = useState(true);
  return (
    <>
      <div style={{ display: "flex", height: "111px" }}>
        <div
          className="html"
          style={{
            height: "111px",
            width: "111px",
            marginTop: "9px",
            marginLeft: isMobile ? "5px" : "16px",
          }}
        />
        <div
          style={{
            fontFamily: "Poppins",
          }}
        >
          <Typography
            variant={isMobile ? "h5" : "h4"}
            fontWeight="500"
            color="#333333"
            style={{
              height: "35px",
              marginTop: "9px",
              marginLeft: isMobile ? "124px" : isTablet ? "138px" : "159px",
              fontSize: "19.8px",
            }}
          >
            Lorem ipsum sit amet
          </Typography>
          {isMobile || isTablet ? (
            <Typography
              variant="h5"
              fontWeight="400"
              lineHeight="16px"
              color="#666666"
              style={{
                width: isMobile ? "242px" : "292px",
                height: "53px",
                marginTop: isMobile ? "-8px" : "-5px",
                marginLeft: isMobile ? "124px" : isTablet ? "138px" : "159px",
                fontSize: isMobile ? "10.9px" : "12.9px",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, mi
              vitae vitae volutpat urna, nulla. Sit suspendisse diam mauris
            </Typography>
          ) : (
            <Typography
              variant="h5"
              fontWeight="400"
              lineHeight="16px"
              color="#666666"
              style={{
                height: "53px",
                marginTop: "-5px",
                marginLeft: "159px",
                fontSize: "12.9px",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, mi
              vitae vitae volutpat urna, nulla. Sit suspendisse diam mauris
              hendrerit viverra diam feugiat mauris. Nec sed malesuada nulla
              pharetra hash.
            </Typography>
          )}
          <div
            className="timer"
            style={{
              width: isMobile ? "70px" : isTablet ? "100px" : "116px",
              height: isMobile ? "17px" : "20px",
              marginTop: isMobile ? "10px" : isTablet ? "-79px" : "-87px",
              marginLeft: isMobile ? "124px" : isTablet ? "361px" : "469px",
              display: "flex",
            }}
          >
            <div
              className="time"
              style={{
                height: "18px",
                width: isMobile ? "18px" : "19px",
                marginLeft: isMobile || isTablet ? "0px" : "3px",
                zIndex: "1",
              }}
            />
            <Typography
              variant="h5"
              fontWeight="700"
              color="#FFFFFF"
              fontSize={isMobile ? "7.9px" : "12px"}
              marginTop={isMobile ? "4px" : "2px"}
              marginLeft={isMobile ? "18px" : isTablet ? "20px" : "28px"}
              textAlign={"center"}
            >
              8:00-9:00 PM
            </Typography>
          </div>
          <Button
            onClick={() => setOpac(false)}
            color="info"
            style={{
              border: "0.5px solid #29A5FF",
              background: "#29A5FF",
              color: "#FFFFFF",
              opacity: opac ? "0.2" : "1",
              width: isMobile ? "82px" : "84px",
              height: isMobile ? "17.29px" : "21px",
              marginTop: isMobile ? "-44px" : "62px",
              marginLeft: isMobile ? "267px" : isTablet ? "361px" : "485px",
            }}
          >
            JoinNow
          </Button>
        </div>
      </div>
    </>
  );
};

export default Html;

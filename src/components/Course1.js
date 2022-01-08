import useViewport from "../viewport";
import { Button, Typography } from "@mui/material";
import React from "react";
import "../CSS/Home.css";
import StarIcon from "@mui/icons-material/Star";

const Course1 = () => {
  const { width, height, isMobile, isTablet } = useViewport();
  return (
    <>
      <div style={{ display: "flex" }}>
        <div
          className="course1"
          style={{
            height: isMobile || isTablet ? "106px" : "109px",
            width: isMobile ? "189px" : isTablet ? "165px" : "194px",
            marginTop: isMobile ? "9px" : isTablet ? "20px" : "9px",
            marginLeft: isMobile || isTablet ? "5px" : "9px",
          }}
        />
        <div
          style={{
            fontFamily: "Poppins",
          }}
        >
          <Typography
            variant={isMobile ? "h5" : "h3"}
            fontWeight="500"
            color="#333333"
            style={{
              height: "28px",
              marginTop: isMobile ? "11px" : isTablet ? "23px" : "11px",
              marginLeft: isMobile ? "15px" : "11px",
              fontSize: "17.8px",
            }}
          >
            Lorem ipsum sit a
          </Typography>
          <Typography
            variant="h5"
            fontWeight="400"
            lineHeight="15px"
            color="#666666"
            style={{
              height: isMobile ? "53px" : isTablet ? "46px" : "53px",
              marginTop: isMobile ? "-2px" : "-2px",
              marginLeft: isMobile ? "15px" : "11px",
              fontSize: "9.9px",
            }}
          >
            Lorem ipsum dolor sit amet,
            <br /> consectetuer adipisc Lorem <br />
            ipsum dolor sit amet,
          </Typography>
          <StarIcon
            style={{
              height: "14.39px",
              width: "15.13px",
              color: "#FCEE21",
              marginTop: "2px",
              marginLeft: isMobile ? "15px" : "11px",
            }}
          />
          <StarIcon
            style={{
              height: "14.39px",
              width: "15.13px",
              color: "#FCEE21",
              marginTop: "2px",
              marginLeft: "5px",
            }}
          />
          <StarIcon
            style={{
              height: "14.39px",
              width: "15.13px",
              color: "#FCEE21",
              marginTop: "2px",
              marginLeft: "5px",
            }}
          />
          <StarIcon
            style={{
              height: "14.39px",
              width: "15.13px",
              color: "#FCEE21",
              marginTop: "2px",
              marginLeft: "5px",
            }}
          />
          <StarIcon
            style={{
              height: "14.39px",
              width: "15.13px",
              color: "#FCEE21",
              marginTop: "2px",
              marginLeft: "5px",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Course1;

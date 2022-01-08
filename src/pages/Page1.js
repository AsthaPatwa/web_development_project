import { Button, Paper, Typography } from "@mui/material";
import { display } from "@mui/system";
import React from "react";
import "../CSS/Home.css";
import useViewport from "../viewport";
import Subject from "./Subject";

const Page1 = () => {
  const { width, height, isMobile, isTablet } = useViewport();
  return (
    <Paper
      elevation={4}
      style={{
        fontFamily: "Poppins",
        position: "absolute",
        width: isMobile ? "387px" : isTablet ? "482px" : "625px",
        height: isMobile ? "362px" : "285px",
        marginLeft: isMobile ? "14px" : isTablet ? "96px" : "105px",
        marginTop: isMobile ? "20px" : "52px",
      }}
    >
      <div style={{ display: " flex" }}>
        <div
          className="img1"
          style={{
            height: isMobile ? "235px" : isTablet ? "230px" : "275px",
            width: isMobile ? "149px" : isTablet ? "128px" : "145px",
            marginTop: "16px",
            marginLeft: isMobile ? "25px" : isTablet ? "7px" : "25px",
            zIndex: "1",
          }}
        />
        <div
          className="img2"
          style={{
            height: isMobile ? "235px" : isTablet ? "229px" : "275px",
            width: isMobile ? "131px" : isTablet ? "119px" : "138px",
            marginTop: isMobile ? "22px" : "20px",
            marginLeft: isMobile ? "-104px" : isTablet ? "-122px" : "-139px",
            zIndex: "2",
          }}
        />

        <div
          className="edit"
          style={{
            fontFamily: "Poppins",
            display: isMobile ? "inline" : "flex",
          }}
        >
          <Typography
            variant={isMobile || isTablet ? "h5" : "h4"}
            fontWeight="600"
            style={{
              height: isMobile || isTablet ? "35px" : "45px",
              marginTop: isMobile ? "50px" : "9px",
              marginLeft: isMobile ? " 88px" : isTablet ? "30px" : "45px",
              fontSize: isMobile ? "25px" : isTablet ? "18px" : "30px",
            }}
          >
            Remus Lupin
          </Typography>
          <Button
            color="inherit"
            style={{
              border: "0.5px solid #000000",
              borderRadius: "4px",
              width: "103px",
              height: "23.55px",
              marginTop: isMobile ? "-130px" : "18px",
              marginLeft: isMobile ? "156px" : isTablet ? "70px" : "88px",
            }}
          >
            EditProfile
          </Button>
        </div>
      </div>

      <Typography
        variant="h5"
        fontSize={"13px"}
        style={{
          height: isMobile ? "35px" : "35px",
          marginTop: isMobile ? "-170px" : isTablet ? "-208px" : "-245px",
          marginLeft: isMobile ? "296px" : isTablet ? "162px" : "212px",
        }}
      >
        JEE Aspirant
      </Typography>

      <div style={{ display: "flex" }}>
        <div
          className="twitter"
          style={{
            height: "18px",
            width: "18px",
            marginTop: isMobile ? "2px" : "108px",
            marginLeft: isMobile ? "270px" : isTablet ? "21px" : "55px",
            zIndex: "1",
          }}
        />
        <div
          className="fb"
          style={{
            height: "18px",
            width: "18px",
            marginTop: isMobile ? "2px" : "108px",
            marginLeft: "25px",
            zIndex: "1",
          }}
        />
        <div
          className="insta"
          style={{
            height: "18px",
            width: "18px",
            marginTop: isMobile ? "2px" : "108px",
            marginLeft: "25px",
            zIndex: "1",
          }}
        />
      </div>
      <div
        style={{
          height: isMobile ? "35px" : "35px",
          width: isMobile ? null : isTablet ? "88px" : null,
          marginTop: isMobile ? "6px" : "-142px",
          marginLeft: isMobile ? "8px" : isTablet ? "162px" : "212px",
        }}
      >
        <Subject />
      </div>
      <div
        className="box"
        style={{
          width: isMobile ? "369px" : isTablet ? "303px" : "405px",
          marginTop: isMobile || isTablet ? "70px" : "76px",
          marginLeft: isMobile ? "8px" : isTablet ? "162px" : "212px",
        }}
      ></div>
      <Typography
        style={{
          width: isMobile ? "369px" : isTablet ? "303px" : "405px",
          marginTop: isTablet ? "5px" : "9px",
          marginLeft: isMobile ? "10px" : isTablet ? "162px" : "212px",
          fontSize: isMobile ? "13px" : "14px",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac, turpis cras
        in pellentesque at blandit velit. Magna at lobortis lacus, ultricies in
        vel morbi adipiscing. Nibh purus a sollicitudin scelerisque. Integer
        eget dui orci, dis tellus.
      </Typography>
    </Paper>
  );
};

export default Page1;

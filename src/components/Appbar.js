import React, { useState } from "react";
import useViewport from "../viewport";
import "../CSS/Home.css";
import { AppBar, Box, Button, Paper, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

const Appbar = () => {
  const { width, height, isMobile, isTablet } = useViewport();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{
          fontFamily: "Poppins",
          width: isMobile ? "414px" : isTablet ? "1024px" : "1280px",
          height: "57.36px",
          background: "#FFFFFF",
          marginLeft: "0.32px",
          marginTop: "4.3px",
        }}
      >
        <Toolbar>
          <div
            className="name"
            style={{
              position: "absolute",
              height: "40px",
              width: "118px",
              marginLeft: isMobile ? "18px" : isTablet ? "55px" : "113px",
              marginTop: isMobile ? "3px" : "-5px",
              zIndex: "1",
            }}
          />
          <div
            className="nav"
            style={{
              display: isMobile ? "none" : "inline-flex",
            }}
          >
            <Button
              style={{
                fontWeight: "400",
                height: "21.74px",
                width: "61.32px",
                marginTop: isMobile ? "17px" : "0.92px",
                marginLeft: isMobile ? "117px" : "339px",
                fontSize: "13px",
                color: "#333333",
                justifyContent: "center",
              }}
            >
              Aboutus
            </Button>
            <Button
              style={{
                fontWeight: "400",
                height: "21.74px",
                width: "81.32px",
                marginTop: "0.92px",
                marginLeft: isMobile ? "118px" : "36px",
                fontSize: "13px",
                color: " #333333",
                justifyContent: "center",
              }}
            >
              ContactUs
            </Button>
            <Button
              style={{
                fontWeight: "400",
                height: "21.74px",
                width: "76.32px",
                marginTop: "0.92px",
                marginLeft: isMobile ? "118px" : "34px",
                fontSize: "13px",
                color: " #333333",
                justifyContent: "center",
              }}
            >
              Courses
            </Button>
            <Button
              style={{
                fontWeight: "400",
                height: "21.74px",
                width: "76.32px",
                marginTop: "0.92px",
                marginLeft: isMobile ? "118px" : "36px",
                fontSize: "13px",
                color: " #333333",
                justifyContent: "center",
              }}
            >
              Mentors
            </Button>
          </div>

          <div
            style={{
              width: "292px",
              background: "#FBB03B",
              marginLeft: "11px",
              height: "35px",
              borderRadius: "22px",
              border: "0.5px solid #FBB03B",
              display: isMobile ? "none" : "flex",
            }}
          >
            <input
              type="text"
              placeholder="Search "
              style={{
                width: "242px",
                marginTop: "0.92px",
                marginLeft: "7px",
                height: "30px",
                background: "#FBB03B",
                border: "none",
                outline: "none",
              }}
            />
            <SearchIcon style={{ marginTop: "4.92px", marginLeft: "3px" }} />
          </div>
          <div
            className="img2"
            style={{
              height: "50px",
              width: "50px",
              marginTop: "-4px",
              marginLeft: isMobile ? "271px" : isTablet ? "272px" : "16px",
            }}
          />
          <MenuIcon
            style={{
              color: "  #FBB03B",
              display: isMobile ? "block" : "none",
              height: "50px",
              width: "50px",
              marginTop: "-4px",
              marginLeft: "7px",
              cursor: "pointer",
            }}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Appbar;

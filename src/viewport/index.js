import React, { useContext } from "react";
import { ViewportContext } from "./ViewportProvider";

export const useViewport = () => {
  const { width, height } = useContext(ViewportContext);
  const isMobile = width < 700;
  const isTablet = width < 1020;
  return { width, height, isMobile, isTablet };
};

export default useViewport;

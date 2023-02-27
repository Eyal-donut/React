import React from "react";
import { Outlet } from "react-router-dom";
import { useGlobalContext } from "../context/context";
import Navigation from "./Navigation";

const Root = () => {
    const {mode} = useGlobalContext()
  return (
    <div className={mode === 'day' ? 'bgr-day' : 'bgr-night'}>
      <Navigation />
      <Outlet />
    </div>
  );
};

export default Root;

import React from "react";
import OurBlog from "./Details";
import { Featured } from "../Featured";
import { Blogs } from "../Blogs";

const index = () => {
  return (
    <>
      <OurBlog />
      <Featured />
      <Blogs />
    </>
  );
};

export default index;

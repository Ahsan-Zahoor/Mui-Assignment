import React from "react";
import OurBlog from "../OurBlog.jsx";
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

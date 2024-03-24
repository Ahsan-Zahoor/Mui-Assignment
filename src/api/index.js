import axios from "axios";

export const fetchBlogs = async () => {
  return await axios.get(
    "https://61791a83aa7f3400174047a6.mockapi.io/v1/GetBLogs/"
  );
};

export const fetchBlogById = async (id) => {
  return await axios.get(
    `https://61791a83aa7f3400174047a6.mockapi.io/v1/GetBLogs/${id}`
  );
};

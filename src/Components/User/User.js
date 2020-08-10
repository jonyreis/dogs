import React from "react";
import UserHeader from "./UserHeader";
import Feed from "../Feed/Feed";
import { Routes, Route } from "react-router-dom";

const User = () => {
  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed />} />
      </Routes>
    </section>
  );
};

export default User;

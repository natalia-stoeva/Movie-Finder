import React from "react";
import { useParams } from "react-router";

export const ProfilePage = () => {
  const { username } = useParams();
  return (
    <div className="container">
      <h1>Profile Page</h1>
      <p>Hello, {username} </p>
    </div>
  );
};

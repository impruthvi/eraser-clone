"use client"
import React from "react";
import Header from "./_components/Header";
import Hero from "./_components/Hero";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <div>
      <Header />
      <Hero />
    </div>
  );
};

export default HomePage;

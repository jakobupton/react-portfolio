import React from "react";

export default function Card() {
  return (
    <div className="flex text-neutral-100 justify-center">
        <div className="">
            <img className="rounded-full h-28 me-5 hover:scale-105 transition"src="me.png"></img>
        </div>
        <div className="content-around">
            <h1 className="text-2xl">Jakob Upton</h1>
            <p className="font-light">Computer Science Student</p>
            <p className="font-thin">University of the Fraser Valley</p>
        </div>
    </div>
  );
}
import React from "react";
import Card from "./card";
import About from "./about";
import Projects from "./projects";
import Work from "./work";

export default function Content() {
return (
    <div className="w-5/6 max-w-xl mx-auto">
        <Card />
        <About />
        <Projects />
        <Work />
    </div>
);
}
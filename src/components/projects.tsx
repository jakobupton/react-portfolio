import React, { useEffect, useState } from "react";
import ProjectItem from "./projectItem";
import projectData from "../projects.json";

interface Project {
    name: string;
    link: string;
    stack: string[];
    description: string;
    years: string[];
}

export default function Projects() {
    const [data, setData] = useState<Project[]>([]);

    useEffect(() => {
        // Fetch or read JSON data when component mounts
        setData(projectData.projects);
    }, []);

    return (
        <div className="flex flex-wrap justify-center mb-16">
            <div className="">
                <h3 className="text-xl text-white mb-4">Projects</h3>
                <ul>
                    {data.map((project, index) => (
                        <ProjectItem key={index} project={project} />
                    ))}
                </ul>
            </div>
        </div>
    );
}

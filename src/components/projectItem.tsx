import React from "react";

interface Project {
    name: string;
    link: string;
    stack: string[];
    description: string;
    years: string[];
}

interface Props {
    project: Project;
}

const ProjectItem: React.FC<Props> = ({ project }) => {
    return (
        <div className="flex mb-5">
            <div>
            <a target='_blank' rel='noreferrer' className="hover:underline text-white flex" href={project.link}><h4 className="text-white font-bold">{project.name}</h4> <img alt={project.name} src="/link-arrow.svg"></img></a>
                <p className="text-white font-light">{project.description}</p>
                <p className="text-white font-thin">{project.stack.join(" \u2022 ")}</p>
            </div>
        </div>
    );
};

export default ProjectItem;

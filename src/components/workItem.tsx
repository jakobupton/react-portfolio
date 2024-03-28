import React from "react";

interface Occupation {
    name: string;
    skills: string[];
    description: string;
    years: string[];
}

interface Props {
    occupation: Occupation;
}

const WorkItem: React.FC<Props> = ({ occupation }) => {
    return (
        <div className="flex mb-5">
            <div>
                <h4 className="text-white font-bold">{occupation.name} ({occupation.years.join("-")})</h4>
                <p className="text-white font-thin">{occupation.description}</p>
                <p className="text-white font-thin">{occupation.skills.join(" \u2022 ")}</p>
                {/* <p className="text-white font-thin">{occupation.stack.join(" \u2022 ")}</p> */}
            </div>
        </div>
    );
};

export default WorkItem;

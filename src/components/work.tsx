import React, { useEffect, useState } from "react";
import WorkItem from "./workItem";
import workExperience from "../workExperience.json";

interface Occupations {
    name: string;
    skills: string[];
    description: string;
    years: string[];
}

export default function Work() {
    const [data, setData] = useState<Occupations[]>([]);

    useEffect(() => {
        // Fetch or read JSON data when component mounts
        setData(workExperience.occupations);
    }, []);

    return (
        <div className="flex flex-wrap justify-center">
            <div className="">
                <h3 className="text-xl text-white mb-4">Work Experience</h3>
                <ul>
                    {data.map((occupation, index) => (
                        <WorkItem key={index} occupation={occupation} />
                    ))}
                </ul>
            </div>
        </div>
    );
}

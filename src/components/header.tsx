import React from "react";

export default function Header() {
  return (
    <div className="flex justify-between items-center p-4 text-white mb-20 sticky top-0 z-auto">
        <h1 className="text-2xl"><a href="/">&#123;J&#125;</a></h1>
        <a target='_blank' rel='noreferrer' href="/JakobUptonResume.pdf" className="rounded-lg bg-white bg-opacity-20 hover:bg-black hover:bg-opacity-20 px-2 py-1">Resume</a>
    </div>
  );
}
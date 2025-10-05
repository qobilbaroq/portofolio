import React from "react";

const Skills = () => {
  return (
    <div className="flex flex-col justify-between md:p-9 p-5 auto-card bg-foreground text-background">
      <h1 className="text-3xl font-medium">Skill</h1>
      <div className="flex justify-around">
        <div className="flex flex-col justify-between gap-7">
          <div className=" font-medium text-lg">
            Languages-Frameworks
          </div>
          <hr className="w-96" />
          <div className="md:w-96 text-lg ">

          </div>
        </div>
        <div className="flex flex-col justify-between gap-7">
          <div className=" font-medium text-lg">
            Tools
          </div>
          <hr className="w-96" />
          <div className="md:w-96 text-lg ">

          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

import React from 'react'

const About = () => {
  return (
    <div className="flex flex-col justify-between md:p-9 p-5 auto-card bg-foreground text-background">
      <h1 className="text-3xl font-medium">About</h1>
      <div className="flex flex-col md:flex-row justify-between gap-7">
        <div className="md:w-1/3 font-medium text-lg">Moch Nabil Al Mubaroq </div>

        <div className="md:w-lg text-lg ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in.
        </div>
      </div>
    </div>
  )
}

export default About
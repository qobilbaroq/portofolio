import React from "react";

const Menu = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="w-md h-[35rem] backdrop-blur-md bg-muted-secondary/50 p-7 rounded-lg">
      <div className="text-secondary flex flex-col justify-between h-full">
        {/* Bagian Projects */}
        <div>
          <h1 className="font-medium text-muted-primary uppercase mb-3">
            PROJECTS
          </h1>
          <ul className="space-y-2 cursor-pointer">
            <li className="text-secondary text-3xl transition duration-200 ease-in-out hover:text-muted-primary">
              Sibening
            </li>
            <li className="text-secondary text-3xl transition duration-200 ease-in-out hover:text-muted-primary">
              Search Job
            </li>
            <li className="text-secondary text-3xl transition duration-200 ease-in-out hover:text-muted-primary">
              Portofolio
            </li>
            <li className="text-secondary text-3xl transition duration-200 ease-in-out hover:text-muted-primary">
              Lorem Ipsum
            </li>
          </ul>
        </div>

        <hr className="my-4 border-white/20" />

        {/* Bagian Sosial */}
        <div>
          <h1 className="font-medium text-muted-primary uppercase text-sm mb-2">
            Sosial
          </h1>
          <ul className="space-y-1 cursor-pointer capitalize">
            <li className="text-secondary text-lg transition duration-200 ease-in-out hover:text-muted-primary">
              Instagram
            </li>
            <li className="text-secondary text-lg transition duration-200 ease-in-out hover:text-muted-primary">
              GitHub
            </li>
            <li className="text-secondary text-lg transition duration-200 ease-in-out hover:text-muted-primary">
              LinkedIn
            </li>
          </ul>
        </div>

        {/* Tombol Contact */}
        <button
          onClick={scrollToContact}
          className="border border-secondary rounded-lg w-full py-3 text-sm hover:bg-secondary hover:text-primary transition duration-400 ease-in-out"
        >
          CONTACT
        </button>
      </div>
    </div>
  );
};

export default Menu;

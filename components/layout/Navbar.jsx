import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 h-[var(--navbar-height)] flex justify-between items-center w-full px-4 md:px-8 z-50 backdrop-blur-sm">
      <h1 className="hidden md:block text-foreground text-sm hover:text-text-muted-light cursor-pointer">
        BAROQ
      </h1>

      <div className="flex justify-between items-center bg-navbar md:py-3 py-4 px-6 rounded-lg cursor-pointer w-full md:w-[400px]">
        <h1 className="text-foreground text-sm">MENU</h1>
        <div className="text-foreground text-sm">icon</div>
      </div>

      <h1 className="hidden md:block text-foreground text-sm hover:text-text-muted-light cursor-pointer">
        CONTACT
      </h1>
    </nav>
  );
};

export default Navbar;

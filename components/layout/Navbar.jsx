import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center w-full px-8 py-6 z-50">
      {/* Logo */}
      <h1 className="text-foreground text-sm hover:text-text-muted-light cursor-pointer">
        BAROQ
      </h1>

      {/* Menu */}
      <div className="flex justify-between items-center bg-navbar w-[400px] py-3 px-6 rounded-lg cursor-pointer">
        <h1 className="text-foreground text-sm">MENU</h1>
        <div className="text-foreground text-sm">icon</div>
      </div>

      {/* Contact */}
      <h1 className="text-foreground text-sm cursor-pointer">CONTACT</h1>
    </nav>
  );
};

export default Navbar;

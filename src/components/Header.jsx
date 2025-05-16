import { useState } from "react";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <div className="bg-gradient-to-r from-blue-150 via-[73%] via-blue-250 to-blue-350 ">
      <div className="px-9 py-6">
        <img alt="Logo" src={logo} className="h-[45px] w-[56] object-contain" />
      </div>
     

    </div>
  );
}

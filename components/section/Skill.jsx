 "use client";
 
 import React from "react";
 import { motion } from "framer-motion";
import Book3D from "../ui/Book3D";
 
 export const Skill = () => {
   return(
     <div className="md:p-9 p-5 auto-card bg-secondary text-primary rounded-2xl">
       <h1 className="text-2xl font-medium">Skills</h1>
       <Book3D />
     </div>
   )
 }
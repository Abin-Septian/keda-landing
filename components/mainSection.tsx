import Image from "next/image";
import React from "react";
import Navbar from "./navbar";

const MainSection = ({ children }: any) => {
  return (
    <div className="relative h-screen w-screen">
      <div className="absolute -left-3/4 -top-20 -z-10 w-full md:-top-40">
        <Image
          src={"/assets/wave-flip.svg"}
          alt=""
          width={2800}
          height={200}
        ></Image>
      </div>
      {children}
      <div className="absolute bottom-12 -z-10 w-full md:-bottom-40">
        <Image
          src={"/assets/wave.svg"}
          alt=""
          width={2800}
          height={200}
        ></Image>
      </div>
    </div>
  );
};

export default MainSection;

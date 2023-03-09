import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SocialIcon } from "react-social-icons";
import Delaget_Logo2 from "../images/delaget2.svg";

const header = () => {
  return (
    <header className=" top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-[500] xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          className="animate-pulse"
          url="https://github.com/MarcusWithers"
          bgColor="transparent"
          fgColor="#FA6000"
          target="_blank"
        />
      </motion.div>
      <Image
        src={Delaget_Logo2}
        alt="Picture of the author"
        width={200}
        height={200}
      />
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        <div>
          <SocialIcon
            className="cursor-pointer animate-pulse"
            url="https://portfolio-three-tau-70.vercel.app/"
            fgColor="#FA6000"
            bgColor="transparent"
            target="_blank"
          />
          <Link
            href="https://portfolio-three-tau-70.vercel.app/"
            target="_blank"
          >
            <p className="uppercase inline-flex text-sm text-gray-400">
              Portfolio
            </p>
          </Link>
        </div>
      </motion.div>
    </header>
  );
};

export default header;

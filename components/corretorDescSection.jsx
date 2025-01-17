import React from "react";
import { motion } from "framer-motion";
import { Link } from "@mui/material";

const CorretorDescSection = ({ description, name, imageUrl }) => {
  const socialLinks = [
    {
      url: "https://www.facebook.com",
      icon: "https://firebasestorage.googleapis.com/v0/b/imob-projeto-expmed.appspot.com/o/face.png?alt=media&token=f1c6db80-ed32-48a8-b857-5f57f1dc3389",
    },
    {
      url: "https://www.instagram.com",
      icon: "https://firebasestorage.googleapis.com/v0/b/imob-projeto-expmed.appspot.com/o/insta.png?alt=media&token=733cc631-dce4-42cd-9a00-65e120bf7dce",
    },
    {
      url: "https://www.linkedin.com",
      icon: "https://firebasestorage.googleapis.com/v0/b/imob-projeto-expmed.appspot.com/o/linkedin.png?alt=media&token=5497b8d3-52b8-425b-89f8-41888f3d2085",
    },
  ];

  return (
    <section
      id="contact"
      className="bg-cover bg-center bg-gray-80 gap-16 md:h-full"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/fotos-premium/o-processo-de-design-dos-arquitetos_1320745-5544.jpg?w=740')",
        backgroundAttachment: "fixed",
      }}
    >
      <motion.div className="mx-auto w-5/6 py-24 flex flex-col items-center justify-center">
        {/* TITLE */}
        <div className="text-center">
          <img
            src={imageUrl}
            alt="LarHub"
            className="w-[170px] mr-2 rounded-lg filter brightness-0 invert"
          />
          <h2 className="text-white text-3xl font-bold">{name}</h2>
          <p className="my-5 text-lg text-white">{description}</p>
        </div>

        {/* ACTION */}
        <Link
          href="/"
          className="rounded-md bg-secondary-100 px-10 py-2 hover:bg-primary-100 hover:text-white text-base font-normal no-underline transition-all duration-300 text-white"
        >
          Entre em Contato
        </Link>

        <div className="flex items-center gap-4 my-5">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={link.icon}
                alt="social-icon"
                className="w-6 h-6 filter brightness-0 invert"
              />
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default CorretorDescSection;

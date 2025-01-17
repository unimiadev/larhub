import React, { useState } from "react";
import { useRouter } from "next/router";
import { Link } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export function HeaderCorretor({ logoUrl, nomeCorretor, className }) {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const formatNomeCorretor = (nome) => {
    if (typeof nome !== "string") {
      return "";
    }
    return nome.toLowerCase().replace(/\s+/g, "-");
  };

  const handleLogoClick = () => {
    const formattedNomeCorretor = formatNomeCorretor(nomeCorretor);
    router.push(`/corretor/${formattedNomeCorretor}`);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const links = [
    {
      href: `/corretor/${formatNomeCorretor(nomeCorretor)}/imoveis?filter=todos/`,
      label: "Imóveis",
    },
    {
      href: `/corretor/${formatNomeCorretor(nomeCorretor)}/imoveis?filter=alugar`,
      label: "Alugar",
    },
    {
      href: `/corretor/${formatNomeCorretor(nomeCorretor)}/imoveis?filter=comprar`,
      label: "Comprar",
    },
  ];

  return (
    <header className="fixed top-0 z-30 w-full bg-gray-20 flex justify-between items-center gap-4 py-4 px-12">
      <img
        src={logoUrl}
        alt="LarHub"
        onClick={handleLogoClick}
        className="h-8 cursor-pointer"
      />

      {/* Toggle Button for Mobile */}
      <div className="sm:hidden" onClick={toggleMenu}>
        {menuOpen ? <CloseIcon className="text-black" /> : <MenuIcon className="text-black" />}
      </div>

      {/* Desktop Menu */}
      <div className="hidden sm:flex space-x-8 justify-center">
        {links.map((link) => (
          <a key={link.href} href={link.href} className="hover:text-secondary-100">
            {link.label}
          </a>
        ))}
      </div>

      <Link
        href="#contact"
        className="hidden sm:block rounded-md bg-primary-100 px-10 py-2 hover:bg-secondary-100 text-white text-base font-normal no-underline transition-all duration-300"
      >
        Contato
      </Link>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center space-y-8 sm:hidden z-40">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-2xl hover:text-secondary-100"
              onClick={toggleMenu}
            >
              {link.label}
            </a>
          ))}
          <Link
            href="#contact"
            className="rounded-md bg-primary-100 px-10 py-2 hover:bg-secondary-100 text-white text-xl font-normal no-underline transition-all duration-300"
            onClick={toggleMenu}
          >
            Contato
          </Link>
        </div>
      )}
    </header>
  );
}

export default HeaderCorretor;
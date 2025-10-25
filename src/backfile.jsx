import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import ContentSection from "./ContentSection";
import FooterIcons from "./icons";
import "./index.css";
import Welcome from "./welcome";

import WebDevImg from "./assets/webdev.png";
import ContentImg from "./assets/content.png";
import DesignerImg from "./assets/designer.png";
import TutorImg from "./assets/tutor.png";

export default function Backfile() {
  const [activePage, setActivePage] = useState("webdev");
  const [prevPage, setPrevPage] = useState(null);
  const navigate = useNavigate();

  const backgrounds = {
    webdev: WebDevImg,
    content: ContentImg,
    designer: DesignerImg,
    tutor: TutorImg,
  };

  const handleSelect = (page) => {
    if (page !== activePage) {
      setPrevPage(activePage);
      setActivePage(page);
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden flex flex-col">
      {/* Previous background slides out */}
      {prevPage && (
        <div
          key={`${prevPage}-prev`}
          className="absolute inset-0 bg-center bg-no-repeat  animate-slideOut z-20 bg-cover"
          style={{ backgroundImage: `url(${backgrounds[prevPage]})` }}
          onAnimationEnd={() => setPrevPage(null)}
        ></div>
      )}

      {/* Active background slides in */}
      <div
        key={`${activePage}-active`}
        className="absolute inset-0 bg-center bg-no-repeat bg-cover animate-slideIn z-10"
        style={{ backgroundImage: `url(${backgrounds[activePage]})` }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 z-0"></div>

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col justify-between h-full">
        <div className="absolute top-4 left-4 z-20">
        </div>

        <Navbar onSelect={handleSelect} />
        <div className="-z-40 text-yellow-50">
          
        </div>

        <div className=" flex-col  ">
          <ContentSection active={activePage} />
        </div>

        {/* ✅ Fixed: replaced SocialLinks with FooterIcons */}
        <FooterIcons />
      </div>
    </div>
  );
}

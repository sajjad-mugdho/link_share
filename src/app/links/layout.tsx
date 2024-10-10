"use client";
import NavBar from "./NavBar";
import "./layout.css";

import { DndProvider } from "react-dnd";
import { TouchBackend } from "react-dnd-touch-backend";
import { HTML5Backend } from "react-dnd-html5-backend";
import { LinkProvider } from "./LinkContext";

const isTouchDevice = () => {
  if (typeof window === "undefined") {
    return false;
  }
  return "ontouchstart" in window || navigator.maxTouchPoints > 0;
};

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <DndProvider backend={isTouchDevice() ? TouchBackend : HTML5Backend}>
      <LinkProvider>
        <div className="linksLayoutContainer">
          <NavBar />
          <div className="linksChildren">{children}</div>
        </div>
      </LinkProvider>
    </DndProvider>
  );
};

export default layout;

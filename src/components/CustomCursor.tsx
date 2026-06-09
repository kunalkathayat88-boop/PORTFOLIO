import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function CustomCursor() {
  const [cursorType, setCursorType] = useState<"default" | "pointer" | "view" | "buy" | "drag">("default");
  const [isVisible, setIsVisible] = useState(false);
  
  // Custom cursor position variables
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Smoother spring settings for lag effect
  const springConfig = { stiffness: 350, damping: 30, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeaveWindow = () => {
      setIsVisible(false);
    };

    const handleMouseEnterWindow = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeaveWindow);
    document.addEventListener("mouseenter", handleMouseEnterWindow);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeaveWindow);
      document.removeEventListener("mouseenter", handleMouseEnterWindow);
    };
  }, [cursorX, cursorY, isVisible]);

  // Hook into mouse hover attributes
  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      // Find closest element with custom cursor attribute
      const interactiveEl = target.closest("[data-cursor]") as HTMLElement;
      if (interactiveEl) {
        const type = interactiveEl.getAttribute("data-cursor") as any;
        setCursorType(type || "pointer");
      } else {
        const isClickable = 
          target.tagName === "BUTTON" || 
          target.tagName === "A" || 
          target.closest("button") || 
          target.closest("a") ||
          target.classList.contains("cursor-pointer");
          
        setCursorType(isClickable ? "pointer" : "default");
      }
    };

    window.addEventListener("mouseover", handleMouseOver);
    return () => {
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  // Hide cursor on touch devices
  const [isMobile, setIsMobile] = useState(true);
  useEffect(() => {
    setIsMobile("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  if (isMobile || !isVisible) return null;

  return (
    <>
      {/* Outer Follower */}
      <motion.div
        id="custom-cursor-outer"
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-black/30 pointer-events-none z-50 mix-blend-difference flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          scale: cursorType === "default" ? 1 : cursorType === "pointer" ? 1.5 : 2.5,
          backgroundColor: 
            cursorType === "view" || cursorType === "buy" || cursorType === "drag"
              ? "rgba(245, 178, 60, 0.9)" // Accent yellow
              : "rgba(255, 255, 255, 0)",
          borderColor: 
            cursorType === "view" || cursorType === "buy" || cursorType === "drag"
              ? "#F5B23C" 
              : cursorType === "pointer" 
              ? "#000000" 
              : "rgba(0, 0, 0, 0.3)",
        }}
        transition={{ type: "spring", stiffness: 450, damping: 25 }}
      >
        {/* Caption labels for cursor types */}
        {cursorType === "view" && (
          <span className="text-[9px] font-bold text-black tracking-widest font-mono select-none uppercase">
            View
          </span>
        )}
        {cursorType === "buy" && (
          <span className="text-[9px] font-bold text-black tracking-widest font-mono select-none uppercase">
            Pass
          </span>
        )}
        {cursorType === "drag" && (
          <span className="text-[9px] font-bold text-black tracking-widest font-mono select-none uppercase animate-pulse">
            ⇄
          </span>
        )}
      </motion.div>

      {/* Inner Dot */}
      <motion.div
        id="custom-cursor-inner"
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-black pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          scale: cursorType === "default" ? 1 : 0.4,
          opacity: cursorType === "default" ? 1 : 0.8,
        }}
      />
    </>
  );
}

import { useState } from "react";

/**
 * @name useScroll — Exports a variable to track whether the window
 * has been scrolled, and a function that attaches 
 * the listener / setter function to the window.
 * @param {number} minScroll - Pixel threshold to toggle scrolled state
 * @returns {object {scrolled: boolean, attachScroll: ()=>void} 
 */
export function useScroll(minScroll = 300) {
  // Two vars denoting scrolled state:
  // `_scrolled` for local logic
  // `scrolled` is exported React state var
  let   _scrolled = false;
  const [scrolled, setScrolled] = useState(false);

  // Toggle `scrolled` based on minScroll val
  const isWindowScrolled = () => {
    if (window.scrollY < minScroll &&  _scrolled) {
      setScrolled(false);
      _scrolled = false;
    }
    if (window.scrollY > minScroll && !_scrolled) {
      setScrolled(true);
      _scrolled = true;
    }
  }

  // Call on mount to attach toggle fn to window object
  const attachScroll = () => {
    window.addEventListener("scroll", isWindowScrolled)
  }

  return {
    scrolled,
    attachScroll
  }
}

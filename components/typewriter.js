"use client";
import React from "react";
import Typed from "typed.js";

export default function Typewriter() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "software engineer",
        "full stack developer",
        "photo taker",
        "book lover",
        "ski enthusiast",
        "sewing hobbyist",
        "software engineer",
      ],
      typeSpeed: 50,
      backSpeed: 30,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="App">
      <span ref={el} />
    </div>
  );
}

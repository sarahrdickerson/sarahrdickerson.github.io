"use client";
import React from "react";
import Typed from "typed.js";

export default function Typewriter() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        // "get_summary()<br/>^1500 + full stack developer<br/>+ ai-driven solutions<br/>+ smart technology integration<br/>+ committed to continuous learning<br/><br/><i>skills</i>: javascript, python, react, node.js, java, sql, nosql",
        "software engineer",
        "full stack developer",
        "photographer",
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

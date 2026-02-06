import React, { useState } from "react";

function AsciiCon() {
  const [keyPress, setkeyPress] = useState("");
  const handleClick = (e) => {
    if (e.key.length === 1) {
      setkeyPress(e.key.charCodeAt(0));
    } else {
      setkeyPress("Special Key");
    }
  };
  return (
    <div>
      <h1 className="mx-auto w-50 p-3">ASCII converter</h1>
      {document.addEventListener("keydown", handleClick)}
      <p
        className="mx-auto w-50 s-5 fs-3"
        style={{
          background: "linear-gradient( 150deg , blue, #dd2476)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontWeight: "bold",
        }}
      >
        key pressed is: {keyPress}
      </p>
    </div>
  );
}

export default AsciiCon;

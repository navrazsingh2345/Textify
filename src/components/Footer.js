import React from "react";

export default function Footer(props) {
  return (
    <div>
      <footer className={`bg-${props.mode} text-${props.mode==='light'?'dark':'light'} text-center text-lg-start`}>
        <div
          className="text-center p-2"
        >
            <p>© Copyright 2025. Made By Navraz.</p>
          <a
            href="https://www.linkedin.com/in/navraz-singh-a154402a4/ "
          >
            LinkedIn
          </a>
          <br />
        </div>
      </footer>
    </div>
  );
}

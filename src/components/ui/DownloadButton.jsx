import React from 'react';

const DownloadButton = ({ href, fileName, tooltip = "Size: 1.2Mb" }) => {
  return (
    <>
      <style>{`
        .download-button-wrapper {
          --width: 150px;
          --height: 40px;
          --tooltip-height: 35px;
          --tooltip-width: 100px;
          --gap-between-tooltip-to-button: 18px;
          --button-color: #35d0c2;
          --button-hover-color: #7ce8db;
          --tooltip-color: #fff;
          width: var(--width);
          height: var(--height);
        }

        .download-button {
          width: 100%;
          height: 100%;
          background: var(--button-color);
          position: relative;
          text-align: center;
          border-radius: 0.5em;
          transition: background 0.3s;
          display: block;
          text-decoration: none;
          cursor: pointer;
        }

        .download-button::before {
          position: absolute;
          content: attr(data-tooltip);
          width: var(--tooltip-width);
          height: var(--tooltip-height);
          background-color: var(--tooltip-color);
          font-size: 0.8rem;
          color: #111;
          border-radius: .25em;
          line-height: var(--tooltip-height);
          bottom: calc(var(--height) + var(--gap-between-tooltip-to-button) + 10px);
          left: calc(50% - var(--tooltip-width) / 2);
          opacity: 0;
          visibility: hidden;
          transition: all 0.5s;
          pointer-events: none;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
          z-index: 50;
        }

        .download-button::after {
          position: absolute;
          content: '';
          width: 0;
          height: 0;
          border: 10px solid transparent;
          border-top-color: var(--tooltip-color);
          left: calc(50% - 10px);
          bottom: calc(100% + var(--gap-between-tooltip-to-button) - 10px);
          opacity: 0;
          visibility: hidden;
          transition: all 0.5s;
          pointer-events: none;
          z-index: 50;
        }

        .inner-wrapper {
          overflow: hidden;
          position: absolute;
          width: 100%;
          height: 100%;
          left: 0;
          top: 0;
          color: #000;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 0.5em;
        }

        .text {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: top 0.5s;
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.2em;
        }

        .icon {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: top 0.5s;
        }

        .download-button:hover {
          background: var(--button-hover-color);
        }

        .download-button:hover .text {
          top: -100%;
        }

        .download-button:hover .icon {
          top: 0;
        }

        .download-button:hover::before {
          opacity: 1;
          visibility: visible;
          bottom: calc(var(--height) + var(--gap-between-tooltip-to-button));
        }

        .download-button:hover::after {
          opacity: 1;
          visibility: visible;
          bottom: calc(var(--height) + var(--gap-between-tooltip-to-button) - 20px);
        }
      `}</style>
      <div className="download-button-wrapper">
        <a 
          href={href} 
          download={fileName} 
          className="download-button" 
          data-tooltip={tooltip}
        >
          <div className="inner-wrapper">
            <div className="text">Descargar CV</div>
            <span className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17" /></svg>
            </span>
          </div>
        </a>
      </div>
    </>
  );
}

export default DownloadButton;

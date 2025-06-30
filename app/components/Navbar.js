import Image from "next/image";
import { useState, useRef } from "react";
import "./navbar.css";

const Navbar = ({ isMuted, toggleMute, volume, setVolume }) => {
  const [showSlider, setShowSlider] = useState(false);
  const hideTimer = useRef(null);

  const handleVolumeChange = (e) => {
    setVolume(Number(e.target.value));
  };

  // Show slider and reset hide timer
  const handleSliderMouseEnter = () => {
    setShowSlider(true);
    if (hideTimer.current) clearTimeout(hideTimer.current);
  };
  // Hide slider after 5s
  const handleSliderMouseLeave = () => {
    if (hideTimer.current) clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => setShowSlider(false), 5000);
  };
  // If mouse re-enters, cancel hide
  const handleSliderAreaMouseMove = () => {
    if (hideTimer.current) clearTimeout(hideTimer.current);
  };

  return (
    <nav className="navbar-container fixed bottom-0 w-full h-24 z-10 flex items-center">
      <div className="w-full flex items-center justify-end px-8">
        <div className="flex items-center gap-4">
          <div
            onMouseEnter={handleSliderMouseEnter}
            onMouseLeave={handleSliderMouseLeave}
            className="relative flex items-center justify-center"
            style={{ width: 40, height: 40 }}
          >
            <button
              onClick={toggleMute}
              className="navbar-icon-btn flex items-center justify-center bg-white/80 shadow-md"
              aria-label="Mute/Unmute"
              style={{ border: 'none', padding: 0, margin: 0, width: 40, height: 40, borderRadius: '50%' }}
            >
              {isMuted || volume === 0 ? (
                <Image src="/mute.png" alt="Mute" width={24} height={24} />
              ) : (
                <Image src="/unmute.png" alt="Unmute" width={24} height={24} />
              )}
            </button>
            {showSlider && (
              <div
                className="navbar-slider-popup absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center transition-opacity duration-300 opacity-100 pointer-events-auto"
                style={{ height: "120px", zIndex: 20 }}
              >
                <div className="vertical-slider-wrapper">
                  <div className="vertical-slider-bg"></div>
                  <input
                    type="range"
                    min={0}
                    max={1}
                    step={0.01}
                    value={isMuted ? 0 : volume}
                    onChange={handleVolumeChange}
                    className="vertical-slider"
                    aria-label="Volume"
                    style={{
                      writingMode: "vertical-lr",
                      WebkitAppearance: "slider-vertical",
                      MozAppearance: "slider-vertical",
                      appearance: "slider-vertical",
                      width: "18px",
                      height: "100px",
                      margin: 0,
                      transform: "rotate(180deg)"
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

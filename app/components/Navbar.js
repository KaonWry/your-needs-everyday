import Image from "next/image";
import { useState, useRef } from "react";

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
    <nav className="fixed bottom-0 w-full h-24 z-10">
      <div className="flex items-center justify-between w-full h-full px-6">
        <div />
        <div className="flex items-center gap-4 relative">
          <div
            onMouseEnter={handleSliderMouseEnter}
            onMouseLeave={handleSliderMouseLeave}
            className="relative flex items-center justify-center"
            style={{ width: 32, height: 32 }}
          >
            <button
              onClick={toggleMute}
              className="transition hover:scale-110"
              aria-label="Mute/Unmute"
              style={{ background: 'none', border: 'none', padding: 0, margin: 0 }}
            >
              {isMuted || volume === 0 ? (
                <Image src="/mute.png" alt="Mute" width={30} height={24} />
              ) : (
                <Image src="/unmute.png" alt="Unmute" width={30} height={24} />
              )}
            </button>
            {showSlider && (
              <div
                className="absolute bottom-12 right-0 flex flex-col items-center transition-opacity duration-300 opacity-100 pointer-events-auto bg-white rounded-lg shadow-lg p-2"
                style={{ height: "120px", zIndex: 20 }}
              >
                <input
                  type="range"
                  min={0}
                  max={1}
                  step={0.01}
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className="vertical-slider accent-blue-500"
                  aria-label="Volume"
                  style={{
                    writingMode: "vertical-lr",
                    WebkitAppearance: "slider-vertical",
                    MozAppearance: "slider-vertical",
                    appearance: "slider-vertical",
                    width: "32px",
                    height: "100px",
                    margin: 0,
                    transform: "rotate(180deg)",
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <style jsx>{`
        .vertical-slider::-webkit-slider-thumb {
          width: 24px;
          height: 24px;
        }
        .vertical-slider {
          appearance: slider-vertical;
          writing-mode: vertical-lr;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;

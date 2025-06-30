import Image from "next/image";

const Navbar = ({ isMuted, toggleMute, onVolumeUp, onVolumeDown }) => {
  return (
    <nav className="fixed bottom-0 w-full h-24 z-10">
      <div className="flex items-center justify-between w-full h-full px-6">
        <div />
        <div className="flex items-center gap-4">
          <button
            onClick={onVolumeDown}
            className="transition hover:scale-110"
          >
            <Image
              src="/vol-down.png"
              alt="Volume Down"
              width={30}
              height={24}
            />
          </button>
          <button
            onClick={toggleMute}
            className="transition hover:scale-110"
          >
            {isMuted ? (
              <Image src="/mute.png" alt="Mute" width={30} height={24} />
            ) : (
              <Image src="/unmute.png" alt="Unmute" width={30} height={24} />
            )}
          </button>
          <button
            onClick={onVolumeUp}
            className="transition hover:scale-110"
          >
            <Image
              src="/vol-up.png"
              alt="Volume Up"
              width={30}
              height={24}
            />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

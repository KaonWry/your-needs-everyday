import Image from "next/image";

const Navbar = ({ isMuted, toggleMute }) => {
  return (
    <nav className="fixed bottom-0 w-full h-24 z-10">
      <div className="flex items-center justify-between w-full h-full px-6">
        <div />
        <button
          onClick={toggleMute}
          className="rounded transition hover:scale-110"
        >
          {isMuted ? (
            <Image src="/mute.png" alt="Mute" width={50} height={24} />
          ) : (
            <Image src="/unmute.png" alt="Unmute" width={50} height={24} />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

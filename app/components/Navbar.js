const Navbar = ({ isMuted, toggleMute }) => {
    return (
        <nav className="fixed bottom-0 w-full h-16 z-10">
            <div className="flex items-center justify-between w-full h-full px-4">
                <div /> 
                <button
                    onClick={toggleMute}
                    className="rounded bg-gray-200 hover:bg-gray-300 transition"
                >
                    {isMuted ? "Unmute" : "Mute"}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
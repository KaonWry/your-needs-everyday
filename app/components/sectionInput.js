const SectionInput = ({ inputValue, setInputValue }) => {
  const [input, setInput] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue(input);
  };

  return (
    <section className="sections">
      <div className="sections-content">
        <form onSubmit={handleSubmit}>
          <p>
            Input your name here:{" "}
            <input
              type="text"
              className="border border-black bg-white text-2xl"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              type="submit"
              className="ml-2 px-4 py-2 bg-blue-500 text-white rounded"
            >
              Let&apos;s Explore My Needs
            </button>
          </p>
        </form>
      </div>
    </section>
  );
};

export default SectionInput;

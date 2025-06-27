const SectionInput = ({ inputValue, setInputValue }) => {
  return (
    <section className="sections">
      <div className="sections-content">
        <p>
          This is section 4. Section 4 have input field. <br />
          Input your name here:{" "}
          <input
            type="text"
            className="border border-black bg-white text-2xl"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </p>
      </div>
    </section>
  );
};

export default SectionInput;

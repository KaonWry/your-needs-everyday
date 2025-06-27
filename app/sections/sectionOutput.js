const SectionOutput = ({ inputValue }) => {
  return (
    <section className="sections">
      <div className="sections-content">
        This is section 5. Section 5 displays the input value. <br />
        {inputValue ? (
          <p>
            Hi <span className="font-bold">{inputValue}</span> !
          </p>
        ) : (
          <p>No input provided.</p>
        )}
      </div>
    </section>
  );
};

export default SectionOutput;

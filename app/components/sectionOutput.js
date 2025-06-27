const SectionOutput = ({ inputValue }) => {
  return (
    <section className="sections">
      <div className="sections-content">
        {inputValue && (
          <p>
            This is section 5. Section 5 displays the input value. <br />
            Hi <span className="font-bold">{inputValue}</span> !
          </p>
        )}
      </div>
    </section>
  );
};

export default SectionOutput;

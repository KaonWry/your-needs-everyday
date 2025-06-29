const Section1 = ({ inputValue }) => {
  return (
    <section className="sections">
      <div className="sections-content">
        <p>
          Halo <span className="font-bold">{inputValue}</span>
        </p>
        <p>Mari kita belajar sesuatu, yuk !!</p>
      </div>
    </section>
  );
};

export default Section1;

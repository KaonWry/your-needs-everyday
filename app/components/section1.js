const Section1 = ({ inputValue }) => {
  return (
    <section className="sections">
      <div className="sections-content">
        <p>
          Hai <span className="font-bold">{inputValue}</span>
        </p>
        <p>apa kabar?</p> 
      </div>
    </section>
  );
};

export default Section1;

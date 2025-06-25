import Image from "next/image";

const Section2 = () => {
  return (
    <section className="sections">
      <div className="sections-content">
        <p>This is section 2. Section 2 have image.</p>
        <Image
          className=""
          src="/cup.png"
          alt="Cup"
          width={250}
          height={0}
          priority
        />
      </div>
    </section>
  );
};

export default Section2;

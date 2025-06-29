import Image from "next/image";

const Section2 = () => {
  return (
    <section className="sections">
      <div className="sections-content">
        <p>
          Apakah kamu merasa kurang? Apakah kamu pernah merasa ada yang salah
          pada dirimu?
        </p>
        <p>
          Atau, kamu memiliki <span className="font-tangerine">penyesalan</span>
          ?
        </p>
        <p>Di sini mari kita coba gali lebih dalam apa yang sebenarnya</p>
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

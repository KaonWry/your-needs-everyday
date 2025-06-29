import Image from "next/image";

const Section3 = () => {
  return (
    <section className="sections">
      <div className="sections-content">
        <p>
          Coba lihat, itu kamu. Sebuah cangkir yang tanpa ada isi, hanya cangkir
          yang siap untuk diisi <br />
          <span className="font-tangerine">Kamu adalah cangkir itu</span>
        </p>
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

export default Section3;

import RandomFontText from "./randomfonts";
import Image from "next/image";
const Section1 = ({ inputValue }) => {
  return (
    <main>
    <section className="sections">
      <div className="sections-content">
        <p>
          Hai <span className="font-bold">{inputValue}</span>
        </p>
        <p>apa kabar?</p>
      </div>
    </section>
    <section className="sections">
      <div className="sections-content">
        <p>
          Apakah kamu merasa ada yang kurang dalam hidupmu?
        </p>
      </div>
    </section>
    <section className="sections">
      <div className="sections-content">
        <p>
          Atau kamu merasa ada yang salah dalam<br />
        </p>
      </div>
    </section>
    <section className="sections">
      <div className="sections-bold"> 
        <RandomFontText  text={`Hidupmu`}/>
      </div>
    </section>
    <section className="sections">
      <div className="sections-content">
        <p>Di sini, kamu akan mempelajari sesuatu yang baru</p>
      </div>
      </section>
    <section className="sections">
      <div className="sections-content">
        <p>Sesuatu yang akan kamu syukuri</p>
      </div>
      </section>
    <section className="sections">
      <div className="sections-content">
        <p>Sesuatu yang tidak akan kamu sesali</p>
      </div>
      </section>
    <section className="sections">
      <div className="sections-content">
        <p>Pertama, ini adalah kamu</p>
        </div>
    
      </section>
    <section className="image-container">
      <div className="sections-content">
        <Image
          src="/1.png"
          alt="You"
          width={1000}
          height={1000}
          
        />
      </div>
    </section>
  </main>

    
  );
};

export default Section1;

import Section1 from "./components/section1";
import Section2 from "./components/section2";
import Section3 from "./components/section3";
import "./globals.css";

export default function Home() {
  const sections = [
    {
      bg: "bg-amber-400",
      from: "from-amber-400",
      to: "to-emerald-300",
      component: <Section1 />,
    },
    {
      bg: "bg-emerald-300",
      from: "from-emerald-300",
      to: "to-fuchsia-400",
      component: <Section2 />,
    },
    { bg: "bg-fuchsia-400", component: <Section3 /> },
  ];

  return (
    <>
      {sections.map((item, index) => (
        <div key={index}>
          <div className={item.bg}>{item.component}</div>

          {index < sections.length - 1 && (
            <div
              className={`h-[10vh] bg-gradient-to-b ${item.from} ${item.to}`}
            ></div>
          )}
        </div>
      ))}
    </>
  );
}

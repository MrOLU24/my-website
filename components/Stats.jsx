"use client";

import { useState, useEffect } from "react";
import CountUp from "react-countup";

const stats = [
  { num: 2, text: "Years of Experience" },
  { num: 8, text: "Projects Completed" },
  { num: 2, text: "Technologies mastered" },
  { num: 1000, text: "code commits" },
];

const Stats = () => {
  const [resetKey, setResetKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setResetKey((prev) => prev + 1); // Triggers re-animation
    }, 7000); // Matches count duration (5s) + delay

    return () => clearInterval(interval); // Clean up
  }, []);

  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-y-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => (
            <div
              key={`${index}-${resetKey}`}
              className="w-1/2 md:w-1/3 xl:flex-1 flex gap-4 items-center justify-center xl:justify-start px-2"
            >
              <CountUp
                end={item.num}
                duration={5}
                delay={0.5}
                className="text-3xl md:text-4xl xl:text-6xl font-extrabold"
              />
              <p
                className={`${
                  item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                } text-sm md:text-base leading-snug text-white/80`}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
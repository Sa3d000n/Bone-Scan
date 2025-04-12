import React from "react";
import whyItMatters from "../assets/WhyItMatters.png";
export default function WhyItMattersSection() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-10 py-16 ">
      <img
        src={whyItMatters}
        alt="Medical impact illustration"
        className="w-full max-w-lg"
      />
      <div className="text flex flex-col gap-6 md:gap-10">
        <h2 className="font-bold text-4xl md:text-5xl leading-tight">
          Why Early Detection Matters
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Bone cancer is <em className="font-bold">rare but aggressive</em>,
          making <em className="font-bold">early detection crucial</em> for
          successful treatment. Many cases go unnoticed until it's too late,
          leading to severe complications.
        </p>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Our AI-powered system helps{" "}
          <em className="font-bold">identify potential cancer signs early</em>,
          giving patients and doctors a head start in diagnosis and treatment.
          Faster detection means{" "}
          <em className="font-bold">
            higher survival rates and better outcomes
          </em>
          .
        </p>
      </div>
    </div>
  );
}

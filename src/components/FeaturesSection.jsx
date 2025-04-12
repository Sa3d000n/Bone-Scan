import React, { useEffect, useRef, useState } from "react";
import feature1 from "../assets/feature1.png";
import feature2 from "../assets/feature2.png";
import feature3 from "../assets/feature3.png";
import feature4 from "../assets/feature4.png";

const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return { ref, isVisible };
};

const AnimatedFeature = ({
  title,
  description,
  image,
  alt,
  reverse = false,
}) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`flex flex-col-reverse md:flex-row justify-between items-center gap-10 
        ${reverse ? "md:flex-row-reverse" : ""}
        transform transition-all duration-1000 ease-out 
        ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`} id="features"
    >
      <div
        className={`text flex flex-col gap-6 md:gap-10 
        ${reverse ? "md:pl-10" : "md:pr-10"}
        transition-all delay-300 duration-1000 ease-out 
        ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
        }`}
      >
        <h2 className="font-bold text-2xl md:text-5xl leading-tight transform transition-all duration-500 hover:scale-105 hover:text-blue-600">
          {title}
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          {description}
        </p>
      </div>
      <img
        src={image}
        alt={alt}
        className={`w-full max-w-lg 
          transition-all delay-500 duration-1000 ease-out 
          ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
      />
    </div>
  );
};

export default function FeaturesSection() {
  return (
    <section className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 features flex flex-col gap-10">
      <AnimatedFeature
        title="AI-Powered Bone Cancer Detection"
        description="Upload your MRI scan and let our advanced AI analyze it within seconds. Using deep learning, our model detects early signs of bone cancer with high accuracy—providing fast, reliable results to help you make informed health decisions."
        image={feature1}
        alt="AI analyzing MRI scan"
      />
      <AnimatedFeature
        title="Personalized Insights for Better Accuracy"
        description={
          <>
            Our AI tailors its analysis based on your{" "}
            <em className="font-bold">age and gender</em>, improving the
            accuracy of predictions. By factoring in key risk indicators, we
            deliver a more precise and personalized diagnosis.
          </>
        }
        image={feature2}
        alt="Personalized report dashboard"
        reverse
      />
      <AnimatedFeature
        title="Secure & Hassle-Free MRI Upload"
        description={
          <>
            Upload your MRI scan in <em className="font-bold">JPEG format</em>{" "}
            with just a few clicks. We prioritize data security, ensuring your
            medical records remain{" "}
            <em className="font-bold">private and encrypted</em> at all times.
          </>
        }
        image={feature3}
        alt="Secure file upload interface"
      />
      <AnimatedFeature
        title="Instant Results & Expert Recommendations"
        description={
          <>
            Get a{" "}
            <em className="font-bold">
              detailed diagnosis and severity classification
            </em>{" "}
            in seconds. Our system helps you understand the findings and
            suggests the next steps—including expert consultations if needed.
          </>
        }
        image={feature4}
        alt="Medical results and consultation"
        reverse
      />
    </section>
  );
}

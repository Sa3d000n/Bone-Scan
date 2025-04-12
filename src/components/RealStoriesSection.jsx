import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// Sample stories with AI impact
const stories = [
  {
    image: "https://i.pravatar.cc/481215",
    name: "Sarah, 32",
    text: "Sarah had persistent leg pain and was unsure if it was serious. She uploaded her MRI, and our AI detected early-stage bone cancer, allowing her to begin treatment before it spread.",
    help: "🔍 Our AI detected cancer in its earliest stage, helping Sarah take life-saving action quickly.",
    impact: "Life-Saving Early Detection"
  },
  {
    image: "https://i.pravatar.cc/4812158",
    name: "James, 45",
    text: "James ignored his bone pain for months until our AI detected a high-risk area in his MRI scan. His doctor confirmed the findings, leading to a crucial early diagnosis and successful treatment.",
    help: "⚡ Our AI flagged an abnormal region, prompting early medical intervention and recovery.",
    impact: "Proactive Health Monitoring"
  },
  {
    image: "https://i.pravatar.cc/481215854",
    name: "Ava, 27",
    text: "As an athlete, Ava experienced occasional bone pain. Our AI analysis gave her peace of mind, confirming no cancer signs but recommending continued monitoring.",
    help: "✅ Our AI ensured Ava received a risk-free diagnosis while advising future checkups.",
    impact: "Preventive Care Guidance"
  },
  {
    image: "https://i.pravatar.cc/481215812",
    name: "Michael, 51",
    text: "Michael's MRI report was unclear, and doctors were unsure. By using our AI, he got a second opinion that suggested further tests, leading to a confirmed early-stage diagnosis.",
    help: "📊 Our AI provided an additional layer of analysis, reducing diagnostic uncertainty.",
    impact: "Diagnostic Clarity"
  },
  {
    image: "https://i.pravatar.cc/48121588",
    name: "Olivia, 38",
    text: "Olivia lives in a remote area with limited medical access. She uploaded her MRI to our AI and got results within seconds, helping her seek urgent treatment.",
    help: "🌍 Our AI provided fast, remote diagnostic assistance, ensuring timely care.",
    impact: "Accessible Healthcare"
  },
  {
    image: "https://i.pravatar.cc/48121582",
    name: "Liam, 60",
    text: "After a fall, Liam's X-rays showed no fractures, but he still felt pain. Our AI analysis of his MRI revealed a hidden bone tumor, leading to early intervention.",
    help: "🔎 Our AI uncovered hidden abnormalities missed in traditional scans.",
    impact: "Advanced Diagnostic Insights"
  },
  {
    image: "https://i.pravatar.cc/48121584",
    name: "Sophia, 19",
    text: "Sophia's family had a history of bone cancer, and she wanted to check for early signs. Our AI gave her a risk assessment, showing she was clear but advising regular scans.",
    help: "🧬 Our AI provided personalized risk analysis, supporting preventive care.",
    impact: "Personalized Risk Assessment"
  },
  {
    image: "https://i.pravatar.cc/4812158548",
    name: "Daniel, 54",
    text: "Daniel's initial diagnosis was uncertain, causing anxiety. Our AI confirmed no signs of cancer, giving him confidence and reassurance in his health.",
    help: "💡 Our AI provided a second opinion, reducing stress and unnecessary medical expenses.",
    impact: "Emotional Support"
  }
];

export default function RealStoriesSection() {
  const [activeStory, setActiveStory] = useState(null);

  const handleStoryClick = (story) => {
    setActiveStory(story);
  };

  const closeModal = () => {
    setActiveStory(null);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 relative" id='real-life'>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 
          transform transition-all duration-500 hover:scale-105 hover:text-blue-600">
          Real Lives, Real Impact
        </h2>
        
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          {stories.map((story, index) => (
            <SwiperSlide
              key={index}
              onClick={() => handleStoryClick(story)}
              className="group cursor-pointer flex flex-col items-center justify-center text-center 
                px-6 py-9 bg-white shadow-lg rounded-lg w-96 min-h-96 
                transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              <div className="relative">
                <img
                  src={story.image}
                  alt={story.name}
                  className="size-24 rounded-full border-4 border-white shadow-lg 
                    text-center mx-auto transition-all duration-300 
                    group-hover:scale-110 group-hover:border-blue-300"
                />
                <span className="absolute bottom-0 right-0 bg-blue-500 text-white 
                  rounded-full px-2 py-1 text-xs">
                  {story.impact}
                </span>
              </div>
              <h3 className="text-lg font-semibold mt-4 text-gray-800">{story.name}</h3>
              <p className="text-gray-700 text-center mt-2 max-w-sm mx-auto line-clamp-3">
                {story.text}
              </p>
              <p className="text-sm text-gray-600 italic mt-4">{story.help}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {activeStory && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center
            animate-fade-in"
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-xl shadow-2xl max-w-xl w-full p-8 relative
              transform transition-all duration-500 scale-100 hover:scale-105"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={closeModal} 
              className="absolute top-4 right-4 text-gray-600 hover:text-red-500 
                transition-colors duration-300"
            >
              ✕
            </button>
            <div className="flex flex-col items-center">
              <img
                src={activeStory.image}
                alt={activeStory.name}
                className="size-32 rounded-full border-4 border-blue-200 shadow-lg"
              />
              <h3 className="text-2xl font-bold mt-4 text-gray-800">{activeStory.name}</h3>
              <p className="text-gray-700 text-center mt-4 mb-4">{activeStory.text}</p>
              <div className="flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full">
                <span className="text-2xl">{activeStory.help.split(' ')[0]}</span>
                <span className="text-sm text-gray-600">{activeStory.help.split(' ').slice(1).join(' ')}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
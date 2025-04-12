import React from "react";

import one from "../assets/1.png";
import two from "../assets/2.png";
import three from "../assets/3.png";
import four from "../assets/4.png";
import five from "../assets/5.png";
import six from "../assets/6.png";
import { MdOutlineImageSearch } from "react-icons/md";
export default function HowItWorksSection() {
  return (
    <section className="how-it-works">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:items-center md:gap-8">
          <div>
            <div className="max-w-lg md:max-w-none">
              <h1 className="text-4xl sm:text-2xl font-semibold text-gray-900 leading-tight sm:leading-normal text-center sm:text-left">
                Revolutionizing <br /> Bone Cancer <br /> Detection with AI{" "}
                <br /> Technology
              </h1>

              <p className="mt-9 text-black font-semibold text-lg leading-7">
                Upload your X-ray, CT, or MRI scan and receive <br /> instant,
                AI-powered analysis for bone cancer <br /> detection.
              </p>

              <a
                className="group relative inline-flex items-center overflow-hidden rounded-sm bg-indigo-600 px-8 py-3 text-white focus:ring-3 focus:outline-hidden mt-9"
                href="#"
              >
                <span className="absolute -end-full transition-all group-hover:end-4">
                  <MdOutlineImageSearch />
                </span>

                <span className="text-sm font-medium transition-all group-hover:me-4">
                  Start Scanning Now
                </span>
              </a>
            </div>
          </div>

          <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 self-start">
            <div class="flex items-start gap-7">
              <img alt="" src={one} class="size-16 rounded object-cover" />

              <div>
                <h3 class="font-medium text-xl text-gray-900 sm:text-lg">1</h3>
                <p class="mt-2 text-gray-700 font-semibold text-xs">
                  Upload your medical scans in seconds.
                </p>
              </div>
            </div>

            <div class="flex items-start gap-7">
              <img alt="" src={two} class="size-16 rounded object-cover" />

              <div>
                <h3 class="font-medium text-xl text-gray-900 sm:text-lg">2</h3>
                <p class="mt-2 text-gray-700 font-semibold text-xs">
                  AI processes the images using advanced algorithms.
                </p>
              </div>
            </div>

            <div class="flex items-start gap-7">
              <img alt="" src={three} class="size-16 rounded object-cover" />

              <div>
                <h3 class="font-medium text-xl text-gray-900 sm:text-lg">3</h3>
                <p class="mt-2 text-gray-700 font-semibold text-xs">
                  Receive immediate results with a clear diagnosis.
                </p>
              </div>
            </div>

            <div class="flex items-start gap-7">
              <img alt="" src={four} class="size-16 rounded object-cover" />

              <div>
                <h3 class="font-medium text-xl text-gray-900 sm:text-lg">4</h3>
                <p class="mt-2 text-gray-700 font-semibold text-xs">
                  Get severity classification (mild, moderate, severe).
                </p>
              </div>
            </div>

            <div class="flex items-start gap-7">
              <img alt="" src={five} class="size-16 rounded object-cover" />

              <div>
                <h3 class="font-medium text-xl text-gray-900 sm:text-lg">5</h3>
                <p class="mt-2 text-gray-700 font-semibold text-xs">
                  Consult with specialists based on your results.
                </p>
              </div>
            </div>

            <div class="flex items-start gap-7">
              <img alt="" src={six} class="size-16 rounded object-cover" />

              <div>
                <h3 class="font-medium text-xl text-gray-900 sm:text-lg">6</h3>
                <p class="mt-2 text-gray-700 font-semibold text-xs">
                  Track your health and get AI-powered insights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

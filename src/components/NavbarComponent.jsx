import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router";
export default function NavbarComponent() {
  return (
    <header className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-l px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link to="/">
              <a
                className=" text-black flex items-center gap-6 font-bold text-xl "
                href="#"
              >
                <img
                  src={logo}
                  alt="logo"
                  width="70px"
                  className="rounded-xl object-fill"
                />
                <span className="">AI Bone Cancer Detection</span>
              </a>
            </Link>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link to="/">
                    <a
                      className="text-black transition hover:text-black/75 font-semibold "
                      href="#"
                    >
                      How It Works
                    </a>
                  </Link>
                </li>

                <li>
                  <Link to="/#features">
                    <a
                      className="text-black transition hover:text-black/75 font-semibold"
                      href="#features"
                    >
                      Features
                    </a>
                  </Link>
                </li>

                <li>
                  <Link to="/#real-life">
                    <a
                      className="text-black transition hover:text-black/75 font-semibold"
                      href="#real-life"
                    >
                      Real-life Problems
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to="/#faq">
                    <a
                      className="text-black transition hover:text-black/75 font-semibold"
                      href="#faq"
                    >
                      FAQ
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to="/scan">
                    <a
                      className="text-black transition hover:text-black/75 font-semibold"
                      href="#"
                    >
                      Get Started
                    </a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

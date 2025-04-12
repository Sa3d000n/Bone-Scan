import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Main Content */}
        <div className="flex flex-col md:flex-row justify-between gap-6">
          {/* Project Info */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold">BoneScan AI</h2>
            <p className="mt-2 text-gray-300 max-w-xs">
              Student project focused on bone cancer detection using AI.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-2">Links</h3>
            <ul className="text-gray-400">
              <li className="mb-1"><a href="#" className="hover:text-white">About Project</a></li>
              <li className="mb-1"><a href="#" className="hover:text-white">Our Team</a></li>
              <li className="mb-1"><a href="#" className="hover:text-white">Technology</a></li>
              <li className="mb-1"><a href="#" className="hover:text-white">Resources</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-medium mb-2">Contact</h3>
            <ul className="text-gray-400">
              <li className="mb-1">team@bonescanai.edu</li>
              <li className="mb-1">Delta University</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-4 border-t border-gray-800 text-sm text-gray-400">
          <p>&copy; {currentYear} BoneScan AI Student Project. Educational purposes only.</p>
        
        </div>
      </div>
    </footer>
  );
}
import React from "react";

const Footer = () => {
  return (
    <div className="mx-auto flex w-full flex-col items-center gap-4 px-12 pb-6 pt-24 text-gray-600 sm:gap-12 dark:text-gray-100 bg-[#030712] py-8 !m-0">
      <div className="flex w-full max-w-[90rem] flex-col justify-between gap-6 sm:flex-row sm:gap-0">
        
        {/* About Section */}
        <div className="flex flex-col">
          <h3 className="mb-4 text-lg font-black">About Us</h3>
          <ul className="flex flex-col gap-2">
            <li>
              <a href="/getting-started">Introduction</a>
            </li>
            <li>
              <a href="/features">Features</a>
            </li>
            <li>
              <a href="/support">Support</a>
            </li>
          </ul>
        </div>

        {/* Resources Section */}
        <div className="flex flex-col">
          <h3 className="mb-4 text-lg font-black">Resources</h3>
          <ul className="flex flex-col gap-2">
            <li>
              <a rel="noopener noreferrer" target="_blank" href="https://github.com/your-repo">
                GitHub
              </a>
            </li>
          </ul>
        </div>

        {/* Acknowledgements Section */}
        <div className="flex flex-col">
          <h3 className="mb-4 text-lg font-black">Acknowledgements</h3>
          <ul className="flex flex-col gap-2">
            <li>
              <a href="/contributors">Contributors</a>
            </li>
            <li>
              <a href="/sponsors">Sponsors</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Note */}
      <div className="mx-auto mt-4 text-xs md:text-sm  flex-grow text-gray-400 sm:mt-0 dark:text-gray-500">
        © Mihir Jaiswal Certificate Generator - 2024
      </div>
    </div>
  );
};

export default Footer;

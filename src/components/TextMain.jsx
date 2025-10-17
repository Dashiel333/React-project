import { useState } from "react";

export default function TextMain() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="px-4 md:px-12 py-8 flex flex-col md:flex-row justify-center bg-black">
      <div className="flex flex-col md:flex-row">
        <div className="text-white text-2xl pr-8 flex-col max-w-[280px]">
          <p>What We Offer</p>
        </div>
        <div className="flex-col">
          <div className="text-white text-5xl max-w-[850px] flex-col">
            <ul>
              <li>Business formation</li>
              <li>Contract drafting</li>
              <li>Mergers and Acquisitions</li>
              <li>Property Protection</li>
              <li>Employment Law</li>
              <li>Corporate Governance</li>
              <li>Shareholder Disputes</li>
            </ul>

            <nav className="MoreMenu">
              <p
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-400 cursor-pointer select-none hover:text-white transition mx-auto"
              >
                {isOpen ? "-Hide" : "+More"}
              </p>
              {isOpen && (
                <ul className="mt-4 space-y-2 text-5xl text-gray-300">
                  <li>Business formation</li>
                  <li>Contract drafting</li>
                  <li>Mergers and Acquisitions</li>
                  <li>Property Protection</li>
                  <li>Employment Law</li>
                  <li>Corporate Governance</li>
                  <li>Shareholder Disputes</li>
                </ul>
              )}
            </nav>
          </div>
          <div className="mt-10">
            <button className="bg-white text-black text-lg font-medium px-8 py-3 rounded-full transition hover:bg-gray-200 w-fit">
              Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

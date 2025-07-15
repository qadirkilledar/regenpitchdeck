import { useState, useEffect, useRef, useCallback } from "react";
import {
  FaRegLightbulb,
  FaUserTie,
  FaChartLine,
  FaCogs,
  FaExchangeAlt,
  FaBuilding,
  FaFileContract,
  FaCalendar,
  FaMapMarkerAlt,
  FaChartBar,
  FaGlobe,
} from "react-icons/fa";

// Import the three datasets
import { slides as dataEN } from "./data_English";
import { slides as dataIT } from "./data_Italian";
import { slides as dataES } from "./data_Spanish";

const languageMap = {
  EN: dataEN,
  IT: dataIT,
  ES: dataES,
};

export default function InvestorReadyPitch() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [lang, setLang] = useState("EN"); // Default = English
  const slides = languageMap[lang]; // Dynamic slides
  const slideRefs = useRef([]);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  // --- rest of the original code stays exactly the same ---
  const addToRefs = (el) => {
    if (el && !slideRefs.current.includes(el)) slideRefs.current.push(el);
  };

  const handleNextSlide = useCallback(() => {
    if (!isAnimating && currentSlide < slides.length - 1) {
      setIsAnimating(true);
      setCurrentSlide(currentSlide + 1);
      setTimeout(() => setIsAnimating(false), 500);
    }
  }, [currentSlide, isAnimating, slides.length]);

  const handlePrevSlide = useCallback(() => {
    if (!isAnimating && currentSlide > 0) {
      setIsAnimating(true);
      setCurrentSlide(currentSlide - 1);
      setTimeout(() => setIsAnimating(false), 500);
    }
  }, [currentSlide, isAnimating]);

  const goToSlide = useCallback(
    (index) => {
      if (!isAnimating && index !== currentSlide) {
        setIsAnimating(true);
        setCurrentSlide(index);
        setTimeout(() => setIsAnimating(false), 500);
      }
    },
    [currentSlide, isAnimating]
  );

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 800);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") handleNextSlide();
      else if (e.key === "ArrowLeft" || e.key === "ArrowUp") handlePrevSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNextSlide, handlePrevSlide]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50;
    if (diff > threshold) handleNextSlide();
    else if (diff < -threshold) handlePrevSlide();
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // -----------  VISUAL COMPONENTS  ------------
  // (RevenueVisual, ProblemVisual, SolutionVisual, etc.)
  // Keep every component exactly as provided; only the slide data changed.
  const RevenueVisual = () => {
    const revenueData = slides.find((s) => s.id === "revenue");
    if (!revenueData) return null;
    const revenueMetrics = [
      { label: "Recurring", value: 65 },
      { label: "Transactional", value: 35 },
      { label: "Licensing", value: 20 },
    ];
    return (
      <div className="relative flex items-center justify-center w-full h-full">
        <div className="w-full max-w-lg relative">
          <div className="bg-white rounded-xl shadow-lg p-4 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#6B7554]/30 via-[#6B7554]/60 to-[#6B7554]/30"></div>
            <div className="absolute top-4 right-4">
              <div className="px-3 py-1 bg-[#6B7554] text-white text-xs rounded-full shadow-lg animate-pulse">
                <span className="text-xs font-bold tracking-wider">
                  💰 REVENUE
                </span>
              </div>
            </div>
            <div className="mt-2 mb-4 flex justify-between space-x-2">
              {revenueMetrics.map((metric, i) => (
                <div key={i} className="flex-1">
                  <div className="text-center text-xs font-medium text-[#6B7554]/70 mb-1">
                    {metric.label}
                  </div>
                  <div className="relative h-2 bg-[#6B7554]/10 rounded-full overflow-hidden">
                    <div
                      className="absolute top-0 left-0 h-full bg-[#6B7554] rounded-full"
                      style={{ width: `${metric.value}%` }}
                    ></div>
                  </div>
                  <div className="text-center text-xs font-bold text-[#6B7554] mt-1">
                    {metric.value}%
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 gap-3">
              {revenueData.revenueItems.map((item, i) => (
                <div
                  key={i}
                  className="group relative border border-[#6B7554]/10 rounded-lg p-3 hover:shadow-md transition-all duration-300 bg-gradient-to-br from-white to-[#6B7554]/5"
                >
                  <div className="absolute -left-1 top-1/2 transform -translate-y-1/2 w-2 h-2/3 bg-[#6B7554] rounded-r-full opacity-80 group-hover:opacity-100 transition-opacity"></div>
                  <div className="flex items-start">
                    <div className="mr-3 mt-0.5 flex-shrink-0">
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center ${
                          i === 0
                            ? "bg-[#6B7554]/20 text-[#6B7554]"
                            : i === 1
                            ? "bg-[#6B7554]/10 text-[#6B7554]/80"
                            : "bg-[#6B7554]/5 text-[#6B7554]/60"
                        }`}
                      >
                        <span className="text-xs font-bold">{i + 1}</span>
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-sm text-[#6B7554] flex items-center">
                        {item.title}
                        <span className="ml-2 text-xs font-normal bg-[#6B7554]/10 px-2 py-0.5 rounded-full">
                          {i === 0
                            ? "Primary"
                            : i === 1
                            ? "Secondary"
                            : "Tertiary"}
                        </span>
                      </div>
                      <div className="text-xs text-[#6B7554]/70 mt-1">
                        {item.description}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 bg-gradient-to-r from-[#6B7554] to-[#6B7554]/90 text-white rounded-lg p-3 text-center shadow-lg">
              <div className="text-sm font-bold tracking-wider">
                MULTI-CHANNEL REVENUE
              </div>
              <div className="flex justify-center mt-1 space-x-2">
                {[1, 2, 3].map((dot) => (
                  <div
                    key={dot}
                    className="w-1 h-1 rounded-full bg-white/80"
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const ProblemVisual = () => (
    <div className="relative flex items-center justify-center w-full h-full">
      <div className="w-full max-w-md relative">
        <div className="bg-white rounded-xl shadow-lg p-4 relative overflow-hidden max-h-full md:max-h-none">
          <div className="absolute top-4 right-4 px-3 py-1 bg-[#6B7554] text-white text-xs rounded-full">
            <span className="text-xs">TRADITIONAL REAL ESTATE</span>
          </div>
          <div className="mt-4">
            <div className="text-lg font-bold mb-2 text-[#6B7554]">
              Market Access
            </div>
            <div className="grid grid-cols-10 gap-1">
              {Array.from({ length: 50 }).map((_, i) => (
                <div
                  key={i}
                  className={`aspect-square rounded-md ${
                    i < 1 ? "bg-[#6B7554]" : "bg-[#6B7554]/20"
                  }`}
                ></div>
              ))}
            </div>
            <div className="flex justify-between mt-2 text-xs text-[#6B7554]/70">
              <div>0.1% with access</div>
              <div>99.9% excluded</div>
            </div>
            <div className="mt-2">
              <div className="flex justify-between items-center mb-1">
                <div className="text-sm font-medium">Min Investment</div>
                <div className="text-sm font-bold text-[#6B7554]">
                  $500,000+
                </div>
              </div>
              <div className="h-2 w-full bg-[#6B7554]/10 rounded-full">
                <div
                  className="h-full bg-[#6B7554] rounded-full"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const SolutionVisual = () => (
    <div className="relative flex items-center justify-center w-full h-full">
      <div className="w-full max-w-md relative">
        <div className="bg-white rounded-xl shadow-lg p-4 relative overflow-hidden max-h-full md:max-h-none">
          <div className="absolute top-4 right-4 px-3 py-1 bg-[#6B7554] text-white text-xs rounded-full">
            <span className="text-xs">REGEN COLLECTIVE</span>
          </div>
          <div className="mt-4">
            <div className="text-lg font-bold mb-2 text-[#6B7554]">
              Market Access
            </div>
            <div className="grid grid-cols-10 gap-1">
              {Array.from({ length: 50 }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-md bg-[#6B7554]"
                ></div>
              ))}
            </div>
            <div className="flex justify-between mt-2 text-xs text-[#6B7554]/70">
              <div>100% with access</div>
              <div>0% excluded</div>
            </div>
            <div className="mt-2">
              <div className="flex justify-between items-center mb-1">
                <div className="text-sm font-medium">Min Investment</div>
                <div className="text-sm font-bold text-[#6B7554]">$100</div>
              </div>
              <div className="h-2 w-full bg-[#6B7554]/10 rounded-full">
                <div
                  className="h-full bg-[#6B7554] rounded-full"
                  style={{ width: "10%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ProductVisual = () => (
    <div className="relative flex items-center justify-center w-full h-full">
      <div className="w-full max-w-md relative">
        <div className="grid grid-cols-2 gap-2">
          {["Tokenization", "Marketplace", "Certificates", "Analytics"].map(
            (t, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-lg p-2 flex flex-col items-center justify-center text-center"
              >
                <div className="w-8 h-8 rounded-full bg-[#6B7554]/10 flex items-center justify-center text-[#6B7554] mb-1">
                  {i === 0 ? (
                    <FaExchangeAlt className="w-3 h-3" />
                  ) : i === 1 ? (
                    <FaBuilding className="w-3 h-3" />
                  ) : i === 2 ? (
                    <FaFileContract className="w-3 h-3" />
                  ) : (
                    <FaChartLine className="w-3 h-3" />
                  )}
                </div>
                <div className="text-xs font-bold text-[#6B7554]">{t}</div>
              </div>
            )
          )}
        </div>
        <div className="mt-2 bg-[#6B7554] text-white rounded-lg p-2 text-center">
          <div className="text-xs font-bold">Complete Platform</div>
        </div>
      </div>
    </div>
  );

  const MarketVisual = () => (
    <div className="relative flex items-center justify-center w-full h-full pt-6">
      <div className="w-full max-w-md relative">
        <div className="bg-white rounded-xl shadow-lg p-4 relative">
          <div className="text-lg font-bold mb-3 text-[#6B7554]">
            Our Market Opportunity
          </div>
          <div className="relative mb-4 pt-2">
            <div className="flex justify-between mb-1 text-xs">
              <div>Commercial Real-Estate Market Size</div>
              <div className="font-bold">$12 Trillion</div>
            </div>
            <div className="h-3 w-full bg-[#6B7554]/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#6B7554] rounded-full"
                style={{ width: "100%" }}
              ></div>
            </div>
          </div>
          <div className="relative mb-4">
            <div className="flex justify-between mb-1 text-xs">
              <div>Currently Tokenized</div>
              <div className="font-bold">&lt; 1% ($120B)</div>
            </div>
            <div className="h-3 w-full bg-[#6B7554]/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#6B7554] rounded-full"
                style={{ width: "1%" }}
              ></div>
            </div>
          </div>
          <div className="relative py-3 grid grid-cols-2 gap-3">
            <div className="bg-[#6B7554]/10 rounded-lg p-3 text-center">
              <div className="text-xl font-bold text-[#6B7554]">400M+</div>
              <div className="text-xs text-[#6B7554]/70">
                Potential Investors
              </div>
            </div>
            <div className="bg-[#6B7554]/10 rounded-lg p-3 text-center">
              <div className="text-xl font-bold text-[#6B7554]">$600B</div>
              <div className="text-xs text-[#6B7554]/70">Annual Volume</div>
            </div>
          </div>
          <div className="mt-3 bg-[#6B7554] text-white rounded-lg p-3 text-center">
            <div className="text-sm font-bold">First-Mover Advantage</div>
          </div>
        </div>
      </div>
    </div>
  );

  const RoadmapVisual = () => (
    <div className="relative flex items-center justify-center w-full h-full">
      <div className="w-full max-w-lg relative">
        <div className="bg-white rounded-xl shadow-lg p-4 relative">
          <div className="text-lg font-bold mb-5 text-[#6B7554]">
            Growth Trajectory
          </div>
          <div className="relative">
            <div className="absolute left-3 top-6 bottom-6 w-1 bg-gradient-to-b from-[#6B7554]/20 via-[#6B7554]/60 to-[#6B7554]/90"></div>
            <div className="space-y-5">
              {slides
                .find((s) => s.id === "roadmap")
                .stages.map((stage, i) => (
                  <div key={i} className="flex">
                    <div className="relative mr-4 flex-shrink-0">
                      <div className="w-7 h-7 rounded-full bg-[#6B7554] text-white flex items-center justify-center shadow-md relative z-10">
                        {i === 0 ? (
                          <FaCalendar size={12} />
                        ) : i === 1 ? (
                          <FaChartBar size={12} />
                        ) : (
                          <FaMapMarkerAlt size={12} />
                        )}
                      </div>
                    </div>
                    <div className="flex-1 bg-gradient-to-br from-white to-[#6B7554]/5 rounded-lg p-3 shadow-md border-l-4 border-[#6B7554] transform transition-all duration-300 hover:translate-x-1 hover:shadow-lg">
                      <div className="flex justify-between items-start">
                        <div className="text-xs px-2 py-0.5 bg-[#6B7554]/10 rounded-full text-[#6B7554]/80 mb-2">
                          {stage.quarter}
                        </div>
                        <div className="text-xs font-semibold text-[#6B7554] px-2 py-0.5 bg-[#6B7554]/20 rounded-full">
                          {i === 0
                            ? "Phase 1"
                            : i === 1
                            ? "Phase 2"
                            : "Phase 3"}
                        </div>
                      </div>
                      <div className="font-bold text-sm mb-2 text-[#6B7554]">
                        {stage.title}
                      </div>
                      <ul className="space-y-1.5">
                        {stage.points.map((point, j) => (
                          <li key={j} className="flex items-start text-xs">
                            <div className="w-4 h-4 rounded-full bg-[#6B7554]/10 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#6B7554]"></div>
                            </div>
                            <span className="text-[#6B7554]/90">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="mt-5 bg-[#6B7554] text-white rounded-lg p-3 text-center shadow-md">
            <div className="text-sm font-bold">
              $500M in Tokenized Assets by Q4 2026
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const FinancialChart = ({ data }) => {
    const maxRevenue = Math.max(
      ...data.map((item) => parseFloat(item.revenue.replace(/[^0-9.]/g, "")))
    );
    return (
      <div className="flex justify-between items-end h-32 mb-3">
        {data.map((proj, index) => (
          <div
            key={index}
            className="flex flex-col items-center flex-1 min-w-0"
          >
            <div className="relative w-full flex items-end justify-center">
              <div
                className="w-12 bg-[#6B7554] rounded-t-lg transition-all duration-500 ease-out transform hover:scale-105"
                style={{
                  height: `${Math.max(
                    20,
                    (parseFloat(proj.revenue.replace(/[^0-9.]/g, "")) /
                      maxRevenue) *
                      100
                  )}%`,
                  minHeight: "40px",
                }}
              ></div>
              <div className="absolute -top-6 w-full text-center">
                <div className="text-xs font-bold text-[#6B7554] whitespace-nowrap">
                  {proj.revenue}
                </div>
              </div>
            </div>
            <div className="text-xs mt-2 text-[#6B7554]/70 truncate w-full text-center">
              {proj.users}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const InvestmentVisual = () => (
    <div className="relative flex items-center justify-center w-full h-full">
      <div className="w-full max-w-md relative">
        <div className="bg-white rounded-xl shadow-lg p-4 relative">
          <div className="absolute top-4 right-4 px-3 py-1 bg-[#6B7554] text-white text-xs font-bold rounded-md">
            SEED ROUND
          </div>
          <div className="text-lg font-bold mb-4 text-[#6B7554]">
            Investment Terms
          </div>
          <div className="grid grid-cols-2 gap-3">
            {slides
              .find((s) => s.id === "investment")
              .terms.map((term, index) => (
                <div key={index} className="bg-[#6B7554]/10 rounded-lg p-3">
                  <div className="text-xs text-[#6B7554]/70 mb-1">
                    {term.label}
                  </div>
                  <div className="text-sm font-bold">{term.value}</div>
                </div>
              ))}
          </div>
          <div className="mt-4 text-lg font-bold mb-2 text-[#6B7554]">
            Financial Projections
          </div>
          <FinancialChart
            data={slides.find((s) => s.id === "investment").projections}
          />
          <div className="mt-2 bg-[#6B7554] text-white rounded-lg p-3 text-center">
            <div className="text-sm font-bold">
              Limited Allocation Available
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const IntroVisual = () => (
    <div className="relative flex items-center justify-center w-full h-full">
      <div className="w-full max-w-lg aspect-square relative">
        <div className="absolute inset-0 rounded-full border-4 border-[#6B7554]/10 animate-pulse-slow"></div>
        <div className="absolute inset-0 rounded-full border-4 border-[#6B7554]/20 scale-90 animate-pulse-slow-delay"></div>
        <div className="absolute inset-0 rounded-full border-4 border-[#6B7554]/30 scale-80 animate-pulse-fast"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-5xl font-bold text-[#6B7554]">$12T</div>
            <div className="text-lg mt-2">Market Opportunity</div>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#6B7554] text-white rounded-full px-4 py-1 whitespace-nowrap">
            <span className="text-sm font-medium">$500K+ BARRIER TODAY</span>
          </div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-[#6B7554] text-white rounded-full px-4 py-1 whitespace-nowrap">
            <span className="text-sm font-bold">$100 WITH REGEN</span>
          </div>
        </div>
      </div>
    </div>
  );

  const TractionVisual = () => (
    <div className="relative flex items-center justify-center w-full h-full">
      <div className="w-full max-w-lg relative">
        <div className="bg-white rounded-xl shadow-lg p-4 relative">
          <div className="text-lg font-bold mb-4 text-[#6B7554]">
            Milestones Achieved
          </div>
          <div className="space-y-3">
            {[
              { title: "Platform Development", desc: "MVP 80% complete" },
              { title: "Regulatory Framework", desc: "47+ jurisdictions" },
              { title: "Property Partnerships", desc: "3 major developers" },
              {
                title: "Investor Waitlist",
                desc: "15,000+ potential investors",
              },
              {
                title: "Initial Property Portfolio",
                desc: "3 premium properties secured",
              },
            ].map((a, i) => (
              <div key={i} className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-[#6B7554] text-white flex items-center justify-center mr-3 flex-shrink-0">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17L4 12" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-medium">{a.title}</div>
                  <div className="text-xs text-[#6B7554]/70">{a.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 bg-[#6B7554] text-white rounded-lg p-3 text-center">
            <div className="text-sm font-bold">
              $85M in Properties Ready for Tokenization
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const TeamAndAdvisorsVisual = () => {
    const slide = slides.find((s) => s.id === "team");
    if (!slide) return null;
    return (
      <div className="relative flex items-center justify-center w-full h-full">
        <div className="w-full max-w-lg relative">
          <div className="bg-white rounded-xl shadow-lg p-4 relative">
            <div className="text-lg font-bold mb-4 text-[#6B7554]">
              Team & Advisors
            </div>
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 rounded-full bg-[#6B7554] mr-2"></div>
                <h3 className="text-sm font-semibold text-[#6B7554]">
                  Core Team
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {slide.team?.map((m, i) => (
                  <div
                    key={i}
                    className="bg-[#6B7554]/10 rounded-lg p-3 border-l-4 border-[#6B7554]"
                  >
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 rounded-full bg-[#6B7554] text-white flex items-center justify-center mr-2 flex-shrink-0">
                        <span className="text-sm font-bold">{m.icon}</span>
                      </div>
                      <div>
                        <div className="text-sm font-bold">{m.name}</div>
                        <div className="text-xs text-[#6B7554]/70">
                          {m.title}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 rounded-full bg-[#6B7554] mr-2"></div>
                <h3 className="text-sm font-semibold text-[#6B7554]">
                  Advisors & Investors
                </h3>
              </div>
              <div className="grid grid-cols-1 gap-2">
                {slide.advisors?.map((a, i) => (
                  <div
                    key={i}
                    className="bg-[#6B7554]/10 rounded-lg p-3 border-l-4 border-[#6B7554]/50"
                  >
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 rounded-full bg-[#6B7554] text-white flex items-center justify-center mr-2 flex-shrink-0">
                        <span className="text-sm font-bold">
                          {a.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <div className="text-sm font-bold">{a.name}</div>
                        <div className="text-xs text-[#6B7554]/70">
                          {a.title}
                        </div>
                      </div>
                    </div>
                    <div className="text-xs text-[#6B7554]/70">{a.company}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#6B7554] text-white rounded-lg p-3 text-center space-y-1">
              <div className="text-sm font-bold">
                85+ Years Combined Relevant Experience
              </div>
              <div className="text-xs font-medium">
                Industry Leaders Backing Our Vision
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const CTAVisual = () => (
    <div className="relative flex items-center justify-center w-full h-full">
      <div className="w-full max-w-lg relative">
        <div className="bg-white rounded-xl shadow-lg p-4 h-full flex flex-col items-center justify-center text-center">
          <div className="w-16 h-16 rounded-full bg-[#6B7554] flex items-center justify-center mb-4">
            <div className="text-2xl font-bold text-white">R</div>
          </div>
          <div className="text-xl font-bold mb-2 text-[#6B7554]">
            REGEN COLLECTIVE
          </div>
          <div className="text-lg mb-4 text-[#6B7554]/80">
            Democratizing Commercial Real-Estate
          </div>
          <div className="mb-4 px-4">
            <div className="text-sm text-[#6B7554]/70">
              Be part of the platform that unlocks the $12 trillion commercial
              property market.
            </div>
          </div>
          <button className="px-8 py-3 bg-[#6B7554] text-white rounded-lg font-bold text-base shadow-lg transform transition-all duration-300 hover:shadow-xl hover:bg-[#8A9B6A]">
            INVEST NOW
          </button>
          <div className="mt-4 text-sm text-[#6B7554]">
            invest@regencollective.xyz
          </div>
        </div>
      </div>
    </div>
  );

  const renderVisual = (visualType) => {
    switch (visualType) {
      case "IntroVisual":
        return <IntroVisual />;
      case "ProblemVisual":
        return <ProblemVisual />;
      case "SolutionVisual":
        return <SolutionVisual />;
      case "ProductVisual":
        return <ProductVisual />;
      case "MarketVisual":
        return <MarketVisual />;
      case "TractionVisual":
        return <TractionVisual />;
      case "RoadmapVisual":
        return <RoadmapVisual />;
      case "TeamAndAdvisorsVisual":
        return <TeamAndAdvisorsVisual />;
      case "InvestmentVisual":
        return <InvestmentVisual />;
      case "CTAVisual":
        return <CTAVisual />;
      case "RevenueVisual":
        return <RevenueVisual />;
      default:
        return null;
    }
  };

  const Logo = () => (
    <div className="fixed top-4 left-4 z-30 flex items-center">
      <div className="w-8 h-8 rounded-full bg-[#6B7554] flex items-center justify-center">
        <span className="text-sm text-[#F7F5F0] font-bold">R</span>
      </div>
      <span className="ml-2 text-base font-bold text-[#6B7554]">REGEN</span>
    </div>
  );

  const NavigationControls = () => (
    <>
      <button
        className={`fixed left-4 top-1/2 transform -translate-y-1/2 z-30 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
          currentSlide === 0 || isAnimating
            ? "opacity-30 cursor-not-allowed bg-[#6B7554]/20"
            : "opacity-100 hover:bg-[#6B7554]/20 bg-[#6B7554]/10"
        }`}
        onClick={handlePrevSlide}
        disabled={currentSlide === 0 || isAnimating}
        aria-label="Previous slide"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#6B7554"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 19L8 12L15 5" />
        </svg>
      </button>
      <button
        className={`fixed right-4 top-1/2 transform -translate-y-1/2 z-30 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
          currentSlide === slides.length - 1 || isAnimating
            ? "opacity-30 cursor-not-allowed bg-[#6B7554]/20"
            : "opacity-100 hover:bg-[#6B7554]/20 bg-[#6B7554]/10"
        }`}
        onClick={handleNextSlide}
        disabled={currentSlide === slides.length - 1 || isAnimating}
        aria-label="Next slide"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#6B7554"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 5L16 12L9 19" />
        </svg>
      </button>
    </>
  );

  const ProgressBar = () => (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-30 flex space-x-1">
      {slides.map((_, index) => (
        <button
          key={index}
          className={`h-1.5 rounded-full transition-all duration-300 ${
            index === currentSlide
              ? "w-8 bg-[#6B7554]"
              : "w-3 bg-[#6B7554]/30 hover:bg-[#6B7554]/50"
          }`}
          onClick={() => goToSlide(index)}
          disabled={isAnimating}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );

  const SlideNumber = () => (
    <div className="fixed bottom-4 right-4 z-30 text-[#6B7554]/70 text-xs">
      {currentSlide + 1} / {slides.length}
    </div>
  );

  const LoadingOverlay = () => (
    <div
      className={`fixed inset-0 z-50 bg-[#F7F5F0] flex items-center justify-center transition-all duration-1000 ${
        isLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="text-center">
        <div className="w-16 h-16 rounded-full border-4 border-[#6B7554]/30 border-t-[#6B7554] animate-spin mb-4"></div>
        <div className="text-xl font-bold text-[#6B7554]">REGEN COLLECTIVE</div>
      </div>
    </div>
  );

  // --------- Language Toggle Floating Button ----------
  const LanguageToggle = () => (
    <div className="fixed top-4 right-4 z-40">
      <div className="flex items-center space-x-1 bg-white/90 backdrop-blur-sm border border-[#6B7554]/20 rounded-full px-2 py-1 shadow-lg">
        {["EN", "IT", "ES"].map((l) => (
          <button
            key={l}
            onClick={() => {
              setLang(l);
              setCurrentSlide(0); // reset to first slide on change
            }}
            className={`px-2 py-1 rounded-full text-xs font-semibold transition-colors ${
              lang === l
                ? "bg-[#6B7554] text-white"
                : "text-[#6B7554] hover:bg-[#6B7554]/10"
            }`}
          >
            {l}
          </button>
        ))}
        <FaGlobe className="text-[#6B7554] ml-1" size={12} />
      </div>
    </div>
  );

  return (
    <div
      className="relative bg-[#F7F5F0] text-[#6B7554] min-h-screen overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Fixed UI elements */}
      <Logo />
      <LanguageToggle /> {/* NEW */}
      <ProgressBar />
      <NavigationControls />
      <SlideNumber />
      <LoadingOverlay />
      {/* Main content */}
      <div className="relative min-h-screen flex items-center justify-center">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            ref={addToRefs}
            className={`absolute inset-0 flex flex-col md:flex-row items-center justify-center px-4 md:px-10 pt-16 pb-12 transition-all duration-500 ${
              index === currentSlide
                ? "opacity-100 translate-y-0 z-20"
                : index < currentSlide
                ? "opacity-0 -translate-y-12 z-10 pointer-events-none"
                : "opacity-0 translate-y-12 z-10 pointer-events-none"
            }`}
          >
            {/* Left side content */}
            <div
              className={`w-full md:w-1/2 max-w-xl md:pr-6 ${
                index === 1 || index === 2 || index === 3
                  ? "mb-2 max-h-[60vh]"
                  : "mb-6"
              } md:mb-0 overflow-y-auto md:max-h-[calc(100vh-8rem)] scrollbar-hide`}
            >
              <div className="max-w-lg mx-auto md:mx-0">
                <div className="mb-1 text-sm text-[#6B7554]/70 tracking-wider font-medium">
                  REGEN COLLECTIVE
                  {slide.callout && (
                    <span className="ml-3 px-2 py-0.5 bg-[#6B7554] text-white text-xs rounded-md">
                      {slide.callout}
                    </span>
                  )}
                </div>

                <h1 className="text-2xl font-bold mb-1">{slide.title}</h1>
                <div className="h-1 w-12 bg-[#6B7554] opacity-50 mb-3"></div>
                <h3 className="text-lg font-medium mb-3">{slide.subtitle}</h3>

                {slide.content && (
                  <p className="text-sm mb-3">{slide.content}</p>
                )}

                {slide.points && (
                  <ul className="space-y-2 mb-4">
                    {slide.points.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#6B7554] mt-1.5 mr-2 flex-shrink-0"></div>
                        <span
                          className="text-sm"
                          dangerouslySetInnerHTML={{ __html: point }}
                        ></span>
                      </li>
                    ))}
                  </ul>
                )}

                {slide.features && (
                  <div className="grid grid-cols-1 gap-3 mb-4">
                    {slide.features.map((feature, i) => (
                      <div
                        key={i}
                        className="bg-white rounded-lg p-3 shadow-sm flex items-start transition-transform duration-300 hover:transform hover:scale-105"
                      >
                        <div className="w-8 h-8 rounded-full bg-[#6B7554]/10 flex items-center justify-center text-[#6B7554] mr-3 flex-shrink-0">
                          {feature.icon === "FaCogs" ? (
                            <FaCogs />
                          ) : feature.icon === "FaChartLine" ? (
                            <FaChartLine />
                          ) : feature.icon === "FaRegLightbulb" ? (
                            <FaRegLightbulb />
                          ) : feature.icon === "FaUserTie" ? (
                            <FaUserTie />
                          ) : (
                            <FaChartLine />
                          )}
                        </div>
                        <div>
                          <div className="text-sm font-bold mb-1">
                            {feature.title}
                          </div>
                          <div className="text-xs text-[#6B7554]/70">
                            {feature.description}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {slide.stats && (
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {slide.stats.map((stat, i) => (
                      <div
                        key={i}
                        className="bg-white rounded-lg p-3 shadow-sm text-center transition-all duration-300 hover:shadow-md"
                      >
                        <div className="text-lg font-bold mb-1 text-[#6B7554]">
                          {stat.value}
                        </div>
                        <div className="text-xs text-[#6B7554]/70">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {slide.achievements && (
                  <ul className="space-y-2 mb-4">
                    {slide.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <div className="w-5 h-5 rounded-full bg-[#6B7554]/10 flex items-center justify-center mr-2 flex-shrink-0">
                          <svg
                            width="10"
                            height="10"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#6B7554"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M20 6L9 17L4 12" />
                          </svg>
                        </div>
                        <span className="text-sm">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {slide.revenueItems && (
                  <div className="grid grid-cols-1 gap-3 mb-4">
                    {slide.revenueItems.map((item, i) => (
                      <div
                        key={i}
                        className="border border-[#6B7554]/20 rounded-lg p-3 hover:border-[#6B7554]/40 transition-all duration-300"
                      >
                        <div className="font-bold mb-1 text-sm">
                          {item.title}
                        </div>
                        <div className="text-xs text-[#6B7554]/70">
                          {item.description}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {slide.note && (
                  <div className="text-xs italic text-[#6B7554]/70 mb-4">
                    {slide.note}
                  </div>
                )}
                {slide.stat && (
                  <div className="mt-4 bg-white rounded-lg p-3 shadow-sm">
                    <div className="text-sm font-medium text-center">
                      {slide.stat}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right side visual */}
            <div
              className={`w-full md:w-1/2 flex items-center justify-center ${
                index === 1 || index === 2 || index === 3
                  ? "h-[25vh] md:h-auto"
                  : ""
              }`}
            >
              {renderVisual(slide.visual)}
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes pulse-slow {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.5;
          }
        }
        @keyframes pulse-slow-delay {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.4;
          }
          50% {
            transform: scale(1.03);
            opacity: 0.6;
          }
        }
        @keyframes pulse-fast {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.08);
            opacity: 0.7;
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s infinite;
        }
        .animate-pulse-slow-delay {
          animation: pulse-slow-delay 4s infinite;
          animation-delay: 1s;
        }
        .animate-pulse-fast {
          animation: pulse-fast 3s infinite;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}

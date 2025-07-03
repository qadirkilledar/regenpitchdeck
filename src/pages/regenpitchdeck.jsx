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
} from "react-icons/fa";

export default function InvestorReadyPitch() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const slideRefs = useRef([]);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  // Slide content
  const slides = [
    {
      id: "intro",
      title: "REGEN COLLECTIVE",
      subtitle: "Democratizing a $12 Trillion Market",
      content:
        "Breaking down the barriers to commercial real estate investment.",
      callout: "SEED ROUND - $5M",
      visual: "IntroVisual",
    },
    {
      id: "problem",
      title: "THE PROBLEM",
      subtitle: "Premium Real Estate Is Inaccessible",
      content: "The commercial real estate market today:",
      points: [
        "$500,000+ minimum investment",
        "18-36 month illiquid holding periods",
        "Limited geographic access",
        "Complex REIT structures",
        "Restricted to the ultra-wealthy (0.1%)",
      ],
      stat: "$12 TRILLION MARKET LOCKED BEHIND WALLS",
      visual: "ProblemVisual",
    },
    {
      id: "solution",
      title: "OUR SOLUTION",
      subtitle: "Revolutionary Tokenization Platform",
      content: "Regen Collective unlocks real estate for everyone:",
      points: [
        "<strong>$100 minimum investment</strong> vs traditional $500K+",
        "<strong>24/7 instant liquidity</strong> vs 18-36 month lock-ups",
        "<strong>Global governance</strong> from anywhere, for anyone",
        "<strong>Decentralised</strong> REIT structure",
        "<strong>Fractional investments</strong> in premium properties",
      ],
      stat: "DEMOCRATIZING ACCESS FOR THE 99.9%",
      visual: "SolutionVisual",
    },
    {
      id: "product",
      title: "THE PLATFORM",
      subtitle: "Complete Investment Ecosystem",
      features: [
        {
          title: "Tokenization Engine",
          description:
            "Converts premium properties into blockchain tokens with military-grade security",
          icon: <FaCogs />,
        },
        {
          title: "Global Marketplace",
          description:
            "Buy, sell, and trade real estate tokens with zero friction 24/7/365",
          icon: <FaChartLine />,
        },
        {
          title: "Ownership Certificates",
          description:
            "Fully compliant on-chain SPV ownership documents for legally backed RWA tokenisation",
          icon: <FaRegLightbulb />,
        },
        {
          title: "Investment governance",
          description:
            "Giving Regenerative focused re-investment and development governance/voting for the community and portfolio",
          icon: <FaUserTie />,
        },
        {
          title: "AI Analytics",
          description:
            "Proprietary algorithms for property valuation and risk assessment",
          icon: <FaChartLine />,
        },
      ],
      visual: "ProductVisual",
    },
    {
      id: "market",
      title: "THE OPPORTUNITY",
      subtitle: "Massive Untapped Market",
      content: "We are entering an enormous market with disruptive technology:",
      stats: [
        { label: "Global Real Estate Market", value: "$12T" },
        { label: "Currently Tokenized", value: "<1%" },
        { label: "Potential Investors", value: "400M+" },
        { label: "Annual Transaction Volume", value: "$200B" },
        { label: "London Commercial Market Size", value: "$20B" },
        { label: "1st CoLiving Fund Target Size ", value: "$50M" },
      ],
      visual: "MarketVisual",
    },
    {
      id: "revenue",
      title: "REVENUE VERTICALS",
      subtitle: "Diversified Income Streams",
      revenueItems: [
        {
          title: "Property Management & Portfolio Development",
          description:
            "CoLiving, pod hotels, creative studios and events space leasing, for our existing creative community tenancy base. Currently 50 tenants with $200,000 ARR",
        },
        {
          title: "SPV Tokenisation Fees",
          description:
            "0.5-1% of SPV minting costs, 0.5% transaction fees, staking/liquidity pool fees.",
        },
        {
          title: "Portfolio Index Token",
          description:
            "Yield farming: Staking unlocked Regen token powered by property SPV revenue yield Allows buy-backs of SPV ownership tokens to grow internal property stake",
        },
      ],
      visual: "RevenueVisual",
    },
    {
      id: "traction",
      title: "OUR TRACTION",
      subtitle: "Exceptional Progress",
      content: "What we have achieved with minimal capital:",
      achievements: [
        "MVP platform development (80% complete)",
        "Regulatory framework across 47+ jurisdictions",
        "Strategic partnerships with 3 property developers",
        "Waitlist of 15,000+ potential investors",
        "$200,000 ARR from existing CoLiving and creative studio management companies",
        "3 prime London real estate developments secured offmarket with GDV $100million",
      ],
      visual: "TractionVisual",
    },
    {
      id: "roadmap",
      title: "ROADMAP",
      subtitle: "Clear Path to Market Dominance",
      stages: [
        {
          quarter: "Q4 2025",
          title: "EXPAND",
          points: ["5+ properties", "Secondary market", "Marketing campaign"],
        },
        {
          quarter: "Q1 2026",
          title: "GROW",
          points: ["10+ properties", "AI", "30,000+ investors"],
        },
        {
          quarter: "Q2 2026",
          title: "DOMINATE",
          points: [
            "20+ premium properties",
            "50,000 active users",
            "Institutional partnerships",
          ],
        },
      ],
      visual: "RoadmapVisual",
    },
    {
      id: "team",
      title: "THE TEAM",
      subtitle: "World-Class Expertise",
      team: [
        {
          name: "Miki Elson",
          title: "Founder & CEO",
          icon: "ME",
        },
        {
          name: "Michael Hernandez",
          title: "CMO",
          icon: "MH",
        },
        {
          name: "Qadir Killedar",
          title: "CTO",
          icon: "QK",
        },
        {
          name: "Caz Rue",
          title: "CFO",
          icon: "CR",
        },
      ],
      advisors: [
        {
          name: "Dominic Ryder",
          title: "Tokenomics and DeFi veteran",
          company: "Alvara",
        },
        {
          name: "Mr Cang",
          title: "Lead investor",
          company: "Fund Management",
        },
        {
          name: "Eulan",
          title: "RWA Source",
          company: "London/Hong Kong",
        },
        {
          name: "Kaz Elkholy",
          title: "Real Estate Acquisition",
          company: "Negotiation Expert",
        },
      ],
      visual: "TeamAndAdvisorsVisual",
    },
    {
      id: "investment",
      title: "THE INVESTMENT",
      subtitle: "Seed Round - $5M",
      terms: [
        { label: "Valuation", value: "$5M" },
        { label: "Minimum Investment", value: "$40K" },
        {
          label: "Structure",
          value: "1% pre-seed, 20% discount on next round",
        },
        {
          label: "Use of Funds",
          value:
            "Platform completion, retail investor marketing, regulatory approvals, property onboarding",
        },
      ],
      projections: [
        { year: "Year 1", revenue: "$1.75M", users: "100 tenants" },
        { year: "Year 2", revenue: "$5M", users: "200 tenants" },
        { year: "Year 3", revenue: "$15M", users: "600 tenants" },
      ],
      note: "Revenue projections based on 1-3% fee model across onboarded properties. Limited allocation available. Term sheet available on request.",
      visual: "InvestmentVisual",
    },

    {
      id: "cta",
      title: "JOIN THE REVOLUTION",
      subtitle: "Exclusive Early-Stage Access",
      content:
        "Step into the future of real estate investing. Gain early access to a platform reshaping the $12T commercial property market — transparent, fractional, and built for the next generation of investors.",
      visual: "CTAVisual",
    },
  ];

  // Add slides to refs array
  const addToRefs = (el) => {
    if (el && !slideRefs.current.includes(el)) {
      slideRefs.current.push(el);
    }
  };

  // Handle slide navigation - memoized to fix keyboard navigation
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

  // Initialize
  useEffect(() => {
    // Set initial load state
    setTimeout(() => {
      setIsLoaded(true);
    }, 800);
  }, []);

  // Set up keyboard navigation
  useEffect(() => {
    // Add keyboard navigation
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        handleNextSlide();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        handlePrevSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNextSlide, handlePrevSlide]);

  // Touch event handlers for swipe navigation
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const difference = touchStartX.current - touchEndX.current;
    const threshold = 50; // Minimum swipe distance

    if (difference > threshold) {
      // Swipe left, go to next slide
      handleNextSlide();
    } else if (difference < -threshold) {
      // Swipe right, go to previous slide
      handlePrevSlide();
    }

    // Reset touch coordinates
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // UPDATED Revenue Visual - More engaging and non-repetitive
  const RevenueVisual = () => {
    const revenueData = slides.find((s) => s.id === "revenue");
    if (!revenueData) return null;

    // Sample data for visualization
    const revenueMetrics = [
      { label: "Recurring", value: 65 },
      { label: "Transactional", value: 35 },
      { label: "Licensing", value: 20 },
    ];

    return (
      <div className="relative flex items-center justify-center w-full h-full">
        <div className="w-full max-w-lg relative ">
          <div className="bg-white rounded-xl shadow-lg p-4 relative overflow-hidden">
            {/* Visual Header */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#6B7554]/30 via-[#6B7554]/60 to-[#6B7554]/30"></div>

            {/* Animated Revenue Streams Badge */}
            <div className="absolute top-4 right-4">
              <div className="px-3 py-1 bg-[#6B7554] text-white text-xs rounded-full shadow-lg animate-pulse">
                <span className="text-xs font-bold tracking-wider">
                  💰 REVENUE
                </span>
              </div>
            </div>

            {/* Visual Metrics Bars */}
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

            {/* Revenue Stream Cards with Visual Indicators */}
            <div className="grid grid-cols-1 gap-3">
              {revenueData.revenueItems.map((item, i) => (
                <div
                  key={i}
                  className="group relative border border-[#6B7554]/10 rounded-lg p-3 hover:shadow-md transition-all duration-300 bg-gradient-to-br from-white to-[#6B7554]/5"
                >
                  {/* Visual Indicator */}
                  <div className="absolute -left-1 top-1/2 transform -translate-y-1/2 w-2 h-2/3 bg-[#6B7554] rounded-r-full opacity-80 group-hover:opacity-100 transition-opacity"></div>

                  <div className="flex items-start">
                    {/* Icon Placeholder */}
                    <div className="mr-3 mt-0.5 flex-shrink-0">
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center 
                      ${
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

            {/* Visual Footer */}
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

  // Financial Chart Component - Fixed to render properly
  const FinancialChart = ({ data }) => {
    // Calculate max revenue for proper scaling
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

  // UPDATED SLIDE 2 (Problem)
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

  // UPDATED SLIDE 3 (Solution)
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

  // UPDATED SLIDE 4 (Product) - Simplified for mobile with a more compact layout
  const ProductVisual = () => (
    <div className="relative flex items-center justify-center w-full h-full">
      <div className="w-full max-w-md relative">
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-white rounded-xl shadow-lg p-2 flex flex-col items-center justify-center text-center">
            <div className="w-8 h-8 rounded-full bg-[#6B7554]/10 flex items-center justify-center text-[#6B7554] mb-1">
              <FaExchangeAlt className="w-3 h-3" />
            </div>
            <div className="text-xs font-bold text-[#6B7554]">Tokenization</div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-2 flex flex-col items-center justify-center text-center">
            <div className="w-8 h-8 rounded-full bg-[#6B7554]/10 flex items-center justify-center text-[#6B7554] mb-1">
              <FaBuilding className="w-3 h-3" />
            </div>
            <div className="text-xs font-bold text-[#6B7554]">Marketplace</div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-2 flex flex-col items-center justify-center text-center">
            <div className="w-8 h-8 rounded-full bg-[#6B7554]/10 flex items-center justify-center text-[#6B7554] mb-1">
              <FaFileContract className="w-3 h-3" />
            </div>
            <div className="text-xs font-bold text-[#6B7554]">Certificates</div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-2 flex flex-col items-center justify-center text-center">
            <div className="w-8 h-8 rounded-full bg-[#6B7554]/10 flex items-center justify-center text-[#6B7554] mb-1">
              <FaChartLine className="w-3 h-3" />
            </div>
            <div className="text-xs font-bold text-[#6B7554]">Analytics</div>
          </div>
        </div>

        <div className="mt-2 bg-[#6B7554] text-white rounded-lg p-2 text-center">
          <div className="text-xs font-bold">Complete Platform</div>
        </div>
      </div>
    </div>
  );

  // Market Visual - Unchanged
  const MarketVisual = () => (
    <div className="relative flex items-center justify-center w-full h-full pt-6">
      <div className="w-full max-w-md relative">
        <div className="bg-white rounded-xl shadow-lg p-4 relative">
          <div className="text-lg font-bold mb-3 text-[#6B7554]">
            Our Market Opportunity
          </div>

          <div className="relative mb-4 pt-2">
            <div className="flex justify-between mb-1 text-xs">
              <div>Commercial Real Estate Market Size</div>
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

  // Roadmap Visual - Unchanged
  const RoadmapVisual = () => (
    <div className="relative flex items-center justify-center w-full h-full">
      <div className="w-full max-w-lg relative">
        <div className="bg-white rounded-xl shadow-lg p-4 relative">
          <div className="text-lg font-bold mb-5 text-[#6B7554]">
            Growth Trajectory
          </div>

          <div className="relative">
            {/* Timeline connector */}
            <div className="absolute left-3 top-6 bottom-6 w-1 bg-gradient-to-b from-[#6B7554]/20 via-[#6B7554]/60 to-[#6B7554]/90"></div>

            <div className="space-y-5">
              {slides
                .find((s) => s.id === "roadmap")
                .stages.map((stage, i) => (
                  <div key={i} className="flex">
                    {/* Step indicator */}
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

                    {/* Card content */}
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

  // Investment Visual - Unchanged
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

          {/* Fixed Financial Chart Component */}
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
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-[#6B7554] text-white flex items-center justify-center mr-3 flex-shrink-0">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 6L9 17L4 12"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <div className="text-sm font-medium">Platform Development</div>
                <div className="text-xs text-[#6B7554]/70">
                  MVP 80% complete
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-[#6B7554] text-white flex items-center justify-center mr-3 flex-shrink-0">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 6L9 17L4 12"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <div className="text-sm font-medium">Regulatory Framework</div>
                <div className="text-xs text-[#6B7554]/70">
                  47+ jurisdictions
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-[#6B7554] text-white flex items-center justify-center mr-3 flex-shrink-0">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 6L9 17L4 12"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <div className="text-sm font-medium">Property Partnerships</div>
                <div className="text-xs text-[#6B7554]/70">
                  3 major developers
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-[#6B7554] text-white flex items-center justify-center mr-3 flex-shrink-0">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 6L9 17L4 12"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <div className="text-sm font-medium">Investor Waitlist</div>
                <div className="text-xs text-[#6B7554]/70">
                  15,000+ potential investors
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-[#6B7554] text-white flex items-center justify-center mr-3 flex-shrink-0">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 6L9 17L4 12"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <div className="text-sm font-medium">
                  Initial Property Portfolio
                </div>
                <div className="text-xs text-[#6B7554]/70">
                  3 premium properties secured
                </div>
              </div>
            </div>
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

            {/* Team Section with Header */}
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 rounded-full bg-[#6B7554] mr-2"></div>
                <h3 className="text-sm font-semibold text-[#6B7554]">
                  Core Team
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {slide.team?.map((member, index) => (
                  <div
                    key={`team-${index}`}
                    className="bg-[#6B7554]/10 rounded-lg p-3 border-l-4 border-[#6B7554]"
                  >
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 rounded-full bg-[#6B7554] text-white flex items-center justify-center mr-2 flex-shrink-0">
                        <div className="text-sm font-bold">{member.icon}</div>
                      </div>
                      <div>
                        <div className="text-sm font-bold">{member.name}</div>
                        <div className="text-xs text-[#6B7554]/70">
                          {member.title}
                        </div>
                      </div>
                    </div>
                    <div className="text-xs text-[#6B7554]/70">
                      {member.background}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Advisors Section with Header */}
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 rounded-full bg-[#6B7554] mr-2"></div>
                <h3 className="text-sm font-semibold text-[#6B7554]">
                  Advisors & Investors
                </h3>
              </div>
              <div className="grid grid-cols-1 gap-2">
                {slide.advisors?.map((advisor, i) => (
                  <div
                    key={`advisor-${i}`}
                    className="bg-[#6B7554]/10 rounded-lg p-3 border-l-4 border-[#6B7554]/50"
                  >
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 rounded-full bg-[#6B7554] text-white flex items-center justify-center mr-2 flex-shrink-0">
                        <div className="text-sm font-bold">
                          {advisor.name.charAt(0)}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm font-bold">{advisor.name}</div>
                        <div className="text-xs text-[#6B7554]/70">
                          {advisor.title}
                        </div>
                      </div>
                    </div>
                    <div className="text-xs text-[#6B7554]/70">
                      {advisor.company}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Footer */}
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
            Democratizing Commercial Real Estate
          </div>

          <div className="mb-4 px-4">
            <div className="text-sm text-[#6B7554]/70">
              Be part of the platform that unlocks the $12 trillion commercial
              real estate market.
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

  // Render appropriate visual based on slide id
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

  // Logo component
  const Logo = () => (
    <div className="fixed top-4 left-4 z-30 flex items-center">
      <div className="w-8 h-8 rounded-full bg-[#6B7554] flex items-center justify-center">
        <span className="text-sm text-[#F7F5F0] font-bold">R</span>
      </div>
      <span className="ml-2 text-base font-bold text-[#6B7554]">REGEN</span>
    </div>
  );

  // Navigation Controls
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
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 19L8 12L15 5"
            stroke="#6B7554"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
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
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 5L16 12L9 19"
            stroke="#6B7554"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </>
  );

  // Progress bar component
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

  // Slide number indicator
  const SlideNumber = () => (
    <div className="fixed bottom-4 right-4 z-30 text-[#6B7554]/70 text-xs">
      {currentSlide + 1} / {slides.length}
    </div>
  );

  // Loading overlay
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

  // Main render
  return (
    <div
      className="relative bg-[#F7F5F0] text-[#6B7554] min-h-screen overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Fixed UI elements */}
      <Logo />
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
            {/* Left side content - Only this part scrolls if needed */}
            <div
              className={`w-full md:w-1/2 max-w-xl md:pr-6 ${
                index === 1 || index === 2 || index === 3
                  ? "mb-2 max-h-[60vh]"
                  : "mb-6"
              } md:mb-0 overflow-y-auto md:max-h-[calc(100vh-8rem)] scrollbar-hide`}
            >
              <div className="max-w-lg mx-auto md:mx-0">
                {/* Slide title */}
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

                {/* Main content */}
                {slide.content && (
                  <p className="text-sm mb-3">{slide.content}</p>
                )}

                {/* Bullet points */}
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

                {/* Feature grid */}
                {slide.features && (
                  <div className="grid grid-cols-1 gap-3 mb-4">
                    {slide.features.map((feature, i) => (
                      <div
                        key={i}
                        className="bg-white rounded-lg p-3 shadow-sm flex items-start transition-transform duration-300 hover:transform hover:scale-105"
                      >
                        <div className="w-8 h-8 rounded-full bg-[#6B7554]/10 flex items-center justify-center text-[#6B7554] mr-3 flex-shrink-0">
                          {feature.icon}
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

                {/* Market stats */}
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

                {/* Achievement list */}
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
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M20 6L9 17L4 12"
                              stroke="#6B7554"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <span className="text-sm">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Revenue Items */}
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

                {/* Investment note */}
                {slide.note && (
                  <div className="text-xs italic text-[#6B7554]/70 mb-4">
                    {slide.note}
                  </div>
                )}

                {/* Bottom stats highlight */}
                {slide.stat && (
                  <div className="mt-4 bg-white rounded-lg p-3 shadow-sm">
                    <div className="text-sm font-medium text-center">
                      {slide.stat}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right side visual - Adjusted for mobile on slides 2, 3, 4 */}
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

      {/* Custom styles */}
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

        /* Hide scrollbar for Chrome, Safari and Opera */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        /* Hide scrollbar for IE, Edge and Firefox */
        .scrollbar-hide {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </div>
  );
}

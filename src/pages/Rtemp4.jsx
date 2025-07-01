import { useState, useEffect, useRef, useCallback } from "react";
import {
  FaRegLightbulb,
  FaUserTie,
  FaChartLine,
  FaCogs,
  FaExchangeAlt,
  FaBuilding,
  FaFileContract,
} from "react-icons/fa";

export default function InvestorReadyPitch() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [deviceType, setDeviceType] = useState("desktop"); // desktop, tablet, mobile
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
          name: "Cosmic Caz",
          title: "CFO",
          icon: "CC",
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
        { label: "Minimum Investment", value: "$250K" },
        { label: "Structure", value: "1% pre-seed 20% discount" },
        {
          label: "Use of Funds",
          value:
            "Platform completion, Launch retail investor marketing, regulatory approvals",
        },
      ],
      projections: [
        { year: "Year 1", revenue: "$4.5M", users: "50K" },
        { year: "Year 2", revenue: "$18M", users: "200K" },
        { year: "Year 3", revenue: "$65M", users: "500K" },
      ],
      note: "Limited allocation available. Term sheet upon request.",
      visual: "InvestmentVisual",
    },
    {
      id: "cta",
      title: "JOIN THE REVOLUTION",
      subtitle: "Limited Investment Opportunity",
      content:
        "Be part of the platform that democratizes the $12 trillion commercial real estate market.",
      cta: "INVEST NOW",
      contact: "invest@regencollective.xyz",
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

    // Set initial dimensions
    updateDimensions();
  }, []);

  // Set up keyboard navigation and resize listener
  useEffect(() => {
    // Add keyboard navigation
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        handleNextSlide();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        handlePrevSlide();
      }
    };

    // Add resize listener
    const handleResize = () => {
      updateDimensions();
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
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

  // Update dimensions and device type
  const updateDimensions = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    setDimensions({ width, height });

    if (width < 640) {
      setDeviceType("mobile");
    } else if (width < 1024) {
      setDeviceType("tablet");
    } else {
      setDeviceType("desktop");
    }
  };

  const RevenueVisual = () => {
    const revenueData = slides.find((s) => s.id === "revenue");
    if (!revenueData) return null;

    // Sample data for visualization (can be dynamic based on actual data)
    const revenueMetrics = [
      { label: "Recurring", value: 65 },
      { label: "Transactional", value: 35 },
      { label: "Licensing", value: 20 },
    ];

    return (
      <div className="relative flex items-center justify-center w-full h-full">
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg aspect-square relative">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 relative overflow-hidden">
            {/* Visual Header */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#6B7554]/30 via-[#6B7554]/60 to-[#6B7554]/30"></div>

            {/* Animated Revenue Streams Badge */}
            <div className="absolute top-2 sm:top-4 right-2 sm:right-4">
              <div className="px-3 py-1 bg-[#6B7554] text-white text-xs rounded-full shadow-lg animate-pulse">
                <span className="text-[10px] sm:text-xs font-bold tracking-wider">
                  💰 REVENUE
                </span>
              </div>
            </div>

            {/* Visual Metrics Bars */}
            <div className="mt-2 mb-4 sm:mb-6 flex justify-between space-x-2">
              {revenueMetrics.map((metric, i) => (
                <div key={i} className="flex-1">
                  <div className="text-center text-[10px] font-medium text-[#6B7554]/70 mb-1">
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
            <div className="grid grid-cols-1 gap-3 sm:gap-4">
              {revenueData.revenueItems.map((item, i) => (
                <div
                  key={i}
                  className="group relative border border-[#6B7554]/10 rounded-lg p-3 sm:p-4 hover:shadow-md transition-all duration-300 bg-gradient-to-br from-white to-[#6B7554]/5"
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
                      <div className="font-bold text-sm sm:text-base text-[#6B7554] flex items-center">
                        {item.title}
                        <span className="ml-2 text-xs font-normal bg-[#6B7554]/10 px-2 py-0.5 rounded-full">
                          {i === 0
                            ? "Primary"
                            : i === 1
                            ? "Secondary"
                            : "Tertiary"}
                        </span>
                      </div>
                      <div className="text-xs sm:text-sm text-[#6B7554]/70 mt-1">
                        {item.description}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Visual Footer */}
            <div className="mt-4 sm:mt-6 bg-gradient-to-r from-[#6B7554] to-[#6B7554]/90 text-white rounded-lg sm:rounded-xl p-3 text-center shadow-lg">
              <div className="text-sm sm:text-base font-bold tracking-wider">
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

  // Financial Chart Component
  const FinancialChart = ({ data }) => {
    const maxRevenue = Math.max(
      ...data.map((item) => parseFloat(item.revenue.replace(/[^0-9.]/g, "")))
    );

    return (
      <div className="flex justify-between items-end h-24 sm:h-40 mb-2 sm:mb-4">
        {data.map((proj, index) => (
          <div
            key={index}
            className="flex flex-col items-center flex-1 min-w-0"
          >
            <div className="text-[10px] sm:text-xs mb-1 sm:mb-2 text-[#6B7554]/70 truncate w-full text-center">
              {proj.year}
            </div>
            <div
              className="w-full bg-[#6B7554] rounded-t-lg relative flex items-end justify-center transition-all duration-500 ease-out transform hover:scale-105"
              style={{
                height: `${Math.max(
                  20,
                  (parseFloat(proj.revenue.replace(/[^0-9.]/g, "")) /
                    maxRevenue) *
                    100
                )}%`,
                minHeight: "20%",
              }}
            >
              <div className="absolute -top-6 sm:-top-8 w-full text-center">
                <div className="text-xs sm:text-sm font-bold text-[#6B7554] whitespace-nowrap">
                  {proj.revenue}
                </div>
              </div>
            </div>
            <div className="text-[10px] sm:text-xs mt-1 sm:mt-2 text-[#6B7554]/70 truncate w-full text-center">
              {proj.users} users
            </div>
          </div>
        ))}
      </div>
    );
  };

  // Visual components for slides
  const IntroVisual = () => (
    <div className="relative flex items-center justify-center w-full h-full">
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl aspect-square relative">
        <div className="absolute inset-0 rounded-full border-4 sm:border-6 md:border-8 border-[#6B7554]/10 animate-pulse-slow"></div>
        <div className="absolute inset-0 rounded-full border-4 sm:border-6 md:border-8 border-[#6B7554]/20 scale-90 animate-pulse-slow-delay"></div>
        <div className="absolute inset-0 rounded-full border-4 sm:border-6 md:border-8 border-[#6B7554]/30 scale-80 animate-pulse-fast"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#6B7554]">
              $12T
            </div>
            <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mt-2 md:mt-4">
              Market Opportunity
            </div>
          </div>
        </div>

        <div className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#6B7554] text-white rounded-full px-3 sm:px-4 md:px-6 py-1 sm:py-2 whitespace-nowrap">
            <span className="text-xs sm:text-sm md:text-base font-medium">
              $500K+ BARRIER TODAY
            </span>
          </div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-[#6B7554] text-white rounded-full px-3 sm:px-4 md:px-6 py-1 sm:py-2 whitespace-nowrap">
            <span className="text-xs sm:text-sm md:text-base font-bold">
              $100 WITH REGEN
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  const ProblemVisual = () => (
    <div className="relative flex items-center justify-center w-full h-full">
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg aspect-square relative">
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 relative overflow-hidden">
          <div className="absolute top-2 sm:top-4 right-2 sm:right-4 px-2 sm:px-3 py-1 bg-[#6B7554] text-white text-xs rounded-full">
            <span className="text-[10px] sm:text-xs">
              TRADITIONAL REAL ESTATE
            </span>
          </div>

          <div className="mt-8 sm:mt-12">
            <div className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-6 text-[#6B7554]">
              Market Access
            </div>

            <div className="grid grid-cols-10 gap-1">
              {Array.from({ length: 100 }).map((_, i) => (
                <div
                  key={i}
                  className={`aspect-square rounded-md ${
                    i < 1 ? "bg-[#6B7554]" : "bg-[#6B7554]/20"
                  }`}
                ></div>
              ))}
            </div>

            <div className="flex justify-between mt-2 sm:mt-4 text-xs sm:text-sm text-[#6B7554]/70">
              <div>0.1% with access</div>
              <div>99.9% excluded</div>
            </div>

            <div className="mt-4 sm:mt-8">
              <div className="flex justify-between items-center mb-1 sm:mb-2">
                <div className="text-xs sm:text-sm font-medium">
                  Minimum Investment
                </div>
                <div className="text-sm sm:text-lg font-bold text-[#6B7554]">
                  $500,000+
                </div>
              </div>
              <div className="h-1.5 sm:h-2 w-full bg-[#6B7554]/10 rounded-full">
                <div
                  className="h-full bg-[#6B7554] rounded-full"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </div>

            <div className="mt-2 sm:mt-4">
              <div className="flex justify-between items-center mb-1 sm:mb-2">
                <div className="text-xs sm:text-sm font-medium">
                  Liquidity Period
                </div>
                <div className="text-sm sm:text-lg font-bold text-[#6B7554]">
                  18-36 Months
                </div>
              </div>
              <div className="h-1.5 sm:h-2 w-full bg-[#6B7554]/10 rounded-full">
                <div
                  className="h-full bg-[#6B7554] rounded-full"
                  style={{ width: "85%" }}
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
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg aspect-square relative">
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 relative overflow-hidden">
          <div className="absolute top-2 sm:top-4 right-2 sm:right-4 px-2 sm:px-3 py-1 bg-[#6B7554] text-white text-xs rounded-full">
            <span className="text-[10px] sm:text-xs">REGEN COLLECTIVE</span>
          </div>

          <div className="mt-8 sm:mt-12">
            <div className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-6 text-[#6B7554]">
              Market Access
            </div>

            <div className="grid grid-cols-10 gap-1">
              {Array.from({ length: 100 }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-md bg-[#6B7554]"
                ></div>
              ))}
            </div>

            <div className="flex justify-between mt-2 sm:mt-4 text-xs sm:text-sm text-[#6B7554]/70">
              <div>100% with access</div>
              <div>0% excluded</div>
            </div>

            <div className="mt-4 sm:mt-8">
              <div className="flex justify-between items-center mb-1 sm:mb-2">
                <div className="text-xs sm:text-sm font-medium">
                  Minimum Investment
                </div>
                <div className="text-sm sm:text-lg font-bold text-[#6B7554]">
                  $100
                </div>
              </div>
              <div className="h-1.5 sm:h-2 w-full bg-[#6B7554]/10 rounded-full">
                <div
                  className="h-full bg-[#6B7554] rounded-full"
                  style={{ width: "10%" }}
                ></div>
              </div>
            </div>

            <div className="mt-2 sm:mt-4">
              <div className="flex justify-between items-center mb-1 sm:mb-2">
                <div className="text-xs sm:text-sm font-medium">
                  Liquidity Period
                </div>
                <div className="text-sm sm:text-lg font-bold text-[#6B7554]">
                  Instant 24/7
                </div>
              </div>
              <div className="h-1.5 sm:h-2 w-full bg-[#6B7554]/10 rounded-full">
                <div
                  className="h-full bg-[#6B7554] rounded-full"
                  style={{ width: "5%" }}
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
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl relative">
        <div className="grid grid-cols-2 gap-2 sm:gap-4">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-3 sm:p-4 md:p-6 aspect-square flex flex-col items-center justify-center text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full bg-[#6B7554]/10 flex items-center justify-center text-[#6B7554] mb-2 sm:mb-4">
              <FaExchangeAlt className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div className="text-sm sm:text-base md:text-lg font-bold mb-1 sm:mb-2 text-[#6B7554]">
              Tokenization
            </div>
            <div className="text-xs sm:text-sm text-[#6B7554]/70">
              Convert premium properties into accessible tokens
            </div>
          </div>

          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-3 sm:p-4 md:p-6 aspect-square flex flex-col items-center justify-center text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full bg-[#6B7554]/10 flex items-center justify-center text-[#6B7554] mb-2 sm:mb-4">
              <FaBuilding className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div className="text-sm sm:text-base md:text-lg font-bold mb-1 sm:mb-2 text-[#6B7554]">
              Marketplace
            </div>
            <div className="text-xs sm:text-sm text-[#6B7554]/70">
              Buy and sell tokens with zero friction
            </div>
          </div>

          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-3 sm:p-4 md:p-6 aspect-square flex flex-col items-center justify-center text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full bg-[#6B7554]/10 flex items-center justify-center text-[#6B7554] mb-2 sm:mb-4">
              <FaFileContract className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div className="text-sm sm:text-base md:text-lg font-bold mb-1 sm:mb-2 text-[#6B7554]">
              Certificates
            </div>
            <div className="text-xs sm:text-sm text-[#6B7554]/70">
              Verifiable SPV ownership
            </div>
          </div>

          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-3 sm:p-4 md:p-6 aspect-square flex flex-col items-center justify-center text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full bg-[#6B7554]/10 flex items-center justify-center text-[#6B7554] mb-2 sm:mb-4">
              <FaChartLine className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div className="text-sm sm:text-base md:text-lg font-bold mb-1 sm:mb-2 text-[#6B7554]">
              Analytics
            </div>
            <div className="text-xs sm:text-sm text-[#6B7554]/70">
              AI-powered investment insights
            </div>
          </div>
        </div>

        <div className="mt-2 sm:mt-4 bg-[#6B7554] text-white rounded-lg sm:rounded-xl p-2 sm:p-4 text-center">
          <div className="text-sm sm:text-base font-bold">
            Complete End-to-End Platform
          </div>
        </div>
      </div>
    </div>
  );

  const MarketVisual = () => (
    <div className="relative flex items-center justify-center w-full h-full">
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg aspect-square relative">
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 relative">
          <div className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-4 text-[#6B7554]">
            Our Market Opportunity
          </div>

          <div className="relative mb-4 sm:mb-6 pt-2 sm:pt-4">
            <div className="flex justify-between mb-1 text-xs sm:text-sm">
              <div>Commercial Real Estate Market Size</div>
              <div className="font-bold">$12 Trillion</div>
            </div>
            <div className="h-3 sm:h-4 w-full bg-[#6B7554]/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#6B7554] rounded-full"
                style={{ width: "100%" }}
              ></div>
            </div>
          </div>

          <div className="relative mb-4 sm:mb-6">
            <div className="flex justify-between mb-1 text-xs sm:text-sm">
              <div>Currently Tokenized</div>
              <div className="font-bold">&lt; 1% ($120B)</div>
            </div>
            <div className="h-3 sm:h-4 w-full bg-[#6B7554]/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#6B7554] rounded-full"
                style={{ width: "1%" }}
              ></div>
            </div>
          </div>

          <div className="relative py-2 sm:py-4 grid grid-cols-2 gap-2 sm:gap-4">
            <div className="bg-[#6B7554]/10 rounded-lg sm:rounded-xl p-2 sm:p-4 text-center">
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-[#6B7554]">
                400M+
              </div>
              <div className="text-xs sm:text-sm text-[#6B7554]/70">
                Potential Investors
              </div>
            </div>
            <div className="bg-[#6B7554]/10 rounded-lg sm:rounded-xl p-2 sm:p-4 text-center">
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-[#6B7554]">
                $600B
              </div>
              <div className="text-xs sm:text-sm text-[#6B7554]/70">
                Annual Volume
              </div>
            </div>
          </div>

          <div className="mt-2 sm:mt-4 bg-[#6B7554] text-white rounded-lg sm:rounded-xl p-2 sm:p-4 text-center">
            <div className="text-sm sm:text-base font-bold">
              First-Mover Advantage
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const TractionVisual = () => (
    <div className="relative flex items-center justify-center w-full h-full">
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg aspect-square relative">
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 relative">
          <div className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-6 text-[#6B7554]">
            Milestones Achieved
          </div>

          <div className="space-y-2 sm:space-y-4">
            <div className="flex items-center">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#6B7554] text-white flex items-center justify-center mr-2 sm:mr-4 flex-shrink-0">
                <svg
                  width="16"
                  height="16"
                  sm:width="20"
                  sm:height="20"
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
                <div className="text-sm sm:text-base font-medium">
                  Platform Development
                </div>
                <div className="text-xs sm:text-sm text-[#6B7554]/70">
                  MVP 80% complete
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#6B7554] text-white flex items-center justify-center mr-2 sm:mr-4 flex-shrink-0">
                <svg
                  width="16"
                  height="16"
                  sm:width="20"
                  sm:height="20"
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
                <div className="text-sm sm:text-base font-medium">
                  Regulatory Framework
                </div>
                <div className="text-xs sm:text-sm text-[#6B7554]/70">
                  47+ jurisdictions
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#6B7554] text-white flex items-center justify-center mr-2 sm:mr-4 flex-shrink-0">
                <svg
                  width="16"
                  height="16"
                  sm:width="20"
                  sm:height="20"
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
                <div className="text-sm sm:text-base font-medium">
                  Property Partnerships
                </div>
                <div className="text-xs sm:text-sm text-[#6B7554]/70">
                  3 major developers
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#6B7554] text-white flex items-center justify-center mr-2 sm:mr-4 flex-shrink-0">
                <svg
                  width="16"
                  height="16"
                  sm:width="20"
                  sm:height="20"
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
                <div className="text-sm sm:text-base font-medium">
                  Investor Waitlist
                </div>
                <div className="text-xs sm:text-sm text-[#6B7554]/70">
                  15,000+ potential investors
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#6B7554] text-white flex items-center justify-center mr-2 sm:mr-4 flex-shrink-0">
                <svg
                  width="16"
                  height="16"
                  sm:width="20"
                  sm:height="20"
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
                <div className="text-sm sm:text-base font-medium">
                  Initial Property Portfolio
                </div>
                <div className="text-xs sm:text-sm text-[#6B7554]/70">
                  3 premium properties secured
                </div>
              </div>
            </div>
          </div>

          <div className="mt-3 sm:mt-6 bg-[#6B7554] text-white rounded-lg sm:rounded-xl p-2 sm:p-4 text-center">
            <div className="text-sm sm:text-base font-bold">
              $85M in Properties Ready for Tokenization
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const RoadmapVisual = () => (
    <div className="relative flex items-center justify-center w-full h-full">
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg aspect-square relative">
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 relative">
          <div className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-6 text-[#6B7554]">
            Growth Trajectory
          </div>

          <div className="grid grid-cols-2 gap-2 sm:gap-4">
            <div className="bg-[#6B7554]/10 rounded-lg sm:rounded-xl p-3 sm:p-4">
              <div className="text-xs sm:text-sm text-[#6B7554]/70">
                Q3 2025
              </div>
              <div className="font-bold text-sm sm:text-base md:text-lg mb-1 sm:mb-2 text-[#6B7554]">
                LAUNCH
              </div>
              <ul className="text-xs sm:text-sm space-y-0.5 sm:space-y-1">
                <li className="flex items-start">
                  <div className="w-1 h-1 rounded-full bg-[#6B7554] mt-1.5 mr-1 sm:mr-2"></div>
                  <span>First 3 properties tokenized</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1 h-1 rounded-full bg-[#6B7554] mt-1.5 mr-1 sm:mr-2"></div>
                  <span>Platform launch</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1 h-1 rounded-full bg-[#6B7554] mt-1.5 mr-1 sm:mr-2"></div>
                  <span>25,000 initial users</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#6B7554]/10 rounded-lg sm:rounded-xl p-3 sm:p-4">
              <div className="text-xs sm:text-sm text-[#6B7554]/70">
                Q4 2025
              </div>
              <div className="font-bold text-sm sm:text-base md:text-lg mb-1 sm:mb-2 text-[#6B7554]">
                EXPAND
              </div>
              <ul className="text-xs sm:text-sm space-y-0.5 sm:space-y-1">
                <li className="flex items-start">
                  <div className="w-1 h-1 rounded-full bg-[#6B7554] mt-1.5 mr-1 sm:mr-2"></div>
                  <span>10+ more properties</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1 h-1 rounded-full bg-[#6B7554] mt-1.5 mr-1 sm:mr-2"></div>
                  <span>Secondary market launch</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1 h-1 rounded-full bg-[#6B7554] mt-1.5 mr-1 sm:mr-2"></div>
                  <span>Mobile app release</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#6B7554]/10 rounded-lg sm:rounded-xl p-3 sm:p-4">
              <div className="text-xs sm:text-sm text-[#6B7554]/70">
                Q1 2026
              </div>
              <div className="font-bold text-sm sm:text-base md:text-lg mb-1 sm:mb-2 text-[#6B7554]">
                GROW
              </div>
              <ul className="text-xs sm:text-sm space-y-0.5 sm:space-y-1">
                <li className="flex items-start">
                  <div className="w-1 h-1 rounded-full bg-[#6B7554] mt-1.5 mr-1 sm:mr-2"></div>
                  <span>International expansion</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1 h-1 rounded-full bg-[#6B7554] mt-1.5 mr-1 sm:mr-2"></div>
                  <span>AI analytics suite</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1 h-1 rounded-full bg-[#6B7554] mt-1.5 mr-1 sm:mr-2"></div>
                  <span>50,000+ investors</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#6B7554]/10 rounded-lg sm:rounded-xl p-3 sm:p-4">
              <div className="text-xs sm:text-sm text-[#6B7554]/70">
                Q2 2026
              </div>
              <div className="font-bold text-sm sm:text-base md:text-lg mb-1 sm:mb-2 text-[#6B7554]">
                DOMINATE
              </div>
              <ul className="text-xs sm:text-sm space-y-0.5 sm:space-y-1">
                <li className="flex items-start">
                  <div className="w-1 h-1 rounded-full bg-[#6B7554] mt-1.5 mr-1 sm:mr-2"></div>
                  <span>50+ premium properties</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1 h-1 rounded-full bg-[#6B7554] mt-1.5 mr-1 sm:mr-2"></div>
                  <span>100,000+ active users</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1 h-1 rounded-full bg-[#6B7554] mt-1.5 mr-1 sm:mr-2"></div>
                  <span>Institutional partnerships</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-3 sm:mt-6 bg-[#6B7554] text-white rounded-lg sm:rounded-xl p-2 sm:p-4 text-center">
            <div className="text-sm sm:text-base font-bold">
              $500M in Tokenized Assets by Q4 2026
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
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg aspect-square relative">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 relative">
            <div className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-6 text-[#6B7554]">
              Team & Advisors
            </div>

            {/* Team Section with Header */}
            <div className="mb-4 sm:mb-6">
              <div className="flex items-center mb-2 sm:mb-3">
                <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#6B7554] mr-2"></div>
                <h3 className="text-sm sm:text-base font-semibold text-[#6B7554]">
                  Core Team
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-2 sm:gap-4">
                {slide.team?.map((member, index) => (
                  <div
                    key={`team-${index}`}
                    className="bg-[#6B7554]/10 rounded-lg sm:rounded-xl p-3 sm:p-4 border-l-4 border-[#6B7554]"
                  >
                    <div className="flex items-center mb-2 sm:mb-3">
                      <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-[#6B7554] text-white flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0">
                        <div className="text-sm sm:text-base font-bold">
                          {member.icon}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm sm:text-base font-bold">
                          {member.name}
                        </div>
                        <div className="text-[10px] sm:text-xs text-[#6B7554]/70">
                          {member.title}
                        </div>
                      </div>
                    </div>
                    <div className="text-[10px] sm:text-xs text-[#6B7554]/70">
                      {member.background}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Advisors Section with Header */}
            <div className="mb-4 sm:mb-6">
              <div className="flex items-center mb-2 sm:mb-3">
                <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#6B7554] mr-2"></div>
                <h3 className="text-sm sm:text-base font-semibold text-[#6B7554]">
                  Advisors & Investors
                </h3>
              </div>
              <div className="grid grid-cols-1 gap-2 sm:gap-4">
                {slide.advisors?.map((advisor, i) => (
                  <div
                    key={`advisor-${i}`}
                    className="bg-[#6B7554]/10 rounded-lg sm:rounded-xl p-3 sm:p-4 border-l-4 border-[#6B7554]/50"
                  >
                    <div className="flex items-center mb-2 sm:mb-3">
                      <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-[#6B7554] text-white flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0">
                        <div className="text-sm sm:text-base font-bold">
                          {advisor.name.charAt(0)}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm sm:text-base font-bold">
                          {advisor.name}
                        </div>
                        <div className="text-[10px] sm:text-xs text-[#6B7554]/70">
                          {advisor.title}
                        </div>
                      </div>
                    </div>
                    <div className="text-[10px] sm:text-xs text-[#6B7554]/70">
                      {advisor.company}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Footer */}
            <div className="bg-[#6B7554] text-white rounded-lg sm:rounded-xl p-2 sm:p-4 text-center space-y-1 sm:space-y-2">
              <div className="text-sm sm:text-base font-bold">
                85+ Years Combined Relevant Experience
              </div>
              <div className="text-xs sm:text-sm font-medium">
                Industry Leaders Backing Our Vision
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const InvestmentVisual = () => (
    <div className="relative flex items-center justify-center w-full h-full">
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg aspect-square relative">
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 relative">
          <div className="absolute top-3 sm:top-6 right-3 sm:right-6 px-2 sm:px-4 py-1 sm:py-2 bg-[#6B7554] text-white text-xs sm:text-sm font-bold rounded-md sm:rounded-lg">
            SEED ROUND
          </div>

          <div className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-6 text-[#6B7554]">
            Investment Terms
          </div>

          <div className="grid grid-cols-2 gap-2 sm:gap-4">
            {slides
              .find((s) => s.id === "investment")
              .terms.map((term, index) => (
                <div
                  key={index}
                  className="bg-[#6B7554]/10 rounded-lg sm:rounded-xl p-3 sm:p-4"
                >
                  <div className="text-xs sm:text-sm text-[#6B7554]/70 mb-0.5 sm:mb-1">
                    {term.label}
                  </div>
                  <div className="text-sm sm:text-base font-bold">
                    {term.value}
                  </div>
                </div>
              ))}
          </div>

          <div className="mt-3 sm:mt-6 text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-[#6B7554]">
            Financial Projections
          </div>

          <div className="flex justify-between items-end h-24 sm:h-40 mb-2 sm:mb-4">
            {slides
              .find((s) => s.id === "investment")
              .projections.map((proj, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="text-[10px] sm:text-xs mb-1 sm:mb-2 text-[#6B7554]/70">
                    {proj.year}
                  </div>
                  <div
                    className="w-10 sm:w-16 bg-[#6B7554] rounded-t-lg relative flex items-end justify-center"
                    style={{
                      height: `${
                        (parseInt(proj.revenue.replace(/[^0-9.]/g, "")) / 65) *
                        100
                      }%`,
                    }}
                  >
                    <div className="absolute -top-4 sm:-top-6 w-full text-center">
                      <div className="text-xs sm:text-sm font-bold text-[#6B7554]">
                        {proj.revenue}
                      </div>
                    </div>
                  </div>
                  <div className="text-[10px] sm:text-xs mt-1 sm:mt-2 text-[#6B7554]/70">
                    {proj.users} users
                  </div>
                </div>
              ))}
          </div>

          <div className="mt-2 bg-[#6B7554] text-white rounded-lg sm:rounded-xl p-2 sm:p-4 text-center">
            <div className="text-sm sm:text-base font-bold">
              Limited Allocation Available
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const CTAVisual = () => (
    <div className="relative flex items-center justify-center w-full h-full">
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg aspect-square relative">
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-8 h-full flex flex-col items-center justify-center text-center">
          <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-[#6B7554] flex items-center justify-center mb-3 sm:mb-6">
            <div className="text-2xl sm:text-4xl font-bold text-white">R</div>
          </div>

          <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4 text-[#6B7554]">
            REGEN COLLECTIVE
          </div>
          <div className="text-base sm:text-lg md:text-xl mb-3 sm:mb-6 text-[#6B7554]/80">
            Democratizing Commercial Real Estate
          </div>

          <div className="mb-3 sm:mb-6 px-2 sm:px-8">
            <div className="text-sm sm:text-base md:text-lg text-[#6B7554]/70">
              Be part of the platform that unlocks the $12 trillion commercial
              real estate market.
            </div>
          </div>

          <button className="px-6 sm:px-10 py-2 sm:py-4 bg-[#6B7554] text-white rounded-lg sm:rounded-xl font-bold text-base sm:text-xl shadow-lg transform transition-all duration-300 hover:shadow-xl hover:bg-[#8A9B6A]">
            INVEST NOW
          </button>

          <div className="mt-3 sm:mt-6 text-sm sm:text-base text-[#6B7554]">
            invest@regencollective.xyz
          </div>

          <div className="absolute bottom-3 sm:bottom-6 left-0 right-0 text-center">
            <div className="text-[10px] sm:text-sm text-[#6B7554]/50">
              Term sheet available upon request
            </div>
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
    <div className="fixed top-3 sm:top-6 left-3 sm:left-6 z-30 flex items-center">
      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#6B7554] flex items-center justify-center">
        <span className="text-sm sm:text-base text-[#F7F5F0] font-bold">R</span>
      </div>
      <span className="ml-2 sm:ml-3 text-base sm:text-xl font-bold text-[#6B7554]">
        REGEN
      </span>
    </div>
  );

  // Navigation Controls
  const NavigationControls = () => (
    <>
      <button
        className={`fixed left-2 sm:left-6 top-1/2 transform -translate-y-1/2 z-30 w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
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
          className="sm:w-6 sm:h-6"
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
        className={`fixed right-2 sm:right-6 top-1/2 transform -translate-y-1/2 z-30 w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
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
          className="sm:w-6 sm:h-6"
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
    <div className="fixed bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex space-x-1 sm:space-x-2">
      {slides.map((_, index) => (
        <button
          key={index}
          className={`h-1 sm:h-1.5 rounded-full transition-all duration-300 ${
            index === currentSlide
              ? "w-6 sm:w-10 bg-[#6B7554]"
              : "w-2 sm:w-4 bg-[#6B7554]/30 hover:bg-[#6B7554]/50"
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
    <div className="fixed bottom-3 sm:bottom-6 right-3 sm:right-6 z-30 text-[#6B7554]/70 text-xs sm:text-sm">
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
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-[#6B7554]/30 border-t-[#6B7554] animate-spin mb-4 sm:mb-6"></div>
        <div className="text-xl sm:text-2xl font-bold text-[#6B7554]">
          REGEN COLLECTIVE
        </div>
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
            className={`absolute inset-0 flex flex-col-reverse md:flex-row items-center justify-center px-4 sm:px-6 md:px-12 pt-16 pb-12 md:pt-0 md:pb-0 transition-all duration-500 ${
              index === currentSlide
                ? "opacity-100 translate-y-0 z-20"
                : index < currentSlide
                ? "opacity-0 -translate-y-12 z-10 pointer-events-none"
                : "opacity-0 translate-y-12 z-10 pointer-events-none"
            }`}
          >
            {/* Left side content */}
            <div className="w-full md:w-1/2 max-w-xl md:pr-8 mb-6 md:mb-0 overflow-y-auto max-h-[calc(100vh-8rem)] scrollbar-hide">
              <div className="max-w-lg mx-auto md:mx-0">
                {/* Slide title */}
                <div className="mb-1 sm:mb-2 text-xs sm:text-sm md:text-base text-[#6B7554]/70 tracking-wider font-medium">
                  REGEN COLLECTIVE
                  {slide.callout && (
                    <span className="ml-2 sm:ml-4 px-1.5 sm:px-2 py-0.5 sm:py-1 bg-[#6B7554] text-white text-[10px] sm:text-xs rounded-md">
                      {slide.callout}
                    </span>
                  )}
                </div>

                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2 md:mb-3">
                  {slide.title}
                </h1>

                <div className="h-1 w-10 sm:w-16 bg-[#6B7554] opacity-50 mb-2 sm:mb-4 md:mb-6"></div>

                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium mb-2 sm:mb-4 md:mb-6">
                  {slide.subtitle}
                </h3>

                {/* Main content */}
                {slide.content && (
                  <p className="text-sm sm:text-base md:text-lg mb-2 sm:mb-4 md:mb-6">
                    {slide.content}
                  </p>
                )}

                {/* Bullet points */}
                {slide.points && (
                  <ul className="space-y-1 sm:space-y-2 md:space-y-3 mb-3 sm:mb-4 md:mb-6">
                    {slide.points.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#6B7554] mt-1.5 mr-2 sm:mr-3 flex-shrink-0"></div>
                        <span
                          className="text-sm sm:text-base"
                          dangerouslySetInnerHTML={{ __html: point }}
                        ></span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Feature grid */}
                {slide.features && (
                  <div className="grid grid-cols-1 gap-2 sm:gap-4 mb-3 sm:mb-4 md:mb-6">
                    {slide.features.map((feature, i) => (
                      <div
                        key={i}
                        className="bg-white rounded-lg p-3 sm:p-4 shadow-sm flex items-start transition-transform duration-300 hover:transform hover:scale-105"
                      >
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#6B7554]/10 flex items-center justify-center text-[#6B7554] mr-3 sm:mr-4 flex-shrink-0">
                          {feature.icon}
                        </div>
                        <div>
                          <div className="text-sm sm:text-base font-bold mb-0.5 sm:mb-1">
                            {feature.title}
                          </div>
                          <div className="text-xs sm:text-sm text-[#6B7554]/70">
                            {feature.description}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Market stats */}
                {slide.stats && (
                  <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4 md:mb-6">
                    {slide.stats.map((stat, i) => (
                      <div
                        key={i}
                        className="bg-white rounded-lg p-2 sm:p-4 shadow-sm text-center transition-all duration-300 hover:shadow-md"
                      >
                        <div className="text-lg sm:text-xl md:text-2xl font-bold mb-0.5 sm:mb-1 text-[#6B7554]">
                          {stat.value}
                        </div>
                        <div className="text-xs sm:text-sm text-[#6B7554]/70">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Achievement list */}
                {slide.achievements && (
                  <ul className="space-y-1 sm:space-y-2 md:space-y-3 mb-3 sm:mb-4 md:mb-6">
                    {slide.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#6B7554]/10 flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0">
                          <svg
                            width="10"
                            height="10"
                            className="sm:w-3 sm:h-3"
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
                        <span className="text-sm sm:text-base">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Roadmap stages */}
                {slide.stages && deviceType === "mobile" && (
                  <div className="space-y-2 sm:space-y-4 mb-3 sm:mb-4 md:mb-6">
                    {slide.stages.map((stage, i) => (
                      <div
                        key={i}
                        className="bg-white rounded-lg p-3 sm:p-4 shadow-sm"
                      >
                        <div className="text-xs sm:text-sm text-[#6B7554]/70 mb-0.5 sm:mb-1">
                          {stage.quarter}
                        </div>
                        <div className="text-sm sm:text-base font-bold mb-1 sm:mb-2">
                          {stage.title}
                        </div>
                        <ul className="space-y-0.5 sm:space-y-1">
                          {stage.points.map((point, j) => (
                            <li
                              key={j}
                              className="text-xs sm:text-sm flex items-start"
                            >
                              <div className="w-1 h-1 rounded-full bg-[#6B7554] mt-1.5 mr-1 sm:mr-2 flex-shrink-0"></div>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                {/* Investment terms */}
                {slide.terms && deviceType === "mobile" && (
                  <div className="space-y-2 sm:space-y-4 mb-3 sm:mb-4 md:mb-6">
                    {slide.terms.map((term, i) => (
                      <div
                        key={i}
                        className="bg-white rounded-lg p-3 sm:p-4 shadow-sm"
                      >
                        <div className="text-xs sm:text-sm text-[#6B7554]/70 mb-0.5 sm:mb-1">
                          {term.label}
                        </div>
                        <div className="text-sm sm:text-base font-bold">
                          {term.value}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Revenue Items */}
                {slide.revenueItems && (
                  <div className="grid grid-cols-1 gap-2 sm:gap-4 mb-3 sm:mb-4 md:mb-6">
                    {slide.revenueItems.map((item, i) => (
                      <div
                        key={i}
                        className="border border-[#6B7554]/20 rounded-lg p-3 sm:p-4 hover:border-[#6B7554]/40 transition-all duration-300"
                      >
                        <div className="font-bold mb-1 sm:mb-2 text-sm sm:text-base">
                          {item.title}
                        </div>
                        <div className="text-xs sm:text-sm text-[#6B7554]/70">
                          {item.description}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Investment note */}
                {slide.note && (
                  <div className="text-xs sm:text-sm italic text-[#6B7554]/70 mb-3 sm:mb-4 md:mb-6">
                    {slide.note}
                  </div>
                )}

                {/* CTA button */}
                {slide.cta && (
                  <div className={deviceType === "mobile" ? "text-center" : ""}>
                    <button className="px-6 sm:px-8 py-2 sm:py-3 bg-[#6B7554] text-white rounded-lg font-bold text-sm sm:text-base md:text-lg shadow-lg transform transition-all duration-300 hover:shadow-xl hover:bg-[#8A9B6A] hover:scale-105">
                      {slide.cta}
                    </button>
                    {slide.contact && (
                      <div className="mt-2 sm:mt-3 text-xs sm:text-sm">
                        {slide.contact}
                      </div>
                    )}
                  </div>
                )}

                {/* Bottom stats highlight */}
                {slide.stat && (
                  <div className="mt-3 sm:mt-6 md:mt-8 bg-white rounded-lg p-3 sm:p-4 shadow-sm">
                    <div className="text-sm sm:text-base md:text-lg font-medium text-center">
                      {slide.stat}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right side visual */}
            <div className="w-full md:w-1/2 flex items-center justify-center">
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

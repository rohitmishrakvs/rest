"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

// Move plans data outside component to prevent recreation on each render
const plans = [
  {
    id: "house",
    name: "House",
    price: 9,
    features: [
      "50 generations per month",
      "Basic image editing",
      "Standard resolution",
      "Email support",
    ],
    ctaText: "Start Free Trial",
    ctaLink: "/signup?plan=house",
    popular: false,
  },
  {
    id: "village",
    name: "Village",
    price: 29,
    features: [
      "200 generations per month",
      "Advanced image editing",
      "High resolution",
      "Priority support",
      "Custom styles",
    ],
    ctaText: "Start Free Trial",
    ctaLink: "/signup?plan=village",
    popular: true,
  },
  {
    id: "town",
    name: "Town",
    price: 79,
    features: [
      "500 generations per month",
      "Full image editing suite",
      "4K resolution",
      "24/7 support",
      "Custom styles",
      "API access",
    ],
    ctaText: "Start Free Trial",
    ctaLink: "/signup?plan=town",
    popular: false,
  },
  {
    id: "city",
    name: "City",
    price: 149,
    features: [
      "Unlimited generations",
      "Full image editing suite",
      "8K resolution",
      "Dedicated support",
      "Custom styles",
      "API access",
      "White-label options",
    ],
    ctaText: "Contact Sales",
    ctaLink: "/contact?plan=city",
    popular: false,
  },
  {
    id: "country",
    name: "Country",
    price: 299,
    features: [
      "Unlimited generations",
      "Enterprise editing suite",
      "8K+ resolution",
      "Dedicated account manager",
      "Custom integrations",
      "Full API access",
      "White-label solutions",
      "SLA guarantee",
    ],
    ctaText: "Contact Sales",
    ctaLink: "/contact?plan=country",
    popular: false,
  },
  {
    id: "continent",
    name: "Continent",
    price: 599,
    features: [
      "Unlimited everything",
      "Custom enterprise solutions",
      "Unlimited resolution",
      "24/7 dedicated support",
      "Custom development",
      "Enterprise API",
      "Full white-label",
      "Custom SLA",
      "On-premise deployment",
    ],
    ctaText: "Contact Sales",
    ctaLink: "/contact?plan=continent",
    popular: false,
  },
];

export default function Pricing() {
  const [scrollAmount, setScrollAmount] = useState(320);

  // Set document title and meta description for SEO
  useEffect(() => {
    document.title = "Pricing - MagicMoments";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Choose the perfect plan for your needs. Simple, transparent pricing with no hidden fees.');
    }

    // Set responsive scroll amount based on screen size
    const updateScrollAmount = () => {
      setScrollAmount(window.innerWidth < 640 ? 280 : 320);
    };

    updateScrollAmount();
    window.addEventListener('resize', updateScrollAmount);
    return () => window.removeEventListener('resize', updateScrollAmount);
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    const container = document.getElementById('pricing-container');
    if (container) {
      const scrollDistance = direction === 'left' ? -scrollAmount : scrollAmount;
      container.scrollBy({ left: scrollDistance, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Choose the plan that's right for you. All plans include our core features with no hidden fees.
          </p>
        </header>

        {/* Pricing Cards Container with Navigation Arrows */}
        <div className="relative max-w-7xl mx-auto">
          {/* Left Arrow */}
          <button
            className="absolute left-2 sm:left-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 shadow-lg rounded-full p-2 sm:p-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 lg:hidden focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            onClick={() => handleScroll('left')}
            aria-label="Scroll left to see previous pricing plans"
            type="button"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            className="absolute right-2 sm:right-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 shadow-lg rounded-full p-2 sm:p-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 lg:hidden focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            onClick={() => handleScroll('right')}
            aria-label="Scroll right to see more pricing plans"
            type="button"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Pricing Cards */}
          <div 
            id="pricing-container"
            className="flex overflow-x-auto gap-4 sm:gap-6 pb-4 pt-4 px-12 sm:px-16 lg:px-0 lg:grid lg:grid-cols-2 lg:gap-6 xl:grid-cols-3 2xl:grid-cols-6 lg:overflow-visible [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            role="list"
            aria-label="Pricing plans"
          >
            {plans.map((plan) => (
              <article
                className={`flex-shrink-0 w-72 sm:w-80 h-[480px] sm:h-[520px] lg:w-auto lg:h-auto lg:min-h-[520px] bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6 flex flex-col relative ${
                  plan.popular ? 'ring-2 ring-purple-500 transform scale-105' : ''
                }`}
                key={plan.id}
                role="listitem"
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-purple-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}

                <header className="mb-4 sm:mb-6">
                  <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 pt-3 sm:pt-2">{plan.name}</h2>
                  <div>
                    <span className="text-3xl sm:text-4xl font-bold">${plan.price}</span>
                    <span className="text-gray-600 dark:text-gray-300 text-sm">/month</span>
                  </div>
                </header>

                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 flex-grow overflow-y-auto" role="list">
                  {plan.features.map((feature, index) => (
                    <li key={`${plan.id}-feature-${index}`} className="flex items-start" role="listitem">
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 sm:mr-3 mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-xs sm:text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.ctaLink}
                  className={`block text-center py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg font-medium mt-auto transition-colors duration-200 text-sm sm:text-base focus:outline-none ${
                    plan.popular
                      ? "bg-purple-600 text-white hover:bg-purple-700 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                  }`}
                  aria-label={`${plan.ctaText} for ${plan.name} plan at $${plan.price} per month`}
                >
                  {plan.ctaText}
                </Link>
              </article>
            ))}
          </div>

          {/* Scroll Indicators for Mobile/Tablet */}
          <div className="flex justify-center mt-4 sm:mt-6 lg:hidden" role="complementary" aria-label="Navigation hint">
            <div className="flex items-center space-x-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
                <span>Swipe or use arrows</span>
                <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-8 sm:mt-12 text-center">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 sm:p-8 max-w-2xl mx-auto shadow-sm">
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Need a custom solution?</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-4 sm:mb-6">
              We offer custom enterprise solutions tailored to your specific needs.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 rounded-md px-2 py-1"
            >
              Contact our sales team
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}

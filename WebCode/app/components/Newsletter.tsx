"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call - replace with actual newsletter signup logic
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSubmitted(true);
      setEmail("");
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section className="mt-12 text-center bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-8">
        <div className="max-w-md mx-auto">
          <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg 
              className="w-8 h-8 text-green-600 dark:text-green-400" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
            Thank You!
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            You've successfully subscribed to our newsletter. Check your inbox for a confirmation email.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="mt-12 text-center bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-8">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
          Stay Updated
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Subscribe to our newsletter for the latest articles, tutorials, and AI art trends
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200"
                required
                disabled={isSubmitting}
                aria-describedby={error ? "email-error" : undefined}
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting || !email.trim()}
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 text-white rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 disabled:cursor-not-allowed min-w-[120px]"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg 
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Subscribing...
                </span>
              ) : (
                "Subscribe"
              )}
            </button>
          </div>
          
          {error && (
            <div 
              id="email-error" 
              className="text-red-600 dark:text-red-400 text-sm text-left"
              role="alert"
            >
              {error}
            </div>
          )}
        </form>
        
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}

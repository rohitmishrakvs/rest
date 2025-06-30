"use client";

import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import { createClient } from "pexels";

interface Photo {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  photographer: string;
  photographerUrl: string;
}

export default function Gallery() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Memoized fetch function to prevent unnecessary re-renders
  const fetchPhotos = useCallback(async () => {
    // Check if API key is available
    const apiKey = process.env.NEXT_PUBLIC_PEXELS_API_KEY;
    if (!apiKey) {
      setError("API key is not configured. Please add NEXT_PUBLIC_PEXELS_API_KEY to your environment variables.");
      setLoading(false);
      return;
    }

    try {
      const client = createClient(apiKey);
      const response = await client.photos.search({
        query: "ai generated art",
        per_page: 80,
      });

      if ("error" in response) {
        throw new Error(response.error);
      }

      // Enhanced data mapping with better fallbacks
      const formattedPhotos = response.photos.map((photo) => ({
        id: photo.id,
        title: photo.alt || `AI Art ${photo.id}`,
        description: photo.alt || "AI-generated artwork",
        image: photo.src.large2x,
        tags: ["AI Art", "Digital", "Creative"],
        photographer: photo.photographer,
        photographerUrl: photo.photographer_url,
      }));

      setPhotos(formattedPhotos);
    } catch (err) {
      console.error("Gallery fetch error:", err);
      setError(
        err instanceof Error 
          ? err.message 
          : "Failed to load gallery images. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPhotos();
  }, [fetchPhotos]);

  // Retry function for better user experience
  const handleRetry = useCallback(() => {
    setError(null);
    setLoading(true);
    fetchPhotos();
  }, [fetchPhotos]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Loading gallery...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="mb-4">
            <svg className="mx-auto h-12 w-12 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Unable to Load Gallery
          </h2>
          <p className="text-red-500 mb-6 text-sm">{error}</p>
          <button
            onClick={handleRetry}
            className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors"
            aria-label="Retry loading gallery"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* SEO-optimized header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            AI Art Gallery
          </h1>
          <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore our curated collection of AI-generated artwork from talented creators around the world
          </p>
        </header>

        {/* Gallery grid with performance optimizations */}
        <main>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {photos.map((photo) => (
              <article
                key={photo.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="relative aspect-square">
                  <Image
                    src={photo.image}
                    alt={photo.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white line-clamp-1">
                    {photo.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">
                    {photo.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                    <span>By {photo.photographer}</span>
                    <div className="flex gap-1">
                      {photo.tags.slice(0, 2).map((tag, index) => (
                        <span 
                          key={index}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </main>

        {/* Show total count for better UX */}
        {photos.length > 0 && (
          <footer className="text-center mt-12">
            <p className="text-gray-600 dark:text-gray-300">
              Showing {photos.length} artworks
            </p>
          </footer>
        )}
      </div>
    </div>
  );
}

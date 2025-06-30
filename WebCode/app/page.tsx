import { Suspense } from "react";
import dynamic from "next/dynamic";

// Dynamic imports for better code splitting and performance
const Hero = dynamic(() => import("./components/Hero"), {
  loading: () => <div className="h-screen bg-gray-100 animate-pulse" />,
});

const Features = dynamic(() => import("./components/Features"), {
  loading: () => <div className="py-20 bg-gray-100 animate-pulse" />,
});

const FontShowcase = dynamic(() => import("./components/FontShowcase"), {
  loading: () => <div className="py-16 bg-gray-100 animate-pulse" />,
  ssr: false, // This component uses many fonts, load it client-side only
});

const Gallery = dynamic(() => import("./components/Gallery"), {
  loading: () => <div className="py-20 bg-gray-100 animate-pulse" />,
});

// Moved features data outside component to prevent re-creation on each render
const features = [
  {
    title: "AI-Powered Generation",
    description:
      "Create unique illustrations and logos in seconds using advanced AI technology",
  },
  {
    title: "Professional Quality",
    description:
      "Get high-resolution, print-ready artwork suitable for any project",
  },
  {
    title: "Easy to Use",
    description:
      "Simple text prompts transform into beautiful artwork with just a few clicks",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Suspense fallback={<div className="h-screen bg-gray-100 animate-pulse" />}>
        <Hero />
      </Suspense>
      
      <Suspense fallback={<div className="py-20 bg-gray-100 animate-pulse" />}>
        <Features features={features} />
      </Suspense>
      
      <Suspense fallback={<div className="py-16 bg-gray-100 animate-pulse" />}>
        <FontShowcase />
      </Suspense>
      
      <Suspense fallback={<div className="py-20 bg-gray-100 animate-pulse" />}>
        <Gallery />
      </Suspense>
    </div>
  );
}

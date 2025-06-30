import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster="/2.png"
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/Professional_Mode_The_dog_jumps_onto_the_man_s_lap.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 text-white">
          MagicMoments
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 text-white max-w-3xl mx-auto">
          Transform your ideas into stunning illustrations and logos with AI
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/demo"
            className="px-8 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors"
          >
            Try Demo
          </Link>
          <Link
            href="/pricing"
            className="px-8 py-3 border border-white text-white rounded-full hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 transition-colors"
          >
            View Pricing
          </Link>
        </div>
      </div>
    </section>
  );
}

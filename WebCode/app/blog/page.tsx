import BlogPostCard from "../components/BlogPostCard";
import Newsletter from "../components/Newsletter";

// OPTIMIZATION: Move static data outside component to prevent recreation on each render
const blogPosts = [
  {
    id: "future-ai-art",
    title: "The Future of AI Art Generation",
    excerpt:
      "Exploring the latest advancements in AI art generation and what they mean for creatives",
    date: "March 15, 2024",
    readTime: 5,
    image: "/1.png",
    link: "/blog/future-ai-art",
  },
  {
    id: "ai-art-prompts",
    title: "10 Tips for Better AI Art Prompts",
    excerpt:
      "Learn how to write more effective prompts to get the best results from AI art generators",
    date: "March 12, 2024",
    readTime: 8,
    image: "/2.png",
    link: "/blog/ai-art-prompts",
  },
  {
    id: "commercial-ai-art",
    title: "AI Art in Commercial Projects",
    excerpt:
      "How businesses are leveraging AI-generated art in their marketing and branding",
    date: "March 10, 2024",
    readTime: 6,
    image: "/3.png",
    link: "/blog/commercial-ai-art",
  },
  {
    id: "ethics-ai-art",
    title: "Ethics in AI Art Generation",
    excerpt:
      "Understanding the ethical considerations and best practices in AI art creation",
    date: "March 8, 2024",
    readTime: 7,
    image: "/4.png",
    link: "/blog/ethics-ai-art",
  },
  {
    id: "custom-ai-styles",
    title: "Customizing AI Art Styles",
    excerpt:
      "A deep dive into creating and fine-tuning custom art styles with AI",
    date: "March 5, 2024",
    readTime: 9,
    image: "/5.png",
    link: "/blog/custom-ai-styles",
  },
  {
    id: "ai-art-social-media",
    title: "AI Art for Social Media",
    excerpt:
      "How to create engaging AI-generated content for your social media presence",
    date: "March 3, 2024",
    readTime: 6,
    image: "/6.png",
    link: "/blog/ai-art-social-media",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* SEO-optimized header section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            AI Art Blog
          </h1>
          <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Latest insights and updates about AI art generation, tutorials, and industry trends
          </p>
        </header>

        {/* Blog posts grid with optimized rendering */}
        <main>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        </main>

        {/* Newsletter section */}
        <aside>
          <Newsletter />
        </aside>
      </div>
    </div>
  );
}

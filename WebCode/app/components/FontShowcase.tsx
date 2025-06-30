// Only show fonts that are actually loaded in layout.tsx to avoid loading unused fonts
const fonts = [
  {
    name: "Inter",
    text: "AI Art Generator",
    className: "font-['Inter',_sans-serif]",
    description: "Modern, clean, and highly readable"
  },
  {
    name: "Dancing Script",
    text: "AI Art Generator",
    className: "font-['Dancing_Script',_cursive]",
    description: "Elegant handwritten style"
  },
  {
    name: "Playfair Display",
    text: "AI Art Generator",
    className: "font-['Playfair_Display',_serif]",
    description: "Classic serif with high contrast"
  },
  { 
    name: "Lobster", 
    text: "AI Art Generator", 
    className: "font-['Lobster',_cursive]",
    description: "Bold and playful script"
  },
  {
    name: "Pacifico",
    text: "AI Art Generator",
    className: "font-['Pacifico',_cursive]",
    description: "Casual and friendly brush script"
  },
];

export default function FontShowcase() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Our AI Models Can Generate Text in These Fonts
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
          Experience the power of AI with our curated font collection
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fonts.map((font) => (
            <div
              key={font.name}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow"
            >
              <div className={`text-3xl mb-4 ${font.className}`}>
                {font.text}
              </div>
              <div className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                {font.name}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {font.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

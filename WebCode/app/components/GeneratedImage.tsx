import Image from "next/image";


interface GeneratedImageProps {
  imageUrl: string;
}

export default function GeneratedImage({ imageUrl }: GeneratedImageProps) {
  return (
    <div className="mt-8">
      <div className="relative aspect-square w-full overflow-hidden rounded-lg">
        <Image 
          src={imageUrl} 
          alt="Generated artwork" 
          fill
          className="object-cover" 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </div>
  );
}

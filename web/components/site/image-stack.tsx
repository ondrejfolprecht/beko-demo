import Image from "next/image";

type StackImage = { src: string; alt: string };

/** Keeps all images painted, so switching is instant. The active one wipes over the previous one. */
export function ImageStack({ images, active, sizes, className }: { images: readonly StackImage[]; active: number; sizes: string; className?: string }) {
  return (
    <div className={`image-stack ${className ?? ""}`}>
      {images.map((image, index) => (
        <div key={image.src} data-active={index === active || undefined} aria-hidden={index !== active}>
          <Image src={image.src} alt={index === active ? image.alt : ""} fill sizes={sizes} quality={85} className="object-cover" />
        </div>
      ))}
    </div>
  );
}

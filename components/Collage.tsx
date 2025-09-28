import Image from 'next/image';

export type CollageImage = { src: string; alt?: string };

type Props = {
  images: CollageImage[];
};

// Absolute positions for medium+ screens to create a layered, overlapping look.
// On small screens we fall back to a simple grid.
const POSITIONS: string[] = [
  'top-[8%] left-[2%] w-[92px] h-[92px] sm:w-[110px] sm:h-[110px] lg:w-[130px] lg:h-[130px] rounded-[18px]',
  'top-[2%] left-[18%] w-[110px] h-[150px] sm:w-[130px] sm:h-[170px] lg:w-[150px] lg:h-[190px] rounded-[18px]',
  'top-[18%] left-[34%] w-[200px] h-[180px] sm:w-[240px] sm:h-[210px] lg:w-[280px] lg:h-[240px] rounded-[22px]',
  'top-[6%] left-[60%] w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] lg:w-[160px] lg:h-[160px] rounded-[18px]',
  'top-[10%] left-[74%] w-[140px] h-[100px] sm:w-[160px] sm:h-[110px] lg:w-[180px] lg:h-[120px] rounded-[18px]',
  'top-[40%] left-[8%] w-[150px] h-[200px] sm:w-[170px] sm:h-[220px] lg:w-[190px] lg:h-[240px] rounded-[22px]',
  'top-[45%] left-[35%] w-[120px] h-[150px] sm:w-[140px] sm:h-[170px] lg:w-[160px] lg:h-[190px] rounded-[18px]',
  'top-[48%] left-[52%] w-[240px] h-[200px] sm:w-[280px] sm:h-[220px] lg:w-[320px] lg:h-[260px] rounded-[24px]',
  'top-[36%] left-[78%] w-[110px] h-[140px] sm:w-[130px] sm:h-[160px] lg:w-[150px] lg:h-[180px] rounded-[18px]',
  'top-[72%] left-[20%] w-[130px] h-[100px] sm:w-[150px] sm:h-[110px] lg:w-[170px] lg:h-[120px] rounded-[18px]',
  'top-[70%] left-[48%] w-[110px] h-[110px] sm:w-[130px] sm:h-[130px] lg:w-[150px] lg:h-[150px] rounded-[18px]',
  'top-[66%] left-[70%] w-[160px] h-[120px] sm:w-[180px] sm:h-[130px] lg:w-[200px] lg:h-[140px] rounded-[20px]'
];

export default function Collage({ images }: Props) {
  return (
    <div className="relative">
      {/* Background soft gradient */}
      <div className="absolute inset-x-0 top-1/4 -z-10 h-2/3 rounded-3xl bg-gradient-to-b from-brand-100 to-transparent" />

      {/* Small screens: simple grid */}
      <div className="grid grid-cols-3 gap-3 sm:gap-4 md:hidden">
        {images.slice(0, 9).map((img, i) => (
          <div key={i} className={`overflow-hidden rounded-2xl ring-1 ring-neutral-200 ${i % 7 === 2 ? 'col-span-2 row-span-2' : ''}`}>
            <Image
              src={img.src}
              alt={img.alt || `Project ${i + 1}`}
              width={600}
              height={400}
              className="h-full w-full object-cover transition duration-500 grayscale hover:grayscale-0"
            />
          </div>
        ))}
      </div>

      {/* Medium+ screens: overlapped collage */}
      <div className="relative hidden md:block md:h-[520px] lg:h-[480px]">
        {images.slice(0, POSITIONS.length).map((img, i) => (
          <div
            key={i}
            className={`absolute ${POSITIONS[i]} z-10 overflow-hidden ring-1 ring-neutral-200 shadow-sm transition-all duration-300 hover:z-30 hover:shadow-lg`}
          >
            <Image
              src={img.src}
              alt={img.alt || `Project ${i + 1}`}
              width={800}
              height={600}
              sizes="(max-width: 1024px) 50vw, 33vw"
              className="h-full w-full object-cover transition duration-500 grayscale hover:grayscale-0 hover:scale-[1.03]"
            />
          </div>
        ))}

        {/* Decorative brand dots */}
        <span className="absolute left-[5%] bottom-[5%] h-1.5 w-1.5 rounded-full bg-brand-500" />
        <span className="absolute left-[52%] top-[12%] h-1.5 w-1.5 rounded-full bg-brand-500" />
        <span className="absolute left-[46%] bottom-[9%] h-1.5 w-1.5 rounded-full bg-brand-500" />
      </div>
    </div>
  );
}



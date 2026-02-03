import Image from 'next/image';

const adImages = [
  '/images/AD1.png',
  '/images/AD2.png',
  '/images/AD3.png',
  '/images/AD4.png',
  '/images/AD5.png',
  '/images/AD6.png',
  '/images/AD7.png',
];

export default function AdBar() {
  return (
    <>
      <hr className="w-full border-t border-[#3a4066] opacity-60 mb-8" />
      <div className="flex flex-row flex-wrap items-center justify-center gap-8 p-10 w-full">
        {adImages.map((src, idx) => (
          <div key={src} className="flex items-center justify-center">
            <Image src={src} alt={`Ad ${idx + 1}`} height={56} width={149} />
          </div>
        ))}
      </div>
      <hr className="w-full border-t border-[#3a4066] opacity-60 mb-8" />
    </>
  );
}

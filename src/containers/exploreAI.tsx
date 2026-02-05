'use client';
import Image from 'next/image';
import { FiArrowUpRight } from 'react-icons/fi';
import GoTopAnimation from '../components/goTopAnimation';
import { ExploreAIData } from '../utils/data';

export default function ExploreAI() {
  return (
    <>
      <div className="scroll-mt-[300px] space-y-12 p-20 max-md:px-6 max-sm:py-14" id="exploreAI">
        <GoTopAnimation idx={1} startNumber={0}>
          <section className="space-y-2" id="exploreAIHeader">
            <h2 className="text-4xl font-bold text-white mb-4">FEATURED INSIGHTS</h2>
            <p className="text-lg text-white/80 max-w-2xl mb-10">
              Were you looking to explore a specific topic? You're in the right spot.
            </p>
          </section>
        </GoTopAnimation>
        <GoTopAnimation idx={0} startNumber={0}>
          <div className="grid grid-cols-[repeat(auto-fill_,minmax(330px,1fr))] gap-[22px] max-sm:grid-cols-[repeat(auto-fill_,minmax(300px,1fr))]">
            {ExploreAIData.map((data, idx) => (
              <div className="space-y-3 rounded-[20px] bg-[#00000033] p-5 pb-8 backdrop-blur-[20px]">
                <div className="relative mb-2 h-[220px] w-full overflow-hidden rounded-lg">
                  <Image
                    src={`/${data.image}`}
                    fill
                    alt="insigts.png"
                    className="object-cover"
                    priority
                    quality={100}
                  />
                </div>
                <div className="flex justify-between gap-4">
                  <p className="font-semibold">{data.title}</p>
                  <div className="flex h-10 min-w-10 cursor-pointer items-center justify-center rounded-[100px] bg-[#00000099]">
                    <FiArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
                <p className="text-sm text-[#ffffffb3]">{data.description}</p>
              </div>
            ))}
          </div>
        </GoTopAnimation>
      </div>
    </>
  );
}

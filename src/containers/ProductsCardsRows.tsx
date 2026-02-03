'use client';
import GoTopAnimation from '../components/goTopAnimation';
import Image from 'next/image';
import { ProductCards } from '../utils/data';
import { FiArrowUpRight } from 'react-icons/fi';

export default function ProductsCardsRows() {
  return (
    <div className="relative space-y-6 p-20 max-md:px-6 max-md:py-10">
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(308px,1fr))] gap-4 max-md:gap-6">
        {ProductCards.map((card, idx) => (
          <GoTopAnimation key={idx} idx={idx + 1} startNumber={0}>
            <div
              className={`relative h-[436px] gap-4 rounded-xl px-5 py-8`}
              style={{ background: card.color }}
            >
              <p className="flex h-8 w-[97px] items-center justify-center rounded-[50px] border border-[#ffffff1a] bg-[#ffffff0d] text-[10px]">
                Our Services
              </p>
              <div className="mt-[48px] flex min-h-[292px] flex-col justify-between">
                <div className="space-y-4">
                  <p className="w-[80%] text-2xl font-semibold leading-[26px]">{card.title}</p>
                  <p className="font-inter text-sm font-medium text-[#ffffffcc]">
                    {card.description}
                  </p>
                </div>
                <button className="mx-auto flex h-14 w-full items-center justify-center gap-2 rounded-[80px] bg-black px-2 py-3 text-xs">
                  <p>Talk to a Product Expert</p>

                  <FiArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </GoTopAnimation>
        ))}
      </div>
    </div>
  );
}

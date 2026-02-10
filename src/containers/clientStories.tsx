'use client';
import { useAnimation } from 'framer-motion';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { IoArrowForward } from 'react-icons/io5';
import { IoArrowBack } from 'react-icons/io5';
import { useScrollBtns } from '../hooks/useScrollBtns';
import { ClientsData } from '../utils/data';
import Image from 'next/image';

function ClientStories() {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const commentRef = useRef<HTMLDivElement>(null);
  const { handleClickNext, handleClickPrev } = useScrollBtns({
    ref,
    commentRef,
    controls,
  });

  return (
    <>
      <section className="relative space-y-12 p-20 pb-0 max-md:px-6 max-md:py-10" id="Products">
        <h2 className="text-4xl font-bold text-white mb-4">Our Happy Clients</h2>
        <p className="text-lg text-white/80 max-w-2xl mb-10">
          Dummy ipsum dolor sit amet, consectetur adipisicing elit
        </p>
        <div className="absolute right-8 top-90px flex z-10 max-sm:hidden">
          <button
            className="nextBtn m-2 flex h-10 w-10 items-center justify-center rounded-[50%] bg-[#40424C]"
            onClick={handleClickPrev}
          >
            <IoArrowBack className="h-[18px] w-[18px]" />
          </button>
          <button
            className="prevBtn m-2 flex h-10 w-10 items-center justify-center rounded-[50%] bg-[#40424C]"
            onClick={handleClickNext}
          >
            <IoArrowForward className="h-[18px] w-[18px]" />
          </button>
        </div>
        <div className="relative">
          <div className="h-[450px] w-[100vw] overflow-hidden">
            <motion.div
              className="relative right-0 flex w-fit items-center gap-8"
              initial={{ left: '-200px', opacity: 0 }}
              whileInView={{ left: 0, opacity: 1 }}
              animate={controls}
              transition={{ duration: 0.35, ease: 'linear' }}
              // viewport={{ amount: windowWidth > 1024 ? 0.45 : 0 }}
              ref={ref}
              dir="ltr"
            >
              {ClientsData?.map((client, idx) => (
                <div
                  key={idx}
                  ref={commentRef}
                  className="h-[450px] w-[clamp(310px,47.15vw,400px)] rounded-[20px] bg-[#bdd5f40d] p-6 backdrop-blur-[40px] transition-all duration-200 hover:bg-[#bdd5f433]"
                >
                  <div className="h-8 w-8">
                    <Image src="/images/quotation_mark.png" width={20} height={18} alt="" />
                  </div>
                  <div>
                    <div className="mt-2.5 flex h-[282px] flex-col justify-between border-b border-[#ffffff1a] pb-6">
                      <p className="min-h-[192px] font-medium">{client.description}</p>
                      <div className="h-[42px] w-full space-y-1 text-end">
                        <p className="text-sm font-bold">{client.name}</p>
                        <p className="text-xs text-[#ffffff99]">{client.jobTitle}</p>
                      </div>
                    </div>
                    <div className="mt-6 flex h-[54px] items-center justify-between">
                      <div className="text-[10px] font-normal text-[#ffffff99]">
                        <p className="leading-[18px]">Star Rating - {client.rate}</p>
                        <p className="leading-[18px]">Project - {client.project}</p>
                        <p className="leading-[18px]">Country - {client.country}</p>
                      </div>
                      {client.image}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ClientStories;

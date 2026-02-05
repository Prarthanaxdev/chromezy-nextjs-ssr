'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import GoTopAnimation from '../components/goTopAnimation';
import { ServicesData } from '../utils/data';

export default function Services() {
  return (
    <div
      className="flex scroll-mt-10 flex-wrap items-center gap-20 px-20 py-[60px] max-[1050px]:gap-10 max-lg:gap-20 max-md:px-6 max-sm:py-14 "
      id="services"
    >
      <motion.div
        className="SideSolgan min-h-653px w-[40%] overflow-hidden rounded-[80px] bg-gradient-to-b from-[#282e6c33] to-[#bdd5f433] px-10 backdrop-blur-[30px] max-lg:h-[500px] max-lg:w-full max-lg:p-10 max-md:rounded-[30px]"
        // style={animation}
      >
        <p className="w-[85%] text-[clamp(24px,3vw,40px)] font-semibold max-sm:w-full mt-[44px]">
          INNOVATIVE TECHNOLOGIES KEEPING US AHEAD
        </p>
        <p className="mt-5 text-[#ffffffcc]">
          Discover the impact of bespoke digital solutions tailored precisely to your
          business&apos;s distinct requirements.
        </p>
        <div className="relative aspect-square w-[clamp(200px,25vw,376px)] max-lg:mx-auto mt-44">
          <Image
            src={'/images/circle.png'}
            fill
            alt="colored circle"
            className="mix-blend-exclusion"
          />
        </div>
      </motion.div>
      <motion.div
        className="flex w-[51%] flex-col gap-10 max-lg:w-full"
        // style={animation}
      >
        {ServicesData.map((data, idx) => (
          <GoTopAnimation key={data.title} idx={idx} startNumber={0}>
            <div className="relative flex items-start gap-10">
              <p className="text-[40px] font-semibold leading-[29px] text-[#ffffff1a]">0{idx}</p>
              <div className="space-y-4">
                <p className="text-xl font-semibold leading-[25px]">{data.title}</p>
                <div className="flex flex-wrap items-center gap-1">
                  {data.Services.map((service, sidx) => (
                    <div
                      key={service.text}
                      className="flex h-9 items-center gap-[6px] rounded-lg border border-[#1314161a] bg-[#ffffff1a] py-2 pl-3 pr-4"
                    >
                      {service.image && (
                        <Image
                          src={`/${service.image}`}
                          width={20}
                          height={20}
                          alt={service.text}
                        />
                      )}
                      <p className="font-inter text-sm font-semibold">{service.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </GoTopAnimation>
        ))}
      </motion.div>
    </div>
  );
}

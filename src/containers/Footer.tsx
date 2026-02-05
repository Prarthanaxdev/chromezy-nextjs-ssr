'use client';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

import { IoIosArrowForward } from 'react-icons/io';

export default function Footer() {
  const [hash, setHash] = useState('');

  function handleclickNav(nav: string) {
    setHash(nav);
  }

  return (
    <>
      <div
        className="h-[468px] bg-[#080A12] px-[120px] pt-[64px] max-lg:px-14 max-md:h-auto"
        id="footer"
      >
        <div className="flex h-[244px] items-center justify-between max-md:h-auto max-md:flex-col max-md:gap-12">
          <div className="h-fit space-y-4 max-md:flex max-md:flex-col max-md:items-center">
            <div className="space-y-2">
              <Image
                src={'/images/logo.png'}
                width={200}
                height={41}
                alt="Logo"
                className="max-md:mx-auto"
              />
              <p className="w-[298px] pl-[46px] text-xs text-[#ffffff99] max-md:p-0 max-md:text-center max-md:text-sm">
                Not just about software & Product development; we&apos;re your tech partners,
                crafting modern digital solutions for next-gen excellence!
              </p>
            </div>
            <div className="flex items-center space-x-3 pl-[46px] text-xs text-[#ffffffcc] max-md:p-0">
              <p>Terms</p>
              <p>|</p>
              <p>Privacy</p>
            </div>
            <div className="flex items-center gap-4">
              <Image src={'/images/bluephone.png'} width={20} height={20} alt="bluephone" />
              <p className="font-semibold">+1 315 308 0901</p>
            </div>
            <div className="flex items-center gap-4">
              <Image src={'/images/bluemail.png'} width={20} height={20} alt="bluephone" />
              <p className="font-semibold">sales@chromezy.com</p>
            </div>
          </div>
          <div className="flex h-fit w-[456px] justify-between gap-20 text-nowrap font-inter text-sm text-[#ffffff99] max-lg:gap-12 max-md:w-full max-md:justify-center">
            <ul className="w-[max(160px,14.65vw)]">
              <li className="flex items-center justify-between border-b border-[#ffffff0d] py-4">
                <p>Home</p>
                <IoIosArrowForward className="h-3 w-3 text-[#26272E]" />
              </li>

              <li className="flex items-center justify-between border-b border-[#ffffff0d] py-4">
                <p>About Us</p>
                <IoIosArrowForward className="h-3 w-3 text-[#26272E]" />
              </li>

              <li className="flex items-center justify-between border-b border-[#ffffff0d] py-4">
                <p>Career</p>
                <IoIosArrowForward className="h-3 w-3 text-[#26272E]" />
              </li>

              <li className="flex items-center justify-between py-4">
                <p>Case Study</p>
                <IoIosArrowForward className="h-3 w-3 text-[#26272E]" />
              </li>
              <li className="mt-2 flex items-center justify-between py-2.5">
                <p className="text-xl font-semibold text-white">Join the Team</p>
                <IoIosArrowForward className="h-3 w-3 text-[#26272E]" />
              </li>
            </ul>
            <ul className="w-[max(160px,14.65vw)]">
              <li
                className="flex items-center justify-between border-b border-[#ffffff0d] py-4 cursor-pointer"
                onClick={() => handleclickNav('ExploreAI')}
              >
                <Link href={'#ExploreAI'}>Explore AI</Link>

                <IoIosArrowForward className="h-3 w-3 text-[#26272E]" />
              </li>

              <li className="flex items-center justify-between border-b border-[#ffffff0d] py-4">
                <p>MVP</p>
                <IoIosArrowForward className="h-3 w-3 text-[#26272E]" />
              </li>

              <li className="flex items-center justify-between border-b border-[#ffffff0d] py-4">
                <p>SaaS</p>
                <IoIosArrowForward className="h-3 w-3 text-[#26272E]" />
              </li>

              <li className="flex items-center justify-between py-4">
                <p>E-commerce</p>
                <IoIosArrowForward className="h-3 w-3 text-[#26272E]" />
              </li>
              <li className="mt-2 flex items-center justify-between py-2.5">
                <p className="text-xl font-semibold text-[#4380FF]">Work with us</p>
                <IoIosArrowForward className="h-3 w-3 text-[#26272E]" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

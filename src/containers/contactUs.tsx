'use client';
import Image from 'next/image';
import { motion, useTransform, useScroll } from 'framer-motion';
import GoTopAnimation from '../components/goTopAnimation';

export default function ContactUs() {
  const { scrollY } = useScroll();

  const top = useTransform(scrollY, [4550, 4750], [-90, -14]);
  const right = useTransform(scrollY, [4550, 4750], [-18, -42]);
  const heightMail = useTransform(scrollY, [4550, 4750], [130, 90]);
  const widthMail = useTransform(scrollY, [4550, 4750], [167, 125]);
  const bgColor = useTransform(scrollY, [4550, 4750], ['#AACFFE', '#DBEBFF']);
  const opacity = 1;
  const overflow = useTransform(scrollY, [4750, 4752], ['', 'hidden']);

  return (
    <div className="relative scroll-mt-[350px] h-[1000px]" id="contact">
      <div className="min-h-[760px] w-full px-[60px] py-20 pb-[160px] max-md:px-6 max-sm:py-14">
        <div
          className="relative flex h-full w-full items-center rounded-[80px] bg-[#AACFFE] max-md:flex-col max-md:rounded-[30px]"
          style={{ height: '760px' }}
        >
          <motion.div
            className="relative h-[1000px] w-[70%] max-md:h-[450px] max-md:w-full"
            style={{ height: '100%' }}
          >
            <Image
              src={'/images/ContactUsBG.png'}
              fill
              alt="ContactUs"
              className="rounded-l-[80px] object-cover max-md:rounded-[30px]"
            />
            <div className="relative top-[85px] mx-auto flex w-[75%] flex-col items-center justify-center p-4 text-center max-md:top-0 max-md:h-full">
              {/* <ContactUsCharacterImage />
                <ContactUsInfo /> */}
              <motion.div
                className="relative h-[max(120px,20.85vw)] w-[max(120px,20.85vw)]"
                // style={{
                //   width: widthCharacter,
                //   height: heightCharacter,
                //   opacity: opacityCharacter,
                //   top: topCharacter,
                // }}
              >
                <Image
                  src={'/images/character.png'}
                  fill
                  alt="ContactUsCharacter"
                  className="object-contain"
                />
              </motion.div>
              <GoTopAnimation idx={0} startNumber={0} delay={0.3}>
                <div className="relative mt-6 space-y-2">
                  <p className="text-[40px] font-bold max-sm:text-[32px]">Contact Us</p>
                  <p className="text-sm">
                    Talk with us to know how we can make you a part of a thriving digital landscape
                  </p>
                </div>
                <div className="mx-auto mt-6 h-[120px] w-full max-w-[420px] rounded-xl bg-[#5FAD8C] p-5 max-md:w-[135%] max-sm:w-full">
                  <div className="flex items-center justify-between border-b border-[#0000001a] pb-4">
                    <div className="flex items-center gap-2">
                      <Image src={'/images/phone.png'} width={24} height={24} alt="mail" />
                      <p className="text-xs">Phone</p>
                    </div>
                    <p className="font-semibold">+1 315 308 0901</p>
                  </div>
                  <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center gap-2">
                      <Image src={'/images/mail.png'} width={24} height={24} alt="mail" />
                      <p className="text-xs">Email</p>
                    </div>
                    <p className="font-semibold">sales@chromezy.com</p>
                  </div>
                </div>
              </GoTopAnimation>
            </div>
          </motion.div>
          <motion.div
            className="relative right-[50px] min-h-[638px] w-[35.35%] space-y-5 rounded-[20px] bg-[#DBEBFF] px-10 py-[50px] max-[850px]:w-[40%] max-md:right-0 max-md:m-10 max-md:w-[86%] max-md:p-6 max-sm:mx-0"
            style={{ overflow }}
          >
            <motion.div
              className="absolute right-[-16px] top-[-90px] h-[130px] w-[167px]"
              style={{
                top,
                right,
                height: heightMail,
                width: widthMail,
                opacity,
              }}
            >
              <Image src="/images/mailBG.png" alt="mail" fill className="object-contain" />
            </motion.div>
            <p className="text-2xl font-semibold leading-5 text-[#141517]">Let&apos;s talk!</p>
            <form>
              <div className="space-y-1">
                <label htmlFor="userName" className="block text-sm font-medium text-[#141517]">
                  What’s your name?
                </label>
                <input
                  id="userName"
                  name="userName"
                  type="text"
                  className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-[#141517] focus:border-blue-400 focus:outline-none"
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="email" className="block text-sm font-medium text-[#141517]">
                  What’s your email address?
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-[#141517] focus:border-blue-400 focus:outline-none"
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-[#141517]">
                  What’s your phone number?
                </label>
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="tel"
                  className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-[#141517] focus:border-blue-400 focus:outline-none"
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="comment" className="block text-sm font-medium text-[#141517]">
                  What are you looking for?
                </label>
                <input
                  id="comment"
                  name="comment"
                  type="text"
                  className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-[#141517] focus:border-blue-400 focus:outline-none"
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="helpComment" className="block text-sm font-medium text-[#141517]">
                  How can we help you?
                </label>
                <textarea
                  id="helpComment"
                  name="helpComment"
                  rows={3}
                  className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-[#141517] focus:border-blue-400 focus:outline-none"
                />
              </div>
              <button className="relative top-1 mt-3 flex h-[56px] w-full items-center justify-center rounded-[80px] bg-black text-xs text-white">
                Send request
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

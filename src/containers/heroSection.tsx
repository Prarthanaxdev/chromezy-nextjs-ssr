import Image from 'next/image';
import HeroSectionBackground from '../components/layout/heroSectionBackground';

function HeroSection() {
  return (
    <>
      <HeroSectionBackground />
      <main className="hero min-h-screen flex flex-col items-center justify-start">
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#F8A700] opacity-20 blur-3xl pointer-events-none z-0"></div>
        <section className="relative z-10 flex flex-col items-center justify-center pt-16 pb-10 w-full max-w-4xl mx-auto text-center">
          <div className="mb-4 text-sm text-[#ECF4BD] font-medium flex items-center justify-center gap-2">
            <Image src="/images/glow.png" width={16} height={16} alt="magic" priority />
            <p className="font-inter font-medium text-[#ECF4BD]">Introducing AI Automation</p>
          </div>
          <h1 className="font-bold text-white leading-tight mb-2" style={{ fontSize: '64px' }}>
            from <span className="text-[#11DEFF]">CONCEPT</span>
            <br />
            to <span className="text-[#4380FF]">REALITY</span>
          </h1>
          <h2
            className="text-lg md:text-2xl font-medium text-[#BDF4D0] mt-6 mb-6"
            style={{ marginTop: '24px' }}
          >
            We Engineer your Software Success & Digital Transformation.
          </h2>
          <p
            className="max-w-[698px] text-center text-[clamp(14px,1.7vw,16px)]"
            style={{ marginTop: '24px' }}
          >
            At Chromezy, we translate your ideas into market-ready solutions quickly and precisely.
            Leveraging the power of technology and prioritizing user needs, we deliver products that
            are both cutting-edge and user-centric.
          </p>
          <div className="grid min-h-[153px] w-full max-w-[817px] grid-cols-[repeat(auto-fill,_minmax(120px,1fr))] items-center justify-center gap-[49px] px-[56px] py-10 max-md:grid-cols-[repeat(auto-fill,_minmax(100px,1fr))] max-md:px-2">
            <div className="flex flex-col items-center">
              <span className="bg-gradient-to-r from-[#3C6BFE] to-[#9D84F2] bg-clip-text text-transparent text-2xl md:text-3xl font-bold">
                200%
              </span>
              <span className="text-textSecondary text-xs mt-1">Revenue Growth</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="bg-gradient-to-r from-[#3C6BFE] to-[#9D84F2] bg-clip-text text-transparent text-2xl md:text-3xl font-bold">
                4X
              </span>
              <span className="text-textSecondary text-xs mt-1">Speed to Market</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="bg-gradient-to-r from-[#3C6BFE] to-[#9D84F2] bg-clip-text text-transparent text-2xl md:text-3xl font-bold">
                73%
              </span>
              <span className="text-textSecondary text-xs mt-1">New Orders</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="bg-gradient-to-r from-[#3C6BFE] to-[#9D84F2] bg-clip-text text-transparent text-2xl md:text-3xl font-bold">
                10K+
              </span>
              <span className="text-textSecondary text-xs mt-1">Active Users</span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default HeroSection;

import GoTopAnimation from '../components/goTopAnimation';
import { BlogsData } from '../utils/data';
import { FiArrowUpRight } from 'react-icons/fi';

export default function Blogs() {
  return (
    <>
      <div
        className="grid scroll-mt-3 grid-cols-[repeat(auto-fill_,minmax(320px,1fr))] gap-10 p-20 max-md:px-6 max-sm:grid-cols-[repeat(auto-fill_,minmax(300px,1fr))] max-sm:gap-6 max-sm:py-14"
        id="blogs"
      >
        <section
          className="max-h-[304px] space-y-4 py-10 max-sm:mb-4 max-sm:p-0"
          id="successStories"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Success Stories</h2>
          <p className="w-[60%] text-[clamp(14px,3vw,16px)] text-[#ffffffcc] max-md:w-[85%]">
            Dummy ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
            interdum, ac aliquet odio mattis.
          </p>
        </section>
        {/* <div className="relative space-y-6 p-20 max-md:px-6 max-md:py-10"> */}
        {BlogsData?.map((data, idx) => (
          <GoTopAnimation key={idx} idx={idx} startNumber={2}>
            <div className="relative h-[304px] overflow-hidden rounded-[20px]">
              {data.image}
              <p className="absolute left-[14px] top-4 flex h-6 w-[106px] items-center justify-center text-nowrap rounded-[100px] border border-[#fff] bg-[#ffffffcc] px-3 py-0.5 text-[10px] font-semibold text-[#141517] max-sm:p-0">
                Success Stories
              </p>
              <div className="absolute right-2 top-2 flex h-10 w-10 cursor-pointer items-center justify-center rounded-[100px] bg-[#00000099]">
                <FiArrowUpRight className="h-4 w-4" />
              </div>
              <div className="absolute bottom-0 h-20 w-[95%] rounded-tr-[20px] bg-white p-4 text-[#141517]">
                <p className="text-xl font-semibold">{data.title}</p>
                <p className="text-[10px]">{data.description}</p>
              </div>
            </div>
          </GoTopAnimation>
        ))}
      </div>
    </>
  );
}

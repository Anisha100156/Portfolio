'use client';

import dynamic from 'next/dynamic';
import { FaLocationArrow } from 'react-icons/fa6';
import { projects } from '@/data';

// ✅ Dynamically import PinContainer with SSR disabled
const PinContainer = dynamic(
  () => import('./ui/3d-pin').then((mod) => mod.PinContainer),
  {
    ssr: false,
    loading: () => <div>Loading...</div>, // Optional fallback while loading on client
  }
);

const RecentProjects = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        A small selection of <span className="text-purple">recent projects</span>
      </h1>

      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.map((item) => (
          <div key={item.id}
  className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
>

            <PinContainer title={item.title} href={item.link}>
              {/* Image Container */}
              <div className='relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh]  mb-10'>
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                  <img src="/bg.png" alt="bg-img" className="w-full h-full object-cover" />
                </div>
                <img
                  src={item.img}
                  alt={item.title}
                  className="z-10 absolute bottom-0 object-contain"
                />
              </div>

              {/* Project Title */}
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              {/* Project Description */}
              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2 text-[#BEC1DD] my-2"
              >
                {item.des}
              </p>

              {/* Icon List and Call-to-Action */}
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt={`icon-${index}`} className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;

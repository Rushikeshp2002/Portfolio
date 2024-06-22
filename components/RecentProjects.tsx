// "use client";

// import { FaLocationArrow } from "react-icons/fa6";

// import { projects } from "@/data";
// import { PinContainer } from "./ui/3d-pin";
// import Image from "next/image";

// const RecentProjects = () => {
//   return (
//     <div className="py-40" id='projects'>
//       <h1 className="heading">
//         A small selection of{" "}
//         <span className="text-purple">recent projects</span>
//       </h1>
//       <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
//         {projects.map(({id,title,des,img,iconLists,link}) => (
//           <div
//             className="sm:h-[41rem] h-[32rem]  lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw] -my-8"
//             key={id}
//           >
//             <PinContainer
//               title= {link}
//               href={link}
//             >
//               <div className="relative flex items-center justify-center sm:w-[570px] sm:h-[40vh] h-[30vh] w-[80vw] overflow-hidden mb-10">
//                 <div
//                   className="relative w-full h-full overflow-hidden lg:rounded-3xl"
//                   style={{ backgroundColor: "#13162d" }}
//                 >
//                   <img src="/bg.png" alt="bg-img" />
//                 </div>
//                 <img
//                   src={img}
//                   alt={title}
//                   className="z-10 absolute bottom-0"
//                 />
//               </div>

//               <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
//                 {title}
//               </h1>

//               <p
//                 className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
//                 style={{
//                   color: "#BEC1DD",
//                   margin: "1vh 0",
//                 }}
//               >
//                 {des}
//               </p>

//               <div className="flex items-center justify-between mt-7 mb-3">
//                 <div className="flex items-center">
//                   {iconLists.map((icon, index) => (
//                     <div
//                       key={icon}
//                       className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
//                       style={{
//                         transform: `translateX(-${5 * index * 2}px)`,
//                       }}
//                     >
//                       <img src={icon} alt="icon5" className="p-2" />
//                     </div>
//                   ))}
//                 </div>

//                 <div className="flex justify-center items-center">
//                   <p className="flex lg:text-xl md:text-xs text-sm text-purple">
//                     Check Live Site
//                   </p>
//                   <FaLocationArrow className="ms-3" color="#CBACF9" />
//                 </div>
//               </div>
//             </PinContainer>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RecentProjects;

"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { CardContainer, CardBody, CardItem } from "./ui/3d-card";
import Image from "next/image";
import Link from "next/link";

const RecentProjects = () => {
  return (
    <div className="md:py-40 py-28" id="projects">
   
      <h1 className="heading">
        A small selection of my{" "}
        <span className="text-purple">recent projects</span>{" "}
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 md:gap-x-24 md:gap-y-1 md:mt-10 -mt-10 gap-y-0">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <CardContainer key={id} className="inter-var md:-mb-32 -mb-28">
            <CardBody
              key={id}
              className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  "
            >
              <CardItem
                translateZ="50"
                className="text-xl  font-bold text-neutral-600 dark:text-white"
              >
                {title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-lg mt-2 dark:text-neutral-300"
              >
                {des}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4 bg-[#13162d ] sm:h-[35vh] h-[30vh] ">
                <Image
                  src={img}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover relative top-3 rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center align-middle mt-5">
                
                <CardItem
                  translateZ={20}
                  className="px-4 py-2 rounded-xl bg-black dark:text-black text-white text-xs font-bold"
                >
                  <div className="flex items-center justify-between mt-7 mb-3">
                    <div className="flex items-center">
                      {iconLists.map((icon, index) => (
                        <div
                          key={icon}
                          className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                          style={{
                            transform: `translateX(-${5 * index * 2}px)`,
                          }}
                        >
                          <img src={icon} alt="icon5" className="p-2" />
                        </div>
                      ))}
                    </div>
                  </div>
                </CardItem>

                <CardItem
                  translateZ={20}
                  as={Link}
                  href={link}
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-md  flex justify-center items-center align-middle md:mt-0 mt-3 font-normal dark:text-white"
                >
                  <p className="mx-2">Github</p> 
                  <FaLocationArrow/>
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
};
export default RecentProjects;

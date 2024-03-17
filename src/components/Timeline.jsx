import React, { useState, useEffect } from "react";
// import HorizontalTimeline from "react-horizontal-timeline";
// import "./App.css";
import { Chrono } from "react-chrono";

import info from "../data/user_info";

const Timeline = ({ theme }) => {
  console.log(theme);
  const [alignment, setAlignment] = useState({
    itemWidth: 200,
    cardWidth: 800,
    cardHeight: 300,
    mediaHeight: 100,
    contentDetailsHeight: 150,
  });
  const [direction, setDirection] = useState(true);
  const [title, setTitle] = useState(theme === "dark" ? "white" : "#253E66");
  console.log(title);

  useEffect(() => {
    // console.log(theme)
    setTitle(theme === "dark" ? "white" : "#253E66");
  }, [theme]);

  const handleResize = () => {
    const screenWidth = window.innerWidth;
    console.log(`Scren change ${screenWidth}`);
    // Define your screen size breakpoints and corresponding alignment values here
    if (screenWidth < 768) {
      // Example: For small screens
      setDirection(false);
    } else if (screenWidth < 1024) {
      setDirection(true);
      // Example: For medium screens
      setAlignment({
        itemWidth: 170,
        cardWidth: 500,
        cardHeight: 200,
        mediaHeight: 100,
        contentDetailsHeight: 150,
      });
    } else {
      setDirection(true);
      setAlignment({
        itemWidth: 250,
        cardWidth: 800,
        cardHeight: 300,
        mediaHeight: 100,
        contentDetailsHeight: 80,
      });
    }
  };

  useEffect(() => {
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center items-center  p-0 md:p-4">
        <h1 className="text-3xl mt-2  dark:text-gray-300 ">Timeline</h1>
        <div className="w-full m-0 md:m-10 md:w-3/4  overflow-auto">
          <Chrono
            key={theme + `${direction}`}
            items={info.dates}
            // classNames={{
            //   card: 'my-card',
            //   cardMedia: 'my-card-media',
            //   cardSubTitle: 'my-card-subtitle',
            //   cardText: 'my-card-text',
            //   cardTitle: 'my-card-title',
            //   controls: 'my-controls',
            //   title: 'my-title',
            // }}
            mode="HORIZONTAL"
            itemWidth={alignment.itemWidth}
            theme={{
              primary: "#a8a29e",
              secondary: theme === "dark" ? "#253E66" : "#e2e8f0",
              cardBgColor: theme === "dark" ? "#253E66" : "white",
              titleColor: theme === "dark" ? "#94a3b8" : "#6b7280",
              titleColorActive: theme === "dark" ? "white" : "#253E66",
            }}
            cardWidth="w-full"
            cardHeight="h-80"
            // cardHeight={alignment.cardHeight} // sets the height of the timeline card to 200px
            // mediaHeight={alignment.mediaHeight} // sets the height of the media element to 100px
            // contentDetailsHeight={alignment.contentDetailsHeight}
            showSingle
            slideShow
          >
            {info.companyDetails.map((content) => (
              <div
                className={
                  direction
                    ? "dark:text-gray-300 overflow-y-auto"
                    : "px-6 py-4 w-[90vw] dark:text-gray-300 overflow-auto"
                }
              >
                <div className=" font-bold text-xl mb-1">
                  {content.cardTitle}
                </div>
                <p
                  className={
                    direction
                      ? "text-l italic underline mb-1"
                      : "dark:text-gray-1000 text-sm italic underline"
                  }
                >
                  {content.cardSubtitle}
                </p>
                <p
                  className={
                    direction
                      ? " dark:text-gray-300 whitespace-pre-line leading-loose "
                      : "dark:text-gray-300 text-base whitespace-pre-line"
                  }
                >
                  {content.cardDetailedText}
                </p>
              </div>
            ))}
          </Chrono>
        </div>
      </div>
    </>
  );
};

export default Timeline;

// {
//   direction ? (
//     <Chrono
//       key={theme}
//       items={info.dates}
//       // classNames={{
//       //   card: 'my-card',
//       //   cardMedia: 'my-card-media',
//       //   cardSubTitle: 'my-card-subtitle',
//       //   cardText: 'my-card-text',
//       //   cardTitle: 'my-card-title',
//       //   controls: 'my-controls',
//       //   title: 'my-title',
//       // }}
//       mode="HORIZONTAL"
//       itemWidth={alignment.itemWidth}
//       theme={{
//         primary: "#253E66",
//         secondary: theme === "dark" ? "#253E66" : "#e2e8f0",
//         cardBgColor: theme === "dark" ? "#253E66" : "white",
//         titleColor: theme === "dark" ? "#94a3b8" : "#6b7280",
//         titleColorActive: theme === "dark" ? "white" : "#253E66",
//       }}
//       // cardWidth={alignment.cardWidth}
//       cardHeight="h-80"
//       // cardHeight={alignment.cardHeight} // sets the height of the timeline card to 200px
//       // mediaHeight={alignment.mediaHeight} // sets the height of the media element to 100px
//       // contentDetailsHeight={alignment.contentDetailsHeight}
//       showSingle
//       slideShow
//     >
//       {info.companyDetails.map((content) => (
//         <div className=" dark:text-gray-300 overflow-y-auto  ">
//           <div className=" font-bold text-xl mb-1">{content.cardTitle}</div>
//           <p className="text-l italic underline mb-1">{content.cardSubtitle}</p>
//           <p className="whitespace-pre-line leading-loose">
//             {content.cardDetailedText}
//           </p>
//         </div>
//       ))}
//     </Chrono>
//   ) : (
//     <Chrono
//       key={theme}
//       items={info.dates}
//       mode="VERTICAL_ALTERNATING"
//       theme={{
//         primary: "#253E66",
//         secondary: theme === "dark" ? "#253E66" : "#e2e8f0",
//         cardBgColor: theme === "dark" ? "#253E66" : "white",
//         titleColor: theme === "dark" ? "#94a3b8" : "#6b7280",
//         titleColorActive: theme === "dark" ? "white" : "#253E66",
//       }}
//       scrollable={{ scrollbar: true }}
//     >
//       {info.companyDetails.map((content) => (
//         <div className="px-6 py-4 w-[40vw]  dark:text-gray-300 overflow-y-auto ">
//           <div className="font-bold text-l mb-2">{content.cardTitle}</div>
//           <p className=" dark:text-gray-1000 text-sm italic underline">
//             {content.cardSubtitle}
//           </p>
//           <p className=" dark:text-gray-500 text-base whitespace-pre-line">
//             {content.cardDetailedText}
//           </p>
//         </div>
//       ))}
//     </Chrono>
//   );
// }

// import React, { Fragment, useState, useEffect, useRef } from "react";
// import "./BackgroundText.css";
// import { StickyContainer, Sticky } from "react-sticky";
// const BackgroundText = ({ divH }) => {
//   const controls = useRef();
//   const [fixedPosition, setFixedPostion] = useState(0);
//   useEffect(
//     () => {
//       // let s = window.getComputedStyle("test");
//       const handleScroll = () => {
//         // console.log(window.scrollY);
//         // console.log(
//         //   controls.current.getBoundingClientRect().bottom,
//         //   window.scrollY
//         // );
//         console.log(controls.current.getBoundingClientRect().top);
//         if (Math.round(window.scrollY) < controls.current.offsetTop) {
//           setFixedPostion(Math.round(window.scrollY));
//         } else if (controls.current.getBoundingClientRect().top < divH - 100) {
//           let x = fixedPosition;
//           // console.log(controls.current.offsetTop);
//           setFixedPostion(Math.round(window.scrollY));
//         }
//       };
//       window.addEventListener("scroll", handleScroll);
//       return () => {
//         window.removeEventListener("scroll", handleScroll);
//       };
//     },
//     [divH],
//     [fixedPosition]
//   );
//   return (
//     <Fragment>
//       <div
//         id="test"
//         style={{
//           position: "absolute",
//           zIndex: 30,
//           display: "flex",
//           justifyContent: "center",
//           width: "100%",
//           marginTop: "25%",

//           // top: fixedPosition,
//           // marginTop: "40%",
//         }}
//       >
//         <span
//           ref={controls}
//           className="text-shadow"
//           style={{
//             display: "flex",
//             alignContent: "center",
//             flexDirection: "column",
//             fontSize: 40,
//             fontWeight: "bold",
//             color: "rgb(200, 229, 250)",
//             height: 0,

//             top: fixedPosition,
//             // top: fixedPosition,
//           }}
//         >
//           {/* style={{ height: fixedPosition }} */}
//           <span style={{}}>
//             <span style={{}}>Opening Day:</span>
//             <span style={{ color: "rgb(70, 167, 242)" }}> April 8th</span>
//           </span>
//           <span>Experience It Live</span>
//         </span>
//       </div>
//       <StickyContainer>
//         <Sticky>{({ style }) => <h1 style={style}>Sticky element</h1>}</Sticky>
//       </StickyContainer>
//     </Fragment>
//   );
// };
// export default BackgroundText;

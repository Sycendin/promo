// import React, { Fragment, useState, useEffect, useRef } from "react";
// import BackgroundImage from "./BackgroundImage/BackgroundImage";
// import BackgroundText from "./BackgroundText/BackgroundText";
// import Video from "./Video/Video";

// const Home = () => {
//   const parent = useRef(null);
//   const [divH, setdivH] = useState();

//   useEffect(() => {
//     setdivH(parent.current.getBoundingClientRect().height);
//   }, [divH]);
//   return (
//     <Fragment>
//       <div
//         ref={parent}
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           width: "100%",
//           height: "100%",
//         }}
//       >
//         {divH ? <BackgroundText divH={divH} /> : null}
//         <BackgroundImage />
//       </div>
//       <Video></Video>
//       <div style={{ height: 800 }}></div>
//     </Fragment>
//   );
// };
// export default Home;

// import React, { Fragment, useState, useEffect, useRef } from "react";
// import "./BackgroundText.css";

// const BackgroundText = ({ divH }) => {
//   const controls = useRef();
//   const [fixedPosition, setFixedPostion] = useState(0);
//   useEffect(
//     () => {
//       const handleScroll = () => {
//         if (Math.round(window.scrollY) < divH / 1.8) {
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
//         ref={controls}
//         id="test"
//         style={{
//           position: "absolute",
//           // position: "sticky",
//           // position: "-webkit-sticky",
//           zIndex: 100,
//           display: "flex",
//           justifyContent: "center",
//           width: "100%",
//           // marginTop: "25%",
//           marginTop: fixedPosition,
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
//             marginTop: "25%",

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
//     </Fragment>
//   );
// };
// export default BackgroundText;

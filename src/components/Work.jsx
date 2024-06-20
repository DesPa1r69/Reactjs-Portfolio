import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaWordpress } from "react-icons/fa";
import { MdWorkHistory } from "react-icons/md";
import { FaReact } from "react-icons/fa";

// const experiences = [
//   {
//     title: "Woedpress",
//     company_name: "RTAF",
//     iconBg: "#383E56",
//     icon: <FaWordpress/>,
//     date: "2021",
//     points: [
//       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur vitae voluptas voluptatum, rerum deleniti enim quis repellat ipsum. Deleniti eius quo esse ea minima quisquam recusandae, possimus consectetur necessitatibus accusantium!",

//     ],
//   },
//   {
//     title: "React",
//     company_name: "RTAF",
//     iconBg: "#383E56",
//     icon: "https://source.unsplash.com/random?wallpapers",
//     date: "202",
//     points: [
//       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur vitae voluptas voluptatum, rerum deleniti enim quis repellat ipsum. Deleniti eius quo esse ea minima quisquam recusandae, possimus consectetur necessitatibus accusantium!",
//       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur vitae voluptas voluptatum, rerum deleniti enim quis repellat ipsum. Deleniti eius quo esse ea minima quisquam recusandae, possimus consectetur necessitatibus accusantium!",
//     ],
//   },

// ];

// const ExCard = (item) => (
//   <VerticalTimelineElement
//     className="vertical-timeline-element--work"
//     contentStyle={{ background: "#490a59", color: "#fff" }}
//     contentArrowStyle={{ borderRight: "7px solid  rgb(204, 153, 244)" }}
//     date="2021 - 2023"
//     iconStyle={{ background: "rgb(204, 153, 244)", color: "#fff" }}
//     icon={item.icon}

//   >
//     <h3 className="vertical-timeline-element-title">Wordpress</h3>
//     <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
//     <p>
//       Creative Direction, User Experience, Visual Design, Project Management,
//       Team Leading
//     </p>
//   </VerticalTimelineElement>
// );

const Work = () => {
  return (
    <div id="work" className="container mx-auto">
      <div className="flex flex-col gap-y-8  lg:items-center lg:gap-x-12">
        <h1 className="text-[60px]">Work Experiences</h1>
      </div>

      {/* <div className="py-10">
        <VerticalTimeline>
          {experiences.map((item, index) => (
            <ExCard key={index} item={item} />
          ))}
        </VerticalTimeline>
      </div> */}

      <div className="py-10">
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#490a59", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(204, 153, 244)" }}
            date="2018 - Training"
            iconStyle={{ background: "rgb(204, 153, 244)", color: "#fff" }}
            icon={<MdWorkHistory />}
          >
            <h3 className="vertical-timeline-element-title">
            NAMHENG GROUP
            </h3>
            <h4 className="vertical-timeline-element-subtitle">IT SUPPORT</h4>
            <p>
              Worked as IT Support, Taking care of user system
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#490a59", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(204, 153, 244)" }}
            date="2021 - 2023"
            iconStyle={{ background: "rgb(204, 153, 244)", color: "#fff" }}
            icon={<FaWordpress />}
          >
            <h3 className="vertical-timeline-element-title">
              INFINITE DIGITAL
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Wordpress</h4>
            <p>
              - Creating landing pages for various websites. <br />
              - Created a website accordnig to the prescribed from. <br />
              - Adjusted website, on-page and off-page, according to SEO. <br />
              - Adjusted wevsite speed. <br />
              - Support the team on creating website and solving website problens.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#490a59", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(204, 153, 244)" }}
            date="2022 - Training"
            iconStyle={{ background: "rgb(204, 153, 244)", color: "#fff" }}
            icon={<MdWorkHistory />}
          >
            <h3 className="vertical-timeline-element-title">
              INFINITE DIGITAL
            </h3>
            <h4 className="vertical-timeline-element-subtitle">SEO</h4>
            <p>
              - Traning on adjusting websites on-page and off-page according to SEO that Google requires. <br />
              - Traning on cinducting SEO.
              
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#490a59", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(204, 153, 244)" }}
            date="2022 - Training"
            iconStyle={{ background: "rgb(204, 153, 244)", color: "#fff" }}
            icon={<FaReact />}
          >
            <h3 className="vertical-timeline-element-title">
              Futureskill
            </h3>
            <h4 className="vertical-timeline-element-subtitle">ReactJs</h4>
            <p>
              - Traning on full stack developer reactjs and nodeJS
              
            </p>
          </VerticalTimelineElement>
          
          
          
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Work;

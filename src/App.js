import "./App.css";
import { ReactComponent as WorkIcon } from "./work.svg";
import { ReactComponent as SchoolIcon } from "./school.svg";
import { FaUniversity } from "react-icons/fa";
import { FaBaby } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { MdFitnessCenter } from "react-icons/md";

import timelineElements from "./timelineElements";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

function App() {
  let babyIconStyles = { background: "#d00000" };
  let schoolIconStyles = { background: "#da6d00" };
  let fitnessIconStyles = { background: "#dede04" };
  let universityIconStyles = { background: "#00a100" };
  let workIconStyles = { background: "#0000d2" };
  let codeIconStyles = { background: "#2E2B5F" };

  return (
    <div>
      <h1 className="title"> My Timeline</h1>
      <VerticalTimeline>
        {timelineElements.map((element) => {
          let isWorkIcon = element.icon === "work";
          let isSchoolIcon = element.icon === "school";
          let isBabyIcon = element.icon === "baby";
          let isUniversityIcon = element.icon === "university";
          let isCodeIcon = element.icon === "code";
          let isFitnessIcon = element.icon === "fitness";
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";

          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={
                isWorkIcon
                  ? workIconStyles
                  : isSchoolIcon
                  ? schoolIconStyles
                  : isBabyIcon
                  ? babyIconStyles
                  : isUniversityIcon
                  ? universityIconStyles
                  : isCodeIcon
                  ? codeIconStyles
                  : fitnessIconStyles
              }
              icon={
                isWorkIcon ? (
                  <WorkIcon />
                ) : isSchoolIcon ? (
                  <SchoolIcon />
                ) : isBabyIcon ? (
                  <FaBaby />
                ) : isUniversityIcon ? (
                  <FaUniversity />
                ) : isCodeIcon ? (
                  <FaCode />
                ) : (
                  <MdFitnessCenter />
                )
              }
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <p id="description">{element.description}</p>
              <a class="babyButton" href="https://www.joincoded.com/"></a>
              {showButton && (
                <a
                  className={`button ${
                    isWorkIcon
                      ? "workButton"
                      : isSchoolIcon
                      ? "schoolButton"
                      : isUniversityIcon
                      ? "universityButton"
                      : isFitnessIcon
                      ? "fitnessButton"
                      : isCodeIcon
                      ? "codeButton"
                      : "babyButton"
                  }`}
                  href="/"
                >
                  {element.buttonText}
                </a>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export default App;

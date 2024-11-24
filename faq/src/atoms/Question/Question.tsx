import React from "react";
import { QuestionAnswers } from "../../interfaces";
import Down from "../../assets/Down.svg";
import '../../App.css'

const Question: React.FC<QuestionAnswers> = ({ question }) => {
  return (
    <div className="qa-item">
      <div className="question">
        <p>{question}</p>
        <div>
          <img src={Down} alt="DownIcon" />
        </div>
      </div>
      <div className="line"></div>
    </div>
  );
};

export default Question;

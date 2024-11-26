import React, { useState } from 'react';
import { QuestionAnswers } from '../../interfaces';
import Down from '../../assets/Down.svg';
import Up from '../../assets/Up.svg';
import '../../App.css';

const QuestionAnswer: React.FC<QuestionAnswers> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="qa-item">
      <div
        className={`question ${isOpen ? 'bold' : ''}`}
        onClick={toggleAnswer}
      >
        <p>{question}</p>
        <div>
          <img src={isOpen ? Up : Down} alt="toggleIcon" />
        </div>
      </div>
      <div className="line"></div>

      {isOpen && <div className="qa-answer">{answer}</div>}
    </div>
  );
};

export default QuestionAnswer;

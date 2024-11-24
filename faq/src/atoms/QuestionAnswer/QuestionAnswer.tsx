import React from 'react';
import { QuestionAnswers } from '../../interfaces';
import Up from '../../assets/Up.svg'
import '../../App.css'

const QuestionAnswer: React.FC<QuestionAnswers> = ({ question, answer }) => {
  return (
    <div className="qa-item">
      <div className="question questionAnswer">
        <p>{question}</p>
        <div>
            <img src={Up} alt="UpIcon" />
        </div>
        
      </div>
      <div className="qa-answer">{answer}</div>
      <div className='line'></div>
    </div>
  );
};

export default QuestionAnswer;

import Question from "../../atoms/Question/Question";
import QuestionAnswer from "../../atoms/QuestionAnswer/QuestionAnswer";

const RightSide = () => {
  return (
    <div>
      <h1>FAQ</h1>
      <Question question="How many team members can I invite?" />
      <QuestionAnswer
        question="What is the maximum file upload size?"
        answer="No more than 2GB. All files in your account must fit your allotted storage space."
      />
      <Question question="How do I reset my password?" />
      <Question question="Can I cancel my subscription?" />
      <Question question="Do you provide additional support?" />
    </div>
  );
};

export default RightSide;

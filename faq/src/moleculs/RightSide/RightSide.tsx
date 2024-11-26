import QuestionAnswer from "../../atoms/QuestionAnswer/QuestionAnswer";

const RightSide = () => {
  return (
    <div>
      <h1>FAQ</h1>
      {/* <Question question="How many team members can I invite?" /> */}
      <QuestionAnswer
        question="How many team members can i invite?"
        answer="As many as you want."
      />
      <QuestionAnswer
        question="What is the maximum file upload size?"
        answer="No more than 2GB. All files in your account must fit your allotted storage space."
      />
      <QuestionAnswer
        question="How do i reset my password"
        answer="You can reset your password in your profile."
      />
      <QuestionAnswer
        question="Can I cancel my subscription?"
        answer="Of course. Whether you want"
      />
      <QuestionAnswer
        question="Do you provide additional support?"
        answer="Of course. 24/7"
      />
    </div>
  );
};

export default RightSide;

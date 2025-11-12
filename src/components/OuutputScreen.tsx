import OutputScreenRow from "./OutputScreenRow";  

type OutputScreenProps = {
  question: string;
  answer: string;
  className?: string;
};

const OutputScreen = ({ question, answer }: OutputScreenProps) => {
  return (
    <div className="screen">
        <OutputScreenRow value={question} className="question" id="question-screen" />
        <OutputScreenRow value={answer} className="answer" id="answer screen"/>
    </div>

  );
};

export default OutputScreen;

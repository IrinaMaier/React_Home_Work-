
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Question from './components/Question';
import Result from './components/Result';
import { submitAnswers } from './features/questionnaire/questionnaireSlice';

function App() {
  const dispatch = useDispatch();
  const questions = useSelector(state => state.questionnaire.questions);

  const handleSubmit = () => {
    dispatch(submitAnswers());
  };

  return (
    <div style={{ width: '500px', margin: '0 auto', textAlign: 'left' }}>
      <h1 style={{ textAlign: 'center' }}>Questionnaire</h1>
      {questions.map(question => (
        <Question key={question.id} question={question} />
      ))}
      <button
        onClick={handleSubmit}
        style={{ width: '100%', backgroundColor: '#007bff', color: 'white', padding: '10px', border: 'none' }}
      >
        Submit
      </button>
      <Result />
    </div>
  );
}

export default App;
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAnswer } from '../features/questionnaire/questionnaireSlice';

const Question = ({ question }) => {
  const dispatch = useDispatch();
  const selected = useSelector(state =>
    state.questionnaire.questions.find(q => q.id === question.id)?.answer
  );

  return (
    <div style={{ marginBottom: '20px' }}>
      <strong>{question.text}</strong>
      <div>
        <label>
          <input
            type="radio"
            name={`question-${question.id}`}
            value="Option 1"
            checked={selected === 'Option 1'}
            onChange={() =>
              dispatch(selectAnswer({ questionId: question.id, answer: 'Option 1' }))
            }
          />
          Option 1
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name={`question-${question.id}`}
            value="Option 2"
            checked={selected === 'Option 2'}
            onChange={() =>
              dispatch(selectAnswer({ questionId: question.id, answer: 'Option 2' }))
            }
          />
          Option 2
        </label>
      </div>
    </div>
  );
};

export default Question;
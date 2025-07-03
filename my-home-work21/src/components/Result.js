import React from 'react';
import { useSelector } from 'react-redux';

const Result = () => {
  const { submitted, score } = useSelector(state => state.questionnaire);

  if (!submitted) return null;

  return (
    <h2 style={{ marginTop: '20px' }}>Your Score: {score}</h2>
  );
};

export default Result;

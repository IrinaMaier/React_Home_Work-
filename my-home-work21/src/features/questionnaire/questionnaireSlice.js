import { createSlice } from "@reduxjs/toolkit";


const initialState={
    questions:[
         { id: 1, text: 'Question 1?', answer: null, correct: 'Option 1' },
    { id: 2, text: 'Question 2?', answer: null, correct: 'Option 2' },
    { id: 3, text: 'Question 3?', answer: null, correct: 'Option 1' },
    { id: 4, text: 'Question 4?', answer: null, correct: 'Option 1' },
    { id: 5, text: 'Question 5?', answer: null, correct: 'Option 2' },
    ],
    score:0,
    submitted:false,
}

const questionnaireSlice =createSlice({
    name:'questionnaire',
     initialState,
      reducers: {
        selectAnswer: (state, action) => {
      const { questionId, answer } = action.payload;
      const question = state.questions.find(q => q.id === questionId);
      if (question) {
        question.answer = answer;
      }
    },
    submitAnswers: (state) => {
      let score = 0;
      state.questions.forEach(q => {
        if (q.answer === q.correct) {
          score += 1;
        }
      });
      state.score = score;
      state.submitted = true;
    },
  },
});

export const { selectAnswer, submitAnswers } = questionnaireSlice.actions;
export default questionnaireSlice.reducer;

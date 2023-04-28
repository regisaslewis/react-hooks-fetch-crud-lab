import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, onHandleRemove, onHandleAnswerChange }) {

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map(e => <QuestionItem onHandleAnswerChange={onHandleAnswerChange} onHandleRemove={onHandleRemove} key={e.id} question={e} />)}</ul>
    </section>
  );
}

export default QuestionList;

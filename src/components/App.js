import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/questions`)
      .then(resp => resp.json())
      .then(data => setQuestions(data))
  }, [])
  
  function handleAddQuestion(newQuestion) {
    setQuestions([...questions, newQuestion]);
    setPage("List")
  }
  
  function handleRemove(deletedItem) {
    const shorterList = questions.filter(e => e.id !== deletedItem.id);
    setQuestions(shorterList);
  }

  function handleAnswerChange(changedItem) {
    const alteredList = questions.map(e => {
      if (e.id === changedItem.id) {
        return changedItem;
      } else {
        return e;
      }
    });
    setQuestions(alteredList);
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onHandleAddQuestion={handleAddQuestion} /> : <QuestionList onHandleAnswerChange={handleAnswerChange} onHandleRemove={handleRemove} questions={questions} />}
    </main>
  );
}

export default App;

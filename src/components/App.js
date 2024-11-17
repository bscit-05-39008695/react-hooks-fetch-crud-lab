import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // Fetch questions when the page is "List"
    if (page === "List") {
      fetch("http://localhost:4000/questions")
        .then((response) => response.json())
        .then((data) => setQuestions(data))
        .catch((error) => console.error("Error fetching questions:", error));
    }
  }, [page]);

  const handleQuestionAdded = (newQuestion) => {
    setQuestions((prevQuestions) => [...prevQuestions, newQuestion]);
    setPage("List");  // Switch back to list after adding a question
  };

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? (
        <QuestionForm onQuestionAdded={handleQuestionAdded} />
      ) : (
        <QuestionList questions={questions} />
      )}
    </main>
  );
}

export default App;

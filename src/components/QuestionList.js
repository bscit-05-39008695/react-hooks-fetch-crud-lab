import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({
  questions: initialQuestions,
 }) {
  const [questions, setQuestions] = React.useState([]);
  const handleDelete = (id) => {

    // Remove the deleted question from the state
    setQuestions((prevQuestions) => prevQuestions.filter((q) => q.id !== id));
  };

  const handleUpdate = (id, newCorrectIndex) => {
    // Update the correct answer for the given question
    setQuestions((prevQuestions) =>
      prevQuestions.map((q) =>
        q.id === id ? { ...q, correctIndex: newCorrectIndex } : q
      )
    );
  };

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((question) => (
          <QuestionItem
            key={question.id}
            question={question}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
          />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;

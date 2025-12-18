"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { adoQuestions, winQuestions, Question } from "@/data/questions";
import { marked } from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";

export default function QuizPage() {
  const router = useRouter();
  const params = useParams();
  const type = params.type as string;

  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  // Derived state directly from params
  // This avoids "setState in useEffect" lint warnings and unncessary renders
  let questions: Question[] = [];
  let title = "";

  if (type === "ado") {
    questions = adoQuestions;
    title = "ADO.NET 퀴즈";
  } else if (type === "win") {
    questions = winQuestions;
    title = "WinForms 퀴즈";
  }

  // Handle invalid type redirect
  useEffect(() => {
    if (type !== "ado" && type !== "win") {
      router.push("/");
    }
  }, [type, router]);

  const loading = !type || questions.length === 0;

  // Markdown rendering helper
  const renderMarkdown = (content: string) => {
    return { __html: marked.parse(content) };
  };

  // Syntax highlighting for code blocks in questions/explanations
  // Use setTimeout to ensure DOM is fully rendered before highlighting
  useEffect(() => {
    setTimeout(() => {
      document.querySelectorAll("pre code").forEach((el) => {
        hljs.highlightElement(el as HTMLElement);
      });
    }, 0);
  }, [currentQIndex, showExplanation, quizFinished]);

  const handleOptionClick = (index: number) => {
    if (selectedOption !== null) return; // Prevent changing answer
    setSelectedOption(index);

    const isCorrect = index === questions[currentQIndex].answer;
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
    setShowExplanation(true);
  };

  const nextQuestion = () => {
    if (currentQIndex < questions.length - 1) {
      setCurrentQIndex((prev) => prev + 1);
      setSelectedOption(null);
      setShowExplanation(false);
    } else {
      setQuizFinished(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQIndex(0);
    setSelectedOption(null);
    setShowExplanation(false);
    setScore(0);
    setQuizFinished(false);
  };

  if (loading) return <div className="container">Loading...</div>;
  if (questions.length === 0)
    return <div className="container">No questions found.</div>;

  const progress = ((currentQIndex + 1) / questions.length) * 100;
  const currentQ = questions[currentQIndex];

  return (
    <div className="container">
      <div className="top-nav fade-in">
        <button
          className="nav-tab"
          onClick={() => router.push(`/study/${type}`)}
        >
          📖 개념 학습
        </button>
        <button className={`nav-tab active`}>✏️ 퀴즈 풀기</button>
        {type === "win" && (
          <button className="nav-tab" onClick={() => router.push("/code")}>
            💻 전체 코드
          </button>
        )}
        <button className="nav-tab" onClick={() => router.push("/")}>
          🏠 홈으로
        </button>
      </div>

      <div id="quiz-screen" className="card fade-in">
        {!quizFinished ? (
          <>
            <div className="quiz-header">
              <span>{title}</span>
              <span id="quiz-progress-text">
                {currentQIndex + 1} / {questions.length}
              </span>
            </div>
            <div className="progress-container">
              <div
                className="progress-bar"
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            <div className="question-text">
              <div
                dangerouslySetInnerHTML={renderMarkdown(currentQ.question)}
              />
            </div>

            <div className="options-container">
              {currentQ.options.map((opt, idx) => {
                let statusClass = "";
                if (selectedOption !== null) {
                  if (idx === currentQ.answer) statusClass = "correct";
                  else if (idx === selectedOption) statusClass = "wrong";
                }

                return (
                  <div
                    key={idx}
                    className={`option ${
                      selectedOption === idx ? "selected" : ""
                    } ${statusClass}`}
                    onClick={() => handleOptionClick(idx)}
                  >
                    {opt}
                  </div>
                );
              })}
            </div>

            {showExplanation && (
              <div className="fade-in" style={{ marginTop: "20px" }}>
                {/* Feedback Header */}
                <div
                  style={{
                    marginBottom: "15px",
                    padding: "15px",
                    borderRadius: "12px",
                    background:
                      selectedOption === currentQ.answer
                        ? "#ecfdf5"
                        : "#fef2f2",
                    border:
                      selectedOption === currentQ.answer
                        ? "1px solid #10b981"
                        : "1px solid #ef4444",
                    color:
                      selectedOption === currentQ.answer
                        ? "#059669"
                        : "#dc2626",
                    fontWeight: "bold",
                    textAlign: "center",
                    fontSize: "1.2rem",
                  }}
                >
                  {selectedOption === currentQ.answer
                    ? "✅ 정답입니다!"
                    : "❌ 오답입니다!"}
                </div>

                <div
                  className="card"
                  style={{
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    padding: "15px",
                  }}
                >
                  <strong
                    style={{
                      display: "block",
                      marginBottom: "8px",
                      color: "#6366f1",
                    }}
                  >
                    📝 해설
                  </strong>
                  <div
                    dangerouslySetInnerHTML={renderMarkdown(
                      currentQ.explanation
                    )}
                  />
                </div>
                <div className="navigation">
                  <button className="nav-btn next-btn" onClick={nextQuestion}>
                    {currentQIndex === questions.length - 1
                      ? "결과 보기"
                      : "다음 문제"}
                  </button>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="result-content fade-in">
            <h2>퀴즈 완료! 🎉</h2>
            <div className="score-display">
              {score} / {questions.length}
            </div>
            <p className="score-text">
              {score === questions.length
                ? "완벽합니다! 마스터 레벨이네요. 🏆"
                : "수고하셨습니다! 다시 도전해보세요."}
            </p>
            <div className="button-group">
              <button className="btn" onClick={restartQuiz}>
                🔄 다시 풀기
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => router.push(`/study/${type}`)}
              >
                📖 개념 복습하기
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => router.push("/")}
              >
                🏠 홈으로
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

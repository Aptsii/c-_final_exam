"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { adoConcepts, winConcepts, Concept } from "@/data/concepts";
import { marked } from "marked";
import { useParams } from "next/navigation";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";

export default function StudyPage() {
  const router = useRouter();
  const params = useParams();
  const type = params.type as string; // 'ado' or 'win'

  // Derived state
  let concepts: Concept[] = [];
  let title = "";
  let subtitle = "";

  if (type === "ado") {
    concepts = adoConcepts;
    title = "ADO.NET 개념 완성";
    subtitle = "데이터베이스 연결부터 CRUD 핵심 패턴까지";
  } else if (type === "win") {
    concepts = winConcepts;
    title = "WinForms 실무 정복";
    subtitle = "스파게티 코드 리팩토링과 유지보수 완벽 가이드";
  }

  // Invalid type redirect
  useEffect(() => {
    if (type && type !== "ado" && type !== "win") {
      router.push("/");
    }
  }, [type, router]);

  const [activeId, setActiveId] = useState<number>(1);

  const activeConcept = concepts.find((c) => c.id === activeId);

  // Markdown rendering helper
  const renderMarkdown = (content: string) => {
    return { __html: marked.parse(content) };
  };

  // Syntax highlighting effect
  useEffect(() => {
    setTimeout(() => {
      document.querySelectorAll("pre code").forEach((el) => {
        hljs.highlightElement(el as HTMLElement);
      });
    }, 0);
  }, [activeId, type]);

  return (
    <div
      className="container"
      style={{ display: "flex", flexDirection: "column" }}
    >
      {/* Navigation / Header */}
      <div className="top-nav fade-in">
        <button className={`nav-tab active`}>📖 개념 학습</button>
        <button
          className="nav-tab"
          onClick={() => router.push(`/quiz/${type}`)}
        >
          ✏️ 퀴즈 풀기
        </button>
        {type === "win" && (
          <button className="nav-tab" onClick={() => router.push("/code")}>
            💻 전체 코드
          </button>
        )}
        <button className="nav-tab" onClick={() => router.push("/")}>
          🏠 홈으로
        </button>
      </div>

      <header className="fade-in" style={{ marginBottom: "10px" }}>
        <h1>{title}</h1>
        <p className="subtitle">{subtitle}</p>
      </header>

      <div className="study-container fade-in">
        {/* Sidebar */}
        <div className="study-sidebar">
          <ul id="concept-list">
            {concepts.map((concept) => (
              <li
                key={concept.id}
                className={`concept-item ${
                  activeId === concept.id ? "active" : ""
                }`}
                onClick={() => setActiveId(concept.id)}
              >
                {concept.title}
              </li>
            ))}
          </ul>
        </div>

        {/* Content Area */}
        <div className="study-content" id="study-content">
          {activeConcept ? (
            <div id="concept-viewer">
              <div
                dangerouslySetInnerHTML={renderMarkdown(activeConcept.content)}
              />
              {activeConcept.code && (
                <div style={{ marginTop: "20px" }}>
                  <h3>📝 예제 코드</h3>
                  <pre>
                    <code className="language-csharp">
                      {activeConcept.code}
                    </code>
                  </pre>
                </div>
              )}
            </div>
          ) : (
            <div className="placeholder-text">
              왼쪽 메뉴에서 학습할 내용을 선택하세요.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

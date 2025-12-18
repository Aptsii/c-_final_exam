"use client";

import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { winFullCode } from "@/data/fullCode";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";

interface CodeFile {
  filename: string;
  code: string;
}

interface FormSection {
  title: string;
  files: CodeFile[];
}

export default function CodePage() {
  const router = useRouter();
  const [activeFormIndex, setActiveFormIndex] = useState(0);

  /*
   * Robust parsing logic for winFullCode
   * Handles "### " section splitting and "- FileName.cs" file splitting
   */
  const parsedForms = useMemo(() => {
    if (!winFullCode || typeof winFullCode !== "string") return [];

    // Split by "### " to get main forms
    // Use regex to handle potential variation in markdown headers
    const rawForms = winFullCode
      .split(/^### /m)
      .filter((section) => section.trim() !== "");

    return rawForms.map((section) => {
      const lines = section.split(/\r?\n/);
      const title = lines[0].trim();
      const rawContent = lines.slice(1).join("\n").trim();

      const files: CodeFile[] = [];

      // Split by file markers: newline + "- " + filename, or start of string + "- "
      // Regex matches start of string "- " or "\n- " or "\r\n- "
      const parts = rawContent.split(/(?:^|[\r\n]+)- /);

      if (parts.length === 1) {
        // No splits found. If content is significant, treat as one main file.
        if (rawContent.trim()) {
          files.push({ filename: "Main Code", code: rawContent });
        }
      } else {
        parts.forEach((part, index) => {
          const trimmedPart = part.trim();
          if (!trimmedPart) return;

          // If the very first part doesn't start with a file marker pattern (implied by split),
          // it's introductory text or the first unnamed code block.
          // Since we split by "\n- ", the first element is what comes BEFORE the first "- ".
          // If the original text started with "- ", the first element is empty string (handled by !trimmedPart).
          // If original text had content before first "- ", it's here.
          if (index === 0) {
            // Check if it looks like code or note
            if (trimmedPart.startsWith("```")) {
              files.push({ filename: "Main Code", code: trimmedPart });
            } else {
              files.push({ filename: "Note", code: trimmedPart });
            }
            return;
          }

          // For subsequent parts, they are "Filename\nCode..."
          // We need to split the filename from the code body
          const firstLineBreak = part.indexOf("\n");

          if (firstLineBreak === -1) {
            // Might be just a filename with no code?
            files.push({ filename: part.trim(), code: "// No code provided" });
          } else {
            const filename = part.substring(0, firstLineBreak).trim();
            const code = part.substring(firstLineBreak).trim();
            files.push({ filename, code });
          }
        });
      }

      return { title, files };
    });
  }, []);

  useEffect(() => {
    // Wrap in setTimeout to ensure the DOM has updated with the new activeForm content
    const timer = setTimeout(() => {
      console.log("Highlighting code for form:", activeFormIndex);
      document.querySelectorAll("pre code").forEach((el) => {
        // Remove the data-highlighted attribute to force re-highlighting if needed
        el.removeAttribute("data-highlighted");
        hljs.highlightElement(el as HTMLElement);
      });
    }, 50);
    return () => clearTimeout(timer);
  }, [activeFormIndex, parsedForms]);

  const activeForm = parsedForms[activeFormIndex];

  return (
    <div className="container wide-mode" style={{ height: "90vh" }}>
      {/* Navigation */}
      <div className="top-nav fade-in">
        <button className="nav-tab" onClick={() => router.push("/study/win")}>
          📖 개념 학습
        </button>
        <button className="nav-tab" onClick={() => router.push("/quiz/win")}>
          ✏️ 퀴즈 풀기
        </button>
        <button className="nav-tab active">💻 전체 코드</button>
        <button className="nav-tab" onClick={() => router.push("/")}>
          🏠 홈으로
        </button>
      </div>

      <div
        className="study-container fade-in"
        style={{ border: "none", background: "transparent", boxShadow: "none" }}
      >
        {/* Sidebar */}
        <div
          className="study-sidebar card"
          id="code-sidebar"
          style={{ width: "250px", marginRight: "20px", padding: "15px" }}
        >
          <h3 style={{ marginBottom: "15px", color: "#4b5563" }}>
            📂 파일 탐색기
          </h3>
          <ul style={{ listStyle: "none" }}>
            {parsedForms.map((form, idx) => (
              <li
                key={idx}
                className={`sidebar-link ${
                  activeFormIndex === idx ? "active" : ""
                }`}
                style={{
                  padding: "10px 12px",
                  cursor: "pointer",
                  borderRadius: "6px",
                  marginBottom: "5px",
                  fontSize: "0.9rem",
                  color: activeFormIndex === idx ? "#4f46e5" : "#4b5563",
                  fontWeight: activeFormIndex === idx ? "bold" : "normal",
                }}
                onClick={() => setActiveFormIndex(idx)}
              >
                {form.title}
              </li>
            ))}
          </ul>
        </div>

        {/* Content */}
        <div
          className="study-content card"
          id="code-content"
          style={{ padding: "30px", background: "#ffffff", minWidth: 0 }}
        >
          {activeForm ? (
            <div key={activeFormIndex}>
              <h2
                style={{
                  marginBottom: "20px",
                  borderBottom: "2px solid #f3f4f6",
                  paddingBottom: "10px",
                }}
              >
                {activeForm.title}
              </h2>

              {activeForm.files.map((file, fIdx) => (
                <div key={fIdx} style={{ marginBottom: "40px" }}>
                  {activeForm.files.length > 1 && (
                    <h3
                      style={{
                        fontSize: "1.1rem",
                        color: "#6366f1",
                        marginBottom: "10px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <span style={{ marginRight: "8px" }}>📄</span>{" "}
                      {file.filename}
                    </h3>
                  )}

                  {/* Clean up the markdown code fences if present in the data string to avoid double rendering issues or raw backticks */}
                  {/* Clean up the markdown code fences if present in the data string to avoid double rendering issues or raw backticks */}
                  <pre
                    key={`${activeFormIndex}-${fIdx}`}
                    className="!m-0 !p-4 !bg-transparent overflow-x-auto"
                  >
                    <code className="language-csharp font-mono text-sm !bg-transparent">
                      {file.code
                        .replace(/```csharp/g, "")
                        .replace(/```/g, "")
                        .trim()}
                    </code>
                  </pre>
                </div>
              ))}
            </div>
          ) : (
            <div className="placeholder-text">코드를 불러오는 중입니다...</div>
          )}
        </div>
      </div>
    </div>
  );
}

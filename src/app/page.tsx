import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <header className="fade-in">
        <h1>C# ADO.NET & WinForms Master</h1>
        <p className="subtitle">
          데이터베이스 연동부터 실무 폼 개발까지 완벽 정복
        </p>
      </header>

      <main className="card fade-in" style={{ marginTop: "20px", flex: 1 }}>
        <div className="split-container">
          {/* ADO.NET Section */}
          <div className="split-section">
            <div className="section-icon">🗄️</div>
            <h3>ADO.NET (DB 연동)</h3>
            <p className="desc">Oracle 연결, DataSet, Adapter 핵심 개념</p>
            <div className="btn-stack">
              <Link href="/study/ado" className="btn">
                📖 개념 학습
              </Link>
              <Link href="/quiz/ado" className="btn btn-secondary">
                ✏️ 퀴즈 풀기
              </Link>
            </div>
            <p className="info-text">총 6개 챕터 / 12문항</p>
          </div>

          <div className="divider"></div>

          {/* WinForms Section */}
          <div className="split-section">
            <div className="section-icon">🖥️</div>
            <h3>WinForms (실무 예제)</h3>
            <p className="desc">스파게티 코드 리팩토링, 유지보수 패턴</p>
            <div className="btn-stack">
              <Link href="/study/win" className="btn">
                📖 개념 학습
              </Link>
              <Link href="/quiz/win" className="btn btn-secondary">
                ✏️ 퀴즈 풀기
              </Link>
              <Link
                href="/code"
                className="btn"
                style={{ background: "#4b5563", marginTop: "5px" }}
              >
                💻 전체 코드 보기
              </Link>
            </div>
            <p className="info-text">총 8개 폼 / 20문항</p>
          </div>
        </div>
      </main>
    </div>
  );
}

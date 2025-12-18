export interface Concept {
  id: number;
  title: string;
  content: string;
  code: string | null;
}

export const adoConcepts: Concept[] = [
  {
    id: 1,
    title: "1. ADO.NET 개요 및 특징",
    content: `### 정의
.NET 환경에서 데이터베이스를 조작하기 위한 클래스들의 집합입니다.

### 기존 ADO vs ADO.NET (핵심 차이)
1.  **XML 지원**: 데이터를 XML 형태로 변환하여 쉽게 교환할 수 있습니다.
2.  **단절된 데이터 구조 (Disconnected)**: 데이터베이스와 연결이 끊어진 상태에서 작업을 수행하여 리소스를 효율적으로 관리합니다.
3.  **메모리 데이터베이스**: DataSet을 이용해 메모리 상에 데이터를 올려놓고 작업합니다.`,
    code: null,
  },
  {
    id: 2,
    title: "2. ADO.NET 아키텍처 및 공급자",
    content: `### 아키텍처 (크게 2가지 요소)
1.  **.NET Data Provider (데이터 공급자)**: DB와 직접 연결하여 작업 수행 (Connection, Command, DataReader, DataAdapter).
2.  **DataSet (데이터셋)**: DB와 단절된 상태에서 데이터를 저장하는 메모리상의 DB.

### 데이터 공급자 종류 (Namespace)
*   **SqlClient**: MS-SQL Server 전용 (성능 우수).
*   **OleDb**: Access 등 OLE DB 지원 소스용.
*   **Odbc**: ODBC 드라이버 사용.
*   **OracleClient / ODP.NET**: 오라클 전용.
    *   *System.Data.OracleClient*: .NET 기본 (deprecated).
    *   *Oracle.DataAccess.Client (ODP.NET)*: 오라클 제공, 성능 우수 (**수업 사용**).`,
    code: null,
  },
  {
    id: 3,
    title: "3. 핵심 객체 상세: OracleCommand",
    content: `### 역할
DB에 SQL 명령(검색, 삽입, 수정, 삭제)을 내릴 때 사용하는 객체입니다.

### 주요 속성
*   **CommandText**: 실행할 SQL 문장.
*   **Connection**: 어떤 DB 연결을 사용할지 지정.
*   **CommandType**: SQL문인지 저장 프로시저인지 지정.

### ★ 주요 메서드 (시험 필수 암기)
1.  **ExecuteNonQuery()**:
    *   용도: INSERT, UPDATE, DELETE, CREATE 등 **데이터 변경**이나 DDL 수행.
    *   반환값: **변경된 행(Row)의 수** (int).
2.  **ExecuteReader()**:
    *   용도: SELECT 문으로 **결과 집합 조회**.
    *   반환값: **OracleDataReader** 객체.
3.  **ExecuteScalar()**:
    *   용도: SELECT count(*) 처럼 **단 하나의 값**만 필요할 때.
    *   반환값: 첫 번째 행의 **첫 번째 열 값** (object).`,
    code: null,
  },
  {
    id: 4,
    title: "4. DB 연결 및 작업 순서 (코딩 패턴)",
    content: `### 시험에 자주 나오는 코딩 순서
1.  **네임스페이스 선언**: \`using Oracle.DataAccess.Client;\`
2.  **Connection 생성**: 연결 문자열(User Id, Password, Data Source) 필수.
3.  **Connection 열기**: \`conn.Open();\`
4.  **Command 생성**: 쿼리문과 Connection 객체 연결.
5.  **작업 수행**: \`ExecuteReader()\` 등 호출.
6.  **리소스 해제**: \`conn.Close();\` (**반드시 닫아야 함**)`,
    code: `// 예시 패턴
using (OracleConnection conn = new OracleConnection(connStr)) {
    conn.Open();
    OracleCommand cmd = new OracleCommand(sql, conn);
    // 작업 수행...
} // using문 종료 시 자동 Close`,
  },
  {
    id: 5,
    title: "5. 핵심 개체: DataAdapter & DataSet",
    content: `### DataAdapter (다리 역할)
*   **역할**: DB와 DataSet 사이의 중계자 (Bridge).
*   **Command 속성**: SelectCommand, InsertCommand, UpdateCommand, DeleteCommand.
*   **핵심 메서드**:
    *   **Fill()**: DB 데이터 -> DataSet 채우기.
    *   **FillSchema()**: 스키마(틀)만 생성.
    *   **Update()**: DataSet 변경사항 -> DB 반영.

### DataSet (미니 DB)
*   **비연결 지향**: 연결이 끊긴 상태에서 작업.
*   **계층 구조**: DataSet > DataTable > DataRow & DataColumn.
*   **특징**: XML 기반 데이터 표현.`,
    code: null,
  },
  {
    id: 6,
    title: "6. 실습: DataAdapter 구현 흐름",
    content: `### 방법 1: 명시적 Command 할당
Connection Open -> Adapter 생성 -> SelectCommand 할당 -> DataSet 생성 -> Fill -> Close.

### 방법 2: CommandBuilder 사용 (자동)
Select 쿼리만 주면 나머지는 자동 생성.
*   **장점**: 코드가 간결해짐.
*   **조건**: 기본 키(Primary Key)가 포함된 Select 쿼리여야 함.`,
    code: `// 방법 2 예시
OracleDataAdapter adapter = new OracleDataAdapter(sql, conn);
OracleCommandBuilder builder = new OracleCommandBuilder(adapter);
DataSet ds = new DataSet();
adapter.Fill(ds);`,
  },
];

export const winConcepts: Concept[] = [
  {
    id: 1,
    title: "1. Form 1: 스파게티 코드의 문제점 분석",
    content: `### 🍝 스파게티 코드란?
**모든 로직이 이벤트 핸들러 안에 뒤섞여 있는 형태**를 말합니다. Form 1은 전형적인 나쁜 예시를 보여줍니다.

### 주요 문제점 상세 분석
1.  **ConnectionString 중복**:
    *   \`DAOpenBtn_Click\`, \`CCBtn_Click\`, \`AppendBtn_Click\` 등 모든 버튼 메서드마다 \`string connectionString = "..."\` 이 반복됩니다.
    *   **결과**: DB 접속 정보가 바뀌면 모든 코드를 다 수정해야 하는 **유지보수 지옥**이 발생합니다.
2.  **객체 생명주기 관리 부재**:
    *   클릭할 때마다 \`OracleDataAdapter\`, \`DataSet\`을 새로 생성(\`new\`)합니다.
    *   이전 상태가 유지되지 않아 데이터 관리가 비효율적입니다.
3.  **예외 처리의 반복**:
    *   모든 메서드에 동일한 \`try-catch\` 블록이 복사-붙여넣기 되어 있어 코드가 지저분합니다.

### 코드 심층 리뷰
\`\`\`csharp
private void DAOpenBtn_Click(object sender, EventArgs e) {
    try {
        // ❌ 문제점: 접속 문자열 하드코딩 & 중복
        string connectionString = "User Id=seo; ..."; 
        
        // ❌ 문제점: 지역 변수로 선언되어 메서드 종료 시 객체 소멸
        OracleDataAdapter DBAdapter = new OracleDataAdapter(..., ...);
        
        DataSet DS = new DataSet();
        DBAdapter.Fill(DS, "phone");
        ...
    } catch (DataException DE) { ... }
}
\`\`\``,
    code: null,
  },
  {
    id: 2,
    title: "2. Form 2: 메서드와 전역 변수로 리팩토링",
    content: `### 🛠 리팩토링 1단계: 구조 개선
Form 1의 문제점을 해결하기 위해 **함수(Method) 분리**와 **전역 변수(Field)** 개념을 도입했습니다.

### 핵심 개선 사항
1.  **DB_Open() 메서드 분리**:
    *   DB 연결 문자열과 초기화 로직을 하나의 함수로 추출했습니다.
    *   이제 접속 정보가 바뀌어도 \`DB_Open()\` 한 곳만 수정하면 됩니다.
2.  **전역 변수 사용 (Class Member)**:
    *   \`DBAdapter\`, \`DS(DataSet)\` 등을 클래스 멤버 변수로 선언했습니다.
    *   **장점**: 폼이 살아있는 동안 데이터 상태가 유지되며, 여러 메서드에서 데이터를 공유할 수 있습니다.
3.  **사용자 정의 함수**:
    *   \`ClearTextBoxes()\` 처럼 자주 쓰는 UI 초기화 로직도 함수로 만들어서 재사용합니다.

### 코드 비교 분석
\`\`\`csharp
// ✅ 전역 변수로 선언 (어디서든 접근 가능)
OracleDataAdapter DBAdapter; 
DataSet DS;

// ✅ 초기화 로직 중앙 집중화
private void DB_Open() {
    try {
        string connStr = "User Id=seo...; Service Name=xe";
        DBAdapter = new OracleDataAdapter(cmdStr, connStr);
        // ...
    } catch (DataException DE) { ... }
}
\`\`\``,
    code: null,
  },
  {
    id: 3,
    title: "3. Form 3 & 4: DBClass를 통한 완벽한 캡슐화",
    content: `### 📦 DBClass 패턴 (객체지향의 정수)
Form 코드에서 복잡한 DB 로직을 완전히 분리하여 **DBClass**라는 별도의 클래스에 위임합니다.

### DBClass의 구조
*   **멤버 변수**: \`OracleConnection\`, \`DataAdapter\`, \`DataSet\`을 모두 private 혹은 public으로 관리.
*   **생성자**: 객체 생성 시 \`DB_Open()\` 메서드를 호출하여 바로 연결을 준비.
*   **역할**: "DB에 연결하고 데이터를 퍼나르는 트럭" 역할을 전담합니다.

### 폼 간의 데이터 전달 (Form 1 <-> Form 2)
1.  **Owner 속성**:
    *   \`frm2.Owner = this;\`: Form 2의 주인이 Form 1임을 명시합니다.
    *   \`Form1 Parent = (Form1)Owner;\`: 자식 폼에서 부모 폼을 형변환하여 접근합니다.
2.  **Property (속성) 활용**:
    *   부모 폼의 텍스트박스(\`txtSearch\`)는 private이라 직접 접근이 불가능합니다.
    *   **public Property**(\`TxtS\`)를 만들어 간접적으로 값을 주고받는 것이 **안전한 코딩 표준**입니다.

### 핵심 코드 패턴
\`\`\`csharp
// [Form 1] 자식 폼 열기
Form2 frm2 = new Form2();
frm2.Owner = this; // 👈 족보 정리 (내가 니 애비다)
frm2.ShowDialog();

// [Form 2] 부모 데이터 가져오기
Form1 Parent = (Form1)Owner; // 👈 부모 소환
// 부모의 TxtS 속성을 통해 검색어 가져오기
DataRow[] rows = dbc.PhoneTable.Select("Name like '%" + Parent.TxtS + "%'");
\`\`\``,
    code: null,
  },
  {
    id: 4,
    title: "4. Form 5: ListView와 Join 쿼리",
    content: `### 🔗 Join 쿼리의 활용
두 개 이상의 테이블에서 데이터를 가져올 때 사용합니다.
*   \`select * from Phone P, Register R where P.ID = R.ID\`
*   **주의**: 필드명이 중복될 경우 \`tablename.fieldname\` 형식으로 명시해야 합니다.

### 📋 ListView 컨트롤 심화
DataGridView보다 디자인 유연성이 높지만, 코드로 데이터를 채워넣는 과정이 더 복잡합니다.
1.  **View 속성**: 반드시 \`Details\`로 설정해야 표 형태로 보입니다.
2.  **데이터 바인딩 불가**: \`DataSource\` 속성이 없어서 반복문(\`foreach\`)으로 직접 채워야 합니다.
3.  **SubItems**: 첫 번째 컬럼은 \`Item.Text\`, 두 번째 컬럼부터는 \`Item.SubItems.Add()\`로 추가합니다.

### 리스트뷰 채우기 패턴
\`\`\`csharp
foreach (DataRow row in DS.Tables[0].Rows) {
    // 1. 첫 번째 컬럼(Main Item) 생성
    ListViewItem item = new ListViewItem(row["PName"].ToString());
    
    // 2. 두 번째 컬럼부터는 SubItems에 추가
    item.SubItems.Add(row["Phone"].ToString());
    item.SubItems.Add(row["Email"].ToString());
    
    // 3. 리스트뷰에 최종 등록
    listView1.Items.Add(item);
}
\`\`\``,
    code: null,
  },
  {
    id: 5,
    title: "5. Form 6: SQL Injection과 Parameter",
    content: `### 🛡️ SQL Injection 공격이란?
사용자 입력값에 악의적인 SQL 구문을 섞어서 DB를 조작하는 해킹 기법입니다.
*   예: 검색창에 \`' OR '1'='1\`을 입력하여 모든 정보를 빼내감.

### 해결책: OracleParameter 사용
쿼리문에 값을 직접 붙이지 않고(\`+\`), **바인딩 변수(Placeholder)**를 사용합니다.
1.  **쿼리문**: \`where name = :pname\` 처럼 \`:\`를 붙여 변수 자리를 만듭니다.
2.  **컬렉션 추가**: \`adapter.SelectCommand.Parameters.Add()\` 메서드로 실제 값을 매핑합니다.
3.  **효과**: DB가 입력값을 "코드"가 아닌 단순 "문자열 데이터"로 인식하게 하여 해킹을 원천 차단합니다.

### 안전한 코드 작성법
\`\`\`csharp
// 🚫 위험한 방식 (절대 금지)
string sql = "select * from phone where name = '" + txtName.Text + "'";

// ✅ 안전한 방식 (권장)
string sql = "select * from phone where name = :pname"; // :pname은 변수
OracleCommand cmd = new OracleCommand(sql, conn);
// 파라미터 이름, 타입, 실제 값 설정
cmd.Parameters.Add("pname", OracleDbType.Varchar2).Value = txtName.Text;
\`\`\``,
    code: null,
  },
  {
    id: 6,
    title: "6. Form 7 & 8: CRUD 완성 및 모드 패턴",
    content: `### 🔀 하나의 폼으로 여러 기능 수행 (Mode Pattern)
Form 2를 "입력상자"로 재사용하는 고급 기법입니다. **입력, 수정, 삭제** 기능을 창 하나에서 모두 처리합니다.

### 구현 로직
1.  **Flag 변수 (\`strCommand\`)**: 부모 폼에서 이 변수에 "추가", "수정", "삭제" 중 하나의 값을 넣어줍니다.
2.  **UI 변경**: 자식 폼이 열릴 때(\`Form_Load\`), 이 변수를 확인하여 버튼 글씨를 바꿉니다. (예: "저장" vs "수정완료")
3.  **분기 처리**: 버튼 클릭 시 \`if(strCommand == "추가")\` 로직을 통해 각기 다른 DB 작업을 수행합니다.

### 🔢 ExecuteNonQuery의 반환값 활용
*   **개념**: SELECT가 아닌 쿼리(Insert, Update, Delete)는 반환 데이터가 없습니다. 대신 **"몇 줄이 성공했는지"** 정수를 줍니다.
*   **검증**: 반환값이 0보다 크면 성공, 0이면 실패로 간주합니다.

### 실전 검증 로직
\`\`\`csharp
// ExecuteNonQuery는 영향받은 행의 개수(int)를 반환
int result = cmd.ExecuteNonQuery();

if (result > 0) {
    MessageBox.Show("정상적으로 처리되었습니다.");
} else {
    MessageBox.Show("처리된 데이터가 없습니다. (실패)");
}
\`\`\``,
    code: null,
  },
];

// End of concepts definition

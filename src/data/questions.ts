export interface Question {
  id: number;
  question: string;
  options: string[];
  answer: number;
  explanation: string;
}

export const adoQuestions: Question[] = [
  {
    id: 1,
    question:
      "ADO.NET 방식(DataSet)의 가장 큰 특징인 '비연결 지향(Disconnected)'의 장점으로 옳은 것은?",
    options: [
      "데이터베이스와 항상 연결되어 있어 실시간 처리에 유리하다.",
      "데이터베이스 과부하 문제를 해결하고 확장성을 높여준다.",
      "DataReader를 사용하여 메모리 사용량을 최소화한다.",
      "복잡한 트랜잭션 관리가 불필요하다.",
    ],
    answer: 1,
    explanation:
      "비연결 지향 방식은 데이터를 가져온 후 연결을 끊고 작업하므로, DB 연결 자원을 절약하고 과부하를 줄여주는 것이 핵심 장점입니다.",
  },
  {
    id: 2,
    question:
      "DataAdapter의 주요 메서드 중, 데이터는 채우지 않고 데이터 원본의 '스키마(구조)'만 DataSet에 생성하는 메서드는?",
    options: ["Fill()", "Update()", "FillSchema()", "Select()"],
    answer: 2,
    explanation:
      "FillSchema() 메서드는 데이터베이스의 테이블 구조(스키마) 정보만 가져와 DataSet 내에 DataTable을 생성합니다.",
  },
  {
    id: 3,
    question:
      "DataSet의 계층 구조에서 실제 데이터 값(예: '홍길동', 30세) 하나를 나타내는 객체는?",
    options: ["DataTable", "DataColumn", "DataRow", "DataRelation"],
    answer: 2,
    explanation:
      "DataTable은 테이블, DataColumn은 열(구조), DataRow는 행(실제 데이터 값)을 나타냅니다.",
  },
  {
    id: 4,
    question:
      "DataAdapter는 4가지 Command 속성을 가집니다. 다음 중 갱신(UPDATE) 명령을 담당하는 속성은?",
    options: [
      "SelectCommand",
      "InsertCommand",
      "DeleteCommand",
      "UpdateCommand",
    ],
    answer: 3,
    explanation:
      "DataAdapter는 SelectCommand, InsertCommand, UpdateCommand, DeleteCommand 4가지 속성을 통해 CRUD 작업을 수행합니다.",
  },
  {
    id: 5,
    question:
      "CommandBuilder를 사용하는 두 번째 구현 방법(자동 생성)의 특징으로 옳은 것은?",
    options: [
      "Select 쿼리만 주면 Insert, Update, Delete 명령을 자동 생성해준다.",
      "모든 SQL 명령을 개발자가 직접 수동으로 할당해야 한다.",
      "DataSet을 사용하지 않고 직접 DB에 명령을 수행한다.",
      "복잡한 JOIN 쿼리에 최적화되어 있다.",
    ],
    answer: 0,
    explanation:
      "CommandBuilder는 SelectCommand를 기반으로 나머지 변경 작업에 필요한 명령문을 자동으로 생성해주는 편리한 도구입니다.",
  },
  {
    id: 6,
    question: "다음 중 ADO.NET 개체들의 역할 연결이 올바르지 않은 것은?",
    options: [
      "Connection - 연결 담당",
      "DataAdapter - 데이터 운반 및 동기화 (Bridge)",
      "DataSet - 실시간 조회 (Forward-only)",
      "Command - 명령 실행",
    ],
    answer: 2,
    explanation:
      "DataSet은 '메모리 저장소(In-Memory DB)' 역할을 하며, 실시간 조회(Forward-only)는 DataReader의 역할입니다.",
  },
  {
    id: 7,
    question:
      "INSERT, UPDATE, DELETE 구문과 같이 데이터베이스에 변경을 가하는 쿼리를 실행할 때 사용하는 Command 메서드는?",
    options: [
      "ExecuteReader()",
      "ExecuteScalar()",
      "ExecuteNonQuery()",
      "Fill()",
    ],
    answer: 2,
    explanation:
      "ExecuteNonQuery()는 행을 반환하지 않고, 영향을 받은 행의 수(int)만 반환하므로 DML(Insert, Update, Delete) 실행에 적합합니다.",
  },
  {
    id: 8,
    question:
      "데이터베이스 연결(Connection) 관리에 대한 설명으로 올바르지 않은 것은?",
    options: [
      "사용이 끝난 연결은 반드시 Close() 메서드로 닫아야 한다.",
      "using 문을 사용하면 블록이 끝날 때 자동으로 Dispose(Close) 된다.",
      "연결 횟수를 줄이기 위해 프로그램 시작부터 끝까지 연결을 계속 유지하는 것이 좋다.",
      "ConnectionString 속성에는 DB 위치, 사용자 ID, 비밀번호 등이 포함된다.",
    ],
    answer: 2,
    explanation:
      "데이터베이스 연결은 한정된 자원이므로, 필요한 순간에만 연결하고 작업이 끝나면 즉시 닫아(Connection Pooling 활용) 자원을 반납해야 합니다.",
  },
  {
    id: 9,
    question:
      "DataAdapter.Update() 메서드를 호출하여 변경사항을 저장하려 할 때, Insert/Update/Delete Command가 자동으로 생성되게 하려면 어떤 객체가 필요한가?",
    options: ["OracleCommandBuilder", "OracleDataReader", "DataSet", "Context"],
    answer: 0,
    explanation:
      "OracleCommandBuilder는 DataAdapter에 할당된 SelectCommand 정보를 바탕으로 나머지 수정용 Command들을 자동으로 생성해줍니다.",
  },
  {
    id: 10,
    question:
      "DataSet(ds) 내에 있는 'Emp'라는 이름의 테이블 객체에 접근하는 코드로 가장 적절한 것은?",
    options: [
      'ds.Rows["Emp"]',
      'ds.Columns["Emp"]',
      'ds.Tables["Emp"]',
      'ds.Data["Emp"]',
    ],
    answer: 2,
    explanation:
      'DataSet은 여러 개의 DataTable을 Tables 컬렉션으로 관리하므로, ds.Tables["테이블명"] 형식으로 접근합니다.',
  },
  {
    id: 11,
    question:
      "ADO.NET으로 데이터를 조회하여 DataSet에 채우는 일반적인 순서로 올바른 것은?",
    options: [
      "DataSet 생성 -> Fill -> Connection Open -> DataAdapter 생성",
      "Connection Open -> DataAdapter 생성 -> DataSet 생성 -> Fill -> Connection Close",
      "DataAdapter 생성 -> Connection Close -> DataSet 생성 -> Fill",
      "Fill -> DataSet 생성 -> DataAdapter 생성 -> Connection Open",
    ],
    answer: 1,
    explanation:
      "연결 열기(Open) -> 어댑터 준비 -> 담을 통(DataSet) 준비 -> 채우기(Fill) -> 연결 닫기(Close) 순서가 정석입니다.",
  },
  {
    id: 12,
    question:
      "Oracle 연결 문자열(ConnectionString)에 반드시 포함되어야 할 필수 정보가 아닌 것은?",
    options: [
      "Data Source (데이터 원본 위치)",
      "User Id (사용자 아이디)",
      "Password (비밀번호)",
      "Table Name (테이블 이름)",
    ],
    answer: 3,
    explanation:
      "Table Name은 연결 문자열이 아니라, 이후 실행할 SQL 쿼리문(Command)에 포함되어야 할 정보입니다.",
  },
];

export const winQuestions: Question[] = [
  {
    id: 1,
    question:
      '[코드 퀴즈] 다음 빈칸 (A)에 들어갈 코드로 알맞은 것은?\n```csharp\nForm1 Parent = (Form1)Owner;\n// 부모 폼의 검색어(TxtS)를 가져와서 필터링\nDataRow[] rows = dbc.PhoneTable.____(A)____("Name like \'%" + Parent.TxtS + "%\' ");\n```',
    options: ["Select", "Find", "Search", "Query"],
    answer: 0,
    explanation:
      'DataTable의 Select 메서드는 조건에 맞는 행들의 배열(DataRow[])을 반환합니다. (예: Select("조건문"))',
  },
  {
    id: 2,
    question:
      "[코드 퀴즈] DBClass 패턴에서 외부에서 DBAdapter 객체에 접근하기 위해 Property를 사용합니다. 빈칸에 알맞은 키워드는?\n```csharp\npublic OracleDataAdapter DBAdapter\n{\n    ____ { return dBAdapter; }\n    ____ { dBAdapter = value; }\n}\n```",
    options: ["get, set", "read, write", "open, close", "input, output"],
    answer: 0,
    explanation:
      "C# 프로퍼티는 get(읽기)과 set(쓰기) 접근자를 사용하여 private 필드에 간접적으로 접근하게 합니다.",
  },
  {
    id: 3,
    question:
      '[코드 퀴즈] SQL Injection 방지를 위해 파라미터를 사용하는 방식입니다. 바인딩 변수로 알맞은 형태는?\n```csharp\nstring sql = "select * from Phone where Name = ___:pname___";\ncmd.Parameters.Add("pname", OracleDbType.Varchar2).Value = txtName.Text;\n```',
    options: [":pname", "@pname", "?pname", "$pname"],
    answer: 0,
    explanation:
      "오라클(ODP.NET)에서는 파라미터 바인딩 변수 앞에 콜론(:)을 붙여 사용합니다. (MSSQL은 @를 사용)",
  },
  {
    id: 4,
    question:
      '[코드 퀴즈] DataSet의 변경 내용을 DB에 반영할 때, 에러가 없다면 최종적으로 변경 상태를 확정 짓는 메서드는?\n```csharp\nif (!ds.HasErrors) {\n    adapter.Update(ds, "Phone");\n    ds._________(); // 변경 확정 (Modified 상태 클리어)\n}\n```',
    options: ["AcceptChanges()", "Commit()", "Clear()", "Finalize()"],
    answer: 0,
    explanation:
      "AcceptChanges() 메서드를 호출해야 DataSet 내의 각 행(Row)의 상태 플래그(Modified, Added 등)가 초기화되어 변경이 확정됩니다.",
  },
  {
    id: 5,
    question:
      "[코드 퀴즈] 자식 폼(Form2)에서 부모 폼(Form1)을 참조하기 위해 사용하는 속성은?\n```csharp\nForm2 frm = new Form2();\nfrm._______ = this; // 부모를 나(Form1)로 지정\nfrm.ShowDialog();\n```",
    options: ["Owner", "Parent", "Master", "Container"],
    answer: 0,
    explanation:
      "WinForms에서 폼 간의 소유 관계를 설정할 때 Owner 속성을 사용합니다. 이를 통해 자식 폼에서 (Form1)Owner 로 부모에 접근할 수 있습니다.",
  },
  {
    id: 6,
    question:
      '[코드 퀴즈] ListView에 아이템을 한 줄 추가하려고 합니다. 순서가 올바른 것은?\n```csharp\n(ㄱ) listView1.Items.Add(item);\n(ㄴ) item.SubItems.Add("전화번호");\n(ㄷ) ListViewItem item = new ListViewItem("홍길동");\n```',
    options: [
      "ㄷ -> ㄴ -> ㄱ",
      "ㄱ -> ㄴ -> ㄷ",
      "ㄷ -> ㄱ -> ㄴ",
      "ㄴ -> ㄷ -> ㄱ",
    ],
    answer: 0,
    explanation:
      "먼저 ListViewItem 객체를 생성(ㄷ)하고, 서브 아이테들을 추가(ㄴ)한 뒤, 마지막으로 리스트뷰의 Items 컬렉션에 추가(ㄱ)해야 합니다.",
  },
  {
    id: 7,
    question:
      "[코드 퀴즈] ExecuteNonQuery() 메서드를 사용하여 UPDATE 쿼리를 실행했습니다. 성공적으로 1개의 행이 수정되었다면 반환값은?",
    options: ["1 (int)", "true (bool)", '"Success" (string)', "null"],
    answer: 0,
    explanation:
      "ExecuteNonQuery()는 영향 받은 행의 개수를 정수(int)로 반환합니다.",
  },
  {
    id: 8,
    question:
      "[코드 퀴즈] 다음 중 'DBClass' 객체를 Form1에서 생성하고 초기화하는 코드로 가장 적절한 것은?",
    options: [
      "DBClass dbc = new DBClass();\\ndbc.DB_ObjCreate();\\ndbc.DB_Open();",
      "DBClass dbc = new DBClass();\\ndbc.Open();",
      "DBClass.Open();",
      "new DBClass().Connect();",
    ],
    answer: 0,
    explanation:
      "제공된 text.md 코드 패턴에 따르면, 객체 생성 -> DB_ObjCreate() -> DB_Open() 순서로 초기화를 진행하고 있습니다.",
  },
  {
    id: 9,
    question:
      "[코드 퀴즈] Form 7에서 '추가', '수정', '삭제' 버튼을 눌렀을 때, Form 2에게 어떤 작업을 할지 알려주기 위해 사용한 변수(Flag)의 이름은?",
    options: ["strCommand", "dbMode", "flagAction", "cmdType"],
    answer: 0,
    explanation:
      '코드에서 private string strCommand; 필드를 선언하고, 버튼 클릭 시 "추가", "수정", "삭제" 문자열을 저장하여 Form 2에 전달했습니다.',
  },
  {
    id: 10,
    question:
      "[코드 퀴즈] 다수의 테이블을 조회하기 위해 ' JOIN ' 쿼리를 사용할 때, DataAdapter.Fill 메서드의 두 번째 인자(SrcTable) 이름으로 코드에서 사용한 것은?",
    options: ['"RelTable"', '"JoinTable"', '"PhoneRegister"', '"Result"'],
    answer: 0,
    explanation:
      'Form5 코드(ADOForm_5)를 보면 DBAdapter.Fill(DS, "RelTable"); 로 사용하고 있습니다.',
  },
  {
    id: 11,
    question:
      "[코드 퀴즈] Form 5에서 ListView의 모양을 표(Table) 형태로 보여주기 위해 설정해야 하는 필수 속성은?\n```csharp\nlistView1._____ = View.Details;\nlistView1.GridLines = true;\n```",
    options: ["View", "Mode", "Style", "Layout"],
    answer: 0,
    explanation:
      "ListView를 엑셀이나 표처럼 행/열 구조로 보여주려면 `View` 속성을 `View.Details`로 설정해야 합니다.",
  },
  {
    id: 12,
    question:
      '[코드 퀴즈] 다음 중 DataAdapter가 DB의 데이터를 가져와서 DataSet에 채울 때 사용하는 메서드는?\n```csharp\nDBAdapter.____(DS, "Phone");\n```',
    options: ["Fill", "Load", "Get", "Push"],
    answer: 0,
    explanation:
      "`Fill` 메서드는 SelectCommand를 실행하여 가져온 데이터를 DataSet(메모리)에 채워넣는 역할을 합니다.",
  },
  {
    id: 13,
    question:
      "[코드 퀴즈] 자식 폼(Form2)에서 작업을 마치고 창을 닫을 때, 부모 폼에게 '확인(OK)' 신호를 보내는 코드는?\n```csharp\nthis.DialogResult = DialogResult.____;\nthis.Close();\n```",
    options: ["OK", "Yes", "Confirm", "Done"],
    answer: 0,
    explanation:
      "다이얼로그 창을 닫을 때 `DialogResult.OK`를 반환해야 부모 폼의 `ShowDialog() == DialogResult.OK` 조건문이 참이 됩니다.",
  },
  {
    id: 14,
    question:
      '[코드 퀴즈] 다음은 DB 연결이 끊어졌을 때를 대비한 예외 처리 코드입니다. 빈칸에 들어갈 구체적인 예외 클래스는?\n```csharp\ntry {\n    DBAdapter.Fill(DS, "Phone");\n} catch (__________ ex) {\n    MessageBox.Show("DB 연결 실패: " + ex.Message);\n}\n```',
    options: [
      "DataException",
      "IOException",
      "SocketException",
      "NullException",
    ],
    answer: 0,
    explanation:
      "ADO.NET에서 데이터베이스 관련 오류는 주로 `DataException` (또는 `OracleException`)으로 처리합니다.",
  },
  {
    id: 15,
    question:
      "[코드 퀴즈] Form 1에서 Form 2를 '모달(Modal)' 창으로 띄우는 메서드는? (부모 창을 제어할 수 없는 상태)\n```csharp\nForm2 frm = new Form2();\nfrm.Owner = this;\nfrm._______();\n```",
    options: ["ShowDialog", "Show", "Open", "View"],
    answer: 0,
    explanation:
      "`ShowDialog()`는 창을 모달 모드로 띄워, 해당 창이 닫힐 때까지 부모 창을 조작할 수 없게 만듭니다.",
  },
  {
    id: 16,
    question:
      "[코드 퀴즈] `DBClass`를 사용할 때, 메모리 누수를 방지하기 위해 사용이 끝난 연결 객체를 닫아주는 메서드는?\n```csharp\npublic void DB_Close() {\n    if (DBConn != null) DBConn.______();\n}\n```",
    options: ["Close", "Stop", "Exit", "End"],
    answer: 0,
    explanation:
      "`OracleConnection` 객체는 사용 후 반드시 `Close()` 해야 DB 연결 자원을 반납할 수 있습니다.",
  },
  {
    id: 17,
    question:
      "[코드 퀴즈] ListView의 특정 아이템을 선택했을 때, 해당 줄(Row) 전체가 파랗게 선택되도록 하는 속성은?\n```csharp\nlistView1.________ = true;\n```",
    options: ["FullRowSelect", "SelectAll", "RowMode", "WholeRow"],
    answer: 0,
    explanation:
      "`FullRowSelect`를 true로 설정해야 아이템의 텍스트뿐만 아니라 해당 행의 빈 공간을 클릭해도 선택됩니다.",
  },
  {
    id: 18,
    question:
      '[코드 퀴즈] `DataSet`의 데이터를 모두 지우고 초기화하는 메서드는? (새로운 검색 결과를 담기 전 주로 사용)\n```csharp\nDS._____(); \nDBAdapter.Fill(DS, "Phone");\n```',
    options: ["Clear", "Empty", "Reset", "Delete"],
    answer: 0,
    explanation:
      "`Clear()` 메서드는 DataSet 내의 모든 테이블의 모든 행(Row)을 제거하여 깨끗한 상태로 만듭니다.",
  },
  {
    id: 19,
    question:
      '[코드 퀴즈] Form 2에서 사용자가 입력한 텍스트박스들이 비어있는지 확인하는 유효성 검사 로직입니다. 빈칸은?\n```csharp\nif (txtId.Text.____ == 0) {\n    MessageBox.Show("ID를 입력하세요");\n    return;\n}\n```',
    options: ["Length", "Size", "Count", "Width"],
    answer: 0,
    explanation:
      "문자열의 길이(글자 수)를 확인할 때는 `Length` 속성을 사용합니다.",
  },
  {
    id: 20,
    question:
      "[코드 퀴즈] 다음은 `OracleCommandBuilder`를 생성하는 코드입니다. 생성자에 반드시 들어가야 할 객체는?\n```csharp\n// 이 객체가 있어야 Insert/Update/Delete 문을 자동 생성함\nmyCommandBuilder = new OracleCommandBuilder(_______);\n```",
    options: ["DBAdapter", "DBConn", "DS", "this"],
    answer: 0,
    explanation:
      "`OracleCommandBuilder`는 `DataAdapter`가 가지고 있는 `SelectCommand` 정보를 분석하여 쿼리를 생성하므로, 생성자에 `DataAdapter`를 넘겨줘야 합니다.",
  },
];

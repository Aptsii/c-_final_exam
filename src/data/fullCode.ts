export const winFullCode = `### ADOForm \_1

\`\`\`csharp
private int SelectedRowIndex;
public Form1()
{
    InitializeComponent();
}

private void DAOpenBtn_Click(object sender, EventArgs e)
{
    try
    {
        string connectionString = "User Id=seo; Password=1111; Data Source=(DESCRIPTION = (ADDRESS = (PROTOCOL = TCP)(HOST = localhost)(PORT = 1521)) (CONNECT_DATA = (SERVER = DEDICATED)(SERVICE_NAME = xe)) ); ";
        string commandString = "select * from phone";
        OracleDataAdapter DBAdapter = new OracleDataAdapter(commandString, connectionString);
        DataSet DS = new DataSet();
        DBAdapter.Fill(DS, "phone");
        DBGrid.DataSource = DS.Tables["phone"].DefaultView;
    }
    catch (DataException DE)
    {
        MessageBox.Show(DE.Message);
    }
    catch (Exception DE)
    {
        MessageBox.Show(DE.Message);
    }
}

private void CCBtn_Click(object sender, EventArgs e)
{
    try
    {
        string connectionString = "User Id=seo; Password=1111; Data Source=(DESCRIPTION = (ADDRESS = (PROTOCOL = TCP)(HOST = localhost)(PORT = 1521)) (CONNECT_DATA = (SERVER = DEDICATED)(SERVICE_NAME = xe)) ); ";
        OracleConnection myConnection = new OracleConnection(connectionString);
        string commandString = "select * from Phone";
        OracleCommand myCommand = new OracleCommand();
        myCommand.Connection = myConnection;
        myCommand.CommandText = commandString;
        OracleDataAdapter DBAdapter = new OracleDataAdapter();
        DBAdapter.SelectCommand = myCommand;
        DataSet DS = new DataSet();
        DBAdapter.Fill(DS, "Phone");
        DBGrid.DataSource = DS.Tables["Phone"].DefaultView;
    }
    catch (DataException DE)
    {
        MessageBox.Show(DE.Message);
    }
    catch (Exception DE)
    {
        MessageBox.Show(DE.Message);
    }
}

private void DRBtn_Click(object sender, EventArgs e)
{
    try
    {
        string connectionString = "User Id=seo; Password=1111; Data Source=(DESCRIPTION = (ADDRESS = (PROTOCOL = TCP)(HOST = localhost)(PORT = 1521)) (CONNECT_DATA = (SERVER = DEDICATED)(SERVICE_NAME = xe)) ); ";
        OracleConnection myConnection = new OracleConnection(connectionString);
        string commandString = "select * from phone";
        OracleCommand myCommand = new OracleCommand();
        myCommand.Connection = myConnection;
        myCommand.CommandText = commandString;
        myConnection.Open();
        OracleDataReader myReader;
        myReader = myCommand.ExecuteReader();
        string ResultMessage = "";
        while (myReader.Read())
        {
            ResultMessage = myReader.GetString(1) + ", " + myReader.GetString(2);
            MessageBox.Show(ResultMessage);
        }
        myReader.Close();
        myConnection.Close();
    }
    catch (DataException DE)
    {
        MessageBox.Show(DE.Message);
    }
    catch (Exception DE)
    {
        MessageBox.Show(DE.Message);
    }
}

private void AppendBtn_Click(object sender, EventArgs e)
{
    try
    {
        string connectionString = "User Id=seo; Password=1111; Data Source=(DESCRIPTION = (ADDRESS = (PROTOCOL = TCP)(HOST = localhost)(PORT = 1521)) (CONNECT_DATA = (SERVER = DEDICATED)(SERVICE_NAME = xe)) ); ";
        string commandString = "select * from Phone";
        OracleDataAdapter DBAdapter = new OracleDataAdapter(commandString, connectionString);
        OracleCommandBuilder myCommandBuilder = new OracleCommandBuilder(DBAdapter);
        DataSet DS = new DataSet();
        DBAdapter.Fill(DS, "Phone");
        DataTable phoneTable = DS.Tables["Phone"];
        DataRow newRow = phoneTable.NewRow();
        newRow["id"] = Convert.ToInt32(txtid.Text);
        newRow["PName"] = txtName.Text;
        newRow["Phone"] = txtPhone.Text;
        newRow["Email"] = txtMail.Text;
        phoneTable.Rows.Add(newRow);
        DBAdapter.Update(DS, "Phone");
        DBGrid.DataSource = DS.Tables["Phone"].DefaultView;
    }
    catch (DataException DE)
    {
        MessageBox.Show(DE.Message);
    }
    catch (Exception DE)
    {
        MessageBox.Show(DE.Message);
    }
}

private void UpdateBtn_Click(object sender, EventArgs e)
{
    try
    {
        string connectionString = "User Id=seo; Password=1111; Data Source=(DESCRIPTION = (ADDRESS = (PROTOCOL = TCP)(HOST = localhost)(PORT = 1521)) (CONNECT_DATA = (SERVER = DEDICATED) (SERVICE_NAME = xe) ) );";
        string commandString = "select * from Phone";
        OracleDataAdapter DBAdapter = new OracleDataAdapter(commandString, connectionString);
        OracleCommandBuilder myCommandBuilder = new OracleCommandBuilder(DBAdapter);
        DataSet DS = new DataSet("Phone");
        DBAdapter.Fill(DS, "Phone");
        DataTable phoneTable = DS.Tables["Phone"];
        DataColumn[] PrimaryKey = new DataColumn[1];
        PrimaryKey[0] = phoneTable.Columns["id"];
        phoneTable.PrimaryKey = PrimaryKey;
        DataRow currRow = phoneTable.Rows.Find(SelectedRowIndex);
        currRow.BeginEdit();
        currRow["id"] = txtid.Text;
        currRow["PName"] = txtName.Text;
        currRow["Phone"] = txtPhone.Text;
        currRow["EMail"] = txtMail.Text;
        currRow.EndEdit();
        DataSet UpdatedSet = DS.GetChanges(DataRowState.Modified);
        if (UpdatedSet.HasErrors)
        { MessageBox.Show("변경된 데이터에 문제가 있습니다."); }
        else
        { DBAdapter.Update(UpdatedSet, "Phone"); DS.AcceptChanges(); }
        DBGrid.DataSource = DS.Tables["Phone"].DefaultView;
    }
    catch (DataException DE)
    {
        MessageBox.Show(DE.Message);
    }
    catch (Exception DE)
    {
        MessageBox.Show(DE.Message);
    }
}

private void DeleteBtn_Click(object sender, EventArgs e)
{
    try
    {
        string connectionString = "User Id=seo; Password=1111; Data Source=(DESCRIPTION = (ADDRESS = (PROTOCOL = TCP)(HOST = localhost)(PORT = 1521)) (CONNECT_DATA = (SERVER = DEDICATED)(SERVICE_NAME = xe)) ); ";
        string commandString = "select * from Phone";
        OracleDataAdapter DBAdapter = new OracleDataAdapter(commandString, connectionString);
        OracleCommandBuilder myCommandBuilder = new OracleCommandBuilder(DBAdapter);
        DataSet DS = new DataSet("Phone");
        DBAdapter.Fill(DS, "Phone");
        DataTable phoneTable = DS.Tables["Phone"];
        DataColumn[] PrimaryKey = new DataColumn[1];
        PrimaryKey[0] = phoneTable.Columns["id"];
        phoneTable.PrimaryKey = PrimaryKey;
        DataRow currRow = phoneTable.Rows.Find(SelectedRowIndex);
        currRow.Delete();
        DBAdapter.Update(DS.GetChanges(DataRowState.Deleted), "Phone");
        DBGrid.DataSource = DS.Tables["Phone"].DefaultView;
    }
    catch (DataException DE)
    {
        MessageBox.Show(DE.Message);
    }
    catch (Exception DE)
    {
        MessageBox.Show(DE.Message);
    }
}

private void DBGrid_CellClick(object sender, DataGridViewCellEventArgs e)
{
    try
    {
        string connectionString = "User Id=seo; Password=1111; Data Source=(DESCRIPTION = (ADDRESS = (PROTOCOL = TCP)(HOST = localhost)(PORT = 1521)) (CONNECT_DATA = (SERVER = DEDICATED)(SERVICE_NAME = xe)) ); ";
        string commandString = "select * from Phone";
        OracleDataAdapter DBAdapter = new OracleDataAdapter(commandString, connectionString);
        DataSet DS = new DataSet();
        DBAdapter.Fill(DS, "Phone");
        DataTable phoneTable = DS.Tables["Phone"];
        if (e.RowIndex < 0)
        {
            return;
        }
        else if (e.RowIndex > phoneTable.Rows.Count - 1)
        {
            MessageBox.Show("해당하는 데이터가 존재하지 않습니다.");
            return;
        }
        DataRow currRow = phoneTable.Rows[e.RowIndex];
        txtid.Text = currRow["id"].ToString();
        txtName.Text = currRow["PName"].ToString();
        txtPhone.Text = currRow["Phone"].ToString();
        txtMail.Text = currRow["EMail"].ToString();
        SelectedRowIndex = Convert.ToInt32(currRow["id"]);
    }
    catch (DataException DE)
    {
        MessageBox.Show(DE.Message);
    }
    catch (Exception DE)
    {
        MessageBox.Show(DE.Message);
    }
}
\`\`\`

### ADOForm_2

\`\`\`csharp
public partial class Form1 : Form
{
    private int SelectedRowIndex;
    OracleDataAdapter DBAdapter; // Data Provider인 DBAdapter 입니다.
    DataSet DS; // DataSet 객체입니다.
    OracleCommandBuilder myCommandBuilder;
    // 추가, 수정, 삭제시에 필요한 명령문을 자동으로 작성해주는 객체입니다.
    DataTable phoneTable; // DataTable 객체입니다.
    private int SelectedKeyValue; // 수정, 삭제할 때 필요한 레코드의 키값을 보관할 필드
    private void ClearTextBoxes() // 사용자 정의 함수
    {
        txtid.Clear();
        txtName.Clear();
        txtPhone.Clear();
        txtMail.Clear();
    }
    private void DB_Open()
    {
        try
        {
            string connectionString = "User Id=seo; Password=1111; Data Source=(DESCRIPTION = (ADDRESS = (PROTOCOL = TCP)(HOST = localhost)(PORT = 1521))(CONNECT_DATA = (SERVER = DEDICATED)(SERVICE_NAME = xe)) ); ";
            string commandString = "select * from Phone";
            DBAdapter = new OracleDataAdapter(commandString, connectionString);
            myCommandBuilder = new OracleCommandBuilder(DBAdapter);
            DS = new DataSet();
        }
        catch (DataException DE)
        {
            MessageBox.Show(DE.Message);
        }
    }
    public Form1()
    {
        InitializeComponent();
        DB_Open();
    }

    private void DAOpenBtn_Click(object sender, EventArgs e)
    {
        try
        {
            DS.Clear();
            DBAdapter.Fill(DS, "phone");
            DBGrid.DataSource = DS.Tables["phone"].DefaultView;
        }
        catch (DataException DE)
        {
            MessageBox.Show(DE.Message);
        }
        catch (Exception DE)
        {
            MessageBox.Show(DE.Message);
        }
    }

    private void CCBtn_Click(object sender, EventArgs e)
    {
        try
        {
            string connectionString = "User Id=seo; Password=1111; Data Source=(DESCRIPTION = (ADDRESS = (PROTOCOL = TCP)(HOST = localhost)(PORT = 1521)) (CONNECT_DATA = (SERVER = DEDICATED)(SERVICE_NAME = xe)) ); ";
            OracleConnection myConnection = new OracleConnection(connectionString);
            string commandString = "select * from Phone";
            OracleCommand myCommand = new OracleCommand();
            myCommand.Connection = myConnection;
            myCommand.CommandText = commandString;
            OracleDataAdapter DBAdapter = new OracleDataAdapter();
            DBAdapter.SelectCommand = myCommand;
            DataSet DS = new DataSet();
            DBAdapter.Fill(DS, "Phone");
            DBGrid.DataSource = DS.Tables["Phone"].DefaultView;
        }
        catch (DataException DE)
        {
            MessageBox.Show(DE.Message);
        }
        catch (Exception DE)
        {
            MessageBox.Show(DE.Message);
        }
    }

    private void DRBtn_Click(object sender, EventArgs e)
    {
        try
        {
            string connectionString = "User Id=seo; Password=1111; Data Source=(DESCRIPTION = (ADDRESS = (PROTOCOL = TCP)(HOST = localhost)(PORT = 1521)) (CONNECT_DATA = (SERVER = DEDICATED)(SERVICE_NAME = xe)) ); ";
            OracleConnection myConnection = new OracleConnection(connectionString);
            string commandString = "select * from phone";
            OracleCommand myCommand = new OracleCommand();
            myCommand.Connection = myConnection;
            myCommand.CommandText = commandString;
            myConnection.Open();
            OracleDataReader myReader;
            myReader = myCommand.ExecuteReader();
            string ResultMessage = "";
            while (myReader.Read())
            {
                ResultMessage = myReader.GetString(1) + ", " + myReader.GetString(2);
                MessageBox.Show(ResultMessage);
            }
            myReader.Close();
            myConnection.Close();
        }
        catch (DataException DE)
        {
            MessageBox.Show(DE.Message);
        }
        catch (Exception DE)
        {
            MessageBox.Show(DE.Message);
        }
    }

    private void AppendBtn_Click(object sender, EventArgs e)
    {
        try
        {
            MessageBox.Show("텍스트 상자에 모든 데이터 입력하셨으면 추가합니다!");
            DS.Clear();///***
            DBAdapter.Fill(DS, "Phone");
            phoneTable = DS.Tables["Phone"];//****
            DataRow newRow = phoneTable.NewRow();
            newRow["id"] = Convert.ToInt32(txtid.Text);
            newRow["PName"] = txtName.Text;
            newRow["Phone"] = txtPhone.Text;
            newRow["Email"] = txtMail.Text;
            phoneTable.Rows.Add(newRow);
            DBAdapter.Update(DS, "Phone");
            DS.AcceptChanges();//***
            ClearTextBoxes(); //***
            DBGrid.DataSource = DS.Tables["Phone"].DefaultView;
        }
        catch (DataException DE)
        {
            MessageBox.Show(DE.Message);
        }
        catch (Exception DE)
        {
            MessageBox.Show(DE.Message);
        }
    }

    private void UpdateBtn_Click(object sender, EventArgs e)
    {
        try
        {
            DS.Clear();///***
            DBAdapter.Fill(DS, "Phone");
            phoneTable = DS.Tables["Phone"];//*
            DataColumn[] PrimaryKey = new DataColumn[1];
            PrimaryKey[0] = phoneTable.Columns["id"];
            phoneTable.PrimaryKey = PrimaryKey;
            DataRow currRow =
            phoneTable.Rows.Find(SelectedRowIndex);
            currRow.BeginEdit();
            currRow["id"] = txtid.Text;
            currRow["PName"] = txtName.Text;
            currRow["Phone"] = txtPhone.Text;
            currRow["EMail"] = txtMail.Text;
            currRow.EndEdit();
            DataSet UpdatedSet =
            DS.GetChanges(DataRowState.Modified);
            if (UpdatedSet.HasErrors)
            {
                MessageBox.Show("변경된 데이터에 문제가 있습니다.");
            }
            else
            {
                DBAdapter.Update(UpdatedSet, "Phone");
                DS.AcceptChanges();
            }
            DBGrid.DataSource =
            DS.Tables["Phone"].DefaultView;
        }
        catch (DataException DE)
        {
            MessageBox.Show(DE.Message);
        }
        catch (Exception DE)
        {
            MessageBox.Show(DE.Message);
        }
    }

    private void DeleteBtn_Click(object sender, EventArgs e)
    {
        try
        {
            DS.Clear();///***
            DBAdapter.Fill(DS, "Phone");
            phoneTable = DS.Tables["Phone"];//*
            DataColumn[] PrimaryKey = new DataColumn[1];
            PrimaryKey[0] = phoneTable.Columns["id"];
            phoneTable.PrimaryKey = PrimaryKey;
            DataRow currRow =
            phoneTable.Rows.Find(SelectedRowIndex);
            currRow.Delete();
            DBAdapter.Update(DS.GetChanges(DataRowState.Deleted),
            "Phone");
            DBGrid.DataSource =
            DS.Tables["Phone"].DefaultView;
        }
        catch (DataException DE)
        {
            MessageBox.Show(DE.Message);
        }
        catch (Exception DE)
        {
            MessageBox.Show(DE.Message);
        }
    }

    private void DBGrid_CellClick(object sender, DataGridViewCellEventArgs e)
    {
        try
        {
            DataSet DS = new DataSet();//****
            DBAdapter.Fill(DS, "Phone");//****
            DataTable phoneTable = DS.Tables["Phone"];
            if (e.RowIndex < 0)
            {
                // DBGrid의 컬럼 헤더를 클릭하면 컬럼을 정렬하므로
                // 아무 메시지도 띄우지 않습니다.
                return;
            }
            else if (e.RowIndex > phoneTable.Rows.Count - 1)
            {
                MessageBox.Show("해당하는 데이터가 존재하지 않습니다.");
                return;
            }
            DataRow currRow = phoneTable.Rows[e.RowIndex];
            txtid.Text = currRow["id"].ToString();
            txtName.Text = currRow["PName"].ToString();
            txtPhone.Text = currRow["Phone"].ToString();
            txtMail.Text = currRow["EMail"].ToString();
            SelectedRowIndex = Convert.ToInt32(currRow["id"]);
        }
        catch (DataException DE)
        {
            MessageBox.Show(DE.Message);
        }
        catch (Exception DE)
        {
            MessageBox.Show(DE.Message);
        }
    }

    private void UpBtn_Click(object sender, EventArgs e)
    {
        if (NameList.SelectedIndex != 0)
        {
            NameList.SelectedIndex = NameList.SelectedIndex - 1;
        }
        else
        {
            MessageBox.Show("이곳은 레코드의 처음입니다.");
        }
    }

    private void DownBtn_Click_1(object sender, EventArgs e)
    {
        if (NameList.SelectedIndex != NameList.Items.Count -
        1)
        {
            NameList.SelectedIndex = NameList.SelectedIndex + 1;
        }
        else
        {
            MessageBox.Show("이곳은 레코드의 마지막입니다.");
        }
    }

    private void NameList_SelectedIndexChanged(object sender, EventArgs e)
    {
        DS.Clear();
        DBAdapter.Fill(DS, "Phone");
        phoneTable = DS.Tables["Phone"];
        DataRow[] ResultRows = phoneTable.Select("PName like '%" + txtSearch.Text + "%'");
        DataColumn[] PrimaryKey = new DataColumn[1];
        PrimaryKey[0] = phoneTable.Columns["id"];
        phoneTable.PrimaryKey = PrimaryKey;
        DataRow currRow =
        phoneTable.Rows.Find(NameList.Text.Substring(0, 2));//*
        SelectedKeyValue =
        Convert.ToInt32(currRow["id"].ToString());
        txtid.Text = currRow["id"].ToString();
        txtName.Text = currRow["PName"].ToString();
        txtMail.Text = currRow["Email"].ToString();
        txtPhone.Text = currRow["Phone"].ToString();
    }

    private void SearchBtn_Click(object sender, EventArgs e)
    {
        DS.Clear();
        DBAdapter.Fill(DS, "Phone");
        phoneTable = DS.Tables["Phone"];
        DataRow[] ResultRows = phoneTable.Select("PName like '%" + txtSearch.Text + "%'");
        NameList.Items.Clear();
        foreach (DataRow currRow in ResultRows)
        {
            NameList.Items.Add(currRow["Id"].ToString() + " " + currRow["PName"].ToString());
        }
    }
}
\`\`\`

### ADOForm_3

- Form1.cs

\`\`\`csharp
public partial class Form1 : Form
{
    //수정하거나 삭제하기 위해 선택된 행의 인덱스를 저장한다.
    private int SelectedRowIndex;

    // Data Provider인 DBAdapter 입니다.
    OracleDataAdapter DBAdapter;

    // DataSet 객체입니다.
    DataSet DS;

    // 추가, 수정, 삭제시에 필요한 명령문을
    // 자동으로 작성해주는 객체입니다.
    OracleCommandBuilder myCommandBuilder;

    // ataTable 객체입니다.
    DataTable phoneTable;

    // 수정, 삭제할 때 필요한 레코드의 키값을 보관할 필드
    private int SelectedKeyValue;

    private void ClearTextBoxes()
    {
        txtid.Clear();
        txtName.Clear();
        txtPhone.Clear();
        txtMail.Clear();
    }
    private void DB_Open()
    {
        try
        {
            string connectionString = "User Id=seo; Password=1111; Data Source=(DESCRIPTION =   (ADDRESS = (PROTOCOL = TCP)(HOST = localhost)(PORT = 1521))   (CONNECT_DATA =     (SERVER = DEDICATED)     (SERVICE_NAME = xe)   ) );";

            string commandString = "select * from Phone";

            DBAdapter = new OracleDataAdapter(commandString, connectionString);
            myCommandBuilder = new OracleCommandBuilder(DBAdapter);

            DS = new DataSet();
        }
        catch (DataException DE)
        {
            MessageBox.Show(DE.Message);
        }
    }

    public Form1()
    {
        InitializeComponent();
        DB_Open();//*
    }

    private void DAOpenBtn_Click(object sender, EventArgs e)
    {
        try
        {
            DS.Clear();
            DBAdapter.Fill(DS, "phone");
            //  phoneTable = DS.Tables["Phone"];//*
            DBGrid.DataSource = DS.Tables["phone"].DefaultView;
        }
        catch (DataException DE)
        {
            MessageBox.Show(DE.Message);
        }
        catch (Exception DE)
        {
            MessageBox.Show(DE.Message);
        }
    }

    private void AppendBtn_Click(object sender, EventArgs e)
    {
        try
        {
            MessageBox.Show("텍스트 상자에 모든 데이터 입력하셨으면 추가합니다!");
            // DS.Clear();//*

            //  DBAdapter.Fill(DS, "Phone");//*

            phoneTable = DS.Tables["Phone"];//*
            DataRow newRow = phoneTable.NewRow();
            newRow["id"] = Convert.ToInt32(txtid.Text);
            newRow["PName"] = txtName.Text;
            newRow["Phone"] = txtPhone.Text;
            newRow["Email"] = txtMail.Text;

            phoneTable.Rows.Add(newRow);
            DBAdapter.Update(DS, "Phone");
            DS.AcceptChanges();//*
            ClearTextBoxes();  //*
            DBGrid.DataSource = DS.Tables["Phone"].DefaultView;
        }
        catch (DataException DE)
        {
            MessageBox.Show(DE.Message);
        }
        catch (Exception DE)
        {
            MessageBox.Show(DE.Message);
        }
    }

    private void UpdateBtn_Click(object sender, EventArgs e)
    {
        try
        {
            //DS.Clear();
            //DBAdapter.Fill(DS, "Phone");

            phoneTable = DS.Tables["Phone"];//*
            DataColumn[] PrimaryKey = new DataColumn[1];
            PrimaryKey[0] = phoneTable.Columns["id"];
            phoneTable.PrimaryKey = PrimaryKey;

            DataRow currRow = phoneTable.Rows.Find(SelectedRowIndex);

            currRow.BeginEdit();
            currRow["id"] = txtid.Text;
            currRow["PName"] = txtName.Text;
            currRow["Phone"] = txtPhone.Text;
            currRow["EMail"] = txtMail.Text;
            currRow.EndEdit();

            DataSet UpdatedSet = DS.GetChanges(DataRowState.Modified);
            if (UpdatedSet.HasErrors)
            {
                MessageBox.Show("변경된 데이터에 문제가 있습니다.");
            }
            else
            {
                DBAdapter.Update(UpdatedSet, "Phone");
                DS.AcceptChanges();
            }

            DBGrid.DataSource = DS.Tables["Phone"].DefaultView;

        }
        catch (DataException DE)
        {
            MessageBox.Show(DE.Message);
        }
        catch (Exception DE)
        {
            MessageBox.Show(DE.Message);
        }
    }

    private void DeleteBtn_Click(object sender, EventArgs e)
    {
        try
        {
            // DS.Clear();
            // DBAdapter.Fill(DS, "Phone");

            phoneTable = DS.Tables["Phone"];//*
            DataColumn[] PrimaryKey = new DataColumn[1];
            PrimaryKey[0] = phoneTable.Columns["id"];
            phoneTable.PrimaryKey = PrimaryKey;

            DataRow currRow = phoneTable.Rows.Find(SelectedRowIndex);
            currRow.Delete();

            DBAdapter.Update(DS.GetChanges(DataRowState.Deleted), "Phone");
            DBGrid.DataSource = DS.Tables["Phone"].DefaultView;
        }
        catch (DataException DE)
        {
            MessageBox.Show(DE.Message);
        }
        catch (Exception DE)
        {
            MessageBox.Show(DE.Message);
        }
    }

    private void DBGrid_CellClick(object sender, DataGridViewCellEventArgs e)
    {
        try
        {
            // DataSet DS = new DataSet();//*
            //DBAdapter.Fill(DS, "Phone");

            DataTable phoneTable = DS.Tables["Phone"];

            if (e.RowIndex < 0)
            {
                // DBGrid의 컬럼 헤더를 클릭하면 컬럼을 정렬하므로
                // 아무 메시지도 띄우지 않습니다.
                return;
            }
            else if (e.RowIndex > phoneTable.Rows.Count - 1)
            {
                MessageBox.Show("해당하는 데이터가 존재하지 않습니다.");
                return;
            }

            DataRow currRow = phoneTable.Rows[e.RowIndex];
            txtid.Text = currRow["id"].ToString();
            txtName.Text = currRow["PName"].ToString();
            txtPhone.Text = currRow["Phone"].ToString();
            txtMail.Text = currRow["EMail"].ToString();

            SelectedRowIndex = Convert.ToInt32(currRow["id"]);
        }
        catch (DataException DE)
        {
            MessageBox.Show(DE.Message);
        }
        catch (Exception DE)
        {
            MessageBox.Show(DE.Message);
        }
    }

    private void SearchBtn_Click(object sender, EventArgs e)
    {
        Form2 frm2 = new Form2();
        frm2.Owner = this;
        frm2.ShowDialog();
        frm2.Dispose();
    }
    public String TxtS
    {
        get { return txtSearch.Text; }
        set { txtSearch.Text = value.ToString(); }
    }
}
\`\`\`

- Form2.cs

\`\`\`csharp
public partial class Form2 : Form
{
    new Form1 Parent;
    //수정하거나 삭제하기 위해 선택된 행의 인덱스를 저장한다.
    private int SelectedRowIndex;

    // Data Provider인 DBAdapter 입니다.
    OracleDataAdapter DBAdapter;

    // DataSet 객체입니다.
    DataSet DS;

    // 추가, 수정, 삭제시에 필요한 명령문을
    // 자동으로 작성해주는 객체입니다.
    OracleCommandBuilder myCommandBuilder;

    // ataTable 객체입니다.
    DataTable phoneTable;

    // 수정, 삭제할 때 필요한 레코드의 키값을 보관할 필드
    private int SelectedKeyValue;

    private void ClearTextBoxes()
    {
        txtid.Clear();
        txtName.Clear();
        txtPhone.Clear();
        txtMail.Clear();
    }
    private void DB_Open()
    {
        try
        {
            string connectionString = "User Id=seo; Password=1111; Data Source=(DESCRIPTION =   (ADDRESS = (PROTOCOL = TCP)(HOST = localhost)(PORT = 1521))   (CONNECT_DATA =     (SERVER = DEDICATED)     (SERVICE_NAME = xe)   ) );";

            string commandString = "select * from Phone";

            DBAdapter = new OracleDataAdapter(commandString, connectionString);
            myCommandBuilder = new OracleCommandBuilder(DBAdapter);

            DS = new DataSet();
        }
        catch (DataException DE)
        {
            MessageBox.Show(DE.Message);
        }
    }
    public Form2()
    {
        InitializeComponent();
        DB_Open();//***
    }

    private void UpBtn_Click(object sender, EventArgs e)
    {
        if (NameList.SelectedIndex != 0)
        {
            NameList.SelectedIndex = NameList.SelectedIndex - 1;
        }
        else
        {
            MessageBox.Show("이곳은 레코드의 처음입니다.");
        }
    }

    private void DownBtn_Click(object sender, EventArgs e)
    {
        if (NameList.SelectedIndex != NameList.Items.Count - 1)
        {
            NameList.SelectedIndex = NameList.SelectedIndex + 1;
        }
        else
        {
            MessageBox.Show("이곳은 레코드의 마지막입니다.");
        }
    }

    private void NameList_SelectedIndexChanged(object sender, EventArgs e)
    {
        //DS.Clear();
        //DBAdapter.Fill(DS, "Phone");
        Parent = (Form1)Owner;
        phoneTable = DS.Tables["Phone"];

        DataRow[] ResultRows = phoneTable.Select("PName like '%" + Parent.TxtS + "%'");

        DataColumn[] PrimaryKey = new DataColumn[1];
        PrimaryKey[0] = phoneTable.Columns["id"];
        phoneTable.PrimaryKey = PrimaryKey;

        DataRow currRow = phoneTable.Rows.Find(NameList.Text.Substring(0, 2));

        SelectedKeyValue = Convert.ToInt32(currRow["id"].ToString());
        txtid.Text = currRow["id"].ToString();
        txtName.Text = currRow["PName"].ToString();
        txtMail.Text = currRow["Email"].ToString();
        txtPhone.Text = currRow["Phone"].ToString();
    }

    private void Form2_Load(object sender, EventArgs e)
    {
        DS.Clear();
        DBAdapter.Fill(DS, "Phone");
        Parent = (Form1)Owner;
        phoneTable = DS.Tables["Phone"];

        DataRow[] ResultRows
            = phoneTable.Select("PName like '%" + Parent.TxtS + "%'");

        NameList.Items.Clear();

        foreach (DataRow currRow in ResultRows)
        {
            NameList.Items.Add(currRow["Id"].ToString()
                + " " + currRow["PName"].ToString());
        }
    }
}
\`\`\`

### ADOForm_4

- DBClass

\`\`\`csharp
internal class DBClass
{
    private int selectedRowIndex;//수정하거나 삭제하기 위해 선택된 행의 인덱스를 저장한다.
    private int selectedKeyValue; // 수정, 삭제할 때 필요한 레코드의 값을 보관할 필드
    OracleDataAdapter dBAdapter; //Data Provider인 DBAdapter 입니다.
    DataSet dS;// DataSet 객체입니다.
    OracleCommandBuilder myCommandBuilder; // 추가, 수정, 삭제시에필요한 명령문을 자동으로 작성해주는 객체입니다.
    DataTable phoneTable;// DataTable 객체입니다.
    public int SelectedRowIndex
    {
        get { return selectedRowIndex; }
        set
        { selectedRowIndex = value; }
    }
    public int SelectedKeyValue
    {
        get { return selectedKeyValue; }
        set
        { selectedKeyValue = value; }
    }
    public OracleDataAdapter DBAdapter
    {
        get { return dBAdapter; }
        set { dBAdapter = value; }
    }
    public DataSet DS { get { return dS; } set { dS = value; } }
    public OracleCommandBuilder MyCommandBuilder
    {
        get
        {
            return myCommandBuilder;
        }
        set { myCommandBuilder = value; }
    }
    public DataTable PhoneTable
    {
        get { return phoneTable; }
        set
        {
            phoneTable = value;
        }
    }
    public void DB_Open()
    {
        try
        {
            string connectionString = "User Id=seo; Password = 1111; Data Source = (DESCRIPTION = (ADDRESS = (PROTOCOL = TCP)(HOST = localhost)(PORT = 1521)) (CONNECT_DATA = (SERVER = DEDICATED) (SERVICE_NAME = xe))); ";
            string commandString = "select * from Phone";
            DBAdapter = new
            OracleDataAdapter(commandString, connectionString);
            MyCommandBuilder = new
            OracleCommandBuilder(DBAdapter);
            DS = new DataSet();
        }
        catch (DataException DE) {
            MessageBox.Show(DE.Message);
        }
    }
    public void DB_ObjCreate()
    {
        PhoneTable = new DataTable();
    }
}
\`\`\`

- Form1.cs

\`\`\`csharp
public partial class Form1 : Form
{
    /* 중복 되는 부분
     //수정하거나 삭제하기 위해 선택된 행의 인덱스를 저장한다.
     private int SelectedRowIndex;

     // Data Provider인 DBAdapter 입니다.
     OracleDataAdapter DBAdapter;

     // DataSet 객체입니다.
     DataSet DS;

     // 추가, 수정, 삭제시에 필요한 명령문을
     // 자동으로 작성해주는 객체입니다.
     OracleCommandBuilder myCommandBuilder;

     // ataTable 객체입니다.
     DataTable phoneTable;

     // 수정, 삭제할 때 필요한 레코드의 키값을 보관할 필드
     private int SelectedKeyValue;

     private void DB_Open()
     {
         try
         {
             string connectionString = "User Id=honga1; Password=1111; Data Source=(DESCRIPTION =   (ADDRESS = (PROTOCOL = TCP)(HOST = localhost)(PORT = 1521))   (CONNECT_DATA =     (SERVER = DEDICATED)     (SERVICE_NAME = xe)   ) );";

             string commandString = "select * from Phone";

             DBAdapter = new OracleDataAdapter(commandString, connectionString);
             myCommandBuilder = new OracleCommandBuilder(DBAdapter);

             DS = new DataSet();
         }
         catch (DataException DE)
         {
             MessageBox.Show(DE.Message);
         }
     }
    중복 끝 */

    DBClass dbc = new DBClass();  //*****DBClass 객체 생성

    private void ClearTextBoxes()
    {
        txtid.Clear();
        txtName.Clear();
        txtPhone.Clear();
        txtMail.Clear();
    }
    public Form1()
    {
        InitializeComponent();
        dbc.DB_ObjCreate(); //*****
        dbc.DB_Open();//*****
    }

    private void DAOpenBtn_Click(object sender, EventArgs e)
    {
        try
        {
            dbc.DS.Clear();
            dbc.DBAdapter.Fill(dbc.DS, "phone");
            //  phoneTable = DS.Tables["Phone"];//*
            DBGrid.DataSource = dbc.DS.Tables["phone"].DefaultView;
        }
        catch (DataException DE)
        {
            MessageBox.Show(DE.Message);
        }
        catch (Exception DE)
        {
            MessageBox.Show(DE.Message);
        }
    }

    private void AppendBtn_Click(object sender, EventArgs e)
    {
        try
        {
            MessageBox.Show("텍스트 상자에 모든 데이터 입력하셨으면 추가합니다!");
            // DS.Clear();//*

            //  DBAdapter.Fill(DS, "Phone");//*

            dbc.PhoneTable = dbc.DS.Tables["Phone"];//*
            DataRow newRow = dbc.PhoneTable.NewRow();
            newRow["id"] = Convert.ToInt32(txtid.Text);
            newRow["PName"] = txtName.Text;
            newRow["Phone"] = txtPhone.Text;
            newRow["Email"] = txtMail.Text;

            dbc.PhoneTable.Rows.Add(newRow);
            dbc.DBAdapter.Update(dbc.DS, "Phone");
            dbc.DS.AcceptChanges();//*
            ClearTextBoxes();  //*
            DBGrid.DataSource = dbc.DS.Tables["Phone"].DefaultView;
        }
        catch (DataException DE)
        {
            MessageBox.Show(DE.Message);
        }
        catch (Exception DE)
        {
            MessageBox.Show(DE.Message);
        }
    }

    private void DBGrid_CellClick(object sender, DataGridViewCellEventArgs e)
    {
        try
        {
            // DataSet DS = new DataSet();//*
            //DBAdapter.Fill(DS, "Phone");

            DataTable phoneTable = dbc.DS.Tables["Phone"];

            if (e.RowIndex < 0)
            {
                // DBGrid의 컬럼 헤더를 클릭하면 컬럼을 정렬하므로
                // 아무 메시지도 띄우지 않습니다.
                return;
            }
            else if (e.RowIndex > phoneTable.Rows.Count - 1)
            {
                MessageBox.Show("해당하는 데이터가 존재하지 않습니다.");
                return;
            }

            DataRow currRow = phoneTable.Rows[e.RowIndex];
            txtid.Text = currRow["id"].ToString();
            txtName.Text = currRow["PName"].ToString();
            txtPhone.Text = currRow["Phone"].ToString();
            txtMail.Text = currRow["EMail"].ToString();

            dbc.SelectedRowIndex = Convert.ToInt32(currRow["id"]);
        }
        catch (DataException DE)
        {
            MessageBox.Show(DE.Message);
        }
        catch (Exception DE)
        {
            MessageBox.Show(DE.Message);
        }
    }

    private void UpdateBtn_Click(object sender, EventArgs e)
    {
        try
        {
            //DS.Clear();
            //DBAdapter.Fill(DS, "Phone");

            dbc.PhoneTable = dbc.DS.Tables["Phone"];//*
            DataColumn[] PrimaryKey = new DataColumn[1];
            PrimaryKey[0] = dbc.PhoneTable.Columns["id"];
            dbc.PhoneTable.PrimaryKey = PrimaryKey;

            DataRow currRow = dbc.PhoneTable.Rows.Find(dbc.SelectedRowIndex);

            currRow.BeginEdit();
            currRow["id"] = txtid.Text;
            currRow["PName"] = txtName.Text;
            currRow["Phone"] = txtPhone.Text;
            currRow["EMail"] = txtMail.Text;
            currRow.EndEdit();

            DataSet UpdatedSet = dbc.DS.GetChanges(DataRowState.Modified);
            if (UpdatedSet.HasErrors)
            {
                MessageBox.Show("변경된 데이터에 문제가 있습니다.");
            }
            else
            {
                dbc.DBAdapter.Update(UpdatedSet, "Phone");
                dbc.DS.AcceptChanges();
            }

            DBGrid.DataSource = dbc.DS.Tables["Phone"].DefaultView;

        }
        catch (DataException DE)
        {
            MessageBox.Show(DE.Message);
        }
        catch (Exception DE)
        {
            MessageBox.Show(DE.Message);
        }
    }

    private void DeleteBtn_Click(object sender, EventArgs e)
    {
        try
        {
            // DS.Clear();
            // DBAdapter.Fill(DS, "Phone");

            dbc.PhoneTable = dbc.DS.Tables["Phone"];//*
            DataColumn[] PrimaryKey = new DataColumn[1];
            PrimaryKey[0] = dbc.PhoneTable.Columns["id"];
            dbc.PhoneTable.PrimaryKey = PrimaryKey;

            DataRow currRow = dbc.PhoneTable.Rows.Find(dbc.SelectedRowIndex);
            currRow.Delete();

            dbc.DBAdapter.Update(dbc.DS.GetChanges(DataRowState.Deleted), "Phone");
            DBGrid.DataSource = dbc.DS.Tables["Phone"].DefaultView;
        }
        catch (DataException DE)
        {
            MessageBox.Show(DE.Message);
        }
        catch (Exception DE)
        {
            MessageBox.Show(DE.Message);
        }
    }

    private void SearchBtn_Click(object sender, EventArgs e)
    {
        Form2 frm2 = new Form2();
        frm2.Owner = this;
        frm2.ShowDialog();
        frm2.Dispose();
    }
    public String TxtS
    {
        get { return txtSearch.Text; }
        set { txtSearch.Text = value.ToString(); }
    }
}
\`\`\`

- Form2.cs

\`\`\`csharp
public partial class Form2 : Form
{
    new Form1 Parent;    //*****

    /* 중복 되는 부분

    //수정하거나 삭제하기 위해 선택된 행의 인덱스를 저장한다.
    private int SelectedRowIndex;

    // Data Provider인 DBAdapter 입니다.
    OracleDataAdapter DBAdapter;

    // DataSet 객체입니다.
    DataSet DS;

    // 추가, 수정, 삭제시에 필요한 명령문을
    // 자동으로 작성해주는 객체입니다.
    OracleCommandBuilder myCommandBuilder;

    // ataTable 객체입니다.
    DataTable phoneTable;

    // 수정, 삭제할 때 필요한 레코드의 키값을 보관할 필드
    private int SelectedKeyValue;


    private void DB_Open()
    {
        try
        {
            string connectionString = "User Id=honga1; Password=1111; Data Source=(DESCRIPTION =   (ADDRESS = (PROTOCOL = TCP)(HOST = localhost)(PORT = 1521))   (CONNECT_DATA =     (SERVER = DEDICATED)     (SERVICE_NAME = xe)   ) );";

            string commandString = "select * from Phone";

            DBAdapter = new OracleDataAdapter(commandString, connectionString);
            myCommandBuilder = new OracleCommandBuilder(DBAdapter);

            DS = new DataSet();
        }
        catch (DataException DE)
        {
            MessageBox.Show(DE.Message);
        }
    }
    중복 끝  */

    DBClass dbc = new DBClass();  //*****DBClass 객체 생성
    private void ClearTextBoxes()
    {
        txtid.Clear();
        txtName.Clear();
        txtPhone.Clear();
        txtMail.Clear();
    }
    public Form2()
    {
        InitializeComponent();
        dbc.DB_ObjCreate(); //*****
        dbc.DB_Open();//*****
    }

    private void UpBtn_Click(object sender, EventArgs e)
    {
        if (NameList.SelectedIndex != 0)
        {
            NameList.SelectedIndex = NameList.SelectedIndex - 1;
        }
        else
        {
            MessageBox.Show("이곳은 레코드의 처음입니다.");
        }
    }

    private void DownBtn_Click(object sender, EventArgs e)
    {
        if (NameList.SelectedIndex != NameList.Items.Count - 1)
        {
            NameList.SelectedIndex = NameList.SelectedIndex + 1;
        }
        else
        {
            MessageBox.Show("이곳은 레코드의 마지막입니다.");
        }
    }

    private void NameList_SelectedIndexChanged(object sender, EventArgs e)
    {
        //DS.Clear();
        //DBAdapter.Fill(DS, "Phone");
        Parent = (Form1)Owner;
        dbc.PhoneTable = dbc.DS.Tables["Phone"];

        DataRow[] ResultRows = dbc.PhoneTable.Select("PName like '%" + Parent.TxtS + "%'");

        DataColumn[] PrimaryKey = new DataColumn[1];
        PrimaryKey[0] = dbc.PhoneTable.Columns["id"];
        dbc.PhoneTable.PrimaryKey = PrimaryKey;

        DataRow currRow = dbc.PhoneTable.Rows.Find(NameList.Text.Substring(0, 2));

        dbc.SelectedKeyValue = Convert.ToInt32(currRow["id"].ToString());
        txtid.Text = currRow["id"].ToString();
        txtName.Text = currRow["PName"].ToString();
        txtMail.Text = currRow["Email"].ToString();
        txtPhone.Text = currRow["Phone"].ToString();
    }

    private void Form2_Load(object sender, EventArgs e)
    {
        dbc.DS.Clear();
        dbc.DBAdapter.Fill(dbc.DS, "Phone");
        Parent = (Form1)Owner;
        dbc.PhoneTable = dbc.DS.Tables["Phone"];

        DataRow[] ResultRows
            = dbc.PhoneTable.Select("PName like '%" + Parent.TxtS + "%'");

        NameList.Items.Clear();

        foreach (DataRow currRow in ResultRows)
        {
            NameList.Items.Add(currRow["Id"].ToString()
                + " " + currRow["PName"].ToString());
        }
    }
}
\`\`\`

### ADOForm_5

\`\`\`csharp
public partial class Form1 : Form
{
    public Form1()
    {
        InitializeComponent();
    }

    private void button1_Click(object sender, EventArgs e)
    {
        string connectionString = "User Id=seo1; Password=1111; Data Source=(DESCRIPTION =   (ADDRESS = (PROTOCOL = TCP)(HOST = localhost)(PORT = 1521))   (CONNECT_DATA =     (SERVER = DEDICATED)     (SERVICE_NAME = xe)   ) );";
        string commandString = "select P.ID, P.PName, R.ID, R.SNO, R.SName from Phone P, Register R where P.ID=R.ID ";
        OracleConnection myConnection = new OracleConnection(connectionString);
        OracleCommand myCommand = new OracleCommand();
        myCommand.Connection = myConnection;
        myCommand.CommandText = commandString;
        myConnection.Open(); //
        OracleDataReader MR;
        MR = myCommand.ExecuteReader();
        while (MR.Read())
        {
            ListViewItem item = new ListViewItem(MR[0].ToString());
            item.SubItems.Add(MR[1].ToString());
            item.SubItems.Add(MR[2].ToString());
            item.SubItems.Add(MR[3].ToString());
            item.SubItems.Add(MR[4].ToString());
            listView1.Items.Add(item);
        }
        MR.Close();
        myConnection.Close();
    }

    private void button2_Click(object sender, EventArgs e)
    {
        string connectionString = "User Id=seo1; Password=1111; Data Source=(DESCRIPTION =   (ADDRESS = (PROTOCOL = TCP)(HOST = localhost)(PORT = 1521))   (CONNECT_DATA =     (SERVER = DEDICATED)     (SERVICE_NAME = xe)   ) );";
        OracleConnection myConnection = new OracleConnection(connectionString);
        string commandString = "select P.ID, P.PName, R.ID, R.SNO,R.SName from Phone P, Register R where P.ID=R.ID ";
        OracleCommand myCommand = new OracleCommand();
        myCommand.Connection = myConnection;
        myCommand.CommandText = commandString;
        OracleDataAdapter DBAdapter = new OracleDataAdapter();
        DBAdapter.SelectCommand = myCommand;
        DataSet DS = new DataSet();
        DBAdapter.Fill(DS, "RelTable"); //
        DataTable RelTable = DS.Tables["RelTable"];
        DataRowCollection rows = RelTable.Rows;
        foreach (DataRow dr in rows)
        {
            ListViewItem item = new ListViewItem(dr[0].ToString());
            for (int i = 1; i < RelTable.Columns.Count; i++)
            {
                item.SubItems.Add(dr[i].ToString());
            }
            listView2.Items.Add(item);
        }
    }
}
\`\`\`

### ADOForm_6

\`\`\`csharp
public partial class Form1 : Form
{
    public Form1()
    {
        InitializeComponent();
    }

    private void button1_Click(object sender, EventArgs e)
    {
        string ConStr = "User Id=seo1; Password=1111; Data Source=(DESCRIPTION = (ADDRESS = (PROTOCOL = TCP)(HOST = localhost)(PORT = 1521)) (CONNECT_DATA = (SERVER = DEDICATED)(SERVICE_NAME = xe)) ); ";
        OracleConnection conn = new OracleConnection(ConStr);
        conn.Open();
        string strqry = "select * from phone where pname =:pname";
        OracleCommand comm = new OracleCommand(strqry, conn);
        comm.Parameters.Add("pname", OracleDbType.Varchar2, 20);
        comm.Parameters["pname"].Value = txtSearch.Text.Trim();
        label1.Text = "select * from phone where pname ='" + txtSearch.Text + "'";
        OracleDataReader sr = comm.ExecuteReader();
        while (sr.Read())
        {
            listBox1.Items.Add(sr["PName"].ToString());
        }
        sr.Close();
        conn.Close();
    }

    private void button2_Click(object sender, EventArgs e)
    {
        string ConStr = "User Id=seo1; Password=1111; Data Source=(DESCRIPTION = (ADDRESS = (PROTOCOL = TCP)(HOST = localhost)(PORT = 1521)) (CONNECT_DATA = (SERVER = DEDICATED)(SERVICE_NAME = xe)) ); ";
        OracleConnection conn = new OracleConnection(ConStr);
        conn.Open();
        OracleDataAdapter DBAdapter = new OracleDataAdapter();
        DBAdapter.SelectCommand = new OracleCommand
        ("select * from phone where pname =:pname ", conn);
        DBAdapter.SelectCommand.Parameters.Add("pname", OracleDbType.Varchar2, 20);
        DBAdapter.SelectCommand.Parameters["pname"].Value = txtSearch.Text.Trim();
        DataSet DS = new DataSet();
        DBAdapter.Fill(DS, "Phone");
        DataTable phoneTable = DS.Tables["Phone"];
        DBGrid.DataSource = phoneTable;
    }
}
\`\`\`

### ADOForm_7

- Form1.cs

\`\`\`csharp
public partial class Form1 : Form
{
    public Form1()
    {
        InitializeComponent();
    }
    private int intID; //ID 필드 설정
    private string strCommand;
    //데이터 삭제, 추가, 업데이트 인지를 설정할 문자열 필드
    private OracleConnection odpConn = new OracleConnection();
    public int getintID
    { get { return intID; } }
    public string getstrCommand
    { get { return strCommand; } }
    private void showDataGridView() //사용자 정의 함수
    {
        try
        {
            odpConn.ConnectionString = "User Id=jun; Password=1111; Data Source=(DESCRIPTION = (ADDRESS = (PROTOCOL = TCP)(HOST = localhost)(PORT = 1521)) (CONNECT_DATA = (SERVER = DEDICATED)(SERVICE_NAME = xe)) ); ";
            odpConn.Open();
            OracleDataAdapter oda = new OracleDataAdapter();
            oda.SelectCommand = new
            OracleCommand("SELECT * from phone", odpConn);
            DataTable dt = new DataTable();
            oda.Fill(dt);
            odpConn.Close();
            DBGrid.DataSource = dt;
            DBGrid.AutoResizeColumns();
            DBGrid.AutoSizeColumnsMode =
            DataGridViewAutoSizeColumnsMode.Fill;
            DBGrid.SelectionMode =
            DataGridViewSelectionMode.FullRowSelect;
            DBGrid.AllowUserToAddRows = false;
        }
        catch (Exception ex)
        {
            MessageBox.Show("에러 발생 : " + ex.ToString());
            odpConn.Close();
        }
    }

    private void Form1_Load_1(object sender, EventArgs e)
    {
        showDataGridView();
    }

    private void 선택한행업데이트ToolStripMenuItem_Click_1(object sender, EventArgs e)
    {
        strCommand = "업데이트";
        intID = Convert.ToInt32(DBGrid.SelectedCells[0].Value);
        Form2 form2 = new Form2(this);
        form2.ShowDialog();
        form2.Dispose();
        showDataGridView();
    }

    private void 새로운데이터추가ToolStripMenuItem_Click_1(object sender, EventArgs e)
    {
        strCommand = "추가";
        Form2 form2 = new Form2(this);
        form2.ShowDialog();
        form2.Dispose();
        showDataGridView();
    }

    private void 선택한행삭제ToolStripMenuItem_Click_1(object sender, EventArgs e)
    {
        strCommand = "삭제";
        intID = Convert.ToInt32(DBGrid.SelectedCells[0].Value);
        Form2 form2 = new Form2(this);
        form2.ShowDialog();
        form2.Dispose();
        showDataGridView();
    }
}
\`\`\`

- Form2.cs

\`\`\`csharp
public partial class Form2 : Form
{
    public Form2()
    {
        InitializeComponent();
    }

    private OracleConnection odpConn = new OracleConnection();
    Form1 _parent;
    public Form2(Form1 inform1)
    {
        InitializeComponent();
        _parent = inform1;
    }
    private void initialTextBoxes()//사용자 함수 정의
    {
        odpConn.ConnectionString = "User Id=jun; Password=1111; Data Source=(DESCRIPTION = (ADDRESS = (PROTOCOL = TCP)(HOST = localhost)(PORT = 1521)) (CONNECT_DATA = (SERVER = DEDICATED)(SERVICE_NAME = xe)) ); ";
        odpConn.Open();
        int getID = _parent.getintID; //**
        string strqry = "SELECT * FROM phone WHERE id=" + getID;
        //쿼리문 작성:id가 getID(폼1에서 선택한 id)인 튜플 검색
        // "SELECT * FROM phone WHERE id= getID(변수)“를 수정
        OracleCommand OraCmd = new OracleCommand(strqry, odpConn);
        OracleDataReader odr = OraCmd.ExecuteReader();
        while (odr.Read())
        {
            txtid.Text = Convert.ToString(odr.GetValue(0));
            txtName.Text = Convert.ToString(odr.GetValue(1));
            txtPhone.Text = Convert.ToString(odr.GetValue(2));
            txtMail.Text = Convert.ToString(odr.GetValue(3));
        }
        odr.Close();
        odpConn.Close();
    }
    private int INSERTRow()//사용자 함수 정의
    {
        odpConn.ConnectionString = "User Id=jun; Password=1111; Data Source=(DESCRIPTION = (ADDRESS = (PROTOCOL = TCP)(HOST = localhost)(PORT = 1521)) (CONNECT_DATA = (SERVER = DEDICATED)(SERVICE_NAME = xe)) ); ";
        odpConn.Open();
        int inid = Convert.ToInt32(txtid.Text.Trim()); //**
        String inName = txtName.Text.Trim(); //**
        String inPhone = txtPhone.Text.Trim(); //**
        String inMail = txtMail.Text.Trim(); //**
        string strqry = "INSERT INTO phone VALUES (" + inid + ", " + inName + ", " + inPhone + ", " + inMail + ")";
        //"INSERT INTO phone VALUES (id, pname, phone, email)"을 수정
        OracleCommand OraCmd = new OracleCommand(strqry, odpConn);
        return OraCmd.ExecuteNonQuery(); //추가되는 행수 반환
    }
    private int DELETERow() //사용자 함수 정의
    {
        odpConn.ConnectionString = "User Id=jun; Password=1111; Data Source=(DESCRIPTION = (ADDRESS = (PROTOCOL = TCP)(HOST = localhost)(PORT = 1521)) (CONNECT_DATA = (SERVER = DEDICATED)(SERVICE_NAME = xe)) ); ";
        odpConn.Open();
        int getID = _parent.getintID; //**
        string strqry = "DELETE FROM phone WHERE id = " + getID;
        OracleCommand OraCmd = new OracleCommand(strqry, odpConn);
        return OraCmd.ExecuteNonQuery();
    }
    private int UPDATERow() //사용자 함수 정의
    {
        odpConn.ConnectionString = "User Id=jun; Password=1111; Data Source=(DESCRIPTION = (ADDRESS = (PROTOCOL = TCP)(HOST = localhost)(PORT = 1521)) (CONNECT_DATA = (SERVER = DEDICATED)(SERVICE_NAME = xe)) ); ";
        odpConn.Open();
        int inid = Convert.ToInt32(txtid.Text.Trim()); //**
        String inPhone = txtPhone.Text.Trim(); //**
        String inMail = txtMail.Text.Trim(); //**
        string strqry = "UPDATE phone SET phone=" + inPhone + ", email = " + inMail + " WHERE id = " + inid;
        OracleCommand OraCmd = new OracleCommand(strqry, odpConn);
        return OraCmd.ExecuteNonQuery(); //업데이트되는 행수 반환
    }

    private void btnOk_Click(object sender, EventArgs e)
    {
        if (btnOk.Text == "추가")
        {
            if (INSERTRow() > 0)
            {
                MessageBox.Show("정상적으로 데이터 행이 추가됨.");
            }
            else MessageBox.Show("데이터 행이 추가되지 않음!");
            this.Close();
        }
        else if (btnOk.Text == "삭제")
        {
            if (DELETERow() > 0)
            {
                MessageBox.Show("정상적으로 데이터 행이 삭제됨!");
            }
            else MessageBox.Show("데이터 행이 삭제되지 않음!");
            this.Close();
        }
        else
        {
            if (UPDATERow() > 0)
            {
                MessageBox.Show("정상적으로 데이터가 업데이트됨!");
            }
            else MessageBox.Show("데이터 행이 업데이트되지 않음!");
            this.Close();
        }
    }

    private void Form2_Load_1(object sender, EventArgs e)
    {
        if (_parent.getstrCommand == "삭제")
        {
            btnOk.Text = "삭제";
            txtid.Enabled = false;
            initialTextBoxes();
        }
        else if (_parent.getstrCommand == "업데이트")
        {
            btnOk.Text = "업데이트";
            txtid.Enabled = false;
            txtName.Enabled = false;
            initialTextBoxes();
        }
        else btnOk.Text = "추가";
    }
}
\`\`\`

### ADOForm_8

- Form1.cs

\`\`\`csharp
public partial class Form1 : Form
{
    public Form1()
    {
        InitializeComponent();
    }
    private int intID; //ID 필드 설정
    private string strCommand;
    //데이터 삭제, 추가, 업데이트 인지를 설정할 문자열 필드
    private OracleConnection odpConn = new OracleConnection();
    public int getintID
    { get { return intID; } }
    public string getstrCommand
    { get { return strCommand; } }
    private void showDataGridView() //사용자 정의 함수
    {
        try
        {
            odpConn.ConnectionString = "User Id=jun; Password=1111; Data Source=(DESCRIPTION = (ADDRESS = (PROTOCOL = TCP)(HOST = localhost)(PORT = 1521)) (CONNECT_DATA = (SERVER = DEDICATED)(SERVICE_NAME = xe)) ); ";
            odpConn.Open();
            OracleDataAdapter oda = new OracleDataAdapter();
            oda.SelectCommand = new
            OracleCommand("SELECT * from phone", odpConn);
            DataTable dt = new DataTable();
            oda.Fill(dt);
            odpConn.Close();
            DBGrid.DataSource = dt;
            DBGrid.AutoResizeColumns();
            DBGrid.AutoSizeColumnsMode =
            DataGridViewAutoSizeColumnsMode.Fill;
            DBGrid.SelectionMode =
            DataGridViewSelectionMode.FullRowSelect;
            DBGrid.AllowUserToAddRows = false;
        }
        catch (Exception ex)
        {
            MessageBox.Show("에러 발생 : " + ex.ToString());
            odpConn.Close();
        }
    }

    private void Form1_Load_1(object sender, EventArgs e)
    {
        showDataGridView();
    }

    private void 선택한행업데이트ToolStripMenuItem_Click_1(object sender, EventArgs e)
    {
        strCommand = "업데이트";
        intID = Convert.ToInt32(DBGrid.SelectedCells[0].Value);
        Form2 form2 = new Form2(this);
        form2.ShowDialog();
        form2.Dispose();
        showDataGridView();
    }

    private void 새로운데이터추가ToolStripMenuItem_Click_1(object sender, EventArgs e)
    {
        strCommand = "추가";
        Form2 form2 = new Form2(this);
        form2.ShowDialog();
        form2.Dispose();
        showDataGridView();
    }

    private void 선택한행삭제ToolStripMenuItem_Click_1(object sender, EventArgs e)
    {
        strCommand = "삭제";
        intID = Convert.ToInt32(DBGrid.SelectedCells[0].Value);
        Form2 form2 = new Form2(this);
        form2.ShowDialog();
        form2.Dispose();
        showDataGridView();
    }
}
\`\`\`

- Form2.cs

\`\`\`csharp
public partial class Form2 : Form
{
    public Form2()
    {
        InitializeComponent();
    }

    private OracleConnection odpConn = new OracleConnection();
    Form1 _parent;
    public Form2(Form1 inform1)
    {
        InitializeComponent();
        _parent = inform1;
    }
    private void initialTextBoxes()//사용자 함수 정의
    {
        odpConn.ConnectionString = "User Id=jun; Password=1111; Data Source=(DESCRIPTION = (ADDRESS = (PROTOCOL = TCP)(HOST = localhost)(PORT = 1521)) (CONNECT_DATA = (SERVER = DEDICATED)(SERVICE_NAME = xe)) ); ";
        odpConn.Open();
        int getID = _parent.getintID; //**
        string strqry = "SELECT * FROM phone WHERE id=" + getID;
        //쿼리문 작성:id가 getID(폼1에서 선택한 id)인 튜플 검색
        // "SELECT * FROM phone WHERE id= getID(변수)“를 수정
        OracleCommand OraCmd = new OracleCommand(strqry, odpConn);
        OracleDataReader odr = OraCmd.ExecuteReader();
        while (odr.Read())
        {
            txtid.Text = Convert.ToString(odr.GetValue(0));
            txtName.Text = Convert.ToString(odr.GetValue(1));
            txtPhone.Text = Convert.ToString(odr.GetValue(2));
            txtMail.Text = Convert.ToString(odr.GetValue(3));
        }
        odr.Close();
        odpConn.Close();
    }
    private int INSERTRow()//사용자 함수 정의
    {
        odpConn.ConnectionString = "User Id=jun; Password=1111; Data Source=(DESCRIPTION = (ADDRESS = (PROTOCOL = TCP)(HOST = localhost)(PORT = 1521)) (CONNECT_DATA = (SERVER = DEDICATED)(SERVICE_NAME = xe)) ); ";
        odpConn.Open();
        string strqry = "INSERT INTO phone VALUES (:id, :pname, :phone, :email)";
        OracleCommand OraCmd = new OracleCommand(strqry, odpConn);
        OraCmd.Parameters.Add("id", OracleDbType.Int32).Value = txtid.Text.Trim();
        OraCmd.Parameters.Add("pname", OracleDbType.Varchar2, 20).Value = txtName.Text.Trim();
        OraCmd.Parameters.Add("phone", OracleDbType.Varchar2, 20).Value = txtPhone.Text.Trim();
        OraCmd.Parameters.Add("email", OracleDbType.Varchar2, 20).Value = txtMail.Text.Trim();
        return OraCmd.ExecuteNonQuery(); //추가되는 행수 반환
    }
    private int DELETERow() //사용자 함수 정의
    {
        odpConn.ConnectionString = "User Id=jun; Password=1111; Data Source=(DESCRIPTION = (ADDRESS = (PROTOCOL = TCP)(HOST = localhost)(PORT = 1521)) (CONNECT_DATA = (SERVER = DEDICATED)(SERVICE_NAME = xe)) ); ";
        odpConn.Open();
        string strqry = "DELETE FROM phone WHERE id=:id";
        OracleCommand OraCmd = new OracleCommand(strqry, odpConn);
        OraCmd.Parameters.Add("id", OracleDbType.Int32).Value = _parent.getintID;
        return OraCmd.ExecuteNonQuery();
    }
    private int UPDATERow() //사용자 함수 정의
    {
        odpConn.ConnectionString = "User Id=jun; Password=1111; Data Source=(DESCRIPTION = (ADDRESS = (PROTOCOL = TCP)(HOST = localhost)(PORT = 1521)) (CONNECT_DATA = (SERVER = DEDICATED)(SERVICE_NAME = xe)) ); ";
        odpConn.Open();
        string strqry =
        "UPDATE phone SET phone=:phone, email =:email WHERE id =:id";
        OracleCommand OraCmd = new OracleCommand(strqry, odpConn);
        OraCmd.Parameters.Add("phone", OracleDbType.Varchar2, 20).Value = txtPhone.Text.Trim();
        OraCmd.Parameters.Add("email", OracleDbType.Varchar2, 20).Value = txtMail.Text.Trim();
        OraCmd.Parameters.Add("id", OracleDbType.Int32).Value = _parent.getintID;
        return OraCmd.ExecuteNonQuery(); //업데이트되는 행수 반환
    }

    private void btnOk_Click(object sender, EventArgs e)
    {
        if (btnOk.Text == "추가")
        {
            if (INSERTRow() > 0)
            {
                MessageBox.Show("정상적으로 데이터 행이 추가됨.");
            }
            else MessageBox.Show("데이터 행이 추가되지 않음!");
            this.Close();
        }
        else if (btnOk.Text == "삭제")
        {
            if (DELETERow() > 0)
            {
                MessageBox.Show("정상적으로 데이터 행이 삭제됨!");
            }
            else MessageBox.Show("데이터 행이 삭제되지 않음!");
            this.Close();
        }
        else
        {
            if (UPDATERow() > 0)
            {
                MessageBox.Show("정상적으로 데이터가 업데이트됨!");
            }
            else MessageBox.Show("데이터 행이 업데이트되지 않음!");
            this.Close();
        }
    }

    private void Form2_Load_1(object sender, EventArgs e)
    {
        if (_parent.getstrCommand == "삭제")
        {
            btnOk.Text = "삭제";
            txtid.Enabled = false;
            initialTextBoxes();
        }
        else if (_parent.getstrCommand == "업데이트")
        {
            btnOk.Text = "업데이트";
            txtid.Enabled = false;
            txtName.Enabled = false;
            initialTextBoxes();
        }
        else btnOk.Text = "추가";
    }
}
\`\`\`
`;

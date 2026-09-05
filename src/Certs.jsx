function Certs() {
  return (
    <div className="content-container">
      <h1>經歷</h1>
      <div style={{ height: "20px" }} />
      <h2 style={{ padding: "20px 0" }}>證照</h2>
      <table className="table">
        <thead>
          <tr>
            <th>名稱</th>
            <th>成績</th>
            <th>日期</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>CCST 資安證照</td>
            <td>通過</td>
            <td>2026/08/28</td>
          </tr>
          <tr>
            <td>電腦硬體裝修 丙級</td>
            <td>通過</td>
            <td>2025/08/15</td>
          </tr>
          <tr>
            <td>電腦軟體設計 丙級</td>
            <td>通過</td>
            <td>2025/08/06</td>
          </tr>
          <tr>
            <td>APCS</td>
            <td>學科4 術科2</td>
            <td>2026/07/05</td>
          </tr>
        </tbody>
      </table>
      <h2 style={{ padding: "20px 0" }}>比賽</h2>
      <table className="table">
        <thead>
          <tr>
            <th>競賽名稱</th>
            <th>階段</th>
            <th>職類</th>
            <th>成績</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>第56屆 全國技能競賽</td>
            <td>全國賽</td>
            <td>08 行動應用開發</td>
            <td style={{ color: "#C0C0C0" }}>第二名</td>
          </tr>
          <tr>
            <td>第56屆 全國技能競賽</td>
            <td>北區賽</td>
            <td>08 行動應用開發</td>
            <td style={{ color: "#C0C0C0" }}>第二名</td>
          </tr>
          <tr>
            <td>第54屆 全國技能競賽</td>
            <td>全國賽</td>
            <td>J23 自主移動機器人</td>
            <td style={{ color: "#B87333" }}>第三名</td>
          </tr>
          <tr>
            <td>第54屆 全國技能競賽</td>
            <td>北區賽</td>
            <td>J23 自主移動機器人</td>
            <td style={{ color: "#C0C0C0" }}>第二名</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Certs;

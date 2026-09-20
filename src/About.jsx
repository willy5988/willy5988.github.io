import "./About.css";
function About() {
  return (
    <div className="content-container">
      <h1>關於我</h1>
      <div style={{ height: "40px" }} />
      <table className="table">
        <tbody>
          <tr>
            <td>姓名</td>
            <td>Willy</td>
          </tr>
          <tr>
            <td>年紀</td>
            <td>17</td>
          </tr>
          <tr>
            <td>Location</td>
            <td>Taiwan</td>
          </tr>
          <tr>
            <td>職業</td>
            <td>Student</td>
          </tr>
          <tr>
            <td>目前學歷</td>
            <td>High School</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default About;

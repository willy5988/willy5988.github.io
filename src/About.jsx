import "./About.css";
function About() {
  return (
    <div className="content-container">
      <h1>關於我</h1>
      <div style={{ height: "40px" }} />
      <table className="table">
        <tbody>
          <tr>
            <td>Name</td>
            <td>Willy</td>
          </tr>
          <tr>
            <td>Age</td>
            <td>17</td>
          </tr>
          <tr>
            <td>Location</td>
            <td>Taiwan</td>
          </tr>
          <tr>
            <td>Occupation</td>
            <td>Student</td>
          </tr>
          <tr>
            <td>Education</td>
            <td>High School</td>
          </tr>
          <tr>
            <td>Languages</td>
            <td>Chinese</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default About;

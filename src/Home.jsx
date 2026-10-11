import { Col } from "react-bootstrap";
import githubIcon from "./assets/GitHub_Invertocat_White.svg";
import Row from "react-bootstrap/Row";
import { AiOutlineMail } from "react-icons/ai";

export default function Home() {
  return (
    <div className="content-container">
      <h1>Hello! I'm Willy.</h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          marginTop: "20px",
        }}
      >
        <a
          href="https://github.com/willy5988"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubIcon} alt="GitHub" width="40" height="40" />
        </a>
        <a href="mailto:willywang112097@gmail.com">
          <AiOutlineMail size={40} style={{ color: "white" }} />
        </a>
      </div>
    </div>
  );
}

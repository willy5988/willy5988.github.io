import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footerContainer">
      <div className="topline">
        <p style={{ color: "#00b7ffdd" }}>
          © {currentYear}{" "}
          <a
            className="footerName"
            href="https://github.com/willy5988"
            target="_blank"
            rel="noopener noreferrer"
          >
            Willy
          </a>
          . Built with React.
        </p>
      </div>
    </footer>
  );
}

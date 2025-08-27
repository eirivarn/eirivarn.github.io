// src/components/Resume.tsx
export default function Resume() {
  return (
    <main className="resume-pdf">
      <div className="resume-toolbar">
        <a className="btn" href="/resume.pdf" download>Download PDF</a>
        <a className="btn" href="/resume.pdf" target="_blank" rel="noreferrer">Open in new tab</a>
      </div>

      {/* Try native PDF viewer first */}
      <object
        data="/resume.pdf#view=FitH&toolbar=1&navpanes=0"
        type="application/pdf"
        aria-label="Resume PDF"
        className="pdf-frame"
      >
        {/* Fallback (some mobile browsers) */}
        <iframe
          src="/resume.pdf#view=FitH"
          title="Resume PDF"
          className="pdf-frame"
        />
        <p style={{ textAlign: "center", padding: "1rem" }}>
          Your browser can’t display PDFs inline.{" "}
          <a href="/resume.pdf" target="_blank" rel="noreferrer">Open the PDF</a> or use the download button above.
        </p>
      </object>
    </main>
  );
}

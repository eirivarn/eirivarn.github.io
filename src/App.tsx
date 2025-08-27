import { Link } from "react-router-dom";

export default function App() {
  return (
    <div className="hero">
      {/* subtle animated gradient blobs */}
      <div className="bg-anim" aria-hidden="true" />

      <header className="site-header">
        <div className="brand">Eirik Varnes</div>
        <nav className="nav">
          <a href="https://github.com/eirivarn" target="_blank" rel="noreferrer">GitHub</a>
          <a href="#projects">Projects</a>
          <Link to="/resume">Resume</Link>
        </nav>
      </header>

      <main className="hero-content">
        <h1>Robotics • Control • ML</h1>
        <p>
          I design and build reliable autonomous systems — from ROV control and observers
          to RL navigation and 3D geospatial tooling.
        </p>
        <div className="cta">
          <Link to="/resume" className="btn primary">View Resume</Link>
          <a href="#projects" className="btn">See Projects</a>
        </div>
      </main>

      <section id="projects" className="projects">
        <h2>Featured Projects</h2>
        <ul>
          <li><strong>ROV Control</strong> — 6-DOF model, LQR + integral, observer, thruster mixing</li>
          <li><strong>RL AUV Navigation</strong> — DQN/TD3 with LiDAR & memory buffers</li>
          <li><strong>3D Building Pipeline</strong> — React-Three-Fiber, terrain & roof meshes</li>
        </ul>
      </section>

      <footer className="site-footer">
        © {new Date().getFullYear()} Eirik Varnes • Built with React + Vite • GitHub Pages
      </footer>
    </div>
  );
}

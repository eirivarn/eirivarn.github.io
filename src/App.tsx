import Hero from "./components/Hero";

export default function App() {
  return (
    <>
      <Hero />

      <section id="projects" className="projects">
        <h2>Featured Projects</h2>
        <ul>
          <li><strong>ROV Control</strong> — 6-DOF model, LQR + integral, observer, mixer</li>
          <li><strong>RL AUV Navigation</strong> — DQN/TD3 with LiDAR & memory buffers</li>
          <li><strong>3D Building Pipeline</strong> — geospatial → meshes → React-Three-Fiber</li>
        </ul>
      </section>

      <footer className="site-footer">
        © {new Date().getFullYear()} Eirik Varnes • Built with React + Vite • GitHub Pages
      </footer>
    </>
  );
}

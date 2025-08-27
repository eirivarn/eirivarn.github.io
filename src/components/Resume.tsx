// src/components/Resume.tsx
import { Link } from "react-router-dom";

export default function Resume() {
  return (
    <article className="resume">
      <header className="resume-header" itemScope itemType="https://schema.org/Person">
        <div>
          <h1 itemProp="name">Eirik Varnes</h1>
          <p className="subtitle" itemProp="jobTitle">Student • Engineering & ICT (NTNU)</p>
          <p className="summary">
            Master’s student in Engineering and ICT at NTNU with practical experience developing intelligent and
            autonomous systems—from robotics and AI-driven applications to advanced control solutions. Reliable and
            self-driven, with a proven ability to lead teams, deliver complex projects, and apply skills to create
            technology with impact.
          </p>
        </div>
        <ul className="contact">
          <li><a href="mailto:eirik.varnes@gmail.com" itemProp="email">eirik.varnes@gmail.com</a></li>
          <li><a href="https://linkedin.com/in/eirik-varnes" target="_blank" rel="noreferrer" itemProp="sameAs">linkedin.com/in/eirik-varnes</a></li>
          <li><a href="https://github.com/eirivarn" target="_blank" rel="noreferrer" itemProp="url">github.com/eirivarn</a></li>
          <li><a href="tel:+4747523345" itemProp="telephone">+47 475 23 345</a></li>
          <li itemProp="address">Møllehagen 2, 4120 Tau</li>
          <li><a href="/resume.pdf" download>Download PDF</a></li>
        </ul>
      </header>

      <section>
        <h2>Education</h2>
        <div className="item">
          <div className="item-head">
            <h3>Master of Technology in Engineering and ICT</h3>
            <span className="where">Norwegian University of Science and Technology (NTNU), Trondheim</span>
          </div>
          <div className="meta">2021–2026</div>
        </div>
        <div className="item">
          <div className="item-head">
            <h3>Materials Technology (foundation year)</h3>
            <span className="where">NTNU, Trondheim</span>
          </div>
          <div className="meta">2020–2021</div>
        </div>
      </section>

      <section>
        <h2>Professional Experience</h2>

        <div className="item">
          <div className="item-head">
            <h3>Summer Intern — Software Development</h3>
            <span className="where">Bouvet, Stavanger</span>
          </div>
          <div className="meta">Summer 2025</div>
          <ul className="bullets">
            <li>Developed a system that analyses images to gather information about buildings.</li>
            <li>Implemented computer vision, object detection, and segmentation for automated image processing.</li>
          </ul>
        </div>

        <div className="item">
          <div className="item-head">
            <h3>Summer Intern — Subsea Robotics</h3>
            <span className="where">TotalEnergies, Stavanger</span>
          </div>
          <div className="meta">Summer 2024</div>
          <ul className="bullets">
            <li>Built a digital simulation to test and improve a subsea sensor system.</li>
            <li>Collected and processed sensor data, uncovering new insights.</li>
            <li>Planned and carried out safe and efficient field tests.</li>
          </ul>
        </div>

        <div className="item">
          <div className="item-head">
            <h3>Elected Student Representative</h3>
            <span className="where">NTNU, Trondheim</span>
          </div>
          <div className="meta">2023</div>
          <ul className="bullets">
            <li>Represented students so their feedback shaped decisions; handled sensitive topics confidentially.</li>
          </ul>
        </div>

        <div className="item">
          <div className="item-head">
            <h3>Assistant & Acting Manager / Project Employee</h3>
            <span className="where">Vestkorn, Tau</span>
          </div>
          <div className="meta">Mar 2020–Aug 2023</div>
          <ul className="bullets">
            <li>Operated machinery and coordinated daily operations in the packaging department.</li>
            <li>Assisted in managing workflow and overseeing team activities.</li>
          </ul>
        </div>
      </section>

      <section>
        <h2>Project Experience — Robotics & Autonomy</h2>
        <ul className="bullets">
          <li><strong>Autonomous Vehicle Development:</strong> Camera-guided vehicle designed, 3D-printed, assembled; navigates and completes tasks autonomously.</li>
          <li><strong>ROV Control System Development:</strong> Realistic ROV simulation with true kinematics; controller stabilizes under waves and currents.</li>
          <li><strong>ROS Simulation — Service Robotics:</strong> Mapping, navigation, and pick-and-place tasks in a ROS environment.</li>
          <li><strong>Reinforcement Learning for Navigation:</strong> Agents trained with simulated sonar in a physics-based vehicle environment.</li>
          <li><strong>Robotic Vision:</strong> Robotic arm follows human hand movements in real-time.</li>
          <li><strong>Helicopter Control Lab:</strong> Controllers designed and tuned to stabilize a lab-scale helicopter with varied sensor data.</li>
        </ul>
      </section>

      <section>
        <h2>Project Experience — AI & Data Science</h2>
        <ul className="bullets">
          <li><strong>Solar Power Prediction:</strong> Predictive model using real-world datasets; improved via data cleaning, trend analysis, and feature refinement.</li>
          <li><strong>Smartwatch Data Integration:</strong> Enhanced diabetes prediction by integrating activity, insulin dosage, and glucose readings.</li>
          <li><strong>Football Analysis:</strong> Object tracking and keypoint detection for player positioning and movement analysis from video.</li>
          <li><strong>Multi-Agent Coding Assistant:</strong> Specialized agents for retrieval, generation, and testing with coordinated automation.</li>
        </ul>
      </section>

      <section>
        <h2>Student Association</h2>
        <ul className="bullets two-col">
          <li>Industry Contact</li>
          <li>IV-dagene Career Days — logistics team (setup, scheduling, coordination)</li>
          <li>Head of Welcoming Committee — led &lt;100 volunteers</li>
          <li>Purchasing Manager — student bar</li>
          <li>Organizational Restructuring — improved association structure</li>
        </ul>
      </section>

      <section>
        <h2>Volunteer Experience</h2>
        <p>
          <strong>Norsk Folkehjelp:</strong> Mountain search & rescue, first aid response, event safety, and medical support; trusted
          with high-responsibility tasks and committed to serving the local community.
        </p>
      </section>

      <section>
        <h2>References</h2>
        <p>Provided upon request.</p>
      </section>

      <nav className="backlink">
        <Link to="/">← Back to Home</Link>
        <button className="btn" onClick={() => window.print()}>Print</button>
      </nav>
    </article>
  );
}

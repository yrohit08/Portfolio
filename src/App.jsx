import './App.css'
import profileImg from './assets/profile.jpg'
import qaAward from './assets/qa-award.jpg';
import { motion, AnimatePresence } from 'framer-motion'
import { FaPython, FaJs, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaAngular, FaGitAlt, FaJira, FaCloud, FaTools, FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaSun, FaMoon } from 'react-icons/fa';
import { SiMysql, SiMongodb, SiSelenium, SiTeamcity } from 'react-icons/si';
import { useState, useEffect, useMemo } from 'react';

const sections = [
  { id: 'summary', label: 'Summary' },
  { id: 'education', label: 'Education' },
  { id: 'work', label: 'Work Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
];

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const educationData = [
  {
    institution: 'George Mason University',
    degree: "Master's in Information Systems (GPA: 3.8 / 4.0)",
    date: 'Aug 2023 – May 2025',
    courses: 'Coursework: Database Systems, Big Data Analytics to Information systems, Cloud Computing Security, Cybersecurity Fundamentals, Information Systems Analysis and Design, Rapid Information Prototyping, Software Project Management, User Interface Design and Development, Software Engineering for WWW'
  },
  {
    institution: 'Gokaraju Rangaraju Institute of Engineering and Technology',
    degree: 'Bachelor of Technology in Computer Science and Engineering (GPA: 7.45 / 10.0)',
    date: 'Aug 2016 – Sep 2020',
    courses: 'Coursework: Computer Programming, Data Structures, Database Management Systems, Operating Systems, Design and Analysis of Algorithms, Big Data Analytics, Data warehousing and Data mining, Software Testing Methodologies'
  }
];

const workData = [
  {
    company: 'Cloud Software Group (formerly Citrix R&D India Pvt Ltd)',
    role: 'Software Quality Assurance Engineer',
    date: 'Nov 2020 – Jun 2023',
    responsibilities: [
      'Designed and implemented test frameworks for Citrix Workspace App and XenApp/XenDesktop (CVAD) across Windows, Linux, Mac, Android, iOS, and web platforms.',
      'Reduced testing time by 45% by building automated pipelines and streamlining defect reporting processes.',
      'Developed comprehensive test plans and test cases based on in-depth analysis of product functionality across multiple platforms.',
      'Collaborated with cross-functional teams, including developers and PMs, to refine test coverage, align on feature rollouts, and ensure high-quality, risk-free releases.',
      'Identified, logged, and verified defects using JIRA and other tracking tools, improving bug resolution timelines.',
      'Leveraged debugging and root cause analysis skills to enhance defect detection and minimize production issues.',
      'Used bash sessions to uncover usability issues and edge-case bugs before major releases.',
      'Followed industry best practices and agile methodologies to uphold product quality and testing efficiency.'
    ]
  }
];

const skillsData = [
  {
    category: 'Programming Languages',
    skills: [
      { name: 'Python', icon: <FaPython />, color: '#FFD43B', textColor: '#4584B6' },
      { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E', textColor: '#000' }
    ]
  },
  {
    category: 'Web Technologies',
    skills: [
      { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26' },
      { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6' },
      { name: 'React', icon: <FaReact />, color: '#61DAFB' },
      { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
      { name: 'Angular', icon: <FaAngular />, color: '#DD0031' }
    ]
  },
  {
    category: 'Platforms & Tools',
    skills: [
      { name: 'Azure', icon: <FaCloud />, color: '#0078D4' },
      { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
      { name: 'JIRA', icon: <FaJira />, color: '#0052CC' },
      { name: 'TeamCity', icon: <SiTeamcity />, color: '#222' },
      { name: 'Zephyr', icon: <FaTools />, color: '#1976D2' },
      { name: 'Selenium', icon: <SiSelenium />, color: '#43B02A' },
      { name: 'Playwright', icon: <FaTools />, color: '#2EAD33' }
    ]
  },
  {
    category: 'Databases',
    skills: [
      { name: 'MySQL', icon: <SiMysql />, color: '#4479A1' },
      { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' }
    ]
  },
  {
    category: 'Testing & QA',
    skills: [
      { name: 'Manual Testing', icon: <FaTools /> }, { name: 'Automation Testing', icon: <FaTools /> }, { name: 'Functional Testing', icon: <FaTools /> },
      { name: 'Localization (L10n)', icon: <FaTools /> }, { name: 'Internationalization (I18n)', icon: <FaTools /> }, { name: 'Regression Testing', icon: <FaTools /> },
      { name: 'System Testing', icon: <FaTools /> }, { name: 'Test Plan Development', icon: <FaTools /> }, { name: 'Debugging', icon: <FaTools /> }, { name: 'Agile Methodologies', icon: <FaTools /> }
    ]
  },
  {
    category: 'Virtualization',
    skills: [
      { name: 'Citrix XenApp', icon: <FaCloud /> }, { name: 'Citrix XenDesktop', icon: <FaCloud /> }
    ]
  }
];

const allSkills = skillsData.flatMap(cat => cat.skills.map(skill => ({ ...skill, category: cat.category })));
const skillCategories = ['All', ...skillsData.map(cat => cat.category)];

const achievementsData = [
  {
    title: 'Best QA Product Deliverable Member',
    description: 'Recognized for exceptional contributions to product quality and delivery.',
    image: qaAward
  },
  {
    title: 'ISTQB Certified Tester – Foundation Level (CTFL)',
    description: 'Internationally recognized certification for software testing professionals.',
    image: null
  }
];

const contactData = [
  { icon: <FaMapMarkerAlt />, text: 'Fairfax, VA, US' },
  { icon: <FaPhone />, text: '+1-703-843-0867', href: 'tel:+17038430867' },
  { icon: <FaEnvelope />, text: 'sr8learnings@gmail.com', href: 'mailto:sr8learnings@gmail.com' },
  { icon: <FaLinkedin />, text: 'LinkedIn', href: 'https://www.linkedin.com/in/sri-rohit-yadlapalli-457170177' },
  { icon: <FaGithub />, text: 'GitHub', href: 'https://github.com/yrohit08' }
];

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return { text: 'Good morning', emoji: '☀️' };
  if (hour < 18) return { text: 'Good afternoon', emoji: '👋' };
  return { text: 'Good evening', emoji: '🌙' };
};

const AnimatedText = ({ text, emoji, emojiAnimation }) => {
  const letters = Array.from(text);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.h1
      className="hero-name"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      key={text}
    >
      {letters.map((letter, index) => (
        <motion.span variants={childVariants} key={index}>
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
      <motion.span
        style={{ display: 'inline-block', marginLeft: '0.5rem' }}
        variants={childVariants}
        animate={emojiAnimation.animate}
        transition={emojiAnimation.transition}
      >
        {emoji}
      </motion.span>
    </motion.h1>
  );
};

const ThemeToggle = ({ theme, toggleTheme }) => (
  <button onClick={toggleTheme} className="theme-toggle">
    {theme === 'dark' ? <FaSun /> : <FaMoon />}
  </button>
);


function App() {
  const [flippedCards, setFlippedCards] = useState({});
  const [activeFilter, setActiveFilter] = useState('All');
  const [showGreeting, setShowGreeting] = useState(true);
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return savedTheme || (userPrefersDark ? 'dark' : 'light');
  });

  const greeting = useMemo(() => getGreeting(), []);

  const emojiAnimations = {
    '☀️': {
      animate: { scale: [1, 1.2, 1], filter: ['brightness(1)', 'brightness(1.5)', 'brightness(1)'] },
      transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
    },
    '👋': {
      animate: { rotate: [0, 14, -8, 14, 0] },
      transition: { duration: 2.5, repeat: Infinity, ease: 'easeInOut', repeatDelay: 0.5 }
    },
    '🌙': {
      animate: { scale: [1, 1.1, 1], filter: ['brightness(1)', 'brightness(1.2)', 'brightness(1)'] },
      transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' }
    }
  };


  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGreeting(false);
    }, 4000); // Increased duration for typewriter effect
    return () => clearTimeout(timer);
  }, []);

  const handleFlip = (index) => {
    if (achievementsData[index].image) {
      setFlippedCards(prev => ({ ...prev, [index]: !prev[index] }));
    }
  };

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div>
      <header className="header">
        <div className="header-content">
          <motion.nav
            className="hero-nav"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {sections.map((section) => (
              <button
                key={section.id}
                className="nav-link"
                onClick={() => scrollToSection(section.id)}
              >
                {section.label}
              </button>
            ))}
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </motion.nav>
        </div>
      </header>
      <main>
        <div className="content-wrapper">
          <div className="hero-section">
            <div className="hero-content">
              <motion.img
                src={profileImg}
                alt="Sri Rohit Yadlapalli"
                className="hero-img"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              />
              <motion.div
                className="hero-text"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <AnimatePresence mode="wait">
                  {showGreeting ? (
                    <AnimatedText 
                      text={greeting.text} 
                      emoji={greeting.emoji}
                      emojiAnimation={emojiAnimations[greeting.emoji]}
                    />
                  ) : (
                    <motion.div
                      key="name"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h1 className="hero-name">Sri Rohit Yadlapalli</h1>
                      <div className="hero-divider"></div>
                      <h3 className="hero-title">Software Quality Assurance Engineer</h3>
                    </motion.div>
                  )}
                </AnimatePresence>
                <motion.p
                  className="hero-intro"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: showGreeting ? 4.5 : 0.5 }}
                >
                  Passionate about quality, automation, and delivering robust software solutions. Experienced in cross-platform testing, automation frameworks, and collaborating with global teams to drive product excellence.
                </motion.p>
              </motion.div>
            </div>
          </div>
          <motion.section id="summary" className="portfolio-section" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
            <h2>Summary</h2>
            <p>
              Software Quality Assurance Engineer with extensive experience in developing and executing test plans across multiple platforms. Demonstrated success in reducing testing time by 45% and improving defect resolution by 70% through both manual and Selenium-based automation. Proven ability to collaborate with cross-functional teams to enhance quality and innovate test processes, making significant contributions to robust feature integration and overall product excellence.
            </p>
          </motion.section>
          <motion.section id="education" className="portfolio-section" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
            <h2>Education</h2>
            <div className="timeline">
              {educationData.map((edu, index) => (
                <motion.div
                  className="timeline-item"
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="timeline-content">
                    <span className="timeline-date">{edu.date}</span>
                    <h3>{edu.institution}</h3>
                    <h4>{edu.degree}</h4>
                    <p>{edu.courses}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
          <motion.section id="work" className="portfolio-section" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
            <h2>Work Experience</h2>
            <div className="timeline">
              {workData.map((job, index) => (
                <motion.div
                  className="timeline-item"
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="timeline-content">
                    <span className="timeline-date">{job.date}</span>
                    <h3>{job.company}</h3>
                    <h4>{job.role}</h4>
                    <ul>
                      {job.responsibilities.map((task, i) => <li key={i}>{task}</li>)}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
          <motion.section id="projects" className="portfolio-section" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
            <h2>Academic Projects</h2>
            <div className="mini-cards-grid">
              <div className="mini-card">
                <h4>DutyFree Express Project (SRS)</h4>
                <p>Developed a detailed Software Requirements Specification (SRS) for the Duty-Free Express mobile application, specifying core functionalities such as payment processing, real-time order tracking, and delivery coordination while ensuring legal and regulatory compliance.</p>
                <div className="mini-badges">
                  <span className="mini-badge">SQL</span>
                  <span className="mini-badge">React Native</span>
                  <span className="mini-badge">Stripe</span>
                  <span className="mini-badge">Firebase</span>
                </div>
              </div>
              <div className="mini-card">
                <h4>Industry Salary and Rating Analysis</h4>
                <p>Conducted an in-depth analysis of industry-specific salaries and company ratings using a cleaned 2021 dataset; created interactive and static visualizations to showcase trends like average salaries by location, industry, degree, and IT sector.</p>
                <div className="mini-badges">
                  <span className="mini-badge">Python</span>
                  <span className="mini-badge">Jupyter Notebook</span>
                  <span className="mini-badge">Data Visualization</span>
                </div>
              </div>
              <div className="mini-card">
                <h4>E-kart - Shopping Website</h4>
                <p>Developed a responsive front-end shopping website showcasing product browsing, category filtering, and intuitive user interfaces, leveraging HTML, CSS, and JavaScript.</p>
                <div className="mini-badges">
                  <span className="mini-badge">HTML</span>
                  <span className="mini-badge">CSS</span>
                  <span className="mini-badge">JavaScript</span>
                </div>
              </div>
            </div>
          </motion.section>
          <motion.section id="skills" className="portfolio-section" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
            <h2>Technical Skills</h2>
            <div className="filter-buttons">
              {skillCategories.map(category => (
                <button
                  key={category}
                  className={`filter-button ${activeFilter === category ? 'active' : ''}`}
                  onClick={() => setActiveFilter(category)}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="skills-container">
              {allSkills.map((skill, i) => (
                <span
                  key={i}
                  className={`mini-badge ${activeFilter !== 'All' && activeFilter !== skill.category ? 'dimmed' : ''}`}
                  style={skill.color ? { '--skill-bg-color': skill.color, '--skill-text-color': skill.textColor || '#fff' } : {}}
                >
                  {skill.icon && <span className="skill-icon">{skill.icon}</span>}
                  {skill.name}
                </span>
              ))}
            </div>
          </motion.section>
          <motion.section id="achievements" className="portfolio-section" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
            <h2>Achievements</h2>
            <div className="achievements-grid">
              {achievementsData.map((achievement, index) => (
                <div
                  className="flip-card"
                  key={index}
                  onClick={() => handleFlip(index)}
                >
                  <motion.div
                    className={`flip-card-inner ${flippedCards[index] ? 'flipped' : ''}`}
                    initial={false}
                    animate={{ rotateY: flippedCards[index] ? 180 : 0 }}
                    transition={{ duration: 0.6 }}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <div className="flip-card-front">
                      <div className="mini-card">
                        <h4>{achievement.title}</h4>
                        <p>{achievement.description}</p>
                      </div>
                    </div>
                    <div className="flip-card-back">
                      {achievement.image && <img src={achievement.image} alt={achievement.title} className="achievement-image" />}
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.section>
          <motion.section id="contact" className="portfolio-section" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
            <h2>Contact</h2>
            <div className="contact-grid">
              {contactData.map((item, index) => (
                <a key={index} href={item.href} target="_blank" rel="noopener noreferrer" className="contact-card-link">
                  <div className="contact-card">
                    <div className="contact-card-icon">{item.icon}</div>
                    <div className="contact-card-text">{item.text}</div>
                  </div>
                </a>
              ))}
            </div>
          </motion.section>
        </div>
      </main>
      <footer className="footer-credits">
        <p>&copy; 2025 Sri Rohit Yadlapalli. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App

// src/App.jsx
import React, { useMemo, useRef, useState } from "react";



const DEFAULT_PROFILE = {
  name: "Sindhuja Madireddy",
  title: "Full Stack Engineer",
  tagline:
    "Building scalable, high-impact web platforms with a strong focus on performance, reliability, and product outcomes.",
  email: "sindhudev.in4@gmail.com",
  phone:"(346) 537-8178",
  linkedin: "https://linkedin.com/in/sindhuja-madireddy-1684143a1",
  github: "https://github.com/sindhuja-madireddy",
  resumeUrl: "/Resume.pdf",
  highlights: [
    "7+ years delivering enterprise-grade UI and backend integrations",
    "Strong in system design, performance optimization, and clean architecture",
    "Experience with AWS/GCP, CI/CD, and modern React + TypeScript ecosystems",
  ],
  skills: {
    "Front End": ["React", "JavaScript","TypeScript","Next.js", "Redux", "HTML5", "CSS3","Bootstrap", "Material UI"],
    "Back End": ["Node.js", "Java", "Spring Boot", "REST APIs", "Kafka","Splunk"],
    "Cloud & DevOps": ["AWS", "Azure", "Docker", "Kubernetes", "Jenkins", "GitHub","SonarQube"],
    "Database": ["MySQL", "MongoDB","Oracle", "SQL Server", "PostgreSQL", "Cassandra"],
    "Practices": ["Microservices", "System Design", "Agile"],
  },
  experience: [
    {
      company: "First Citizens Bank, Los Angeles, CA",                                              
      role: "Sr.Software Developer",
      dates: "Dec 2023 – Present",
      bullets: [
        "Built secure, responsive React + TypeScript user interfaces for internal banking dashboards and customer-facing workflows, ensuring accessibility and consistent UX in regulated environments.",

         "Implemented predictable state management using Redux and Context API to support data-intensive financial screens and improve UI stability.",

"Integrated frontend applications with backend services to surface real-time transaction status, account data, and audit information.",

"Designed and developed Java Spring Boot services to support core banking workflows, including transaction processing, validation, and business rule enforcement.",

"Built secure RESTful APIs using Spring Boot, Spring Data JPA, and Hibernate with proper validation, error handling, logging, and audit traceability.",

"Implemented authentication and authorization using Spring Security and OAuth2, enforcing role-based access control.",

"Optimized backend performance through query tuning, efficient data access patterns, and concurrency-safe logic under high transaction volumes.",

"Containerized services with Docker and deployed on AWS (EC2, ECS/EKS, S3, RDS), supporting scalable and resilient environments.",

"Supported CI/CD pipelines using Jenkins, automating builds, tests, and deployments to improve release reliability."
      ],
      tech: ["React", "TypeScript", "Node.js", "AWS", "CI/CD"],
    },
    {
      company: "Volkswagen,Rochester, Michigan",
      role: "Software Developer",
      dates: "Feb 2022 - Nov 2023",
      bullets: [
        "Managed complex UI state using Redux and Context API, improving application reliability and maintainability.",

"Collaborated closely with UX designers and backend teams to ensure accessibility compliance and consistent UI behavior.",

"Designed and implemented Java Spring Boot backend services to support enterprise business logic and system integrations.",

"Optimized backend performance by refactoring legacy code, tuning database queries, and improving concurrency handling.",

"Built well-structured RESTful APIs using Spring Boot, Hibernate, and Spring Data JPA.",

"Implemented API security using Spring Security and OAuth2 with role-based access control.",

"Containerized applications using Docker and supported cloud deployments across environments.",

"Built and maintained CI/CD pipelines with Jenkins, enabling faster and more reliable releases.",

"Supported monitoring and operational troubleshooting in collaboration with DevOps teams."
      ],
      tech: ["Angular", "Java", "Spring Boot", "Kafka"],
    },
    {
      company: "American Eagle Outfitters,Pittsburgh, PA",
      role: "Software Developer",
      dates: "Jan 2020-Feb 2022",
      bullets: [
        "Built responsive, component-driven frontend experiences to improve product discovery, cart flows, and checkout performance.",

"Integrated real-time inventory and order management systems (OMS) to ensure accurate stock visibility across channels.",

"Optimized backend APIs and database queries to reduce latency and handle high-concurrency traffic during peak sales events.",

"Implemented robust error handling, logging, and monitoring to proactively identify and resolve production issues.",

"Supported A/B testing and feature toggles to enable safe, data-driven experimentation.",

"Contributed to CI/CD pipelines and deployment automation, accelerating release cycles while maintaining quality standards.",

"Played a key role in modernizing legacy retail services to improve maintainability and scalability."
      ],
      tech: ["Angular", "Java", "Spring Boot", "Kafka"],
    },
    {
      company: "Iprism Technologies,Hyderabad, India",
      role: "Software Developer",
      dates: "July 2018 – Dec 2019",
      bullets: [
        "Assisted in developing Java-based backend components, contributing to core business logic and data processing modules.",

"Supported frontend development using HTML, CSS, and JavaScript to improve UI responsiveness.",

"Worked with JDBC and SQL queries to retrieve and update relational database data.",

"Helped build and test basic REST APIs, gaining hands-on experience with backend-frontend integration.",

"Wrote unit tests using JUnit to validate functionality and reduce defects.",

"Used Git for version control and participated in Agile ceremonies and code reviews."
      ],
      tech: ["Angular", "Java", "Spring Boot", "Kafka"],
    },
  ],
  projects: [
    {
      name: "Inference Dashboard",
      description:
        "A data-rich ML inference dashboard with model selection, progress tracking, and chart/table visualizations.",
      outcomes: [
        "Designed modular UI architecture for fast iteration",
        "Implemented mock API orchestration and realistic data simulation",
      ],
      tech: ["React", "TypeScript", "Charting", "REST"],
      links: [
        { label: "GitHub", href: "https://github.com/your-handle/project" },
        { label: "Live Demo", href: "https://your-domain.com" },
      ],
    },
    {
      name: "Secure Messaging UI",
      description:
        "A secure chat UI concept with encryption mode toggles and clean UX for sensitive workflows.",
      outcomes: [
        "Created a toggle-driven UX for mode switching",
        "Built reusable UI primitives aligned to enterprise design systems",
      ],
      tech: ["React", "Tailwind", "Security UX"],
      links: [{ label: "Case Study", href: "https://your-domain.com/case-study" }],
    },
  ],
  education: [
    { degree: "Master's in Computer Science ", school: "University Of Houston Clear-Lake", year: "2024-2025" },
    { degree: "Bachlor's  in Computer Science", school: "Kakatiya Institute Of Technology & Science", year: "2015-2019" },
  ],
};

function Badge({ children }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        border: "1px solid rgba(255,255,255,0.12)",
        borderRadius: 999,
        padding: "6px 10px",
        fontSize: 20,
        opacity: 0.92,
        background: "rgba(255,255,255,0.04)",
      }}
    >
      {children}
    </span>
  );
}

function Card({ children }) {
  return (
    <div
      style={{
        border: "1px solid rgba(255,255,255,0.10)",
        borderRadius: 18,
        padding: 18,
        background: "rgba(255,255,255,0.03)",
        boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
      }}
    >
      {children}
    </div>
  );
}

function Button({ children, href, onClick, variant = "primary" }) {
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    padding: "10px 14px",
    borderRadius: 12,
    fontWeight: 600,
    textDecoration: "none",
    cursor: "pointer",
    border: "1px solid transparent",
    userSelect: "none",
    transition: "transform 150ms ease, opacity 150ms ease",
  };

  const styles =
    variant === "primary"
      ? { ...base, background: "rgba(255,255,255,0.92)", color: "#0b1220" }
      : {
          ...base,
          background: "transparent",
          color: "rgba(255,255,255,0.92)",
          border: "1px solid rgba(255,255,255,0.18)",
        };

  const Comp = href ? "a" : "button";

  return (
    <Comp
      href={href}
      onClick={onClick}
      style={styles}
      target={href ? "_blank" : undefined}
      rel={href ? "noreferrer" : undefined}
    >
      {children}
    </Comp>
  );
}

function SectionTitle({ kicker, title, subtitle }) {
  return (
    <div style={{ marginBottom: 14 }}>
      {kicker ? (
        <div style={{ letterSpacing: 2, textTransform: "uppercase", fontSize: 12, opacity: 0.75 }}>
          {kicker}
        </div>
      ) : null}
      <div style={{ fontSize: 24, fontWeight: 800, marginTop: 6 }}>{title}</div>
      {subtitle ? <div style={{ opacity: 0.82, marginTop: 6 }}>{subtitle}</div> : null}
    </div>
  );
}

function Divider() {
  return <div style={{ height: 1, background: "rgba(255,255,255,0.08)", margin: "18px 0" }} />;
}

export default function App() {
  const [profile] = useState(DEFAULT_PROFILE);

  // ✅ Refs for guaranteed scroll targets
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  //const projectsRef = useRef(null);
  const educationRef = useRef(null);
  const contactRef = useRef(null);

  const getScrollParent = (node) => {
  if (!node) return window;

  let parent = node.parentElement;
  while (parent) {
    const style = window.getComputedStyle(parent);
    const overflowY = style.overflowY;
    const canScroll =
      (overflowY === "auto" || overflowY === "scroll") &&
      parent.scrollHeight > parent.clientHeight;

    if (canScroll) return parent;
    parent = parent.parentElement;
  }

  return window;
};
  const scrollToRef = (ref) => {
  if (!ref?.current) return;

  const target = ref.current;
  const scrollParent = getScrollParent(target);
  const HEADER_OFFSET = 90;

  if (scrollParent === window) {
    const y = target.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
    window.scrollTo({ top: y, behavior: "smooth" });
  } else {
    const parentRect = scrollParent.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    const y = (targetRect.top - parentRect.top) + scrollParent.scrollTop - HEADER_OFFSET;
    scrollParent.scrollTo({ top: y, behavior: "smooth" });
  }
};


  const navItems = useMemo(
    () => [
      { label: "Home", ref: homeRef },
      { label: "About", ref: aboutRef },
      { label: "Skills", ref: skillsRef },
      { label: " Work Experience", ref: experienceRef },
      //{ label: "Projects", ref: projectsRef },
      { label: "Education", ref: educationRef },
      { label: "Contact", ref: contactRef },
    ],
    []
  );

  return (
    <div
      style={{
        minHeight: "100vh",
        color: "rgba(255,255,255,0.92)",
        background:
          "radial-gradient(1200px 600px at 10% 10%, rgba(93,160,255,0.20), transparent 55%)," +
          "radial-gradient(900px 500px at 85% 20%, rgba(168,85,247,0.18), transparent 55%)," +
          "linear-gradient(180deg, #070b14, #070b14 40%, #050812)",
        fontFamily:
          "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, 'Apple Color Emoji','Segoe UI Emoji'",
      }}
    >
      {/* Top Nav */}
<div
  style={{
    position: "sticky",
    top: 0,
    zIndex: 50,
    backdropFilter: "blur(10px)",
    background: "rgba(7, 11, 20, 0.55)",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
  }}
>
  <div
    style={{
      maxWidth: 1100,
      margin: "0 auto",
      padding: "12px 16px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 14,
    }}
  >
    {/* LEFT: Portfolio (replaces image + name in nav) */}
    <div
      style={{
        fontSize: 20,
        fontWeight: 900,
        letterSpacing: 1,
        color: "rgba(255,255,255,0.92)",
      }}
    >
      Portfolio
    </div>
     {/* RIGHT: Nav buttons */}
    <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
      {navItems.map((n) => (
        <button
          key={n.label}
          type="button"
          onClick={() => scrollToRef(n.ref)}
          style={{
            background: "transparent",
            border: "1px solid rgba(255,255,255,0.10)",
            color: "rgba(255,255,255,0.9)",
            borderRadius: 999,
            padding: "8px 10px",
            cursor: "pointer",
            fontSize: 20,
            opacity: 0.9,
          }}
        >
          {n.label}
        </button>
      ))}
    </div>
  </div>


      {/* Main */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "28px 16px 60px" }}>
  {/* Home */}
  <section ref={homeRef} style={{ paddingTop: 18 }}>
    {/* Identity Row */}
    <div style={{ display: "flex", alignItems: "flex-start", gap: 18 }}>
      <img
        src="/sindhu_image.jpg"
        alt={profile.name}
        style={{
          width: 200,
          height: 200,
          borderRadius: "50%",
          objectFit: "cover",
          border: "3px solid rgba(255,255,255,0.22)",
          boxShadow: "0 16px 40px rgba(0,0,0,0.45)",
          flexShrink: 0,
        }}
      />

      <div style={{ flex: 1 ,marginTop: 50}}>
        <div style={{ fontSize: 34, fontWeight: 900, lineHeight: 1.1 }}>
          {profile.name}
        </div>
        <div style={{ fontSize: 20, opacity: 0.82, marginTop: 6 }}>
          {profile.title}
        </div>

        
      </div>
    </div>

    

    

    {/* Buttons */}
    <div style={{ marginTop: 18, display: "flex", gap: 10, flexWrap: "wrap" }}>
      <Button href={profile.resumeUrl}>Download Resume</Button>
      <Button variant="secondary" href={profile.linkedin}>
        LinkedIn
      </Button>
      <Button variant="secondary" href={profile.github}>
        GitHub
      </Button>
      <Button variant="secondary" onClick={() => scrollToRef(contactRef)}>
        Contact
      </Button>
    </div>
  </section>

  <div style={{ height: 26 }} />

  {/* About */}
  <section ref={aboutRef}>
    <SectionTitle title="About Me" />
    <Card>
      <div style={{ fontSize:18, lineHeight: 1.7, opacity: 0.9 }}>
        <p>
      Senior Java Full Stack Engineer with 8 years of hands-on experience designing, building, and supporting enterprise and cloud-native applications in production environments where reliability, security, and performance are critical. My background centers on delivering systems that operate consistently under real-world load, not just ideal conditions.</p>

<p>I work across both the frontend and backend, developing user-facing application layers and backing them with well-structured Java and Spring Boot services. My experience includes designing secure REST APIs, implementing complex business logic, integrating databases, and ensuring seamless interaction between application layers in production. I focus on building solutions that are easy to extend, troubleshoot, and operate over time.</p>

<p>My work has involved microservices and distributed system environments, handling performance bottlenecks, improving service reliability, and resolving production issues across multiple environments. I’m comfortable working with SQL databases, optimizing queries, and designing schemas that support scale, consistency, and long-term maintainability.</p>

<p>I also have hands-on experience with event-driven architectures using Kafka, enabling asynchronous processing and system decoupling. From an infrastructure perspective, I’ve deployed and supported applications on AWS, working with Docker, Kubernetes (EKS), and CI/CD pipelines, and I’m involved in monitoring, logging, and production troubleshooting as part of regular operations.</p>

<p>Beyond implementation, I actively contribute to design discussions, requirement analysis, code reviews, and ownership of modules within Agile teams. I value clean architecture, security-first thinking, and building systems that teams can trust in production.</p>

      </div>
    </Card>
  </section>

  <div style={{ height: 26 }} />

  {/* Skills */}
  <section ref={skillsRef}>
    <SectionTitle title="Skills" />
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: 14,
      }}
    >
      {Object.entries(profile.skills).map(([group, items]) => (
        <Card key={group}>
          <div style={{ fontWeight: 900 }}>{group}</div>
          <Divider />
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {items.map((s) => (
              <Badge key={s}>{s}</Badge>
            ))}
          </div>
        </Card>
      ))}
    </div>
  </section>

  <div style={{ height: 26 }} />

  {/* Experience */}
  <section ref={experienceRef}>
    <SectionTitle title="Experience" />
    <div style={{ display: "grid", gap: 14 }}>
      {profile.experience.map((e, idx) => (
        <Card key={idx}>
          <div style={{ fontWeight: 900, fontSize: 16.5 }}>
            {e.role} • <span style={{ opacity: 0.85 }}>{e.company}</span>
          </div>
          <div style={{ opacity: 0.75, marginTop: 6 }}>{e.dates}</div>
          <Divider />
          <ul style={{ margin: 0, paddingLeft: 18, opacity: 0.9, lineHeight: 1.7,fontSize: 16 }}>
            {e.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </Card>
      ))}
    </div>
  </section>

  <div style={{ height: 26 }} />

 

  {/* Education */}
  <section ref={educationRef}>
    <SectionTitle title="Education" />
    <div style={{ display: "grid", gap: 14 }}>
      {profile.education.map((ed, idx) => (
        <Card key={idx}>
          <div style={{ fontWeight: 900 }}>{ed.degree}</div>
          <div style={{ opacity: 0.82, marginTop: 6 }}>
            {ed.school} • {ed.year}
          </div>
        </Card>
      ))}
    </div>
  </section>

  <div style={{ height: 26 }} />

  {/* Contact */}
  <section ref={contactRef}>
    <SectionTitle title="Contact" />
    <Card>
      <div style={{ display: "grid", gap: 10, opacity: 0.92 }}>
        <div>
          <div style={{ opacity: 0.7 }}>Email</div>
          <div style={{ marginTop: 6 }}>
            <a style={{ color: "rgba(255,255,255,0.92)" }} href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </div>
          <div style={{ opacity: 0.7 }}>Phone</div>
          <div style={{ marginTop: 6 }}>
          <div style={{ marginTop: 6 }}>
            <a style={{ color: "rgba(255,255,255,0.92)" }} href={`mailto:${profile.phone}`}>
              {profile.phone}
            </a>
          </div>
            
          </div>
        </div>
      </div>
    </Card>
  </section>
      </div>
      </div>
      </div>

  );
  }

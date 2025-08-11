// --- 🎨 Site Styling ---

// Colors (recommendation: choose a color suitable for dark and light modes)
// Should be inputted as a hex value. Use https://g.co/kgs/XCcs7T for choosing colors with hex.
const colors = {
  buttonColor: "#4305ba",
  LinkHighlightColor: "#4305ba",
};

// Transitions
const transitions = {
  active: true, // activate for all sections
  onlyLanding: false, // activate only for initial load of landing page
  showOnce: true, // transition only once
  thresholdOption: 0.2, // indicates at what percentage of the sections visibility the transition should start
};

// Splash Screen
const splashScreen = true; // recommended: for best behavior after refresh

// --- 👋 Greeting Section ---
const greeting = {
  intro: "Hello 👋, my name is",
  name: "Himanshu Rawat",
  message:
    "I am a seasoned Senior Front-End Developer with 3.5+ years of experience creating immersive, user-focused digital experiences that merge creativity with functionality. I excel in leveraging modern web technologies to deliver high-performance, scalable solutions, thriving in dynamic environments that demand innovation and adaptability.",
  basedLocation: "Noida, India",
  resumeLink:
    "https://drive.google.com/file/d/1MoIzqHmXItIBYIhPtdqjSYNOsJR9zQYe/view?usp=drive_link", // recommended: google drive file share link (change to "anyone on the internet can view")
  logo: {
    link: "images/initials.png", // use relative path from  parent directory -> ex: images/image.ext
    custom: true, // takes precedence over image logo and allows for custom HTML logo (./components/Navbar.vue)
  },
  portraitLink: "images/portrait.jpeg",
};

const socialMediaLinks = {
  github: "https://github.com/Himanshu-199",
  linkedin: "https://www.linkedin.com/in/himanshu-rawat-56a404218/",
}; // to add any additional social media links check out the README.md or src/icons.js file

// --- 😎 About Section ---
const about = {
  autobiography: [
    "As a senior front-end developer, I bring a blend of leadership, mentorship, and strategic vision to every project. I excel at guiding and upskilling junior developers, architecting scalable and maintainable solutions, and driving the adoption of cutting-edge technologies. My approach is rooted in a commitment to excellence and a passion for advancing the possibilities of modern front-end development.",
  ], // Separated items are paragraphs
  techStack: ["React.js", "JavaScript", "Node.js", "Html", "Css"],
  photo3Link: "images/portrait2.jpeg",
};

// --- 🛡️ Experience Section ---
const experiences = [
  {
    position: "Senior Software Engineer",
    company: {
      name: "Electrovese Solution Pvt Ltd",
      link: "https://electrovese.com/",
    },
    duration: "January 2023 - Present",
    bulletPoints: [
      " Developed responsive, high-performance web applications across E-commerce, CRM, and customize dashboards using React, Next.js, and Redux (Thunk). Optimized load times, enhanced scalability, and delivered intuitive user experiences. Collaborated with cross-functional teams to integrate seamless UI/UX and maintain clean, maintainable code aligned with industry best practices.",
      " Ensured frontend architecture was scalable and maintained high code quality and accessibility standards",
      "Leveraged modern JavaScript frameworks, UX/UI best practices, and agile development methodologies with high quality code, automated unit, and integration tests.",
    ],
    hashtags: [
      "React.js",
      "Node.js",
      "Javascript",
      "Redux-Thunk",
      "Cloud Computing",
      "Docker",
      "Jenkins",
      "Kibana",
      "Grafana",
      "Prometheus",
    ],
  },
  {
    position: "Software Engineer",
    company: {
      name: "Codmi Technologies Pvt. Ltd",
      link: "",
    },
    duration: "April 2021 - March 2022",
    bulletPoints: [
      "Developed a scalable food delivery website using Next.js, integrating D Jenkins for efficient CI/CD. Implemented SEO best practices to improve search visibility, resulting in increased web traffic. ",
      "Code optimization, observation, collaboration.",
      "UI portal for uploading and downloading documents.",
      "Developed standard and ad hoc reports in graph format.",
    ],
    hashtags: [
      "React.js",
      "Javascript",
      "GraphQL",
      "AWS",
      "Github",
      "Redux",
      "Redux-Saga",
      "ES6",
      "REST Api",
      "Python",
    ],
  },
];

// --- 💻 Work Section ---
const works = [
  {
    projectName: "Jira Dashboard",
    yearCompleted: "2024",
    description:
      " Jira Dashboard is a customizable and centralized hub that show various types of real-time information to help you track and monitor your work across projects.",
    links: [
      {
        label: "",
        type: "git",
        // url: "https://github.com/money280497/jira-dashboard/",
      },
    ],
    imageLink: "images/tracksubs_pic.png",
    alignLeft: false,
  },
];

const archiveLink = "";

// --- 📭 Contact Section ---
// 2 Options available - Choose 1
const contact = {
  externalLink: {
    shortTitle: "Get in Touch",
    note: [
      " I’m thrilled to share a bit about myself —",
      "A versatile individual with a diverse range of interests and passions, including coding, calisthenics, gymming, swimming, cricket, football, esports, and music.",
      "I strive for excellence, creativity, and authenticity.",
      "Thank you for taking the time to explore my portfolio, and I look forward to connecting with you soon!",
    ], // paragraph breaks will be entered after each item,
    link: {
      email: "", // email takes precedance
      other: "https://forms.gle/W3MswTKsPWMxEbn58",
    },
    responseTimeMessage: "...and I'll resopnd within the next 24hrs",
  },
  formEmbedLink: "", // inclusion of this link will take precedance
};

export default {
  colors,
  transitions,
  splashScreen,
  greeting,
  socialMediaLinks,
  about,
  experiences,
  works,
  archiveLink,
  contact,
};

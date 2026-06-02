// ══ PERSONAL DATA ══
export const PERSONAL = {
    name: 'Yug Gupta',
    initials: 'YG',
    role: 'Full-Stack Developer & Creative Technologist',
    tagline: '',
    about1: 'Second-year B.Tech CSE (AI for IoT) student at Sharda University with strong foundations in AI/ML, Deep Learning, IoT, and data-driven problem solving. I build end-to-end projects involving machine learning, computer vision, and full-stack development — with recognition at national-level hackathon competitions.',
    about2: 'Currently interning as a Machine Learning Intern at Skillfied Mentor, where I develop and evaluate supervised and unsupervised ML models for real-world datasets.',
    email: '2024300275.yug@ug.sharda.ac.in',
    phone: '9319948703',
    linkedin: 'https://linkedin.com/in/yuggupta122',
    github: 'https://github.com/Yug-Gupta1212',
    location: 'Delhi, India',
    availability: 'Open to Work',
    resumeUrl: '',
    stats: { projects: '5+', hackathons: 7, cgpa: 8.7, year: '2nd Year' },
};

// ══ SKILLS DATA ══
export const SKILLS = [
    // AI & ML
    { name: 'TensorFlow', category: 'aiml', level: 85, label: 'Expert' },
    { name: 'Python (ML)', category: 'aiml', level: 90, label: 'Expert' },
    { name: 'Scikit-learn', category: 'aiml', level: 80, label: 'Advanced' },
    { name: 'Computer Vision (OpenCV)', category: 'aiml', level: 78, label: 'Advanced' },
    { name: 'Deep Learning', category: 'aiml', level: 75, label: 'Advanced' },
    { name: 'Edge AI', category: 'aiml', level: 65, label: 'Intermediate' },
    { name: 'Data Preprocessing', category: 'aiml', level: 82, label: 'Advanced' },
    { name: 'Feature Engineering', category: 'aiml', level: 70, label: 'Intermediate' },
    // Frontend
    { name: 'React', category: 'frontend', level: 80, label: 'Advanced' },
    { name: 'JavaScript', category: 'frontend', level: 82, label: 'Advanced' },
    { name: 'TypeScript', category: 'frontend', level: 70, label: 'Intermediate' },
    { name: 'HTML & CSS', category: 'frontend', level: 85, label: 'Advanced' },
    { name: 'Flutter', category: 'frontend', level: 65, label: 'Intermediate' },
    // Backend
    { name: 'Node.js', category: 'backend', level: 78, label: 'Advanced' },
    { name: 'Express.js', category: 'backend', level: 75, label: 'Advanced' },
    { name: 'Flask', category: 'backend', level: 80, label: 'Advanced' },
    { name: 'REST APIs', category: 'backend', level: 82, label: 'Advanced' },
    { name: 'SQL', category: 'backend', level: 72, label: 'Intermediate' },
    // Languages
    { name: 'Python', category: 'languages', level: 90, label: 'Expert' },
    { name: 'JavaScript', category: 'languages', level: 82, label: 'Advanced' },
    { name: 'TypeScript', category: 'languages', level: 70, label: 'Intermediate' },
    { name: 'C++', category: 'languages', level: 68, label: 'Intermediate' },
    { name: 'Java', category: 'languages', level: 65, label: 'Intermediate' },
    // Tools & Concepts
    { name: 'Git & GitHub', category: 'tools', level: 85, label: 'Advanced' },
    { name: 'DBMS', category: 'tools', level: 72, label: 'Intermediate' },
    { name: 'Data Structures & Algorithms', category: 'tools', level: 70, label: 'Intermediate' },
    { name: 'CAD Modelling', category: 'tools', level: 50, label: 'Beginner' },
    { name: 'IoT Systems', category: 'tools', level: 68, label: 'Intermediate' },
];

// ══ PROJECTS DATA ══
export const PROJECTS = [
    {
        title: 'Autonomous CubeSat Collision Detection',
        category: 'aiml',
        description: 'A vision-based detection and collision risk prediction pipeline for real-time onboard space debris detection on CubeSats. Implemented real-time simulation — selected as Finalist among 900+ teams at Elite Hack national competition.',
        stack: ['Python', 'OpenCV', 'Machine Learning', 'Edge AI'],
        metric: 'Finalist among 900+ teams — Elite Hack National Competition',
        github: 'https://github.com/Yug-Gupta1212/cubesat',
        live: '#',
        featured: true
    },
    {
        title: 'Kin Well — AI Healthcare App',
        category: 'aiml',
        description: 'ML model for skin image analysis integrated via Flask APIs with offline usability and multilingual support. Designed for rural communities with vaccine reminders and AI-based preventive care.',
        stack: ['Python', 'TensorFlow', 'Flask', 'Machine Learning'],
        metric: 'Multilingual + offline support for rural health access',
        github: 'https://github.com/Yug-Gupta1212/Kinwell',
        live: '#',
        featured: false,
        image: '/src/assets/kinwell.png'
    },
    {
        title: 'Fresh Mate — Food Freshness Detection',
        category: 'iot',
        description: 'Responsive frontend dashboard visualizing real-time food freshness data (temperature, humidity, gas levels). Live freshness scores, spoilage alerts with interactive charts and color-coded indicators.',
        stack: ['HTML', 'CSS', 'JavaScript', 'Flask'],
        metric: 'Real-time IoT data visualization with spoilage alerts',
        github: 'https://github.com/Yug-Gupta1212/Fresh-Mate-Project',
        live: '#',
        featured: false,
        image: '/src/assets/freshmate.png'
    },
    {
        title: 'Zenvita',
        category: 'web',
        description: 'A full-stack wellness and productivity web app with clean UI, user authentication, and personalized dashboard experience.',
        stack: ['React', 'Node.js', 'JavaScript'],
        metric: 'Full-stack wellness platform with auth and dashboard',
        github: 'https://github.com/Yug-Gupta1212/Zenvita',
        live: '#',
        featured: false,
        image: '/src/assets/zenvita.png'
    }
];

// ══ EXPERIENCE DATA ══
export const EXPERIENCE = [
    {
        role: 'Machine Learning Intern',
        company: 'Skillfied Mentor',
        type: 'Internship',
        start: 'Jan 2026',
        end: 'Present',
        location: 'Virtual / Remote',
        bullets: [
            '— Developing and evaluating supervised and unsupervised ML models for real-world datasets using Python, Scikit-learn, and TensorFlow.',
            '— Performing data preprocessing, feature engineering, and model optimization to improve prediction accuracy and performance metrics.'
        ],
        tech: ['Python', 'Scikit-learn', 'TensorFlow', 'ML']
    }
];

export const EDUCATION = [
    {
        role: 'B.Tech – Computer Science Engineering (AI for IoT)',
        company: 'Sharda University, Greater Noida',
        type: 'Degree',
        start: '2024',
        end: '2028',
        location: 'Delhi, India',
        bullets: [
            'CGPA: 8.7',
            'Specialization in Artificial Intelligence and Internet of Things'
        ],
        tech: []
    }
];

// ══ CERTIFICATIONS DATA ══
export const CERTS = [
    {
        name: 'CS50: Introduction to Computer Science',
        org: 'Harvard University',
        date: 'Jul 2025',
        id: 'CS50-2025',
        url: 'https://cs50.harvard.edu/certificates/1a7df567-e362-4225-87ae-da5156bd869a',
        buttonLabel: 'View Certificate'
    },
    {
        name: 'Oracle Java Course',
        org: 'Oracle Academy',
        date: 'Nov 2025',
        id: 'ORACLE-JAVA-2025',
        url: '#',
        buttonLabel: 'View Certificate'
    },
];

export const ACHIEVEMENTS = [
    {
        name: 'First Runner-Up — Brizzprenure Business Event',
        org: 'Sep–Oct 2025',
        detail: 'Recognised for strong problem identification, feasibility analysis, and pitch execution.',
        url: '/src/assets/brizzprenure.jpeg',
        buttonLabel: 'View Certificate'
    },
    {
        name: 'Finalist — Elite Hack Competition (National)',
        org: '2026',
        detail: 'Selected among 900+ teams for CubeSat AI-based satellite collision prediction project.',
        url: '/src/assets/elitehack_cert.png',
        buttonLabel: 'View Certificate'
    }
];

export const SVG_ICONS = {
    github: <svg viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>,
    linkedin: <svg viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>,
    email: <svg viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/></svg>
};

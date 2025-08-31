import { IProject } from '@/types';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { IconType } from 'react-icons';

export const GENERAL_INFO = {
    email: 'hosenrabby.dev@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Hosen Rabby, I am reaching out to you because...',
};

export const SOCIAL_LINKS: { id: string; icon: IconType; url: string }[] = [
    { id: 'github', icon: FaGithub, url: 'https://github.com/hosenrabby' },
    { id: 'linkedin', icon: FaLinkedinIn, url: 'https://www.linkedin.com/in/hosen-rabby-dev/' },
    { id: 'twitter', icon: FaTwitter, url: 'https://twitter.com/hosenRabby' },
    { id: 'facebook', icon: FaFacebookF, url: 'https://www.facebook.com/tahmid.tuhin.3' },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'Redux',
            icon: '/logo/redux.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'Bootstrap',
            icon: '/logo/bootstrap.svg',
        },
        {
            name: 'TypeScript',
            icon: '/logo/ts.png',
        },
        {
            name: 'GSAP',
            icon: '/logo/gsap.png',
        },
        {
            name: 'Framer Motion',
            icon: '/logo/framer-motion.png',
        },
        {
            name: 'Sass',
            icon: '/logo/sass.png',
        },
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
    ],
    database: [
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
        {
            name: 'PostgreSQL',
            icon: '/logo/postgreSQL.png',
        },
        {
            name: 'Prisma',
            icon: '/logo/prisma.png',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'VS Code',
            icon: '/logo/visual-studio-code.svg',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Review Tracker',
        slug: 'review-tracker',
        liveUrl: 'https://service-review-tracker.netlify.app/',
        year: 2025,
        description: `
      ReviewTracker is an interactive web app where users explore services, share reviews, and manage their submissions. Reviews display dynamically in an animated carousel powered by Framer Motion for engaging experiences. <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li>🔍 Browse all services with filter & search</li>
        <li>🗂️ Manage your added services </li>
        <li>📝 Submit and manage your reviews (protected)</li>
        <li>🔐 JWT Authentication (Sign up / Login)</li>
        <li>⭐ Star rating and user photo support</li>
        <li>⚡ Fast Performance: Optimized React.js frontend with efficient rendering techniques for a smooth and responsive user experience.</li>
      </ul><br/>
      
      Technical Highlights:
      <ul>
        <li>Implemented complex slider synchronization logic using Swiper.js</li>
        <li>Developed reusable UI components with shadcn for design consistency</li>
        <li>Configured efficient data fetching strategies in React.js with Axios</li>
      </ul>
      `,
        role: `
      Web Developer <br/>
      Owned the entire development lifecycle:
      <ul>
        <li>✅ Backend: Configured REST API with Node.js/Express and MongoDB for services and reviews</li>
        <li>🎨 Frontend: Built responsive UI using React, Tailwind CSS, and Framer Motion</li>
        <li>🔄 State Management: Implemented dynamic data fetching, adding, editing, and deleting reviews</li>
        <li>🖥️ Authentication: Added user login and authorization for managing services and reviews</li>
        <li>🚀 Deployment: Deployed the app on Netlify and Vercel with optimized performance</li>
        <li>🧩 Interactive Features: Integrated animated carousel for displaying reviews dynamically</li>

      </ul>
      `,
        techStack: [
            'React.js',
            'Node.js',
            'Express.js',
            'MongoDB',
            'Tailwind CSS',
            'ReactBits',
            'Swiper.js',
            'React Hook Form',
            'Vercel',
        ],
        thumbnail: '/projects/thumbnail/reviewTrackerThambnail.jpg',
        longThumbnail: '/projects/long/reviewTrackerThambnail.jpg',
        images: [
            '/projects/images/reviewTrackerImage-1.jpg',
            '/projects/images/reviewTrackerImage-2.jpg',
            '/projects/images/reviewTrackerImage-3.png',
            '/projects/images/reviewTrackerImage-4.png',
        ],
    },
    {
        title: 'Blood Donation System',
        slug: 'blood-donation',
        liveUrl: 'https://blood-buddies.netlify.app/',
        year: 2025,
        description: `
      BloodBuddies is a web application that streamlines blood donation requests and donor matching. Recipients can create requests with required blood group and location details, and donors can view and respond to requests. The app includes user authentication, a dashboard for managing requests, and dynamic district/upazila selection for location-specific matching. <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li>🔍 Browse available blood donation requests with filter & search</li>
        <li>🗂️ Manage your own donation requests</li>
        <li>📝 Submit and track your donations (protected)</li>
        <li>🔐 JWT Authentication (Sign up / Login)</li>
        <li>⭐ Donor and recipient profiles with contact info</li>
        <li>🤝 Connects donors to recipients for seamless communication</li>
        <li>⚡ Fast Performance: Optimized React.js frontend with smooth and responsive interactions</li>

      </ul><br/>
      
      Technical Highlights:
      <ul>
        <li>Built role-based dashboard for donors, recipients, and admins</li>
        <li>Tracked donor donation status and request fulfillment in real-time</li>
        <li>Implemented efficient data fetching and caching using React.js with Axios</li>
        <li>Implemented filtering and search functionality for donation requests</li>

      </ul>
      `,
        role: `
      Web Developer <br/>
      Owned the entire development lifecycle:
      <ul>
        <li>✅ Backend: Built REST API with Node.js/Express and MongoDB/PostgreSQL for blood requests</li>
        <li>🎨 Frontend: Responsive UI with React, Tailwind CSS, and DaisyUI</li>
        <li>🔄 State Management: Dynamic fetching, adding, updating, and deleting requests</li>
        <li>🖥️ Auth: User login and role-based access for donors and admins</li>
        <li>🧭 Location Features: Dynamic district/upazila selection for targeted requests</li>
        <li>🚀 Deployment: Hosted on Vercel/Netlify with optimized performance</li>
        <li>🧩 Interactive Features: Status indicators, conditional buttons, and user-friendly forms</li>
      </ul>
      `,
        techStack: [
            'React.js',
            'Stripe Payment',
            'Node.js',
            'MongoDB',
            'Express.js',
            'Tailwind CSS',
            'Framer motion',
            'React Hook Form',
            'Vercel',
        ],
        thumbnail: '/projects/thumbnail/bloodBodies-thambnail.png',
        longThumbnail: '/projects/long/bloodBodies-thambnail.png',
        images: [
            '/projects/images/bloodBoddiesImage-1.png',
            '/projects/images/bloodBuddiesImage-2.png',
            '/projects/images/bloodBuddiesImage-3.png',
            '/projects/images/bloodBuddiesImage-4.png',
        ],
    },
    {
        title: 'Take-Task Marketplace',
        slug: 'take-task',
        liveUrl: 'https://take-task-marketplace-77c6d4.netlify.app/',
        year: 2025,
        description: `
      TakeTask Marketplace allows clients to create freelance task listings and freelancers to apply and manage their ongoing tasks. It features a secure authentication system, dynamic filtering for finding tasks, and a responsive interface for smooth interactions across devices. <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li>👤 User Authentication (Email/Password, Google, GitHub)</li>
        <li>📝 Post Tasks with Categories, Budget, and Deadlines</li>
        <li>🔍 Browse and Filter Tasks</li>
        <li>🛠 Bid on Tasks</li>
        <li>💼 View My Posted Tasks</li>
        <li>💬 Task Details View</li>
        <li>📦 Membership Plans UI</li>
        <li>🎨 Responsive, modern design using TailwindCSS and DaisyUI</li>
        <li>⚡ Fast Performance: Optimized React.js frontend with responsive interactions</li>
      </ul><br/>
      
      Technical Highlights:
      <ul>
        <li>Enabled posting tasks with categories, budget, and deadlines</li>
        <li>Tracked task status, bids, and completion updates in real-time</li>
        <li>Implemented efficient data fetching and caching using React.js with Axios</li>
        <li>Added filtering and search functionality for tasks</li>
      </ul>
      `,
        role: `
      Web Developer <br/>
      Owned the entire development lifecycle:
      <ul>
        <li>✅ Backend: Built REST API with Node.js/Express and MongoDB/PostgreSQL for Tasks, Users, and Users Bids</li>
        <li>🎨 Frontend: Responsive UI with React, Tailwind CSS, and DaisyUI</li>
        <li>🔄 State Management: Dynamic fetching, adding, updating, and deleting requests</li>
        <li>🖥️ Auth: User login and role-based access for donors and admins</li>
        <li>🚀 Deployment: Hosted on Vercel/Netlify with optimized performance</li>
        <li>🧩 Interactive Features: Status indicators, conditional buttons, and user-friendly forms</li>
      </ul>
      `,
        techStack: [
            'React.js',
            'Node.js',
            'Express.js',
            'MongoDB',
            'Tailwind CSS',
            'Daisy UI',
            'Framer motion',
            'Vercel',
        ],
        thumbnail: '/projects/thumbnail/TakeTaskThambnail.jpg',
        longThumbnail: '/projects/long/TakeTaskThambnail.jpg',
        images: [
            '/projects/images/TakeTaskImage-1.jpg',
            '/projects/images/TakeTaskImage-2.jpg',
            '/projects/images/TakeTaskImage-3.jpg',
        ],
    },
    {
        title: 'JOB Hunt',
        slug: 'job-hunt',
        liveUrl: 'https://job-hunt-8ca298.netlify.app/',
        year: 2025,
        description: `
      Job Hunt is a web application designed to connect job seekers with employers by providing up-to-date job listings, detailed job descriptions, and an easy application process. Authenticated users can manage their profiles, track applications, and save favorite jobs. <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li>🔍 Browse available job listings with filter & search options</li>
        <li>🗂️ Manage your own job applications and saved jobs</li>
        <li>📝 Submit applications and track their status (protected)</li>
        <li>🔐 JWT Authentication (Sign up / Login)</li>
        <li>⭐ Employer and candidate profiles with contact info</li>
        <li>🤝 Connects candidates to employers for smooth communication</li>
        <li>⚡ Fast Performance: Optimized React.js frontend with responsive interactions</li>
      </ul><br/>
      
      Technical Highlights:
      <ul>
        <li>Tracked job application status and employer responses in real-time</li>
        <li>Implemented efficient data fetching with vanila js</li>
        <li>Implemented filtering and search functionality for job listings with vanila js</li>        

      </ul>
      `,
        role: `
      Web Developer <br/>
      Owned the entire development lifecycle:
      <ul>
        <li>🎨 Frontend: Designed responsive UI with React, Tailwind CSS, and DaisyUI</li>
        <li>🔄 State Management: Enabled dynamic fetching, posting, updating, and deleting job data</li>
        <li>🖥️ Auth: Implemented JWT-based login and role-based access for candidates and employers</li>
        <li>🚀 Deployment: Deployed on Vercel/Netlify with optimized performance</li>
        <li>🧩 Interactive Features: Application tracking, saved jobs, and intuitive dashboards</li>

      </ul>
      `,
        techStack: [
            'React.js',
            'Tailwind CSS',
            'Daisy UI',
            'Framer motion',
            'Netlify',
        ],
        thumbnail: '/projects/thumbnail/JobHuntThumbnail.jpg',
        longThumbnail: '/projects/long/JobHuntThumbnail.jpg',
        images: [
            '/projects/images/JobHuntImage-1.jpg',
            '/projects/images/JobHuntImage-2.jpg',
            '/projects/images/JobHuntImage-3.jpg',
        ],
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'QA And Senior Executive',
        company: 'Acme AI Ltd',
        duration: 'Dec 2023 - Present',
    },
    {
        title: 'Web Developer (Intern)',
        company: 'Global It & Language Instuate',
        duration: 'Aug 2020 - Dec 2021',
    },
];

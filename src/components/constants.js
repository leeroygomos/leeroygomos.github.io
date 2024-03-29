export const projectItems = [
    {
        title: "Online Code Editor", 
        github: "https://github.com/leeroygomos/codeeditor", 
        link: "https://online-code-editor.herokuapp.com/",
        description: "A full stack web application with a React frontend and Nodejs/Expressjs backend. Docker is used to containerize all dependencies in order to execute different languages on the server. Currently supports Javascript, Python3, C++, C#, C, Java, Go, and Rust.", 
        img: "/images/projects/codeeditor.png",
        tags: ["React", "Nodejs", "Expressjs", "Docker", "Heroku"],
        year: 2023,
        showcase: true
    },
    {
        title: "FitnessBuddy", 
        github: "https://github.com/leeroygomos/fitnessbuddy", 
        link: "https://fitnessbuddy.herokuapp.com/",
        description: "A fitness web application built with Node.js, Express.js, PostgreSQL and Heroku. Key features include finding nearby gyms via Google Maps API, nutrition facts lookup via Nutritionix API, exercises search via wger API, and a realtime chatroom via Socket.IO.", 
        demoUser: 'Demo username: demo-user',
        demoPass: 'Demo password: demo123!',
        img: "/images/projects/fitnessbuddy.png",
        tags: ["Nodejs", "Expressjs", "PostgreSQL", "Heroku", "Rest APIs", "Socket.IO"],
        year: 2019,
        showcase: true
    },
    {
        title: "To Do App", 
        github: "https://github.com/leeroygomos/todo-app", 
        description: "A simple to do mobile app built using React Native. Features include local data storage via AsyncStorage, drag and drop functionality for list organization, confetti animation when all tasks are completed, and random to do tasks via BoredAPI.", 
        img: "/images/projects/todoapp.png",
        tags: ["React Native", "Mobile", "Rest APIs"],
        year: 2023,
        showcase: false
    },
    {
        title: "Voluntutor", 
        github: "https://github.com/leeroygomos/voluntutor", 
        description: "A tutoring web application which used AWS Elastic Beanstalk for deployment and was developed using Python with Django as the web framework. It also used Amazon RDS for PostgreSQL as the database engine and Amazon S3 cloud storage for static files.", 
        img: "/images/projects/voluntutor.png",
        tags: ["Python", "Django", "PostgreSQL", "AWS Elastic Beanstalk"],
        year: 2020,
        showcase: true
    },
    {
        title: "Calculations App", 
        github: "https://github.com/leeroygomos/calcapp", 
        description: "A web application that calculates fibonacci, factorial, exponents, quadratic formula, and pythagorean theorem. It also does numeric conversions between decimal, hexadecimal, and binary. Developed using Django, C/C++, and Go.", 
        img: "/images/projects/calc.png",
        tags: ["C", "C++", "Go", "Python", "Django"],
        year: 2020,
        showcase: true
    },
    {
        title: "crappy bird",
        link: "https://play.unity.com/mg/other/build-xgn",
        altText: "Play now!",
        description: "A flappy bird clone creating using Unity!",
        img: "/images/projects/crappybird.png",
        tags: ["Unity", "C#"],
        year: 2023,
        showcase: false
    },
    {
        title: "Blabber (WIP)", 
        github: "https://github.com/leeroygomos/blabber",  
        description: "A full-stack desktop chat application built with React, Express.js, and Electron. Utilizes MongoDB for the database and Socket.IO for real-time communication.",  
        img: "/images/projects/blabber.png",
        tags: ["React", "Expressjs", "Javascript", "Electron", 'MongoDB', 'Socket.IO'],
        year: 2023,
        showcase: true
    },
    {
        title: "Recomendation System (WIP)", 
        github: "https://github.com/leeroygomos/waifu_recommender",  
        description: "A full stack web application which recommends anime based on the characters that you like. Uses techniques such as Term Frequency, Inverse Document Frequency, and Matrix Factorization to generate results.",  
        img: "/images/projects/placeholder.png",
        tags: ["Flask", "Python", "React", "PostgreSQL", 'Rest APIs'],
        year: 2023,
        showcase: true
    },
    {
        title: "Satisfiability Problem Solver", 
        github: "https://github.com/leeroygomos", 
        description: "A Python program that implements the DPLL algorithm to check the satisfiability of an expression in Conjunctive Normal Form (CNF). It may also print a list of true literals if the expression is satisfiable.", 
        img: "/images/projects/satsolver.png",
        tags: ["Python", "AI"],
        year: 2019,
        showcase: false
    },
    {
        title: "Basic Linux Shell", 
        github: "https://github.com/leeroygomos", 
        description: "An implementation of the Linux shell using C with additional commands: !n, type, and history. The commands pwd, exit, and cd were also reimplemented.", 
        img: "/images/projects/shell.png",
        tags: ["C", "C++", "Linux"],
        year: 2018,
        showcase: false
    },
    {
        title: "Pac-Man AI Search", 
        github: "https://github.com/leeroygomos", 
        description: "Implementations of the depth-first, breadth-first, and A* search algorithms using the Pac-Man game to visualize the results. Python is used to write the program, and the assignment was originally adapted from UC Berkeley's Pacman AI projects.", 
        img: "/images/projects/pacman.png",
        tags: ["Python", "AI"],
        year: 2019,
        showcase: false
    },
];

export const languages = ["JavaScript", "Python", "Apex", "HTML", "CSS", "SQL", "C",];
export const frameworks = ["Node.js", "React", "Express.js", "Flask", "Django"];
export const technologies = ["Salesforce", "Git", "Heroku", "PostgreSQL",];

export const certifications = [
    {
        name: 'JavaScript Developer I',
        date: 'January 10, 2023',
        img: '/images/certifications/javascript.png'
    },
    {
        name: 'Service Cloud Consultant',
        date: 'October 25, 2022',
        img: '/images/certifications/servicecloud.png'
    },
    {
        name: 'Platform Developer I',
        date: 'February 8, 2022',
        img: '/images/certifications/platformdev1.png'
    },
    {
        name: 'Administrator',
        date: 'April 30, 2021',
        img: '/images/certifications/admin.png'
    },
];
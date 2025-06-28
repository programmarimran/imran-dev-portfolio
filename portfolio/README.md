imran-dev-portfolio/
│
├── public/
│ └── index.html
│
├── src/
│ ├── assets/ # ছবি, ফন্ট, লোগো ইত্যাদি
│ ├── components/ # পুনঃব্যবহারযোগ্য UI components
│ │ ├── common/ # যেমন: Button, Input, Loader, Modal
│ │ ├── layout/ # Navbar, Footer, Sidebar ইত্যাদি
│ │ ├── sections/ # HomePage এর বড় বড় অংশ (About, Skills, Projects)
│ │ └── ContactForm/ # Contact form এর কম্পোনেন্ট
│ │
│ ├── contexts/ # React Context API ফাইল (theme, user, etc.)
│ │ └── ThemeContext.js
│ │
│ ├── hooks/ # Custom React hooks (useFetch, useThemeToggle)
│ │
│ ├── pages/ # প্রতিটি route/page কম্পোনেন্ট
│ │ ├── Home.js
│ │ ├── About.js
│ │ ├── Projects.js
│ │ ├── Contact.js
│ │ └── NotFound.js
│ │
│ ├── services/ # API calls, ইমেইল সার্ভিস ইত্যাদি (ex: contactService.js)
│ │
│ ├── styles/ # Tailwind overrides বা custom CSS (optional)
│ │
│ ├── utils/ # ছোট ছোট utility ফাংশন (ex: formatDate.js)
│ │
│ ├── App.js # মূল App component (Router ও Provider wrap করবে)
│ ├── index.js # entry point
│ └── tailwind.config.js # Tailwind config file
│
├── package.json
└── README.md

// // App.js
// import React from 'react';
// import Topic from './components/Topic';
// import './App.css';

// function App() {
//   const topics = [
//     {
//       name: 'Linux Basics',
//       description: 'Explore the fundamentals of Linux, including commands, file system, and basic administration.',
//       lessons: ['Introduction to Linux', 'File System Navigation', 'File and Directory Manipulation', 'User Permissions', 'Package Management', 'Basic Shell Scripting'],
//     },
//     {
//       name: 'Linux Networking',
//       description: 'Learn about networking in a Linux environment, covering IP addressing, routing, and network services.',
//       lessons: ['Understanding IP Addresses', 'Network Configuration', 'Firewall Setup', 'DNS Configuration', 'SSH and Remote Access', 'Web Servers'],
//     },
//     {
//       name: 'Linux System Administration',
//       description: 'Master the skills required for Linux system administration and maintenance.',
//       lessons: ['User Management', 'System Monitoring', 'Backup and Restore', 'Kernel Management', 'Security Best Practices', 'Troubleshooting'],
//     },
//     // Add more Linux-related topics as needed
//   ];

//   return (
//     <div className="container linux-theme">
//       <h1>Linux Learning Platform</h1>
//       <div className="topics-container">
//         {topics.map((topic, index) => (
//           <Topic
//             key={index}
//             topicName={topic.name}
//             description={topic.description}
//             lessons={topic.lessons}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }
// export default App;


//----------------------------------------------------------------

// src/App.js
import React, { useState } from 'react';
import Topic from './components/Topic';
import ExternalWebsite from './components/ExternalWebsite';
import './App.css';

function App() {
  const [showExternalWebsite, setShowExternalWebsite] = useState(false);

  const topics = [
    {
      name: 'Linux Basics',
      description: 'Explore the fundamentals of Linux, including commands, file system, and basic administration.',
      lessons: ['Introduction to Linux', 'File System Navigation', 'File and Directory Manipulation', 'User Permissions', 'Package Management', 'Basic Shell Scripting'],
    },
    {
      name: 'Linux Networking',
      description: 'Learn about networking in a Linux environment, covering IP addressing, routing, and network services.',
      lessons: ['Understanding IP Addresses', 'Network Configuration', 'Firewall Setup', 'DNS Configuration', 'SSH and Remote Access', 'Web Servers'],
    },
    {
      name: 'Linux System Administration',
      description: 'Master the skills required for Linux system administration and maintenance.',
      lessons: ['User Management', 'System Monitoring', 'Backup and Restore', 'Kernel Management', 'Security Best Practices', 'Troubleshooting'],
    },
    // Add more Linux-related topics as needed
  ];


  return (
    <div className="container linux-theme">
      <h1>Linux Learning Platform</h1>
      <div className="topics-container">
        {showExternalWebsite ? (
          <ExternalWebsite />
        ) : (
          topics.map((topic, index) => (
            <Topic
              key={index}
              topicName={topic.name}
              description={topic.description}
              lessons={topic.lessons}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default App;

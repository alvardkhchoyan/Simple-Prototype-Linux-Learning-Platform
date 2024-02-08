import React from 'react';

const Lesson = ({ lessonName }) => {
  const handleClick = () => {
    // Open a new window or tab with a placeholder message
    const newWindow = window.open('about:blank', '_blank');

    if (newWindow) {
      // Apply styles directly in the new window
      newWindow.document.head.innerHTML += `
        <style>
          body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 0;
            display: flex;
            height: 100vh;
            background-color: #f8f8f8;
          }

          .sub-topics-section {
            flex: 1;
            padding: 20px;
            border-right: 1px solid #ddd;
          }

          .sub-topics-section p {
            margin: 0;
            padding: 10px;
            border-bottom: 1px solid #ddd;
          }

          .return-button {
            padding: 20px;
            text-align: center;
            cursor: pointer;
            background-color: #61dafb;
            color: #fff;
          }

          .return-button:hover {
            background-color: #2a8ed4;
          }

          .lesson-content {
            flex: 3;
            padding: 20px;
          }

          h1 {
            color: #1a1a1a;
          }

          p {
            margin: 10px 0;
          }
        </style>
      `;

      // Create HTML elements for layout
      const body = newWindow.document.body;

      // Left side: Sub-topics section
      const subTopicsSection = newWindow.document.createElement('div');
      subTopicsSection.className = 'sub-topics-section';
      for (let i = 1; i <= 7; i++) {
        const subTopic = newWindow.document.createElement('p');
        subTopic.textContent = `Sub-Topic ${i}`;
        subTopicsSection.appendChild(subTopic);
      }
      body.appendChild(subTopicsSection);

      // Upper right part: Return button
      const returnButton = newWindow.document.createElement('div');
      returnButton.className = 'return-button';
      returnButton.textContent = 'Return to Linux Learning Platform';
      returnButton.addEventListener('click', () => {
        alert('Returning to Linux Learning Platform (simulated)');
      });
      body.appendChild(returnButton);

      // Content of the lesson
      const lessonContent = newWindow.document.createElement('div');
      lessonContent.className = 'lesson-content';

      const lessonHeading = newWindow.document.createElement('h1');
      lessonHeading.textContent = lessonName;
      lessonContent.appendChild(lessonHeading);

      const lessonText = newWindow.document.createElement('p');
      lessonText.textContent = `This is the content of the lesson: ${lessonName}`;
      lessonContent.appendChild(lessonText);

      body.appendChild(lessonContent);
    }
  };

  return (
    <div className="lesson" onClick={handleClick}>
      <p>{lessonName}</p>
    </div>
  );
};

export default Lesson;

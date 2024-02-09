import React from 'react';

const Lesson = ({ lessonName }) => {
  const handleClick = () => {
    // Open a new window or tab with a placeholder message
   const newWindow = window.open('about:blank', '_blank');
    if (newWindow) {
        newWindow.resizeTo(800, 600);

      // Apply styles directly in the new window
      newWindow.document.head.innerHTML += `
        <style>
          body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 0;
            display: flex;
            height: 100vh;
            background-color: #282c34;
            color: #61dafb;
          }

          .lesson-content {
            flex: 3;
            padding: 20px;
          }

          h1 {
            color: #61dafb;
          }

          .topic-section {
            display: flex;
            flex-direction: column;
            margin-bottom: 20px;
          }

          .sub-topics-section {
            flex: 1;
            padding: 20px;
            border-right: 1px solid #4d5259;
            overflow-y: auto;
          }

          .sub-topic-title {
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 10px;
            color: #61dafb;
          }

          .sub-topics-section p {
            margin: 0;
            padding: 10px;
            border-bottom: 1px solid #52585f;
            cursor: pointer;
            color: #61dafb;
          }

          .sub-topics-section p:hover {
            background-color: #2a2e33;
          }

          .questions-section {
            padding: 20px;
            border-top: 1px solid #4d5259;
            cursor: pointer;
            color: #61dafb;
          }

          .questions-section:hover {
            background-color: #2a2e33;
          }

          .return-button {
            position: absolute;
            top: 10px;
            right: 10px;
            padding: 10px;
            cursor: pointer;
            background-color: #61dafb;
            color: #fff;
          }

          .return-button:hover {
            background-color: #2a8ed4;
          }
        </style>
      `;

      // Create HTML elements for layout
      const body = newWindow.document.body;

      // Topic section: Lesson title, sub-topics, and questions
      const topicSection = newWindow.document.createElement('div');
      topicSection.className = 'topic-section';

      // Left side: Sub-topics section
      const subTopicsSection = newWindow.document.createElement('div');
      subTopicsSection.className = 'sub-topics-section';

      const subTopicTitle = newWindow.document.createElement('div');
      subTopicTitle.className = 'sub-topic-title';
      subTopicTitle.textContent = `Sub-Topics for ${lessonName}`;
      subTopicsSection.appendChild(subTopicTitle);

      for (let i = 1; i <= 7; i++) {
        const subTopic = newWindow.document.createElement('p');
        subTopic.textContent = `Sub-Topic ${i}`;
        subTopic.addEventListener('click', () => {
          // Simulate loading detailed material for the clicked sub-topic
          const lessonContent = newWindow.document.querySelector('.lesson-content');
          lessonContent.innerHTML = `
            <h1>Detailed Material for Sub-Topic ${i}</h1>
            <p>This is the detailed material for Sub-Topic ${i}. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          `;
        });
        subTopicsSection.appendChild(subTopic);
      }

    // Right side: Questions section
    const questionsSection = newWindow.document.createElement('div');
    questionsSection.className = 'questions-section';
    questionsSection.textContent = 'Have a question? Click here to ask.';

    questionsSection.addEventListener('click', () => {
    // Create an input field for the question
    const questionInput = newWindow.document.createElement('input');
    questionInput.type = 'text';
    questionInput.placeholder = 'Type your question...';

    // Create a button to submit the question
    const submitButton = newWindow.document.createElement('button');
    submitButton.textContent = 'Submit Question';

    // Handle the click event for submitting the question
    submitButton.addEventListener('click', () => {
        const userQuestion = questionInput.value;
        if (userQuestion) {
        alert(`Question submitted: ${userQuestion}`);
        // Clear the input field after submitting the question
        questionInput.value = '';
        }
    });

    // Clear the existing content and append the input field and submit button
    const lessonContent = newWindow.document.querySelector('.lesson-content');
    lessonContent.innerHTML = '';
    lessonContent.appendChild(questionInput);
    lessonContent.appendChild(submitButton);
    });

    topicSection.appendChild(subTopicsSection);
    topicSection.appendChild(questionsSection);

      body.appendChild(topicSection);

      // Upper right part: Return button
      const returnButton = newWindow.document.createElement('div');
      returnButton.className = 'return-button';
      returnButton.textContent = 'Return to Linux Learning Platform';
      returnButton.addEventListener('click', () => {
        newWindow.close(); // Close the new window
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


import React from 'react';
import Lesson from './Lesson';

const Topic = ({ topicName, lessons, description }) => {
  return (
    <div className="topic">
      <h2>{topicName}</h2>
      <p>{description}</p>
      <div className="lessons">
        {lessons.map((lesson, index) => (
          <Lesson key={index} lessonName={lesson} lessonLink={`https://example.com/${lesson}`} />
        ))}
      </div>
    </div>
  );
};

export default Topic;



import React from 'react';
import FeedbackItem from './FeedbackItem';

function FeedbackList({ feedback, onDelete, onVote }) {
  if (feedback.length === 0) {
    return (
      <p className="text-center text-gray-600 mt-8">
        No feedback submitted yet.
      </p>
    );
  }

  return (
    <div className="max-w-5xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
      {feedback.map((item) => (
        <FeedbackItem
          key={item.id}
          item={item}
          onDelete={onDelete}
          onVote={onVote}
        />
      ))}
    </div>
  );
}

export default FeedbackList;

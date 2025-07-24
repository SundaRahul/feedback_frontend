
import React from 'react';

function FeedbackItem({ item, onDelete, onVote }) {
  return (
    <div className="bg-gray-100 shadow-lg rounded-2xl p-6 min-h-[180px] flex flex-col justify-between transition-all duration-300 hover:shadow-xl">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
        <button
          onClick={() => onDelete(item.id)}
          className="text-red-500 hover:text-red-700 text-lg"
        >
          🗑️
        </button>
      </div>

      {/* Message */}
      <p className="text-gray-700 text-base mb-4 break-words">{item.message}</p>

      {/* Vote Controls */}
      <div className="flex justify-between items-center mt-auto">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => onVote(item.id, 'up')}
            className="text-green-500 hover:text-green-700 text-xl"
          >
            ⬆️
          </button>
          <span className="font-semibold text-gray-800">{item.votes}</span>
          <button
            onClick={() => onVote(item.id, 'down')}
            className="text-yellow-500 hover:text-yellow-700 text-xl"
          >
            ⬇️
          </button>
        </div>
      </div>
    </div>
  );
}

export default FeedbackItem;

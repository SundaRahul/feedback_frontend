
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import axios from 'axios';


const BASE_URL = import.meta.env.VITE_API_URL || 'https://feedback-backend-avga.onrender.com/feedback';

function App() {
  const [feedback, setFeedback] = useState([]);

  const addFeedback = async (formData) => {
    try {
      const res = await axios.post(BASE_URL, formData);
      setFeedback((prev) => [...prev, res.data]);
    } catch (error) {
      console.error('Error adding feedback:', error);
    }
  };

  
  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const res = await axios.get(BASE_URL);
        setFeedback(res.data);
      } catch (error) {
        console.error('Error fetching feedback:', error);
      }
    };

    fetchFeedback();
  }, []);

  
  const deleteFeedback = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/${id}`);
      setFeedback((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.error('Error deleting feedback:', error);
    }
  };


  const handleVote = async (id, direction) => {
    try {
      const res = await axios.put(`${BASE_URL}/${id}/vote`, { direction });
      setFeedback((prev) =>
        prev.map((item) => (item.id === id ? res.data : item))
      );
    } catch (error) {
      console.error('Error voting on feedback:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-2xl mx-auto p-4">
        <FeedbackForm onAdd={addFeedback} />
        <FeedbackList
          feedback={feedback}
          onDelete={deleteFeedback}
          onVote={handleVote}
        />
      </div>
    </div>
  );
}

export default App;

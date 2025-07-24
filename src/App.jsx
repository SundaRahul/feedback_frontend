import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import FeedbackForm from './components/FeedbackForm'
import axios from 'axios';
import FeedbackList from './components/FeedbackList';


const BASE_URL = import.meta.env.REACT_APP_API_BASE_URL || 'http://localhost:5000/feedback';

function App() {

  const [feedback, setFeedback] = useState([]);

  const addFeedback = async (formData) => {
    await axios.post(`${BASE_URL}`, formData);
  }

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const res = await axios.get(`${BASE_URL}`);
        setFeedback(res.data);
      } catch (error) {
        console.error("Error Fetching data", error);
      }
    };
    fetchFeedback();
  }, [addFeedback])


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
      console.log(id)
      console.log(direction)
      const res = await axios.put(`${BASE_URL}/${id}/vote`, { direction });
      setFeedback((prev) =>
        prev.map((item) => (item.id === id ? res.data : item))
      );

    } catch (error) {
      console.error('Error voting on feedback:', error);
    }
  };
  return (
    <div>
      <Header></Header>
      <FeedbackForm onAdd={addFeedback}></FeedbackForm>
      <FeedbackList feedback={feedback} onDelete={deleteFeedback}
        onVote={handleVote} />
    </div>
  )
}

export default App
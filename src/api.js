import axios from 'axios';

const API_BASE_URL = 'https://demo-supportsense.maverickignite.com/api'; // Adjust if your backend is different

export const askQuestion = async (question) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/ask`, {
      question: question,
      session_id: '12345',
    });

    return response.data;
  } catch (error) {
    console.error('API error:', error.response?.data || error.message);
    throw error;
  }
};

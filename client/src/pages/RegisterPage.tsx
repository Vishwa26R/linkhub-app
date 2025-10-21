import React, { useState } from 'react'; // 👈 Import useState
import axios from 'axios'; // 👈 Import axios
// We'll use this hook later to redirect the user after they register
// import { useNavigate } from 'react-router-dom'; 

const RegisterPage = () => {
  // 1. STATE: Create state variables to store form input
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(''); // To show success or error messages

  // const navigate = useNavigate(); // Initialize navigate hook

  // 2. HANDLER: This function runs when the form is submitted
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the default form reload
    setMessage(''); // Clear any previous messages

    try {
      // 3. API CALL: Send a POST request to our backend
      const { data } = await axios.post('/api/users/register', {
        username,
        email,
        password,
      });

      // Handle success
      setMessage('Registration successful! You can now log in.');
      console.log('Registration successful:', data);
      
      // Clear the form
      setUsername('');
      setEmail('');
      setPassword('');

      // Optional: Redirect to login page after 2 seconds
      // setTimeout(() => {
      //   navigate('/login');
      // }, 2000);

    } catch (error) {
      // 4. ERROR HANDLING: Show an error message if something goes wrong
      console.error('Registration error:', error);
      if (axios.isAxiosError(error) && error.response) {
        // Get the error message from the backend's JSON response
        setMessage(error.response.data.message || 'Registration failed');
      } else {
        setMessage('Registration failed. Please try again.');
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-900">
          Create your Account
        </h2>

        {/* Display success/error messages here */}
        {message && (
          <div 
            className={`p-3 text-center rounded-md ${
              message.includes('successful') 
                ? 'bg-green-100 text-green-800' 
                : 'bg-red-100 text-red-800'
            }`}
          >
            {message}
          </div>
        )}

        {/* 5. CONNECT STATE: Link form inputs to state */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="username"
              className="text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              required
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="yourusername"
              value={username} // 👈 Link to state
              onChange={(e) => setUsername(e.target.value)} // 👈 Update state on change
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <input
              id="email"
              type="email"
              required
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="you@example.com"
              value={email} // 👈 Link to state
              onChange={(e) => setEmail(e.target.value)} // 👈 Update state on change
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="********"
              value={password} // 👈 Link to state
              onChange={(e) => setPassword(e.target.value)} // 👈 Update state on change
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
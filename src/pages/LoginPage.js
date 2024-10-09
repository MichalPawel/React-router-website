import React, { useState } from 'react';
import axios from 'axios';

const KTrainingSections = () => {
  const [data, setData] = useState(null);  // To store API response data
  const [loading, setLoading] = useState(false);  // To manage loading state
  const [error, setError] = useState(null);  // To manage error state

  // Function to handle API call
  const fetchSections = async () => {
    setLoading(true);
    setError(null);  // Clear previous error
    try {
      const response = await axios.get('http://localhost:9050/ktraining/sections');
      setData(response.data);  // Update state with API response
    } catch (err) {
      setError('Error fetching sections');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Button to trigger the API call */}
      <button onClick={fetchSections} disabled={loading}>
        {loading ? 'Loading...' : 'Fetch Sections'}
      </button>

      {/* Error Handling */}
      {error && <div style={{ color: 'red' }}>{error}</div>}

      {/* Display API response inside a div */}
      <div>
        {data ? (
          <pre>{JSON.stringify(data, null, 2)}</pre> 
        ) : (
          <p>No data available yet.</p>
        )}
      </div>
    </div>

    
  );
};

export default KTrainingSections;
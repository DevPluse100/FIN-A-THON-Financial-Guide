import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const VideoPage = () => {
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  const handleJoinRoom = useCallback(() => {
    navigate(`/home/mentor/room/${value}`); // Correct path
  }, [navigate, value]);

  // Inline styles
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width:"100vw",
    backgroundColor: '#f5f5f5',
    fontFamily: 'Arial, sans-serif',
  };

  const inputStyle = {
    width: '300px',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
  };

  const buttonStyle = {
    padding: '10px 20px',
    borderRadius: '5px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    width:'40%',
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3',
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ marginBottom: '20px' }}>Join a Room</h1>
      <input
        type="text"
        placeholder="Enter Room Code"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={inputStyle}
      />
      <button
        onClick={handleJoinRoom}
        style={buttonStyle}
        onMouseEnter={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
        onMouseLeave={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
      >
        Join
      </button>
    </div>
  );
};

export default VideoPage;

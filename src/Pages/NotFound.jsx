import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      width: '100vw',
      backgroundColor: '#ffffff',
      color: '#202124',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'arial, sans-serif',
      padding: '20px',
      boxSizing: 'border-box'
    }}>
      <div style={{ maxWidth: '600px', width: '100%' }}>
        <h1 style={{ fontSize: '32px', color: '#202124', fontWeight: 'bold', marginBottom: '10px' }}>
          <span style={{ color: '#4285F4' }}>G</span>
          <span style={{ color: '#EA4335' }}>o</span>
          <span style={{ color: '#FBBC05' }}>o</span>
          <span style={{ color: '#4285F4' }}>g</span>
          <span style={{ color: '#34A853' }}>l</span>
          <span style={{ color: '#EA4335' }}>e</span>
        </h1>
        <p style={{ fontSize: '15px', color: '#202124', marginBottom: '15px' }}>
          <b>404.</b> That’s an error.
        </p>
        <p style={{ fontSize: '14px', color: '#5f6368', lineHeight: '1.6', marginBottom: '25px' }}>
          The requested URL was not found on this server. That’s all we know.
        </p>
       
      </div>
    </div>
  );
}

export default NotFound;
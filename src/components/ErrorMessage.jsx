const ErrorMessage = ({ message }) => {
  return (
    <div className="error-container">
      <div className="error-icon">⚠️</div>
      <div className="error-content">
        <h3 className="error-title">Oops! Something went wrong</h3>
        <p className="error-text">{message || 'An unexpected error occurred. Please try again.'}</p>
      </div>
      <button className="error-btn" onClick={() => window.location.reload()}>
        <span>🔄</span> Try Again
      </button>
    </div>
  );
};

export default ErrorMessage;

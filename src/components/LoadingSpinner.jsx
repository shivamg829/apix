const LoadingSpinner = () => {
  return (
    <div className="loading-container">
      <div className="loading-wrapper">
        <div className="spinner-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <span className="loading-text">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;

const ErrorModal = ({errorText}) => {
  return (
    <div className="error">
      <h3>Error:</h3>
      <p>{errorText}</p>
    </div>
  );
};

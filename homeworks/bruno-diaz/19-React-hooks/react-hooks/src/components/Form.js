export function Form(props) {
  const { task, handleSubmit, handleChange } = props;

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input__form"
        onChange={handleChange}
        value={task}
      />
      <button className="input__button" onClick={handleSubmit}>
        Add
      </button>
    </form>
  );
}

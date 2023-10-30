export default function Form(props) {
  const { task, handleSubmit, handleChange } = props;

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input__form"
        onChange={handleChange}
        defaultValue={task}
        placeholder="Add a new task"
      />
      <button className="input__button" type="submit">
        Add
      </button>
    </form>
  );
}


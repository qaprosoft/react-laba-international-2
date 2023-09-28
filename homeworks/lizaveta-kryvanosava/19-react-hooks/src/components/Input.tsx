import styles from '@/components/input.module.scss';

export default function Input({
  addToDo,
}: {
  addToDo: (toDo: string) => void;
}) {
  const submitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const target = event.target as typeof event.target & {
      input: { value: string };
    };

    addToDo(target.input.value);
    target.input.value = '';
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <input
        className={styles.form__input}
        type="text"
        name="input"
        placeholder="Create Todo-Task"
      />
      <button className={styles.form__button} type="submit">
        Add
      </button>
    </form>
  );
}

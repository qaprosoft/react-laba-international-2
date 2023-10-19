import Input from '../Input/Input';
import IconButton from '../Buttons/IconButton/IconButton';
import styles from './FormEdit.module.css';

const FormEdit = ({value, handleEditingText, handleEditingTodo }) => {

  return (
    <form onSubmit={handleEditingTodo} className={styles.form}>
      <Input
        value={value}
        onInputChangeHandler={handleEditingText}
        classtype="todo__input--edit"
      />
      <IconButton type="submit" classType="iconBtn--approveEdit" />
    </form>
  );
}; 

export default FormEdit;



// const FormEdit = forwardRef(({ value, handleEditingText, handleEditingTodo}, ref) => {

//   return (
//     <form onSubmit={handleEditingTodo} className={styles.form}>
//     {/* <input value={value} ref={ref}   classtype="todo__input--edit"></input> */}
//       <Input
//         value={value}
//         onInputChangeHandler={handleEditingText}
//         classtype="todo__input--edit"
//         ref={ref}
//         inputRef={ref}
//       />
//       <IconButton type="submit" classType="iconBtn--approveEdit" />
//     </form>
//   );
// }); 
  
//   export default FormEdit;

const MAX_TODO_LENGTH = 20;

export const validateTodoText = (text: string) => {
    const trimmedText = text.trim();

    if (trimmedText === '') return false;

    if (trimmedText.length > MAX_TODO_LENGTH) return false;

    return true;
};

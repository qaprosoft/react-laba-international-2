import 'jest-localstorage-mock';
import { validateTodoText } from "./validateTodoText";

describe('validateTodoText', () => {
    it('should return true for a valid text', () => {
        const validText = 'Buy milk';
        expect(validateTodoText(validText)).toBe(true);
    });

    it('should return false for an empty text', () => {
        const emptyText = '';
        expect(validateTodoText(emptyText)).toBe(false);
    });

    it('should return false for a text that is too long', () => {
        const longText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
        expect(validateTodoText(longText)).toBe(false);
    });

    it('should return false for a text with only whitespace characters', () => {
        const spacesOnlyText = '       ';
        expect(validateTodoText(spacesOnlyText)).toBe(false);
    });

    it('should return true for a valid text without additional spaces', () => {
        const trimmedValidText = 'Do exercise';
        expect(validateTodoText(trimmedValidText)).toBe(true);
    });
});

import { JSDOM } from 'jsdom'
import { LocalStorage } from 'node-localstorage'

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
global.document = jsdom.window.document;
global.localStorage = new LocalStorage('./scratch');

module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    setupFiles: ['jest-localstorage-mock'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    },
    transformIgnorePatterns: [
        "/node_modules/",
        "\\.css$"
    ]
};

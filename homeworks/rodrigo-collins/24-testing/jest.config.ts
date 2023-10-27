import { JSDOM } from 'jsdom'
import { LocalStorage } from 'node-localstorage'

const jsdom = new JSDOM('<!doctype html><html><body></body></html>', {
    url: 'http://localhost/',
});
global.document = jsdom.window.document;
global.localStorage = new LocalStorage('./scratch');

module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    verbose: true,
    testEnvironmentOptions: {
        url: "http://localhost/"
    },
    setupFiles: ['jest-localstorage-mock'],
    moduleNameMapper: {
        "\\.(css|less)$": "identity-obj-proxy"
    },
    transformIgnorePatterns: [
        "/node_modules/",
        "\\.css$"
    ]
};

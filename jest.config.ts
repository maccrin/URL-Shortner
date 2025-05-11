import {Config} from 'jest'

const config:Config={
"testEnvironment": "node",
    "testPathIgnorePatterns": [
      "/node_modules/"
    ],
    "preset":"ts-jest",
    "setupFiles":['dotenv/config'],
    "testMatch":[ "**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)" ]
}

export default config;
/** @type {import('jest').Config} */
const config = {
  coverageProvider: "v8",
  transform: {
    "^.+\\.(t|j)sx?$": "@swc/jest"
  }
};

export default config;

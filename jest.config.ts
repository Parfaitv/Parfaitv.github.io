const config = {
  roots: ["<rootDir>"],
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
  preset: "ts-jest",
  testEnvironment: "jsdom",
  modulePaths: ["."],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  transform: {
    ".+\\.(css|less|sass|scss|png|jpg|gif|ttf|woff|woff2|svg)$":
      "jest-transform-stub",
  },
};

export default config;

import path from "path";
const config = {
  preset: "ts-jest",
  modulePathIgnorePatterns: ["<rootDir>/dist/"],
  moduleFileExtensions: ["js", "ts", "json"],
  moduleDirectories: [path.dirname, "src", "node_modules"],
  moduleNameMapper: {
    "^src/(.*)$": "<rootDir>/src/$1",
  },
};

export default config;

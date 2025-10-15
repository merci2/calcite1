/// <reference types="vite/client" />

// CSS Modules Type Definition
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

// JSON Import Type Definition
declare module '*.json' {
  const value: { [key: string]: string };
  export default value;
}
declare module '*.svg?react' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

interface ImportMetaEnv {
  readonly VITE_BACKEND_BASE_URL: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

/// <reference types ="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_API_URL: string
}

interface importMeta {
  readonly env: ImportMetaEnv
}

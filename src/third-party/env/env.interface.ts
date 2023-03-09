export interface IEnv {
  NODE_ENV: 'development' | 'production' | 'staging'

  // DB Settings
  DB_HOST: string
  DB_PORT: number
  DB_USERNAME: string
  DB_PASSWORD: string
  DB_NAME: string
}

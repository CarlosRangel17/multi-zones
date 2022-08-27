const NEXT_PUBLIC_ENV_BASE = process?.env?.NEXT_PUBLIC_ENV_BASE || 'production'
const base = NEXT_PUBLIC_ENV_BASE === 'production' ? 'www' : 'dev-sit'

export const successStatusCodes: number[] = [200, 201]

export default {
  baseUrl: NEXT_PUBLIC_ENV_BASE === 'local' ? 'http://localhost:3000' : `https://${base}.customapp.com/`,
  development: NEXT_PUBLIC_ENV_BASE === 'local',
  production: NEXT_PUBLIC_ENV_BASE === 'production'
}

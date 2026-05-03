export type APIMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

export interface Parameter {
  id: string
  key: string
  value: string
}

export interface APIConfig {
  url: string
  method: APIMethod

  headers: Parameter[]
  query: Parameter[]
  path: Parameter[]
  body: Parameter[]

  rawResponse?: any
}

export interface APITestResponse {
  status?: number
  status_code?: number
  statusCode?: number

  data?: any
  response?: any
  responseBody?: any
  body?: any

  error?: string
}

export interface CleanAPIConfig {
  url: string
  method: APIMethod

  headers?: { key: string; value: string }[]
  query?: { key: string; value: string }[]
  path?: { key: string; value: string }[]
  body?: { key: string; value: string }[]
}

export interface APITool {
  name: string
  config: APIConfig
  tool_type?: string
}
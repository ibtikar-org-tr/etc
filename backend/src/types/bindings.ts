export interface D1PreparedStatementResultLike {
  first<T = Record<string, unknown>>(): Promise<T | null>
  all<T = Record<string, unknown>>(): Promise<{ results: T[] }>
  run(): Promise<unknown>
}

export interface D1PreparedStatementLike {
  bind(...values: unknown[]): D1PreparedStatementResultLike
}

export interface D1DatabaseLike {
  prepare(query: string): D1PreparedStatementLike
}

export interface AppBindings {
  MEMBERS_DB: D1DatabaseLike
  VMS_DB: D1DatabaseLike
  ETC_2026_EVENT_ID: string
  FRONTEND_BASE_URL?: string
  ETC_GOOGLE_SHEET_ID?: string
  ETC_GOOGLE_SHEET_RANGE?: string
  ETC_GOOGLE_SHEET_COLUMN_MAP?: string
  GOOGLE_SERVICE_ACCOUNT_JSON?: string
}

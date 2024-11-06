export type SignInCredential = {
  nik: string
  password: string
}

export type ForgotPasswordReq = {
  email: string
}

export interface SignInResponse {
  user: SignInUser
  access_token: string
  refresh_token: string
}

export interface SignInUser {
  uid: string
  role: []
  data: DisplayName
}

interface DisplayName {
  displayName: string
}

export interface ResponseInfoObject {
  status: 'success' | 'failed'
  error_code?: number
  message?: string
}

export type SignUpResponse = SignInResponse

export type SignUpCredential = {
  name: string
  username: string
  password: string
}

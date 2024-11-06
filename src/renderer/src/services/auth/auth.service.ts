import { SignInResponse } from '@renderer/@types/auth'
import ApiService from '../ApiService'

export const AuthService = {
  async signIn(nik: string, password: string): Promise<SignInResponse> {
    const res = await ApiService.fetchData<{ nik: string; password: string }, SignInResponse>({
      url: '/auth/sign-in',
      method: 'POST',
      data: { nik, password }
    })
    return res.data
  }
}

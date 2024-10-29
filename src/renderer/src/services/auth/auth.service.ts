import { SignInResponse } from '@renderer/@types/auth'
import ApiService from '../ApiService'

export const AuthService = {
  async signIn(email: string, password: string): Promise<SignInResponse> {
    const res = await ApiService.fetchData<{ email: string; password: string }, SignInResponse>({
      url: '/users/sign-in',
      method: 'POST',
      data: { email, password }
    })
    return res.data
  }
}

export type UserLoginResp = {
    id: number
    username: string
    email: string
    firstName: string
    lastName: string
    gender: string
    image: string
    token: string
}

export type User = Omit<UserLoginResp, 'token'>

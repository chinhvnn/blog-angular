export interface ILoginInput {
  email: string
  password: string
  remember: boolean
}

export interface IUser {
  _id: string
  email: string
  name: string
  isActive: boolean
  role: string
  profileImgUrl?: string
  phone?: string
  address?: string
}

// export type IUserInput = Omit<IUser, keyof { _id: string; email: string; isActive: boolean; role: string }>

export interface IUserInput extends Omit<IUser, 'email' | 'role' | 'isActive' | 'profileImgUrl'> {}

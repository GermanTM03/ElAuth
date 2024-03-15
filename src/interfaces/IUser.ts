export default interface IUser {
    email: string
    password: string
    name: string
    group: string
    users : IUser[]
  }
  
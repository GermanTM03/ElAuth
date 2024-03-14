import type IUser from '@/interfaces/IUser'

const API_URL = 'http://192.168.0.240:3000'



export default {
  async getUsers(): Promise<IUser[]> {
    try {
      const response = await fetch(`${API_URL}/Users`)
      if (!response.ok) {
        throw new Error('No se pudieron recuperar los datos de los usuarios')
      }
      return await response.json()
    } catch (error) {
      console.error(error)
      return []
    }
  },

 
  async getUserByEmail(email: string): Promise<IUser | null> {
    try {
      const response = await fetch(`${API_URL}/User?email=${email}`)
      if (!response.ok) {
        throw new Error('No se pudieron recuperar los datos del usuario')
      }
      return await response.json()
    } catch (error) {
      console.error(error)
      return null
    }
  },

        
  async registerUser(name: string, email: string, password: string, grupo: string): Promise<void> {
    try {
      const response = await fetch(`${API_URL}/Register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password, grupo }) 
      })
      if (!response.ok) {
        throw new Error('No se pudo registrar el usuario')
      }
    } catch (error) {
      console.error(error)
    }
  }
  
}

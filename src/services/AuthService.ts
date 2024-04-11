import type IUser from '@/interfaces/IUser'

const API_URL = 'http://utcancun.a.pinggy.online'



export default {
  async GetUsers(): Promise<IUser[]> {
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

 


        
  async registerUser(name: string, email: string, password: string, group: string): Promise<void> {
    try {
      const response = await fetch(`${API_URL}/Register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Pinggy-No-Screen': '0'

        },
        body: JSON.stringify({ name, email, password, group }) 
      })
      if (!response.ok) {
        throw new Error('No se pudo registrar el usuario')
      }
    } catch (error) {
      console.error(error)
    }
  },
  async login(email: string, password: string): Promise<IUser | null> {
    try {
      const response = await fetch(`${API_URL}/Login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
  
      if (!response.ok) {
        throw new Error('No se pudieron recuperar los datos del usuario');
      }
      
      const userData = await response.json();
      console.log(userData);
      return userData;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  
}

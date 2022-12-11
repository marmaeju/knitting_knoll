import Client from './api'

export const GetMaterials = async () => {
  try {
    const res = await Client.get('/material')
    return res.data
  } catch (error) {
    throw error
  }
}

import Client from './api'

export const GetMaterials = async () => {
  try {
    const res = await Client.get('/materials')
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetMaterialById = async (id) => {
  try {
    const res = await Client.get(`/materials/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const CreateMaterial = async (id, data) => {
  try {
    const res = await Client.post(`/materials/${id}`, data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const UpdateMaterial = async (id, data) => {
  try {
    const res = await Client.put(`/materials/${id}`, data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const DeleteMaterial = async (id) => {
  try {
    const res = await Client.delete(`/materials/${id}`)
  } catch (error) {
    throw error
  }
}

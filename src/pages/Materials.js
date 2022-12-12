import { useEffect, useState } from 'react'
import { CreateMaterial, GetMaterials } from '../services/MaterialsServices'
import MaterialCard from '../components/MaterialCard'
import axios from 'axios'

const Materials = (props) => {
  const [materials, setMaterials] = useState([])
  const [formState, setFormState] = useState({ type: '', link: '' })

  useEffect(() => {
    const handleMaterials = async () => {
      const res = await axios.get('http://localhost:3001/materials/')
      setMaterials(res.data)
    }
    handleMaterials()
  })

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    // e.preventDefault()
    const res = await axios.post('http://localhost:3001/materials/', formState)
    setMaterials(res)
    setFormState({ type: '', link: '' })
  }

  return (
    <div>
      <h1>materials</h1>
      <div>
        <h4>Create New Resource</h4>
        <form onSubmit={handleSubmit}>
          <label htmlFor="type">Type:</label>
          <input
            id="type"
            placeholder="Yarn or Pattern"
            value={formState.type}
            onChange={handleChange}
          />
          <label htmlFor="link">Link:</label>
          <input
            id="link"
            placeholder="Link"
            value={formState.link}
            onChange={handleChange}
          />
          <button>Create Material</button>
        </form>
      </div>
      <div>
        {materials?.map((material) => (
          <MaterialCard
            key={material.id}
            id={material.id}
            type={material.type}
            link={material.link}
          />
        ))}
      </div>
    </div>
  )
}

export default Materials

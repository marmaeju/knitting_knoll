import { useEffect, useState } from 'react'
import { CreateMaterial, GetMaterials } from '../services/MaterialsServices'
import MaterialCard from '../components/MaterialCard'
import axios from 'axios'

const Materials = () => {
  const [materials, setMaterials] = useState([])
  const [formState, setFormState] = useState({ type: '', link: '' })

  useEffect(() => {
    const handleMaterials = async () => {
      const results = await axios.get('http://localhost:3001/materials/')
      setMaterials(results.data)
    }
    handleMaterials()
  })

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value })
  }

  return (
    <div>
      <h1>materials</h1>
      <div>
        <h4>Create New Resource</h4>
        <form>
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
          <button>Create</button>
        </form>
      </div>
      <div>
        {materials?.map((material) => (
          <MaterialCard
            key={material.id}
            type={material.type}
            link={material.link}
          />
        ))}
      </div>
    </div>
  )
}

export default Materials

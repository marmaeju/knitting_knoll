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

  return (
    <div>
      <h1>materials</h1>
      <div>
        {materials?.map((material) => (
          // <div key={material.id}>
          //   <p>{material.type}</p>
          //   <a href={material.link}>{material.link}</a>
          //   <button>Update Resource</button>
          // </div>
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

import { useEffect, useState } from 'react'
import { CreateMaterial, GetMaterials } from '../services/MaterialsServices'
import MaterialCard from '../components/MaterialCard'

const Materials = () => {
  const [materials, setMaterials] = useState([])
  const [formState, setFormState] = useState({ type: '', link: '' })

  useEffect(() => {
    const handleMaterials = async () => {
      const data = await GetMaterials()
      setMaterials(data)
    }
    handleMaterials()
  })

  return (
    <div>
      <h1>materials</h1>
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

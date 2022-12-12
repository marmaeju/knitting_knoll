import { useEffect, useState } from 'react'
import { CreateMaterial } from '../services/MaterialsServices'

const Materials = () => {
  const [materials, setMaterials] = useState([])
  const [formState, setFormState] = useState({ type: '', link: '' })

  return (
    <div>
      <h1>materials</h1>
      <div></div>
    </div>
  )
}

export default Materials

import { useEffect, useState } from 'react'
import MaterialCard from '../components/MaterialCard'
import axios from 'axios'

const Materials = (props) => {
  const [materials, setMaterials] = useState([])
  const [formState, setFormState] = useState({ name: '', type: '', link: '' })
  const [deletedMaterial, setDeletedMaterial] = useState(false)

  useEffect(() => {
    const handleMaterials = async () => {
      const res = await axios.get(
        'https://knitting-knoll-backend.herokuapp.com/materials/'
      )
      setMaterials(res.data)
    }
    handleMaterials()
  }, [deletedMaterial, formState])

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await axios.post(
      'https://knitting-knoll-backend.herokuapp.com/materials/',
      formState
    )
    setMaterials(res)
    setFormState({ type: '', link: '' })
  }

  return (
    <div className="materials-page">
      <h1>materials</h1>
      <div>
        <h4>Create New Resource</h4>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Site Name:</label>
          <input
            id="name"
            placeholder="name"
            value={formState.name}
            onChange={handleChange}
          />
          <label htmlFor="type">Type:</label>
          <select id="type" onChange={handleChange}>
            <option>Default</option>
            <option value="Yarn">Yarn</option>
            <option value="Pattern">Pattern</option>
          </select>
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
        {materials
          ? materials.map((material) => (
              <MaterialCard
                key={material.id}
                id={material.id}
                name={material.name}
                type={material.type}
                link={material.link}
                setDeletedMaterial={setDeletedMaterial}
                deletedMaterial={deletedMaterial}
              />
            ))
          : ''}
      </div>
    </div>
  )
}

export default Materials

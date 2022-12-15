import { useEffect, useState } from 'react'
import MaterialCard from '../components/MaterialCard'
import axios from 'axios'

const Materials = (props) => {
  const [materials, setMaterials] = useState([])
  const [formState, setFormState] = useState({ name: '', type: '', link: '' })
  const [deletedMaterial, setDeletedMaterial] = useState(false)
  const [addedMaterials, toggleAddedMaterials] = useState(false)

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
    toggleAddedMaterials(!addedMaterials)
    setFormState({ name: '', type: '', link: '' })
  }

  return (
    <div className="materials-page">
      <div className="material-div">
        <h1>Material Resources</h1>
        <div>
          <h4>Create new material resource in the form below!</h4>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Site Name:</label>
            <input
              id="name"
              value={formState.name}
              onChange={handleChange}
              className="mobile-input"
            />
            <label htmlFor="type">Type:</label>
            <select id="type" onChange={handleChange} className="mobile-select">
              <option></option>
              <option value="Yarn">Yarn</option>
              <option value="Pattern">Pattern</option>
            </select>
            <label htmlFor="link">Link:</label>
            <input
              id="link"
              value={formState.link}
              onChange={handleChange}
              className="mobile-input"
            />
            <button>Create Material</button>
          </form>
        </div>
        <div>
          {materials?.map((material) => (
            <MaterialCard
              key={material.id}
              id={material.id}
              name={material.name}
              type={material.type}
              link={material.link}
              setDeletedMaterial={setDeletedMaterial}
              deletedMaterial={deletedMaterial}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Materials

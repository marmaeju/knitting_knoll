import { useEffect, useState } from 'react'
import StitchCard from '../components/StitchCard'
import axios from 'axios'

const Stitches = () => {
  const [stitches, setStitches] = useState([])
  const [formState, setFormState] = useState({
    name: '',
    description: '',
    image: '',
    link: ''
  })
  const [deletedStitch, setDeletedStitch] = useState(false)

  useEffect(() => {
    const handleStitches = async () => {
      const res = await axios.get(
        'https://knitting-knoll-backend.herokuapp.com/stitches/'
      )
      setStitches(res.data)
    }
    handleStitches()
  }, [deletedStitch])

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await axios.post(
      'https://knitting-knoll-backend.herokuapp.com/stitches/',
      formState
    )
    setStitches(res)
    setFormState({
      name: '',
      description: '',
      image: '',
      link: ''
    })
  }

  return (
    <div className="stitches-page">
      <h1>stitches</h1>
      <div>
        <h4>Create New Resource</h4>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Stitch Name:</label>
          <input
            id="name"
            placeholder="Name"
            value={formState.name}
            onChange={handleChange}
          />
          <label htmlFor="description">Description</label>
          <input
            id="description"
            placeholder="description"
            value={formState.description}
            onChange={handleChange}
          />
          <label htmlFor="image">Image</label>
          <input
            id="image"
            placeholder="image"
            value={formState.image}
            onChange={handleChange}
          />
          <label htmlFor="link">Link:</label>
          <input
            id="link"
            placeholder="Link"
            value={formState.link}
            onChange={handleChange}
          />
          <button>Create Stitch</button>
        </form>
      </div>
      <div>
        {stitches?.map((stitch) => (
          <StitchCard
            key={stitch.id}
            id={stitch.id}
            name={stitch.name}
            description={stitch.description}
            image={stitch.image}
            link={stitch.link}
            setDeletedStitch={setDeletedStitch}
            deletedStitch={deletedStitch}
          />
        ))}
      </div>
    </div>
  )
}

export default Stitches

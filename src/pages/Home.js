import { useNavigate } from 'react-router-dom'

const Home = () => {
  let navigate = useNavigate()

  return (
    <div>
      <button onClick={() => navigate('/materials')}>Materials</button>
      <button onClick={() => navigate('/casts')}>Casts</button>
      <button onClick={() => navigate('/stitches')}>Stitches</button>
    </div>
  )
}

export default Home

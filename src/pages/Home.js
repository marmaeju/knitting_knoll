import { useNavigate } from 'react-router-dom'

const Home = () => {
  let navigate = useNavigate()

  return (
    <main className="home-main">
      <section>
        <div>
          <p>
            Knitting Knoll is a knitting resource for knitters of all skill
            levels!
          </p>
        </div>
      </section>
      <section>
        <div>
          <button onClick={() => navigate('/materials')}>Materials</button>
          <button onClick={() => navigate('/casts')}>Casts</button>
          <button onClick={() => navigate('/stitches')}>Stitches</button>
        </div>
      </section>
    </main>
  )
}

export default Home

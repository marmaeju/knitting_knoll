import {Link} from 'react-router-dom'

const Nav = () => {

  return (
    <nav>
      <h2>Knitting Knoll</h2>
      <section>
        <Link to='/'>Home</Link>
        <Link to='/materials'>Materials</Link>
        <Link to='/casts'>Casts</Link>
        <Link to='/stitches'>Stitches</Link>
      </section>
    </nav>
  )
}

export default Nav
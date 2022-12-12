const MaterialCard = ({type, link}) => {
  return (
    <div>
      <div>
        <div>
        <p>{type}</p>
        <a href={link}>{link}</a>
        </div>
      </div>
    </div>
  )
}

export default MaterialCard
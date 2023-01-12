
export const GifItem = ({ title, id, url }) => {
  return (
    <div className="card">
        <img 
            alt={ title }
            src={ url }>
        </img>
        <p>{title}</p>
    </div>
  )
}

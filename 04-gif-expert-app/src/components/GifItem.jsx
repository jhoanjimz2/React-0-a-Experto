import PropTypes from 'prop-types';

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

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url  : PropTypes.string.isRequired
}

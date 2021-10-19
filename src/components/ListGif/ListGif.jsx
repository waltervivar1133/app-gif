import React from 'react'
import PropTypes from 'prop-types'

export const ListGif = ({url,title}) => {

  
  return (
    <>
      <div className="card  animate__animated animate__backInLeft">
          <img src={url} alt={title}/>
          <div>{title}</div>
      </div>
    </>
  )
}

ListGif.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}
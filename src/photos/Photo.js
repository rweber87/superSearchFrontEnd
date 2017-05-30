import React from 'react'

const Photo = (props) => {
  let photo = props.photo

  return (
    <div className="photo">
      <img src={photo} width="400px"/>
    </div>
  )
}

export default Photo

import React from 'react'

function NavBar (props){

  return(
    <nav className="navbar navbar-inverse bg-primary">
      <a className="navbar-brand" href="/">SuperSearch</a>
      <div className="collapse navbar-collapse">
        <div className="navbar-nav">
          <a className="navbar-brand"></a>
          <a className="navbar-brand" href="/" onClick={props.toggle}>Notes</a>
        </div>
      </div>
    </nav>
  )

}

export default NavBar
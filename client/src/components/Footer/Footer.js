import React from 'react'

function Footer() {
  return (
    
    <footer className="text-center container-fluid bg-dark text-white">
    <div className="row">
      <div className="col-6">
        c 2022 Copyright
      </div>
      <div className="col-3">
        <div className="text-uppercase">
          Links 
        </div>  
        <ul className="list-group text-dark">
          <li className="list-group-item"> WebSite 1</li>
          <li className="list-group-item"> WebSite 1</li>
          <li className="list-group-item"> WebSite 1</li>
          <li className="list-group-item"> WebSite 1</li>
          <li className="list-group-item"> WebSite 1</li>
        </ul>
      </div>
      <div className="col-3">
        <div className="text-uppercase">
          Sites 
        </div>  
        <ul className="list-group text-dark">
          <li className="list-group-item"> Contact</li>
          <li className="list-group-item"> About </li>
          <li className="list-group-item"> Products</li>
        </ul>
      </div>
    </div>
  </footer>
  )
}

export default Footer
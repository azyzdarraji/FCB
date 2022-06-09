import React from 'react'

function Main() {
  return (
    <main className="container-fluid bg-light text-dark">
    <div className="row">
      <div className="col bg-secondary"> 
        <img src="https://via.placeholder.com/500x300/" className="img-fluid" /> </div>
      <div className="col-6">
        <div className="h1">More content here</div>
        <div className="row">
          <div className="col">  <div className="card text-white bg-danger">
              <div className="card-header">
                Featured
              </div>
              <img src="https://via.placeholder.com/500x500/" className="card-img-top" /> 
              <div className="card-body">
                <div className="card-title">
                  My new product 1
                </div>
                <p>                    Description
                </p>
                <a href="#" className="card-link"> Linker </a>
                <a href="#" className="card-link">  Another Linker </a>
              </div>
            </div></div>
          <div className="col"> <div className="card">
              <div className="card-header">
                Featured
              </div>
              <img src="https://via.placeholder.com/500x500/" className="card-img-top" /> 
              <div className="card-body">
                <div className="card-title">
                  My new product 1
                </div>
                <p>                    Description
                </p>
                <a href="#" className="card-link"> Linker </a>
                <a href="#" className="card-link">  Another Linker </a>
              </div>
            </div></div>
          <div className="col"> <div className="card">
              <div className="card-header">
                Featured
              </div>
              <img src="https://via.placeholder.com/500x500/" className="card-img-top" /> 
              <div className="card-body">
                <div className="card-title">
                  My new product 1
                </div>
                <p>                    Description
                </p>
                <a href="#" className="card-link"> Linker </a>
                <a href="#" className="card-link">  Another Linker </a>
              </div>
            </div></div>
          <div className="col"> <div className="card">
              <div className="card-header">
                Featured
              </div>
              <img src="https://via.placeholder.com/500x500/" className="card-img-top" /> 
              <div className="card-body">
                <div className="card-title">
                  My new product 1
                </div>
                <p>                    Description
                </p>
                <a href="#" className="card-link"> Linker </a>
                <a href="#" className="card-link">  Another Linker </a>
              </div>
            </div></div>
        </div>
        <table className="table table-light
    table-striped table-bordered table-hover">
          <thead>
            <tr className="table-primary">
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td><td>Laurence</td>
              <td>Svekis</td>
            </tr>
            <tr>
              <td>2</td><td>Larry</td>
              <td>Doe</td>
            </tr>
            <tr>
              <td>3</td><td>Joe</td>
              <td>Smith</td>
            </tr>
            <tr>
              <td>4</td><td>Jane</td>
              <td>Doe</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="col bg-secondary"> <img src="https://via.placeholder.com/50x50/" className="img-fluid img-thumbnail rounded float-right" />Hello World </div>
    </div>
  </main>
  )
}

export default Main
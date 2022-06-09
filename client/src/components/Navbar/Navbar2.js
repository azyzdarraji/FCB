import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faUser, faUserSecret,faEnvelope,faCalendarTimes,faPhone,faPersonMilitaryToPerson ,faStar} from '@fortawesome/free-solid-svg-icons'
import "./Navbar2.css"
function Navbar2() {
    const element = <FontAwesomeIcon icon={faUser} />

  return (

      <>
  <nav className="navbar navbar-expand-sm bg-dark navbar-dark d-flex justify-content-between">


  <div className="container-fluid">
    <div className="navbar-brand">
      <img src="logo.png" width={50} />
      FCB logo
    </div>


    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#mainNav"
    >
      <span className="navbar-toggler-icon" />
    </button>



    <div className="collapse navbar-collapse" id="mainNav">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <a href="#" className="nav-link ">
          ACCUEIL
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link ">
          FCB
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link ">
          AUTRES SPORTS
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link ">
          CONTACT
          </a>
        </li>
        <li className="nav-item">
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
          INSCRIPTION
        </button></li> 
    
      </ul>
    </div>


  </div>
</nav>
  {/* Modal */}
  <div className="modal fade border border-warning" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document"  >
            <div className="modal-content"  >
              <div className="modal-header ">
                <h5 className="modal-title text-blod text-center" id="exampleModalCenterTitle"> 
                 Inscrivez-vous à FCB Academy 

                </h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <form pr-100>
              <div className="modal-body" id="a">
               

               {/* input nom  */} 
         
               <div class="input-group input-group-sm mb-3">
  <span className="input-group-text" id="inputGroup-sizing-sm"> {element}</span>
  <input  name="nom"type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder='Nom et Prénom'/>
</div>
    


<div class="input-group input-group-sm mb-3">
  <span className="input-group-text" id="inputGroup-sizing-sm"> <FontAwesomeIcon icon={faPhone} /></span>
  <input  name="tel" type="tel" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder='Num Tel ' />
</div>

<div class="input-group input-group-sm mb-3">
  <span className="input-group-text" id="inputGroup-sizing-sm"> <FontAwesomeIcon icon={faCalendarTimes} /></span>
  <input  name="date" type="date" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder='Email'/>
</div>


<div class="input-group input-group-sm mb-3">
  <span className="input-group-text" id="inputGroup-sizing-sm"> <FontAwesomeIcon icon={faPersonMilitaryToPerson} /></span>
  

<select id="monselect">
<option value="valeur0" selected> Type</option>
  <option value="valeur1">Entraineur</option>
  <option value="valeur2" >Aderant</option>
  <option value="valeur3">Parent</option>
</select>
</div>



        {/* input email */}

        <div class="input-group input-group-sm mb-3">
  <span className="input-group-text" id="inputGroup-sizing-sm"> <FontAwesomeIcon icon={faEnvelope} /></span>
  <input  name="email" type="email" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder='Email'/>
</div> 


<div class="input-group input-group-sm mb-3">
  <span className="input-group-text" id="inputGroup-sizing-sm"> <FontAwesomeIcon icon={faUserSecret} /></span>
  <input  name="password" type="password" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder='Mot de Passe '/>
</div>



<div class="input-group input-group-sm mb-3">
  <span className="input-group-text" id="inputGroup-sizing-sm"> <FontAwesomeIcon icon={faUserSecret} /></span>
  <input  name="confirmepassword" type="password" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder=' Confirmez Mot de Passe '/>
</div>




              </div>
              <div className="modal-footer">
              <button type="button" className="btn btn-success">Inscrire </button>

                <button type="button" className="btn btn-danger" data-dismiss="modal">Annuler</button>
                
        
              </div>


              </form>
            </div>
          </div>
        </div>

</>

  )
}

export default Navbar2
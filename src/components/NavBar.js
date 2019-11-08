<<<<<<< HEAD
import React from 'react'
 class NavBar extends React.Component{
   constructor(){
     super()
     this.state={}
   }
   render(){
    return(
      <div>
        
      </div>   
    )
  }
    
}
=======
import React from 'react'
function NavBar(){
    return(
        

    
    <div class="bg-light border-right" id="sidebar-wrapper">
      <div class="sidebar-heading">Start Bootstrap </div>
      <div class="list-group list-group-flush">
        <a href="#" class="list-group-item list-group-item-action bg-light">Dashboard</a>
        <a href="#" class="list-group-item list-group-item-action bg-light">Shortcuts</a>
        <a href="#" class="list-group-item list-group-item-action bg-light">Overview</a>
        <a href="#" class="list-group-item list-group-item-action bg-light">Events</a>
        <a href="#" class="list-group-item list-group-item-action bg-light">Profile</a>
        <a href="#" class="list-group-item list-group-item-action bg-light">Status</a>
      </div>
    </div>
        
    )
}
>>>>>>> 165a2071d2a593bc74674f1a2f661734c348f24b
export default NavBar
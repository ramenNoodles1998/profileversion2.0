import React from 'react'
function Footer(){
    return(
        <div >
            
            <div className="row Footer">
                
                <h1 style={{color: "#c4d3ff",paddingTop: ".5em", fontSize: "100px"}} className="text-center col-12">
                    CONTACT
                </h1>           
            </div>
            <div className="row Footer ">
                <h1 style={{fontSize: "80px"}} className ="text-center col-12">
                    INFORMATION
                </h1>
            </div>
            <div className="row Footer">
                <div style={{color:"whiteSmoke", fontFamily: "Overpass"}} className="col-sm text-md-right text-sm-center">Email:</div>
                <div style={{fontFamily: "Overpass", fontSize:"50px", color:"#c4d3ff "}}className="col-sm text-center">
                    romanmeredith@gmail.com
                </div>
                <div className="col-sm text-center" ></div>
            </div>
            <div className="row Footer">
                <div style={{fontFamily:"Overpass", padding:"1em"}}className="col-sm text-center">
                    <a href="https://www.linkedin.com/in/roman-meredith-96a327184/">  LinkedIn </a> 
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="https://github.com/ramenNoodles1998">GitHub</a> 
                </div>
                
                
            </div>
        </div>
        
    )
}
export default Footer
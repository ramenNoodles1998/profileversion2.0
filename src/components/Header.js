import React from 'react'
function Header(){
    return(
        <div>
            <div className="row Header ">
                
                <h1 style={{color: "#141824", fontSize: "30px", paddingTop: "30px"}} className="text-center col-10">
                    &nbsp;&nbsp;A PORTFOLIO By
                </h1>           
            </div>
            <div className="row Header">
                
                <h1 style={{color: "#141824", fontSize: "100px"}} className="text-center col-12">
                    ROMAN
                </h1>           
            </div>
            <div className="row Header ">
                
                <h1 style={{fontSize: "73px"}} className ="text-center col-12">
                    MEREDITH
                </h1>
            </div>
            
            <div className="row">
                <div style={{padding: "30px", background: "#c4d3ff", color: "whitesmoke", fontFamily: "Overpass"}}className="col-sm-12 text-center">
                    A Software Developer
                </div>

            </div>

        </div>
        
    )
}
export default Header
import React from 'react'
function Header(){
    return(
        <div>
            <div className="row Header ">
                
                <h1 style={{color: "#141824", fontSize: "30px", paddingTop: "30px"}} className="text-left col-sm">
                    &nbsp;&nbsp;A PORTFOLIO By
                </h1>           
            </div>
            <div className="row Header">
                
                <h1 style={{color: "#141824", fontSize: "100px"}} className="text-left col-sm">
                    ROMAN
                </h1>           
            </div>
            <div className="row Header ">
                
                <h1 style={{fontSize: "73px"}} className ="text-left col-sm">
                    MEREDITH
                </h1>
            </div>
            
            <div className="row">
                <div style={{paddingTop: "30px"}}className="col-sm-12 text-center">
                    Software Developer
                </div>

            </div>

        </div>
        
    )
}
export default Header
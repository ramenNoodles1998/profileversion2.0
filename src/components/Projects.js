<<<<<<< HEAD
import React from 'react'

function Projects(props){
    let style={
        paddingTop: ".5em",
        paddingBottom: ".5em",
        borderTop: "1px whiteSmoke solid",
        width: "100px"
        

    }
    
    return(
        <div >
            <div className="row Projects">
                <div  style={{fontSize:".5em"}}className="col-sm text-md-right text-sm-center">N.00{props.num}</div>
                <a style={style} className="col-sm text-center">{props.name}</a>
                <div className="col-sm"></div>
            </div>
            <div className="row Projects text-center">
                <div style={{paddingBottom: "1em"}} className="col-sm">
                    <button type="button" 
                    className="btn btn-lg" 
                    style={{
                        backgroundColor:"#1c2234" ,
                        color: "whiteSmoke",
                        margin: "1em"
                    }}
                    href={"https://www.google.com/"}>Project</button>
                    <button type="button" 
                    className="btn btn-lg"
                     style={{
                        backgroundColor:"#1c2234",
                        color: "whiteSmoke",
                        margin: "1em",
                        
                    }}
                     href={props.hrefC}>Code</button>
                     

                </div>
            </div>

        </div>
        
        
    )
}
=======
import React from 'react'
function Projects(props){
    let style={
        paddingTop: ".5em",
        paddingBottom: ".5em",
        borderTop: "1px whiteSmoke solid",
        width: "100px"
        

    }
    return(
        <div >
            <div className="row Projects">
                <div  style={{fontSize:".5em"}}className="col-sm text-md-right text-sm-center">N.00{props.num}</div>
                <a style={style} className="col-sm text-center">{props.name}</a>
                <div className="col-sm"></div>
            </div>
            <div className="row Projects text-center">
                <div className="col-sm">
                    <button type="button" 
                    className="btn btn-lg" 
                    style={{
                        backgroundColor:"#1c2234" ,
                        color: "whiteSmoke",
                        margin: "1em"
                    }}
                    href={props.hrefP}>Project</button>
                    <button type="button" 
                    className="btn btn-lg"
                     style={{
                        backgroundColor:"#1c2234",
                        color: "whiteSmoke",
                        margin: "1em"
                    }}
                     href={props.hrefC}>Code</button>

                </div>
            </div>

        </div>
        
        
    )
}
>>>>>>> 165a2071d2a593bc74674f1a2f661734c348f24b
export default Projects
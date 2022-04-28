import Card from "./Card"
import {initialDetails} from "./initialDetails"

import "./blogpost.css"


const BlogMain = () => {
    return (
        
       
    
        
        <div className="blogmain">
            
            {initialDetails.map(person=>(
                <Card key={initialDetails.id} person={person}/>
            ))}
        </div>
        
    )
}

export default BlogMain
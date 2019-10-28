import React from "react";


function QuoteCitation({simpson}) {
    return(
    <div className="QuoteCitation">
        <img 
            src={simpson.image}
            alt={simpson.character}
        />
        <ul>
            <li>
                Character:{simpson.character}
            </li>
            <li>
                Quote:{simpson.quote}
            </li>
        </ul>
    </div>
    )
}

export default QuoteCitation;
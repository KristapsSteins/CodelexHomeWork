import { useState, useEffect, useRef } from "react"

const FourthBox = () => {
    const boxRef = useRef(null)
    const [box, setBox] = useState<string[]>([])

    const handleClick = () => {
        if (boxRef.current) {
            setBox([...box, boxRef.current])
        }
    }
    
    return (
        <div className="row p-3">
            <div className="small__box" ref={boxRef}></div>
                { 
                    box.map((_, i) => (
                        <div className="small__box" key={i}></div>
                    ))
                }
            <div className="mt-2">
                <button className="btn btn-success" onClick={handleClick}>Clone box</button>
            </div>
        </div>
      )
    }

export default FourthBox

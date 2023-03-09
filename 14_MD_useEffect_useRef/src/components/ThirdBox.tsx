import { useState, useEffect, useRef } from "react"

const ThirdBox = () => {
    const boxRef = useRef(null)
    const [color, setColor] = useState('')

    const handleClick = () => {
        setColor(prevColor => {
            return prevColor === '' ? 'gold' : ''
        })
    }
    
  return (
    <div className="row p-3 align-items-center">
        <div className="col-3">
            <div className="small__box" ref={boxRef} style={{backgroundColor: color}}></div>
        </div>
        <div className="col-4">
            <button className="btn btn-success" onClick={handleClick}>Change color</button>
        </div>
    </div>
  )
}

export default ThirdBox

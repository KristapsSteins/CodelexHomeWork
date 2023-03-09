import { useRef, useState } from 'react'

const FifthBox = () => {
    const boxRef = useRef<HTMLDivElement | null>(null)
    const [text, setText] = useState('')

    const handleClick = () => {
        const box = boxRef.current;
        if (box)
        box.setAttribute("style", `position: absolute; right: 0; top: 0`)
        setText('i am corner')
    }
        
  return (
    <div className="row p-3 align-items-center">
        <div className="big__box">

        </div>
        <div 
            className="small__fly" 
            ref={boxRef}
        >
            <p>
                {text}
            </p>
        </div>
        <div className="mt-2">
            <button className="btn btn-success" onClick={handleClick}>Send to corner</button>
        </div>
    </div>
  )
}

export default FifthBox

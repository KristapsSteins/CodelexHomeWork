import { useState, useEffect } from "react"

const FirstBox = () => {
    const [count, setCount] = useState(0)
    const [sentence, setSentence] = useState('')

    useEffect(() => {
        console.log("RENDER")
      })

  return (
    <div className="row p-3">
        <div 
            className="col-3 plus_box text-center fw-bold" 
            onClick={()=> {
                setCount(count + 1)
                console.log('CHANGING COUNT');
            }}
            >
                +
        </div>
        <div className="mt-2 mb-2">
            Count:{count}
        </div>
        <div>
            <input type="text" className="form-control" onChange={(e)=> {
                setSentence(e.target.value)
                console.log('Input change');
                
            }}/>
        </div>
        <div className="mt-2">
            {sentence}
        </div>
    </div>
  )
}

export default FirstBox

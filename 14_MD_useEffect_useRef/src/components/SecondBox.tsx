import { useState, useEffect } from "react"

const FirstBox = () => {
    const [count, setCount] = useState(0)
    const [sentence, setSentence] = useState('')
    const [fontsize, setFontsize] = useState(16)

    useEffect(() => {
        setCount(count + 100)
      }, [])

  return (
    <div className="row p-3">
        <div 
            className="col-3 plus_box text-center fw-bold" 
            onClick={()=> {
                setCount(count + 1)
                setFontsize((fontsize + 1))
            }}
            >
                +
        </div>
        <div className="mt-2 mb-2" style={{ fontSize: `${fontsize}px` }}>
            Count:{count}
        </div>
        <div>
            <input type="text" className="form-control" onChange={(e)=> {
                setSentence(e.target.value)
                document.title = e.target.value
            }}/>
        </div>
        <div className="mt-2">
            {sentence}
        </div>
    </div>
  )
}

export default FirstBox

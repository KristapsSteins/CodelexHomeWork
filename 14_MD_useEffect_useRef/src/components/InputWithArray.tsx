import { useState, useEffect, useRef } from 'react';

const InputWithArray = () => {
  const [inputValue, setInputValue] = useState('');
  const [values, setValues] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = () => {
    setValues([...values, inputValue]);
    setInputValue('');
    console.log('RENDER');
  }

  useEffect(() => {
    if (inputRef.current) {
    inputRef.current.focus();
    }
    }, [values]);

  return (
    <>
        <div className="row mt-3 ms-2">
            <div className="col-3">
            <input 
                type="text" 
                className="form-control"
                value={inputValue}
                onChange={handleInputChange}
                ref={inputRef} 
                />
            </div>
            <div className="col-3">
            <button 
                type="button" 
                className="btn btn-success"
                onClick={handleSubmit}>
                    Submit
                </button>
            </div>
        </div>
        <div className="row mt-3 ms-2">
            <div className="col-6">
                {
                    values.map((value, index) => (
                        <p key= {index}>{value}</p>
                    ))
                    }
            </div>
        </div>
    </>
  )
}

export default InputWithArray

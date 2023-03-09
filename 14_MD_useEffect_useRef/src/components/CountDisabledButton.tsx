import { useState, useEffect } from 'react';

const CountDisabledButton = () => {
    const [count, setCount] = useState(0)
    const [isDisabled, setIsDisabled] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsDisabled(false);
        }, 5000)
    }, [])

  return (
    <>
        <div className="row mt-3 ms-2 align-items-center">
            <div className="col-3 count__box text-center">
                {count * 2}
            </div>
            <div className="col-3">
                <button
                    type="button" 
                    className="btn btn-success"
                    onClick={()=> {
                        setCount(count + 1);
                    }}
                    disabled={isDisabled}>
                        Count: {count}
                </button>
            </div>
        </div>
    </>
  )
}

export default CountDisabledButton

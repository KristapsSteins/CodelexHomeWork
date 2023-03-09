import { useEffect, useRef } from 'react';



const InputWithFocus = () => {
  const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (inputRef.current) {
        inputRef.current.focus();
        }
    }, []);

  return (
    <div className="row mt-3 ms-2">
      <div className="col-3">
        <input type="text" className="form-control" ref={inputRef} />
      </div>
    </div>
  );
};

export default InputWithFocus;

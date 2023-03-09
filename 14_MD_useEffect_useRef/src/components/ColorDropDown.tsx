import { useEffect, useState} from 'react'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const ColorDropDown = () => {
    const [color, setColor] = useState('')
    const [newColor, setNewColor] = useState('')

    const options = [
        'Red', 'Black', 'Pink'
      ];
    
    const onSelect = (option: any) => {
        setColor(option.value);
    }
  return (
    <>
        <div className="row mt-3 ms-2 align-items-center">
            <div 
                className="col-3 plus_box text-center fw-bold" 
                onClick={() => {
                    setNewColor(color)
            }}>
                +
            </div>
            <div className="col-3">
            <Dropdown options={options} onChange={onSelect} value={color} placeholder='Select color' />
            </div>
        </div>
        <div className="row mt-3 ms-2">
            <div 
                className="col-3 empty_box text-center fw-bold" 
                style={{
                    backgroundColor: newColor
                }}>

        </div>
        </div>
    </>
  )
}

export default ColorDropDown

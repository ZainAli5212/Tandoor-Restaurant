import "./ColorButton.css"

const ColorButton = ({btnText}) => {
  return (
    <div>
        <button className="colorBtn">{btnText}</button>
    </div>
  )
}

export default ColorButton
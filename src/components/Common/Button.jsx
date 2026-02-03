import "./Button.css"

const Button = ({btnText}) => {
  return (
    <div>
        <button className="transparentBtn">{btnText}</button>
    </div>
  )
}

export default Button
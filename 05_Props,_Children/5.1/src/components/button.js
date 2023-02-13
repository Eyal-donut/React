const Button = ({text, bold}) => {
    return <button className= {bold ? "bold": ""}>{text}</button>
}
export default Button
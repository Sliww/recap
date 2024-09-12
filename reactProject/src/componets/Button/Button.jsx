import "./button.css"

export const Button = ({title, style})=>{
    return (
        <button className={`${style}`}>
            {title}
        </button>
    )
}
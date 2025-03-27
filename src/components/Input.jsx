export default function Input({label, value, ...props}) {
    return (
        <p>
            <label>{label}</label>
            <input type="number" value={value} {...props} />
        </p>
    )
}
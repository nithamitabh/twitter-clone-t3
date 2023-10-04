interface InputProps {
   placeholder:string
   value?:string
   type?:string
   disabled?:boolean
   onChange:(event: React.ChangeEvent<HTMLInputElement>)=>void
}
const Input:React.FC<InputProps> = ({
    placeholder,
    value,
    type,
    disabled,
    onChange
}) => {
  return (
    <input
    disabled ={disabled}
    onChange={onChange}
    value={value}
    placeholder={placeholder}
    type={type}
    className="w-full p-4 bg-black border-2 border-neutral-800 rounded-md disabled:bg-neutral-900 disabled:opacity-70 disabled:cursor-not-allowed text-white outline-none focus:border-2 focus:border-sky-500 transition "
    />
  )
}

export default Input
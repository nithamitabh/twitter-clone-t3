import { useCallback, useState } from "react";
import useLoginModel from "../../hooks/useLoginModel"
import Input from "../input"; 
import Modal from "../Modal";
import useRegisterModel from "../../hooks/useRegisterModel";
const RegisterModel = () => {
    const loginModel = useLoginModel();
    const registerModel = useRegisterModel();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [name,setName] = useState('');
    const [username,setUserName] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const onToggle = useCallback(() => {
        if(isLoading){
            return
        }
        registerModel.onClose();
        loginModel.onOpen();
    },[isLoading, registerModel, loginModel])

    const onSubmit = useCallback(async() =>{
        try{
            setIsLoading(true);
            //TODO add Register
            //!ADD code
            registerModel.onClose();
        }catch(err){
            console.log(err)
        }finally{
            setIsLoading(false)
        }
    },[registerModel])
    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Input placeholder = "Email" onChange = {(e) => setEmail(e.target.value)} value = {email} disabled = {isLoading} />
            <Input placeholder = "Name" onChange = {(e) => setName(e.target.value)} value = {name} disabled = {isLoading} />
            <Input placeholder = "UserName" onChange = {(e) => setUserName(e.target.value)} value = {username} disabled = {isLoading} />
            <Input placeholder = "Password" onChange = {(e) => setPassword(e.target.value)} value = {password} disabled = {isLoading} />
        </div>
    )
    const footerContent = (
        <div className="text-neutral-400 text-center mt-4">
            <p>Already have an Account?</p>
            <span onClick={onToggle} className="text-white cursor-pointer hover:underline"> Sign in </span>
        </div>
    )
  return (
    <div>
        <Modal
        disabled = {isLoading}
        isOpen = {registerModel.isOpen}
        title="Create an Account"
        actionLabel="Register"
        onClose={registerModel.onClose}
        onSubmit={onSubmit}
        body={bodyContent}
        footer={footerContent}
        />
    </div>
  )
}

export default RegisterModel
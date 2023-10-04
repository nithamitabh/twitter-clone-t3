import { useCallback, useState } from "react";
import useLoginModel from "../../hooks/useLoginModel"
import useRegisterModel from "../../hooks/useRegisterModel";
import Input from "../input"; 
import Modal from "../Modal";
const LoginModel = () => {
    const loginModel = useLoginModel();
    const registerModel = useRegisterModel();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const onToggle = useCallback(() => {
        if(isLoading){
            return
        }
        loginModel.onClose();
        registerModel.onOpen();
    },[isLoading, registerModel, loginModel])
    const onSubmit = useCallback(async() =>{
        try{
            setIsLoading(true);
            //TODO add Login
            //!ADD code
            loginModel.onClose();
        }catch(err){
            console.log(err)
        }finally{
            setIsLoading(false)
        }
    },[loginModel])
    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Input placeholder = "Email" onChange = {(e) => setEmail(e.target.value)} value = {email} disabled = {isLoading} />
            <Input placeholder = "Password" onChange = {(e) => setPassword(e.target.value)} value = {password} disabled = {isLoading} />
        </div>
    )
    const footerContent = (
        <div className="text-neutral-400 text-center mt-4">
            <p>Create New</p>
            <span onClick={onToggle} className="text-white cursor-pointer hover:underline"> Sign Up </span>
        </div>
    )
  return (
    <div>
        <Modal
        disabled = {isLoading}
        isOpen = {loginModel.isOpen}
        title="Login"
        actionLabel="Sign In"
        onClose={loginModel.onClose}
        onSubmit={onSubmit}
        body={bodyContent}
        footer={footerContent}
        />
    </div>
  )
}

export default LoginModel
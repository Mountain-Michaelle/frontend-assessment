import React, { useState } from "react";
import CryptoToCashConvert from "./ConvertOptions/cryptoToCashConvert";
import CryptoToCryptoConvert from "./ConvertOptions/cryptoToCryptoConvert";
import { ConversionFormState, EmailFormState } from "../../app/types/formData";
import TabButtons from "./tabButtons";
import CrytpToFiatLoan from "./ConvertOptions/crytpToFiatLoan";


export default function MainWizard(){

  const [step, setStep] = useState(1);
  const [convertState, setConvertState] = useState<ConversionFormState>({
    payAmount: 0,
    payCrypto: "USDT",      
    receiveAmount: 0,
    sendCrypto: null,        
    receivingWallet: null,   
    receiveCrypto: "NGN",    
  });

  const [emailState, setEmailState] = React.useState<EmailFormState>({ email: "" });
  const [loading, setLoading] = React.useState(false)
  const [msgLoading, setMsgLoading] = React.useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  
  const newErrors: Record<string, string> = {};  
 
  const validateEmail = () => {
     if (!emailState.email.trim()) {
      newErrors.email = "Email is required";

    } else if (!/^\S+@\S+\.\S+$/.test(emailState.email)) {
      newErrors.email = "Invalid email address";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const convertValidation = () => {
  
    const {payAmount, sendCrypto, receivingWallet, receiveAmount} = convertState
  
    if (payAmount  <= 0) {
      newErrors.payAmount = "Enter a valid amount"
    }
    
    if (receiveAmount <= 0){
      newErrors.receiveAmount = "Enter a valid amount"
    }

    if (!sendCrypto || !receivingWallet) {
      newErrors.sendCrypto = "Select wallets"
    }
  
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  

  const handleStep = (id:number) => {
    setStep(id)
  }

  const handleSubmit = () => {
    if (step === 1) {
      if (!convertValidation()) return;
          setLoading(true);
    }   
  };

  const handleUpdateSubmit = () => {
     if (step === 2) {
      if (!validateEmail()) return;  
      setMsgLoading(true);
  
      console.log("Sumbit Email:", {
         emailState,
      });
    }
  }
  

  return (
    <div className="flex flex-col justify-center items-center">

    <TabButtons onChange={handleStep} activeTab={step}/>
      {step === 1 && (
        <CryptoToCashConvert
          state={convertState}
          onChange={setConvertState}
          errors={errors}
          loading={loading}
          onSubmit={() => handleSubmit()}
        />
      )}

      {step === 2 && (
        <CryptoToCryptoConvert
          state={emailState}
          loading={msgLoading}
          onChange={setEmailState} 
          errors={errors}
          onSubmit={() => handleUpdateSubmit()}         
        />
      )}

      {step === 3 && <CrytpToFiatLoan />}
    </div>
  );
};


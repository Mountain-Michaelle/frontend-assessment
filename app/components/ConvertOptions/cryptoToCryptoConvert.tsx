import { EmailFormState } from "../../types/formData";
import Image from 'next/image';

interface ConvertProps {
  state: EmailFormState;
  errors: Record<string, string>
  loading: boolean
  onChange: (state: EmailFormState) => void;
  onSubmit: () => void;
}

export default function CryptoToCryptoConvert({ state, onChange, onSubmit, errors, loading}:ConvertProps){
    console.log(errors)
    
    return (
    <div className="flex justify-center items-center flex-col gap-8 ">
       <div className="mt-20 text-center w-[85%] ">
          <h1 className="text-center font-bold text-grn text-[32px]">Coming Soon!</h1>
          <p className="text-md font-semibold text-[#4F4F4F] ">{"Cash to Crypto is almost here.Enter your email and we’ll let you know the moment it’s live."}
        </p>
       </div>
      <div className="flex flex-col w-[90%]">
      <label className="text-grn font-semibold">Email</label>
      <span className=' border border-brd rounded-3xl  '>
         <input
        type="email"
        
        className="border-none py-4 px-6 w-full outline-none  rounded-3xl"
        value={state.email} 
        onChange={(e) =>
          onChange({ email: e.target.value })
        }
      />
      </span>  
      </div>        

      {
            errors.email && <div className="flex flex-start ml-15 w-full">
              <p className="text-red-500 text-left text-xs py-0">{errors.email} </p> 
              </div>
          }

       <div className='w-[90%] relative mt-9 '>
          <button
          className={`${loading && 'text-[#e6fbf2]/30'} bg-btn_bg w-full py-3 md:py-5 px-10 text-lg
           rounded-[30px] text-[#E6FBF2] text-[16px]`}
           disabled={loading}
          onClick={onSubmit}
        >
           {
              loading && 
               <Image src="./spinner.svg" alt="loading" fill className="stroke-3" /> 
                
            }
          Update me
        </button>
      </div> 
    
    </div>
  );
};


// StepConvert.tsx
import { ConversionFormState } from "@/app/types/formData";
import { CRYPTOS } from "./cryptoData";
import { WALLET } from "./walletData";
import CryptoSelect from "../cryptoSelect";
import Image from "next/image";

interface FormProp {
  state: ConversionFormState;
  onChange: (state: ConversionFormState) => void;
  loading: boolean
  errors:Record<string, string>
  onSubmit: () => void;
}

export default function CryptoToCashConvert({ state, onChange, loading, errors, onSubmit}:FormProp){
  console.log(errors)


  return (
    <div className="py-5 w-full sm:[70%] md:max-w-150 md:shadow-lg">
      <div className="flex w-full justify-center items-center flex-col gap-4" >
        <div className="p-3 flex justify-between w-[90%] border border-brd rounded-3xl">
          <div className="flex flex-col gap-2">
            <label className="font-bold text-grn text-xs ">You Pay</label>
            <input
              type="decimal"
              className="border-none w-20 outline-none"
              value={state.payAmount.toFixed(2)}
              onChange={(e) =>
                onChange({ ...state, payAmount: Number(e.target.value) })
              }
            />
          </div>
        
          <CryptoSelect
            value={state.payCrypto}
            options={CRYPTOS}
            placeholder="ETH"
            onChange={(payCrypto) =>
              onChange({ ...state, payCrypto })
            }
          />
        </div>
          {
            errors.payAmount && <div className="flex flex-start ml-15 w-full">
              <p className="text-red-500 text-left text-xs py-0">{errors.payAmount} </p> 
              </div>
          }
        <div className="p-3 flex justify-between w-[90%] border border-brd rounded-3xl">
          <div className="flex flex-col gap-2 ">
            <label className="font-bold text-xs text-grn ">You Receive</label>
            <input
            className="w-20 border-none outline-none"
            type="decimal"
            value={state.receiveAmount.toFixed(2)}
            onChange={(e) =>
              onChange({ ...state, receiveAmount: Number(e.target.value) })
            }
                />        
          </div>
            <CryptoSelect
            value={state.receiveCrypto}
            placeholder="NGN"
            options={CRYPTOS}
            onChange={(receiveCrypto) =>
              onChange({ ...state, receiveCrypto })
            }
            dropdownWidthPx={300}
          />
          
        </div>
             {
            errors.receiveAmount && <div className="flex flex-start ml-15 w-full">
              <p className="text-red-500 text-left text-xs p-0 py-0">{errors.receiveAmount} </p> 
              </div>
          } 
        <div className="flex flex-col items-center justify-center w-full ">     

            <div className="py-4 px-2 flex flex-col justify-between w-[90%]">
              <label className="text-grn text-[16px] font-semibold">Pay from </label>
              <CryptoSelect
                value={state.sendCrypto}
                options={WALLET}
                onChange={(sendCrypto) =>
                  onChange({ ...state, sendCrypto })
                }
                searchable={false}
                dropdownWidthPx={100}
              />
            </div>
          
                
            <div className="py-4 px-2 flex flex-col hover:cursor-pointer justify-between w-[90%] rounded-2xl"> 
                <label className="text-grn text-[16px] font-semibold">Pay to</label>
                <CryptoSelect
                value={state.receivingWallet}
                options={WALLET}
                onChange={(receivingWallet) =>
                  onChange({ ...state, receivingWallet})
                }
                searchable={false}
                dropdownWidthPx={100}
              />
            </div>
        </div>     
          {
            errors.sendCrypto && <div className="flex flex-start ml-15 w-full">
              <p className="text-red-500 text-left text-xs p-0 py-0">{errors.sendCrypto} </p> 
              </div>
          } 
         <button className={`bg-btn_bg w-[80%] rounded-3xl py-3 relative
          px-4 ${loading ? 'text-white/20' : 'text-white'} text-[16px] font-semibold`} disabled={loading} onClick={onSubmit}>            
            {
              loading && 
               <Image src="./spinner.svg" alt="loading" fill className="stroke-3" /> 
                
            } Convert Now
          </button>

      </div>

    </div>
  );
};



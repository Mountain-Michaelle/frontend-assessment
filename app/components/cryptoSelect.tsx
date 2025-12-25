import Image from 'next/image'; 
import { useEffect, useRef, useState } from "react";
import {ChevronDown} from 'lucide-react' 
import {Search} from 'lucide-react'

  interface CryptoSelectProps<
  TSymbol extends string | null,
  TOption extends { symbol: TSymbol; icon: string }
> {
  value: TSymbol;
  options: TOption[];
  onChange: (value: TSymbol) => void;

  dropdownWidthPx?: number;
  searchable?: boolean;
  placeholder?: string;

}

export default function CryptoSelect<
 TSymbol extends string | null,  
 TOption extends {symbol: TSymbol; icon:string}>
 ({
  value,
  options,
  onChange,
  searchable = true,
  placeholder = "Select an option",
}: CryptoSelectProps<TSymbol, TOption>) {


  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const selected = options.find(o => o.symbol === value);

   const toggle = () => {    
    setOpen(v => !v);
  };

  useEffect(() => {
   const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  
 const filtered = searchable
    ? options.filter(o =>
        o.symbol?.toLowerCase().includes(search.toLowerCase())
      )
    : options;

  return (
    <div className="relative w-full" ref={ref}>
      {/* Trigger */}
      <div className="flex justify-end">
         <button
        type="button"
        onClick={toggle}
        className={`${!searchable && 'w-full  border border-brd  rounded-[30px]'} flex items-center justify-between gap-2  rounded px-3 py-4 bg-white`}
      >
        {selected ? (
          <span className="flex items-center text-sm font-bold text-grn gap-2">
            <span className='w-5 h-5 relative'><Image src={`${selected.icon}`} alt="" fill  /> </span> {selected.symbol}
          </span>
        ) : (
          <span className={`text-grn text-[14px] ${searchable && 'font-bold'}  flex items-center`}>
            
            {
              placeholder === "NGN" && 
              <span className='w-5 h-5 relative'>
                <Image src='./crypto_symbols/ngn.svg' alt="" width={15} height={15} /> 
              </span >
            }

            {
              placeholder === "ETH" && 
              <span className='w-5 h-5 relative'>
                <Image src='./crypto_symbols/etha.svg' alt="" width={20} height={20}  /> 
              </span >
            }
            {placeholder}
        
          </span>

          
        )}
        <span className="text-xs"><ChevronDown className="text-gray-600" /></span>
      </button>

      </div>
     
      {/*  Dropdown */}
      {open && (
        <div
          className={`w-full absolute right-0 top-12 ${!searchable && ' overflow-hidden '} border border-brd z-50 rounded bg-white`}
        >
          {searchable && ( <div className="flex items-center">
          <Search className='text-md pl-2 ' />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..."
              className="border border-brd w-full p-4 border-none outline-none"
              autoFocus
            />
          </div>
            
          )}

          <div className="max-h-64 overflow-y-auto">
            {filtered.map(opt => (
              <div
                key={opt.symbol}
                onClick={() => {
                  onChange(opt.symbol);
                  setOpen(false);
                  setSearch("");
                }}
                className={`
                  px-3 py-2 cursor-pointer flex items-center gap-2
                  hover:bg-gray-100
                  ${value === opt.symbol ? "bg-gray-200 font-semibold" : ""}
                `}
              >
                <span className='w-5 h-5 relative'><Image src={`${opt.icon}`} alt="" fill  /> </span>
                {opt.symbol} 
              </div>
            ))}

            {filtered.length === 0 && (
              <div className="px-3 py-2 text-gray-400">No results</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
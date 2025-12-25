import { tabs } from "./ConvertOptions/tabData";
import '../style/breakpoint.css'
interface TabProps {
  activeTab: number,
  onChange: (id:number) => void
}
export default function TabButtons({activeTab, onChange}:TabProps) {

  
  return (
    <div className=" w-[98%] md:w-100 ">
      <div className='mt-7 flex'>
          <div  className="flex crd md:flex-row w-full  bg-gray-100 rounded-2xl ">

       { tabs.map((tab, _) => (
            <button key={tab.id} className={` ${activeTab === tab.id && 'bg-btn_bg text-white'}
             py-2 px-2.5 text-gray-700 rounded-[30px] text-[13px] md:text-[14px] w-full`} 
            onClick={() => onChange(tab.id)}> 
              {tab.title}
          </button>
         
        ))}
         </div>
      

      </div>
    </div>
  );
};


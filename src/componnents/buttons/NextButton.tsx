import { BiSolidRightArrow } from "react-icons/bi";

interface ButtonProps {
    onClick: () => void
  }

export default function NextButton({onClick}: ButtonProps){
    return(
        <button className="h-12 w-32 rounded-lg border-[3px]
         border-transparent bg-[#5361FF] text-lg font-semibold
         text-white hover:border-white"
         onClick={onClick}>
            Próximo <BiSolidRightArrow className="w-[4px] h-[4px]"/>
        </button>
    )
}
interface ButtonProps {
    onClick: () => void
  }

export default function BackButton({onClick}: ButtonProps){
    return(
        <button className="h-12 w-32 rounded-lg border-[3px]
         border-transparent bg-[#2F2E41] text-lg font-semibold
         text-white hover:border-white"
         onClick={onClick}>
            Voltar
        </button>
    )
}
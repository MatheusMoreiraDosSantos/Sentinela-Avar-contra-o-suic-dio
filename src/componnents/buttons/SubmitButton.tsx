interface ButtonProps {
    onClick: () => void
  }

export default function SubmitButton({onClick}: ButtonProps){
    return(
        <button className="h-12 w-32 rounded-lg border-[3px]
         border-transparent bg-[#5361FF] text-lg font-semibold
         text-white hover:border-white"
         onClick={onClick}>
            Enviar
        </button>
    )
}
import { Button } from "./ui/button"

export default function FooterCTA() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 rounded-3xl bg-[#25C9BA] px-4 py-16 text-center sm:px-8 md:px-16">
      <Button variant="outline" className="border-2 border-[#25C9BA] bg-transparent text-[#25C9BA] hover:bg-[#25C9BA] hover:text-white">
        Clique Aqui
      </Button>
    </div>
  )
} 
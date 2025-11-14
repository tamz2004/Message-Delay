import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

type Props = {
    mood: string,
    setMood: (val:string) => void,
    onGenerate: () => void,
    disabled:boolean
}

const MoodInput = ({ mood, setMood, onGenerate, disabled }: Props) => {
  return (
    <div>
        <Input
          placeholder="How are you feeling today? (Happy, sad, angry)"
          value="Happy Guys"
          onChange={() => console.log('Hello')}
          disabled={true}
        />
        <Button className="w-full" onClick={()=> alert(123)} disabled={false} >
          Generate Email Template
        </Button>
    </div>
  )
}

export default MoodInput
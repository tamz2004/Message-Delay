import MoodInput from '@/components/MoodInput'
import React, { useState } from 'react'


const Home = () => {

 const [mood, setMood] = useState("");
 const [subject, setSubject] = useState("");
 const [footer, setFooter] = useState("");
 const [generated, setGenerated] = useState(false);


  return ( 
    <div className='max-w-xl mx-auto mt-20 p-6 rounded-lg shadow-sm bg-white space-y-6'>
      <h2 className='text-2xl font-bold text-gray-800'> Moodmail : Generator </h2>
      <MoodInput/>
    </div>
  )
}
 
export default Home
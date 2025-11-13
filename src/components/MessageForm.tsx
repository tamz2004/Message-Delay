import React, { useEffect, useState } from 'react'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import {Input} from './ui/input'

const MessageForm = () => {
  
    const [message, setMessage] = useState<string>("");
    const [delay, setDelay] = useState<number>(10);
    const [isSending, setIsSending] = useState<boolean>(false);
    // use number | null for browser setTimeout id
    const [timerId, setTimerId] = useState<number | null>(null);
    const [sentMessage, setSentMessage] = useState<string>("");

    const handleSend = () =>
    {
        setIsSending(true)
        
        // use window.setTimeout which returns a number in browsers
        const id = window.setTimeout(() => 
        {
            setSentMessage(message);
            setMessage("");
            setIsSending(false);
        }, delay * 1000);

        setTimerId(id);
    }

    const handleCancel = () =>
    {
        if (timerId !== null) {
            clearTimeout(timerId);
            setTimerId(null);
        }
        setIsSending(false);
    }

    // cleanup on unmount: ensure any pending timeout is cleared
    useEffect(() => {
        return () => {
            if (timerId !== null) {
                clearTimeout(timerId);
            }
        }
    }, [timerId]);


  return (
    <div className = 'max-w-md mx-auto mt-20 p-6 border rounded-lg shadow-sm bg-white space-y-4'>
        <h2 className='text-2xl font-bold text-gray-800' >DM Delay Button</h2>
    <Textarea
        placeholder='Type Your Message'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        />

        <Input
        type='number'
        placeholder='Delay in seconds'
        value={delay}
        onChange={(e) => setDelay(Number(e.target.value))}
        disabled = {isSending}
        />

        { !isSending ? (
            <Button className = 'w-full' onClick={handleSend}>
                Send with delay
            </Button>
        ) : (
            <Button className = 'w-full' variant="destructive" onClick={handleCancel}>
                Cancel Sending
            </Button>
        ) }

        {sentMessage && (<div className='bg-green-100 border rounded p-3 text-green-900'>
                <p className='font-semibold'>Message Sent</p>
                <p>{sentMessage}</p>
            </div>)}
    </div>
  )
}

export default MessageForm
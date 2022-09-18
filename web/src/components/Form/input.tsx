import {InputHTMLAttributes} from 'react'

interface InputProps extends InputHTMLAttributes<HTMLPictureElement>{}

export function Input (props: InputProps){
    <input
    {...props}
    className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder: text-zinc-900"
    />
}
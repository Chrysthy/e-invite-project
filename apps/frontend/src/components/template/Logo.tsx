import { Righteous } from "next/font/google"
import Image from 'next/image'
import Link from "next/link"

const fonte = Righteous({
    subsets: ["latin"],
    weight: "400"
})

export default function Logo() {

    return (

        <Link
            
            href="/"
            className={`"flex items-center gap-2"
            ${fonte.className}`}>
            
            <Image
                src="/logo.svg"
                width={50}
                height={50}
                alt="Logo"
            />
            
            <h1 className="flex flex-col items-center text-lg leading-5">
                
                <div>DIGITAL <span className="text-blue-500">E</span> </div>
                <div>INVITE</div>
            </h1>

        </Link>
    )
}
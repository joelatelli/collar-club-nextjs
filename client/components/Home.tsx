"use client"

import "@/styles/globals.css";
import styles from "@/styles/style";
import Link from "next/link"
import { Button } from './ui/button'


export default function HomeItems(){
    return (
        <div className="w-full h-fit p-20 flex items-center justify-center sm:gap-[10rem] gap-[2rem] flex-wrap animate-fad" >
            
            <div className="flex flex-col items-start  justify-around h-fit gap-[2rem] animate-fad">
                <h1 className="font-bold text-5xl sm:text-7xl">COLLAR <br />CARTEL</h1>
                <p className="sm:text-xl text-white">THE WORLD'S MOST EXCLUSIVE <br />MEMBERS ONLY PET SOCIAL CLUB</p>
                <p className={`${styles.paragraph}`}>
                    THE WORLD'S MOST EXCLUSIVE<br/>
                    MEMBERS ONLY PET SOCIAL CLUB
                </p>
                <Link href="/register">
                    <Button className="bg-black text-white hover:bg-slate-800 rounded-none w-[150px] h-[6vh] font-bold">
                        SUBMIT YOUR APPLICATION
                    </Button>
                </Link>
                        
            </div>

            <div className="sneaker w-[30rem] sm:h-[35rem] h-[20rem] animate-fad ">

            </div>
        </div>
    )
}
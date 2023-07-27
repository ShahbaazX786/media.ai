'use client';

import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const font = Montserrat({
    weight:'600',
    subsets:['latin']
});

const LandingNavbar = () => {
    const {isSignedIn} = useAuth();
    return (
        <div className="p-4 bg-transparent flex items-center justify-between">
            <Link href={'/'} className="flex items-baseline">
                <div className="relative h-15 w-15 mr-2">
                    <Image alt="Logo" src={'/MainLogo.png'} width={35} height={35} />
                </div>
                <h1 className={cn('text-2xl font-bold text-white',font.className)}>Media.<b className="text-purple-700">ai</b></h1>
            </Link>
            <div className="flex items-center gap-x-2">
                <Link  href={isSignedIn ? '/dashboard' : '/sign-up'}>
                    <Button variant={"outline"} className="rounded-full">Get Started</Button>
                </Link>
            </div>
        </div>
    )
}

export default LandingNavbar;
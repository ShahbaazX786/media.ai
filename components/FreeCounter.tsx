'use client'

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MAX_FREE_COUNT } from "@/constants";
import { Progress } from "@/components/ui/progress";
import { Button } from "./ui/button";
import { Zap } from "lucide-react";
import { useProModal } from "@/hooks/api-pro-modal";

interface FreeCounterProps{
    apiLimitCount:number;
    isPro:boolean;
}

const FreeCounter = ({apiLimitCount=0, isPro=false}:FreeCounterProps) => {
    const proModal = useProModal();
    const [mounted, setMounted] = useState(false);

    useEffect(()=>{
        setMounted(true);
    },[]);
    
    if(!mounted) return null; // to avoid hydration error.
    if(isPro) return null;

    return (
        <div className="px-3">
            <Card className="bg-white/10 border-0" >
                <CardContent className="py-6">
                    <div className="text-center text-sm text-white mb-4 space-y-2">
                        <p>
                            {apiLimitCount} / {MAX_FREE_COUNT} Free Trials
                        </p>
                        <Progress className="h-3" value={(apiLimitCount/MAX_FREE_COUNT)*100}></Progress>
                    </div>
                    <Button className="w-full" variant={"premium"} onClick={proModal.onOpen}>
                        Upgrade 
                        <Zap className="w-4 h-4 ml-2 fill-white"/>
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}

export default FreeCounter;
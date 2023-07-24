"use client";

import { Menu } from 'lucide-react'

import Sidebar from '@/components/Sidebar'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { useEffect, useState } from 'react'


interface MobileSidebarProps{
    apiLimitCount:number;
}

const MobileSidebar = ({apiLimitCount=0}:MobileSidebarProps) => {
    // fixing hydration error
    const [isMounted, setIsMounted] = useState(false);
    
    useEffect(()=>{
        setIsMounted(true);
    },[]);

    if(!isMounted){
        return null;
    }
    // fixed hydration error.

  return (
        <Sheet>
            <SheetTrigger>
                <Button variant='ghost' size='icon' className="md:hidden" >
                    <Menu />
                </Button>
            </SheetTrigger>
            <SheetContent side='left' className='p-0'>
                <Sidebar apiLimitCount={apiLimitCount} />
            </SheetContent>
        </Sheet>
  );
}

export default MobileSidebar

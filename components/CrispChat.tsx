'use client';

import { useEffect } from "react";
import {Crisp} from "crisp-sdk-web";

export const CrispChat = () =>{
    useEffect(()=>{
        Crisp.configure("d5bab305-8183-4dc9-a9d0-ed95250433ff"); // given ! as typescript was giving me warning for unknown scenario.
    },[]);

    return null; // returning null as this component just configures crispchat and returns nothing actually.
}
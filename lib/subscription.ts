// This util function shall check if user is subscribed to any plan or not

import { auth } from "@clerk/nextjs";
import prismaDB from "./prismadb";


const DAY_IN_MS = 86_400_000;

export const checkSubscription = async () => {
    const {userId} = auth();

    if(!userId){
        return false;
    }

    const userSubscription = await prismaDB.userSubscription.findUnique({
        where:{
            userId
        },
        select:{
            stripeSubscriptionId:true,
            stripeCurrentPeriodEnd:true,
            stripePriceId:true,
            stripeCustomerId:true
        }
    })

    if(!userSubscription){
        return false;
    }

    const isValidSubscription = userSubscription.stripePriceId && userSubscription.stripeCurrentPeriodEnd?.getTime()! + DAY_IN_MS > Date.now();
    return !!isValidSubscription;
}
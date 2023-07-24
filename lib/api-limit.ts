import {auth} from '@clerk/nextjs';

import prismaDB from '@/lib/prismadb';
import { MAX_FREE_COUNT } from '@/constants';

export const increaseApiLimit = async () => {
    const {userId} = auth();
    if(!userId){
        return;
    }
    const userApiLimit = await prismaDB.userApiLimit.findUnique({
        where:{
            userId:userId
        }
    });
    if(userApiLimit){
        await prismaDB.userApiLimit.update({
            where:{userId:userId},
            data:{count:userApiLimit.count+1}
        });
    }else{
        await prismaDB.userApiLimit.create({
            data:{userId:userId, count:1}
        });
    }
}

export const checkApiLimit = async ()=>{
    const {userId} = auth();
     if (!userId) {
       return;
     }
     const userApiLimit = await prismaDB.userApiLimit.findUnique({
       where: {
         userId: userId,
       },
     });
     if (!userApiLimit || userApiLimit.count < MAX_FREE_COUNT) {
        return true;
     }
     else{
        return false;
     }
};

export const getApiLimitCount = async()=>{
     const { userId } = auth();
     if (!userId) {
       return 0;
     }

     const userApiLimit = await prismaDB.userApiLimit.findUnique({
        where:{
            userId //as we have used userId as a variable and the param is also userId so we can use 'userId' instead of 'userId:userId'
        }
     });
     
     if(!userApiLimit){
        return 0;
     }else{
        userApiLimit.count;
     }
}
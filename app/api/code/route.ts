import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';
import {ChatCompletionRequestMessage, Configuration, OpenAIApi} from 'openai';
import { checkApiLimit, increaseApiLimit } from "@/lib/api-limit";
import { checkSubscription } from '@/lib/subscription';


const config = new Configuration({
    apiKey:process.env.OPEN_API_KEY,
});

const openAI = new OpenAIApi(config);

const BootInstructions:ChatCompletionRequestMessage = {
    role:'system',
    content:'Assume you are the best code Generator. you must provide answers only in markdown code snippets. Use code comments for explanations.'
}

export async function POST(req:Request) {
    try{
        const { userId } = auth();
        const body = await req.json();
        const { messages } = body;
        if(!userId){
            return new NextResponse('Unauthorized', {status:401});
        }

        if (!config.apiKey) {
            return new NextResponse("OpenAI API is not properly configured", {status: 500,});
        }

        if(!messages){
            return new NextResponse('Please enter a valid generative message', {status:400});
        }
        
        const freeTrial = await checkApiLimit();
        const isPro = await checkSubscription();
        if(!freeTrial && !isPro){
            return new NextResponse('Free trial has Either expired or you have used up your free tries',{status:403})
        }

        const response = await openAI.createChatCompletion(
            {
                model:"gpt-3.5-turbo",
                messages: [BootInstructions, ...messages]
            }
        );

        if(!isPro){
            await increaseApiLimit();
        }
        return NextResponse.json(response.data.choices[0].message);
    }
    catch(error){
        console.log('CODE_ERROR:', error);
        return new NextResponse('Internal Server Error', {status:500});
    }
}
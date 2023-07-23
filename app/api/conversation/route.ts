import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';
import {Configuration, OpenAIApi} from 'openai';

const config = new Configuration({
    apiKey:process.env.OPEN_API_KEY,
});

const openAI = new OpenAIApi(config);

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

        const response = await openAI.createChatCompletion(
            {
                model:"gpt-3.5-turbo",
                messages
            }
        );
        return NextResponse.json(response.data.choices[0].message);


    }
    catch(error){
        console.log('Conversation_ERROR:', error);
        return new NextResponse('Internal Server Error', {status:500});
    }
}
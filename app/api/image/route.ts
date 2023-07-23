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
        const { prompt, amount=1, resolution='512x512' } = body;
        if(!userId){
            return new NextResponse('Unauthorized', {status:401});
        }

        if (!config.apiKey) {
            return new NextResponse("OpenAI API is not properly configured", {status: 500,});
        }

        if(!prompt){
            return new NextResponse('Error!, Please enter a valid prompt to continue', {status:400});
        }
        if(!amount){
            return new NextResponse('Error!, Please enter a valid amount of images to generate', {status:400});
        }
        if(!resolution){
            return new NextResponse('Error!, Please enter a valid resolution', {status:400});
        }

        const response = await openAI.createImage(
            {
                prompt,
                n:parseInt(amount,10),
                size:resolution
            }
        );
        return NextResponse.json(response.data.data);


    }
    catch(error){
        console.log('IMAGE_ERROR:', error);
        return new NextResponse('Internal Server Error', {status:500});
    }
}
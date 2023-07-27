'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage } from "./ui/avatar";


const Testimonials = [
    {
        name:'Shadie Sleem',
        avatar:'SL',
        title:'Music Director',
        src:'https://i.pravatar.cc/150?img=33',
        description:'Though AI has advanced leaps and bounds recently with tools like these. But it still can\'t replace Real Artists.'
    },
    {
        name:'Nolan Chathurvedi',
        avatar:'NC',
        title:'Backend Engineer',
        src:'https://i.pravatar.cc/150?img=12',
        description:'As a Backend Engineer myself, I am amazed by the code generation tool.'
    },
    {
        name:'Angela Woods',
        avatar:'AW',
        title:'UI/UX Designer',
        src:'https://i.pravatar.cc/150?img=5',
        description:'This has been a goto for me to get inspiration and new Ideas.'
    },
    {  
        name:'Chad',
        avatar:'RT',
        title:'Full Stack Developer',
        src:'https://i.pravatar.cc/150?img=54',
        description:'Best use of AI all in one place 10/10. would recommend!.'
    },
]

const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
        <h2 className="text-center text-4xl text-white font-extrabold mb-10">
            Testimonials
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Testimonials.map((T)=>(
                <Card key={T.description} className="bg-[#192339] border-none text-white">
                    <CardHeader>
                        <CardTitle className="flex items-center justify-between gap-x-2">
                            <div>
                                <p className="text-lg">{T.name}</p>
                                <p className="text-zinc-400 text-sm">{T.title}</p>
                            </div>
                            <Avatar>
                                <AvatarImage src={T.src} alt={T.avatar} />
                            </Avatar>
                        </CardTitle>
                        <CardContent className="pt-4 px-0">
                           ~ {T.description}
                        </CardContent>
                    </CardHeader>
                </Card>
            ))}
        </div>
    </div>
  )
}

export default LandingContent;
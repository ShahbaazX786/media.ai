import {PrismaClient} from '@prisma/client';

declare global{
    var prisma: PrismaClient | undefined;
};
// this line adds prisma variable to global window.

const prismaDB = globalThis.prisma || new PrismaClient();
// this line makes sure if there is any existing prismaclient running then to use that only, without creating a new one.

if(process.env.NODE_ENV!=='production'){
    globalThis.prisma = prismaDB;
}

export default prismaDB;
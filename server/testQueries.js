const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient({ log: ['query', 'info', 'warn', 'error'] });

async function run() {
    console.log("Testing queries...");
    
    // Doctor list query
    let start = Date.now();
    await prisma.doctor.findMany();
    console.log(`Doctor list query: ${Date.now() - start} ms`);

    // Blog list query (wait, is there a Blog model?)
    try {
        start = Date.now();
        await prisma.blogs?.findMany() || prisma.blog?.findMany();
        console.log(`Blog list query: ${Date.now() - start} ms`);
    } catch(e) {}
    
    process.exit(0);
}
run();

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
    errorFormat: 'minimal',
    log: [
        {
            emit: 'event',
            level: 'query',
        },
    ],
}) as PrismaClient & {
    $on(eventType: 'query', callback: (event: any) => void): void;
};

prisma.$on('query', (e) => {
    if (e.duration > 500) {
        console.log(`[SLOW QUERY] Query name: ${e.query} | Execution time: ${e.duration}ms`);
    } else {
        console.log(`Query name: ${e.query} | Execution time: ${e.duration}ms`);
    }
});

export default prisma;
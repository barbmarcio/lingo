import "dotenv/config";

import * as schema from '../db/schema';
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

const sql = neon(process.env.DATABASE_URL!);
// @ts-ignore
const db = drizzle(sql, { schema });

const main = async () => {
    try {
        console.log('Seeding the database');

        await db.delete(schema.courses);
        await db.delete(schema.userProgress);

        await db.insert(schema.courses).values([
            {
                id: 1,
                title: 'English',
                imageSrc: '/us.svg'
            },
            {
                id: 2,
                title: 'Brazilian Portuguese',
                imageSrc: '/br.svg'
            },
            {
                id: 3,
                title: 'Italian',
                imageSrc: '/it.svg'
            },
            {
                id: 4,
                title: 'French',
                imageSrc: '/fr.svg'
            },
            {
                id: 5,
                title: 'Spanish',
                imageSrc: '/es.svg'
            },
            {
                id: 6,
                title: 'Croatian',
                imageSrc: '/hr.svg'
            },
        ])

        console.log('Seeding finished');
    } catch (error) {
        console.error(error);
        throw new Error('Failed to seed the database')
    }
}

main();
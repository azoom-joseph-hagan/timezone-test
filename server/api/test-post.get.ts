import { eq } from 'drizzle-orm';
import { db } from '~/drizzle/index'
import { testTable } from '~/drizzle/schema/test-table'


export default defineEventHandler(async () => { 

    const testTables = await db.select().from(testTable)
    return testTables
  })
  
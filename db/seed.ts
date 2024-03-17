
import { db, ScarlettNote } from 'astro:db';

export default async function() {
  await db.insert(ScarlettNote).values([
    { text: "ddwa", title: "WOWZA"},
  ])
}
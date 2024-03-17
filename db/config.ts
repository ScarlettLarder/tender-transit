import { defineDb, defineTable, column } from 'astro:db';

const Note = defineTable({
  columns: {
    note: column.text(),
    date: column.date(),
  }
})

export default defineDb({
  tables: { Note },
})
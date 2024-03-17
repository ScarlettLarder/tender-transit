import { defineDb, defineTable, column } from 'astro:db';

const ScarlettNotes = defineTable({
  columns: {
    text: column.text(),
    date: column.date(),
  }
})

const Note = defineTable({
  columns: {
    note: column.text(),
    date: column.date(),
  }
})

const ScarlettNote = defineTable({
  columns: {
    text: column.text(),
    title: column.text(),
  }
})

export default defineDb({
  tables: { ScarlettNotes, Note, ScarlettNote },
})
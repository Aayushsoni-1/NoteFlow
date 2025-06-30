import { Note } from '../models/Note.js'

// Code of the Function to get all the Notes that will be displayed.
export async function getAllNotes(req, res) {
    try {
        const notes = await Note.find().sort({createdAt: -1}); //This will show the latest written note at first!
        res.status(200).json(notes)
    } catch (error) {
        console.error("Error in getting all the Notes", error)
        res.status(500).json("Internal Server Error")
    }
}

// code of the Function to create a new Note and the new Note will require title and the content
export async function createNote(req, res) {
    try {
        const { title, content } = req.body

        const note = new Note({ title, content })
        const savedNote = await note.save()
        res.status(201).json(savedNote)

    } catch (error) {
        console.error("Error in Creating a Note:", error)
        res.status(500).json({ message: "Error in creating a Note!" })
    }
}

export async function getNoteById(req,res){
    try {
        const {title, content} = req.body
        const noteById = await Note.findById(req.params.id)
        if(!noteById) return res.status(404).json({message:"Note not found"})
        res.json(noteById)
    } catch (error) {
        console.error("Error in getting a Note:", error)
        res.status(500).json({ message: "Error in getting a Note!" })
    }
}

export async function updateNote(req, res) {
    try {
        const { title, content } = req.body
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, { title, content },
            {
                new: true
            })
        if (!updatedNote) return res.send(404).json({ message: "Note not found" })
        res.status(200).json(updatedNote)
    } catch (error) {
        console.error("Error in Updating a Note:", error)
        res.status(500).json({ message: "Error in updating a Note!" })
    }
}

export async function deleteNote(req, res) {
    try {
        const { title, content } = req.body
        const deletedNote = await Note.findByIdAndDelete(req.params.id, { title, content })
        if (!deletedNote) return res.status(404).json({ message: "Note not Found" })
        res.status(200).json({ message: "The Note is deleted successfully!" })
    } catch (error) {
        console.error("Error in Updating a Note:", error)
        res.status(500).json({ message: "Error in deleting a Note!" })
    }
}
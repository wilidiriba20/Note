import Note  from "../models/Note.js";



export async function getall(_, res) {
try {
    const notes=await Note.find().sort({createdAt:-1});//newest  first
    res.status(200).json(notes);

} catch (error) {
    console.error("Error in getall controller",error);
    res.status(500).json({message:"internal server error"});
}}
export async function getById(req,res) {
    try {
        const note=await Note.findById(req.params.id);
        if(!note) return res.status(404).json({message:"Note not found"});
        res.json(note);
    } catch (error) {
        console.error("Error in getNoteById",error);
        res.status(500).json({message:"Internal Server error"});

    }

}
export async function postall(req, res) {
    try {
        const {title,content}=req.body;
        const newNote = new Note({ title, content });
        const savedNote=await newNote.save();
        res.status(201).json(savedNote);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
}
export async function putall(req, res) {
try {
    const {title,content}=req.body;
    const updateNote = await Note.findByIdAndUpdate(
        req.params.id,
        { title, content },
        { new: true }
    );
    if(!updateNote){
        return res.status(404).json({message:"Note not found"});
    }
    res.status(200).json(updateNote);
} catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });

}
}
export async function deleteall(req, res) {
    try {
        const deleteNote = await Note.findByIdAndDelete(
            req.params.id
        );
        if (!deleteNote) {
            return res.status(404).json({ message: "Note not found" });
        }
        res.status(200).json({message:"Note deleted sucessfully"});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });

    }
}
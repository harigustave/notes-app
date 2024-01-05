const fs=require('fs');
const chalk=require('chalk');

const getNotes = ()=>{
    return 'Your notes...'
}

const addNote=(title,body)=>{
    const notes=loadNotes()
    const duplicateNote= notes.find((note)=>note.title===title)
    if(!duplicateNote){
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    }else{
        console.log(chalk.red.inverse('Note title already taken....'))
    } 
}

const removeNote=(title)=>{
    const notes=loadNotes();
    const notesToKeep=notes.filter((note)=>note.title!==title)
    if(notes.length>notesToKeep.length){
        console.log(chalk.green.inverse('Note Removed successifylly!!!'));
        saveNotes(notesToKeep);
    }else{
        console.log(chalk.red.inverse('Note not Found...'));
    }
}

const listNotes=()=>{
    const notes=loadNotes();
    if(notes.length===0){
        console.log(chalk.red.inverse('Notes list is empty....'));
    }else{
        notes.forEach((note)=>{
            console.log(chalk.green.inverse('Note Title:') +note.title+'\t'+ chalk.green.inverse('Note Body:') +note.body+'\n');
        })
    }
}

const readNote=(title)=>{
    const notes=loadNotes();
    const noteToRead=notes.find((note)=>note.title===title);
    if(!noteToRead){
        console.log(chalk.red.inverse('Note Title not exist...'));
    }else{
        // noteToRead.forEach((note)=>{
            console.log(chalk.green.inverse('Note Title:') +noteToRead.title+'\t'+ chalk.green.inverse('Note Body:') +noteToRead.body+'\n');
        // })
    }
}

// Save notes as JSON to JSON file
const saveNotes=(notes)=>{
    const dataJSON=JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes=()=>{
    try{
        const dataBuffer=fs.readFileSync('notes.json')
        const dataJSON=dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e){
        return []
    }
}

module.exports={
    getNotes:getNotes,
    addNote:addNote,
    removeNote: removeNote,
    listNotes:listNotes,
    readNote:readNote,
}



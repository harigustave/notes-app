const chalk=require('chalk');
const yargs=require('yargs');
const getNotes=require('./notes');

const notes=[];

// Add note
yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type: 'string'
        },

        body:{
            describe:'Note bbody',
            demandOption:true,
            type:'string'
        }
    },
    handler:function(argv){
        console.log('Adding a new note...')
        console.log('Title:'+argv.title)
        console.log('Body:'+argv.body)
    }
})

//Remove command
yargs.command({
    command:'remove',
    describe: 'Remove a note',
    handler:function(){
        console.log('Removing a note...')
    }
})

//List command
yargs.command({
    command:'list',
    describe: 'List all notes',
    handler:function(){
        console.log('Listing all notes...')
    }
})

//Read command
yargs.command({
    command:'read',
    describe: 'Read a note',
    handler:function(){
        console.log('Reading a note...')
    }
})

console.log(yargs.argv);


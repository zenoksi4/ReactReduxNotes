import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Note = {
    id: string;
    title:string;
    created:string;
    category:string;
    content:string;
}


type NotesState = {
    list: Note[];
    listArchive: Note[];
}

const initialState: NotesState = {
    list: [ {              
        id: Math.random().toString(),
        title: 'note1',
        created: new Date().toLocaleDateString('uk'),
        category: 'Task',
        content: 'notes1 03.09.2022,02.09.2022'
    },
    {              
        id: Math.random().toString(),
        title: 'note2',
        created: new Date().toLocaleDateString('uk'),
        category: 'Idea',
        content: 'notes2 03.09.2022,02.09.2022'
    },
    {              
        id: Math.random().toString(),
        title: 'note3',
        created: new Date().toLocaleDateString('uk'),
        category: 'Task',
        content: 'notes3 03.09.2022,02.09.2022'
    },
    {              
        id: Math.random().toString(),
        title: 'note4',
        created: new Date().toLocaleDateString('uk'),
        category: 'Random Thought',
        content: 'notes4 03.09.2022,02.09.2022'
    },
    ],
    listArchive:[]
}   

type addNotesAction = {
    title:string;
    category:string;
    content:string;
}

const noteSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        addNote(state, action:PayloadAction<addNotesAction>) {
            state.list.push({
                id: Math.random().toString(),
                title: action.payload.title,
                created: new Date().toLocaleDateString('uk'),
                category: action.payload.category,
                content: action.payload.content,
            });
        },

        removeNote(state, action:PayloadAction<string>) {
            state.list = state.list.filter(note => note.id !== action.payload);
        },

        archiveNote(state, action:PayloadAction<string>) {
            let toArchiveNote = state.list.find(note => note.id === action.payload)
            if(toArchiveNote){
                state.listArchive.push(toArchiveNote);
            }
            state.list = state.list.filter(note => note.id !== action.payload);

        },

        unArchiveNote(state, action:PayloadAction<string>) {
            let toActiveNote = state.listArchive.find(note => note.id === action.payload)
            if(toActiveNote){
                state.list.push(toActiveNote);
            }
            state.listArchive = state.listArchive.filter(note => note.id !== action.payload);

        },
        editNote(state, action:PayloadAction<Note>) {
            let editNote = state.list.find((note => note.id === action.payload.id));
            if (editNote) {
                let indexEdit = state.list.indexOf(editNote)
                state.list.splice(indexEdit, 1, action.payload);
            }
        }
    },
});

export const { addNote , removeNote, archiveNote, unArchiveNote, editNote} = noteSlice.actions;

export default noteSlice.reducer;
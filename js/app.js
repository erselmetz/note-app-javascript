import CreateNoteBox from "../components/create-note-box.js";
import NoteList, { noteMoreOption } from "../components/note-list.js";
import Sidebar from "../components/sidebar.js";

const main = document.getElementById('main')

main.innerHTML = `
<side-bar></side-bar>
<div class="row mx-auto">
    <div id="content" class="d-block col-10 mx-auto position-fixed end-0 h-100 overflow-auto pb-3"></div>
</div>
`

const content = document.getElementById('content')


const noteIcon = document.getElementById('noteIcon')
const archiveIcon = document.getElementById('archiveIcon')
const binIcon = document.getElementById('binIcon')

// shade icon
const shadeNote = () => {
    noteIcon.classList.add('red')
    archiveIcon.classList.remove('red')
    binIcon.classList.remove('red')
}
const shadeArchive = () => {
    archiveIcon.classList.add('red')
    noteIcon.classList.remove('red')
    binIcon.classList.remove('red')
}
const shadeBin = () => {
    binIcon.classList.add('red')
    noteIcon.classList.remove('red')
    archiveIcon.classList.remove('red')
}

// note
noteIcon.addEventListener('click',() => {
    shadeNote()
    content.innerHTML = ` 
        <create-note-box></create-note-box>
        <note-list title="Sample Title" text="This is example of note text"></note-list>
        <note-list title="Sample Title" text="This is example of note text"></note-list>
        <note-list title="Sample Title" text="This is example of note text"></note-list>
        <note-list title="Sample Title" text="This is example of note text"></note-list>
        <note-list title="Sample Title" text="This is example of note text"></note-list>
        <note-list title="Sample Title" text="This is example of note text"></note-list>
        <note-list title="Sample Title" text="This is example of note text"></note-list>
        <note-list title="Sample Title" text="This is example of note text"></note-list>
        <note-list title="Sample Title" text="This is example of note text"></note-list>
    `
    noteMoreOption()
})

// archive
archiveIcon.addEventListener('click',() => {
    shadeArchive()
    content.innerHTML = ` 
        <note-list title="archive-list" text="this is your archive-list"></note-list>
        <note-list title="archive-list" text="this is your archive-list"></note-list>
        <note-list title="archive-list" text="this is your archive-list"></note-list>
        <note-list title="archive-list" text="this is your archive-list"></note-list>
        <note-list title="archive-list" text="this is your archive-list"></note-list>
    `
    noteMoreOption()
})

// bin
binIcon.addEventListener('click',() => {
    shadeBin()
    content.innerHTML = ` 
        <note-list title="bin-list" text="this is your bin-list"></note-list>
        <note-list title="bin-list" text="this is your bin-list"></note-list>
        <note-list title="bin-list" text="this is your bin-list"></note-list>
        <note-list title="bin-list" text="this is your bin-list"></note-list>
        <note-list title="bin-list" text="this is your bin-list"></note-list>
        <note-list title="bin-list" text="this is your bin-list"></note-list>
    `
    noteMoreOption()
})

document.querySelector('#noteIcon').click()
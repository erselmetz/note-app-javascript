import CreateNoteBox from "../../components/create-note-box.js";
import Sidebar from "../../components/sidebar.js";
import NoteList, { noteMoreOption } from "../../components/note-list.js";
import { emptyArr } from "../../components/add-empty-array.js";
import { checkIfEmptyOrNot } from "../../components/check-if-empty-or-not.js"

emptyArr()

fetch('../components/add-empty-array.js')
.then(response => {
    console.log('emptyArr')
})

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
    content.innerHTML = `<create-note-box></create-note-box>`
    const noteArr = JSON.parse(localStorage.getItem('note'))
    noteArr.forEach(el => {
        content.innerHTML += `<note-list note-token="${el.noteToken}" type='note' title="${el.title}" text="${el.body}"></>`
    });
    content.innerHTML += checkIfEmptyOrNot(noteArr,"Note")
    noteMoreOption()
})

// archive
archiveIcon.addEventListener('click',() => {
    content.innerHTML = ''
    shadeArchive()
    const noteArr = JSON.parse(localStorage.getItem('archive'))
    noteArr.forEach(el => {
        content.innerHTML += `<note-list note-token="${el.noteToken}" type='archive' title="${el.title}" text="${el.body}"></>`
    });
    content.innerHTML += checkIfEmptyOrNot(noteArr,"Archive")
    noteMoreOption()
})

// bin
binIcon.addEventListener('click',() => {
    content.innerHTML = ''
    shadeBin()
    const noteArr = JSON.parse(localStorage.getItem('bin'))
    noteArr.forEach(el => {
        content.innerHTML += `<note-list note-token="${el.noteToken}" type='bin' title="${el.title}" text="${el.body}"></>`
    });
    content.innerHTML += checkIfEmptyOrNot(noteArr,"Bin")
    noteMoreOption()
})

document.querySelector('#noteIcon').click()
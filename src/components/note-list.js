let type = ''
let noteToken = ''
let title = ''
let text = ''
let b1 = ''
let b2 = ''
let idB1 = ''
let idB2 = ''


export default class NoteList extends HTMLElement{
    constructor(){
        super()
    }
    render(){
        if(this.getAttribute('title') != null){
            title = this.getAttribute('title')
        }
        if(this.getAttribute('text') != null){
            text = this.getAttribute('text')
        }
        if(this.getAttribute('note-token') != null){
            noteToken = this.getAttribute('note-token')
        }
        if(this.getAttribute('type') == 'note'){
            b1 = 'Move to Archive'
            b2 = 'Move to Bin'
            idB1 = 'Archive'
            idB2 = 'Bin'
            type = 'note'
        }else if(this.getAttribute('type') == 'archive'){
            b1 = 'Move to Note'
            b2 = 'Move to Bin'
            idB1 = 'Note'
            idB2 = 'Bin'
            type = 'archive'
        }else if(this.getAttribute('type') == 'bin'){
            b1 = 'Move to Note'
            b2 = 'Move to Archive'
            idB1 = 'Note'
            idB2 = 'Archive'
            type = 'bin'
        }

        this.innerHTML = `
        <div class="card my-1">
            <div class="card-body">
                <div class="d-flex justify-content-between">
                    <h4 class="card-title">${title}</h4>
                    <input type="hidden" class="noteToken" value="${noteToken}"/>
                    <div class="dropdown">
                        <h4 class="card-title p-2 hover-pale-red rounded" data-bs-toggle="dropdown" >
                            <img src="./icon/three-dots-vertical.svg" />
                        </h4>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" id="moveTo${idB1}" href="#">${b1}</a></li>
                            <li><a class="dropdown-item" id="moveTo${idB2}" href="#">${b2}</a></li>
                            <li><a class="bin-delete-button dropdown-item d-none" href="#">Delete</a></li>
                            <li><a class="dropdown-item" href="#">cancel</a></li>
                        </ul>
                    </div>
                </div>
                <p class="card-text">${text}</p>
            </div>
        </div>
        `
    }
    connectedCallback(){
        this.render()
    }
}

customElements.define('note-list',NoteList)

export const noteMoreOption = () => {
    const button1 = document.querySelectorAll(`#moveTo${idB1}`)
    const button2 = document.querySelectorAll(`#moveTo${idB2}`)

    const cardTitle = document.querySelectorAll('.cardTitle')
    const cardBody = document.querySelectorAll('.cardBody')

    const token = document.querySelectorAll('.noteToken')

    const binDeleteButton = document.querySelectorAll('.bin-delete-button')

    // note token
    for (let i = 0; i < token.length; i++) {
        button1[i].addEventListener('click',()=>{

            let oldType = JSON.parse(localStorage.getItem(`${type}`))

            if(oldType[i].noteToken == token[i].value){

                let move = JSON.parse(localStorage.getItem(`${idB1.toLowerCase()}`))
                move.push({
                    title: (oldType[i].title != null)?oldType[i].title:'',
                    body: oldType[i].body,
                    noteToken: oldType[i].noteToken
                })

                localStorage.setItem(`${idB1.toLowerCase()}`,JSON.stringify(move))

                oldType.splice(i, 1)
                localStorage.setItem(`${type}`,JSON.stringify(oldType))

                document.querySelector(`#${type}Icon`).click()
                
            }
        })

        button2[i].addEventListener('click',()=>{

            let oldType = JSON.parse(localStorage.getItem(`${type}`))

            if(oldType[i].noteToken == token[i].value){

                let move = JSON.parse(localStorage.getItem(`${idB2.toLowerCase()}`))
                move.push({
                    title: (oldType[i].title != null)?oldType[i].title:'',
                    body: oldType[i].body,
                    noteToken: oldType[i].noteToken
                })

                localStorage.setItem(`${idB2.toLowerCase()}`,JSON.stringify(move))

                oldType.splice(i,1)
                localStorage.setItem(`${type}`,JSON.stringify(oldType))

                document.querySelector(`#${type}Icon`).click()
            }
        })
    }

    for (let i = 0; i < binDeleteButton.length; i++) {
        if(type == 'bin'){
            binDeleteButton[i].classList.remove('d-none')
        }
        binDeleteButton[i].addEventListener('click',() => {
            let olType = JSON.parse(localStorage.getItem(`${type}`))
            olType.splice(i ,1)
            localStorage.setItem(`${type}`,JSON.stringify(olType))
            document.querySelector(`#${type}Icon`).click()
        })
    }
}
export default class CreateNoteBox extends HTMLElement{
    constructor () {
        super()
    }

    randomString(max){
        const str = '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
        let p = ''
        for (let i = 0; i < max; i++) {
            p += str.charAt(Math.floor(Math.random() * str.length))
        }
        return p
    }
    
    render(){
        const buttonId = 'LoapsdkwSsd'
        const textareaId = 'hellasdwadsdwd8823ohaksdlasjdal'
        const textareaTitleId = 'zzsxsssdasdadasd'
        const textareaBodyId = 'pwlskdjisjdgagsdkashdkas'
        const cancelTextareaId = "asdwdwdwdwdwdwdwd"
        const saveTextareaButtonId = "IjsudJsdijwdJsdijwdjsad"

        this.innerHTML = `
            <div id="${buttonId}" class="card red my-4 rounded-pill hover-light-grey ps-3 user-select-none font-monospace">
                <div class="card-body">
                    add notes....
                </div>
            </div>

            <div id="${textareaId}" class="card my-4 rounded-3 hover-light-grey ps-3 user-select-none font-monospace"
                style="display: none;">
                <div class="card-body">
                    <input id="${textareaTitleId}" type="text" class="w-100 my-3" placeholder="Title..."/>
                    <textarea id="${textareaBodyId}" class="w-100" placeholder="Body..." style="height: 20vh;"></textarea>
                    <hr>
                    <div class="d-flex justify-content-end">
                        <button id="${cancelTextareaId}" class="btn border hover-border-red hover-text-red me-3">cancel</button>
                        <button id="${saveTextareaButtonId}" class="btn border hover-border-green hover-text-green">save</button>
                    </div>
                </div>
            </div>
        `
        const a = document.getElementById(`${buttonId}`)
        const b = document.getElementById(`${textareaId}`)
        const textareaTitle = document.getElementById(`${textareaTitleId}`)
        const textareaBody = document.getElementById(`${textareaBodyId}`)
        const cancelTextareaButton = document.getElementById(`${cancelTextareaId}`)
        const saveTextareaButton = document.getElementById(`${saveTextareaButtonId}`)

        a.addEventListener('click',()=>{
            a.style.display = 'none'
            b.style.display = 'block'
        })

        cancelTextareaButton.addEventListener('click',() => {
            a.style.display = 'block'
            b.style.display = 'none'
        })

        saveTextareaButton.addEventListener('click',() => {
            let oldNote = localStorage.getItem('note')

            if(textareaBody.value == null || textareaBody.value == ''){
                alert('Text body should not be empty')
            }else{
                let atitle = ''
                let aBody = textareaBody.value
                if(textareaTitle.value != null){atitle = textareaTitle.value}
                const newNote = JSON.parse(oldNote)

                const inputNewNote = {
                    title: atitle,
                    body: aBody,
                    noteToken: this.randomString(20)
                }
                newNote.push(inputNewNote)

                localStorage.setItem('note',JSON.stringify(newNote))

                // erased the textarea / input after submiting
                textareaTitle.value = ''
                textareaBody.value = ''

                // refresh after saving note
                document.querySelector('#noteIcon').click()
            }
        })
    }
    connectedCallback(){
        this.render()
    }
}

customElements.define('create-note-box',CreateNoteBox)
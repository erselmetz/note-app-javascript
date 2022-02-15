export default class CreateNoteBox extends HTMLElement{
    constructor () {
        super()
    }
    render(){
        this.innerHTML = `
            <div class="card my-4 rounded-pill hover-light-grey ps-3 user-select-none font-monospace">
                <div class="card-body">
                    add notes....
                </div>
            </div>
        `
    }
    connectedCallback(){
        this.render()
    }
}

customElements.define('create-note-box',CreateNoteBox)
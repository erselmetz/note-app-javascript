export default class NoteList extends HTMLElement{
    constructor(){
        super()
    }
    render(){
        let title = ''
        let text = ''

        if(this.getAttribute('title') != null){
            title = this.getAttribute('title')
        }
        if(this.getAttribute('text') != null){
            text = this.getAttribute('text')
        }

        this.innerHTML = `
        <div class="card my-1">
            <div class="card-body">
                <div class="d-flex justify-content-between">
                    <h4 class="card-title">${title}</h4>
                    <h4 class="card-title p-2 hover-pale-red rounded" id="noteMoreOption">
                        <img src="./icon/three-dots-vertical.svg" />
                    </h4>
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
    const action = document.querySelectorAll('#noteMoreOption')
    action.forEach((action)=>{
        action.addEventListener('click', () => {
            console.log(action);
        })
    })
}
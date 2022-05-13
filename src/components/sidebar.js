export default class Sidebar extends HTMLElement{
    constructor () {
        super()
        this.render()
    }
    render(){
        this.innerHTML = `
        <div class="d-block col-2 position-fixed start-0 border rounded border-red vh-100">
            <div id="noteIcon" class="my-5 p-3 d-flex align-items-center justify-content-center justify-content-lg-start
                hover-red rounded-3" type="button">
                <img src="/icon/pencil-fill" alt="">
                <span class="ms-2 d-none d-lg-block">Note</span>
            </div>
            <div id="archiveIcon" class="my-5 p-3 d-flex align-items-center justify-content-center justify-content-lg-start
            hover-red rounded-3" type="button">
                <img src="/icon/archive-fill" alt="">
                <span class="ms-2 d-none d-lg-block">Archive</span>
            </div>
            <div id="binIcon" class="my-5 p-3 d-flex align-items-center justify-content-center justify-content-lg-start
                hover-red rounded-3" type="button">
                <img src="/icon/trash-fill" alt="">
                <span class="ms-2 d-none d-lg-block">Bin</span>
            </div>
        </div>
        `
    }
    connectedCallback(){
        this.render()
    }
}
customElements.define('side-bar',Sidebar)
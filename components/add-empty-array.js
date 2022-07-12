export const emptyArr = () => {
    const emptyArr = []

    if(localStorage.getItem('note') == null){
        localStorage.setItem('note',JSON.stringify(emptyArr))
    }
    if(localStorage.getItem('archive') == null){
        localStorage.setItem('archive',JSON.stringify(emptyArr))
    }
    if(localStorage.getItem('bin') == null){
        localStorage.setItem('bin',JSON.stringify(emptyArr))
    }
}
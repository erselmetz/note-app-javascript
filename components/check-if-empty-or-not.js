export const checkIfEmptyOrNot = (data,type) => {
    var content = `
        <div class="mt-5 d-flex justify-content-center align-content-center">
            <div>
                <h1>${type} is Empty!</h1>
            </div>
        </div>
    `
    
    if (data.length <= 0){
        return content
    }else{return ''}
}
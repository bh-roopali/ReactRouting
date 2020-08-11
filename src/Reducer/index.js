

const add = (state = [], action) => {

    switch(action.type){
        case 'ADD' : {
            let aState = state
            let obj = {
            name: action.payload.name,
            city: action.payload.city
            }
            aState.push(obj)
            return state = aState
            
        }
    }
}

export default add
let initialValue ='black'

const ColorReducer=(state=initialValue,action)=>{
    const {type,payload}=action
    switch (type) {
        case 'green':
            return 'green'
        
        case 'red':
            return 'red'

        case 'blue':
            return 'blue'
    
        default:
            return state
    }
}

export default ColorReducer
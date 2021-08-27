
const newForEach = (arr,callback) =>{

    for(let index = 0; index<arr.length; index++){
        const elemento = arr[index]
        const cbIndex = index
        const array = arr
        callback(elemento,cbIndex,array)

    }
}

const newFill = (arr,valor,indiceInicial = 0,indiceFinal = arr.length) =>{
    if(indiceInicial<0){
        indiceInicial = arr.length + indiceInicial
    }
    if(indiceFinal<0){
        indiceFinal = arr.length + indiceFinal
    }
    for(let index = indiceInicial; index<indiceFinal; index++){
        arr[index]=valor
    }
    return arr
}

const newMap = (arr,callback) =>{
    const result = []

    for(let index = 0; index < arr.length; index++){
        const elemento = arr[index]
        const cbIndex = index
        const array = arr
        result.push(
            callback(elemento,cbIndex,array)
        )
        
    }
    return result
}

const newSome = (arr,callback) =>{

    for(let index = 0; index < arr.length; index++){
        const elemento = arr[index]
        const cbIndex = index
        const array = arr
        if(callback(elemento,cbIndex,array)){
            return true
        }
    }
    return false
}

const newFind = (arr,callback) =>{

    for(let index = 0; index < arr.length; index++){
        const elemento = arr[index]
        const cbIndex = index
        const array = arr
        if(callback(elemento,cbIndex,array)){
            return elemento
        }
    }
}

const newFindIndex = (arr,callback) =>{

    for(let index = 0; index < arr.length; index++){
        const elemento = arr[index]
        const cbIndex = index
        const array = arr
        if(callback(elemento,cbIndex,array)){
            return cbIndex
        }
    }
    return -1
}

const newEvery = (arr,callback) =>{

    for(let index = 0; index < arr.length; index++){
        const elemento = arr[index]
        const cbIndex = index
        const array = arr
        if(!callback(elemento,cbIndex,array)){
            return false
        }
    }
    return true
}

const newFilter = (arr,callback) =>{
    const result = []

    for(let index = 0; index < arr.length; index++){
        const elemento = arr[index]
        const cbIndex = index
        const array = arr
        if(callback(elemento,cbIndex,array)){
            result.push(elemento)
        }
    }
    return result
}

const newConcat = (...arrs) =>{
    const arrays = arrs
    const result = []

    for(let contador = 0; contador <arrs.length; contador++){
        for(let index = 0; index<arrays[contador].length; index++){
            const elemento = arrays[contador][index]
            result.push(elemento)
        }
    }
    
    return result
}

const newIncludes = (arr,valor,indexInicial=0) =>{

    if(indexInicial<0){
        indexInicial = arr.length + indexInicial
    }
    for(let index = indexInicial; index<arr.length; index++){
        const elemento = arr[index].toString()
        if(elemento === valor.toString()){
            return true
        }
    }
    return false
}

const newIndexOf = (arr,valor,indexInicial=0) =>{
    if(indexInicial<0){
        indexInicial = arr.length + indexInicial
    }
    for(let index = indexInicial; index<arr.length; index++){
        const elemento = arr[index].toString()
        if(elemento === valor.toString()){
            return index
        }
    }
    return -1
}

const newJoin = (arr,valor = ',') =>{
    let result = ''
    for(let index = 0; index<arr.length; index++){
        const elemento = arr[index].toString()
        result+= elemento
        if(index!==arr.length-1){
            result+= valor
        }
    }
    return result
}

const newReduce = (arr,callback,acumuladorInicial=0) =>{

    let acumulador = acumuladorInicial
    for(let index = 0; index<arr.length; index++){
        const elemento = arr[index]
        acumulador = callback(acumulador,elemento,index,arr)
    }
    return acumulador
}

const newSlice = (arr,indiceInicial=0,indiceFinal = arr.length) =>{
    if(indiceInicial<0){
        indiceInicial = arr.length + indiceInicial
    }
    if(indiceFinal<0){
        indiceFinal = arr.length + indiceFinal
    }
    let result = []

    for(let index = indiceInicial; index<indiceFinal; index++){
        const elemento = arr[index]
        result.push(elemento)
    }
    return result
}



var arr1 = [1, 2, [3, 4],5,[6,7],8,[9,]];

const newFlat = (arr,num=1) =>{
    let deep = num
    let arrayNovo = arr
    let result = []

    for(let profundidade = deep; profundidade>0; profundidade--){

        for(let index = 0; index<arrayNovo.length; index++){
            const elemento = arrayNovo[index]

            if(typeof elemento === 'object' && deep>0){

                for(let deepIndex = 0; deepIndex<elemento.length; deepIndex++){
                    result.push(elemento[deepIndex])
                }

            }else{
                result.push(elemento)
            }
        }
        arrayNovo = [...result]
        result = []
    }

    return arrayNovo
}

const newMapFlat = (arr,callback) =>{

    const result = []
    let newArray = []
    for(let index = 0; index < arr.length; index++){
        const elemento = arr[index]
        const cbIndex = index
        const array = arr
        newArray.push(
            callback(elemento,cbIndex,array)
        )
        
    }

    for(let index = 0; index<newArray.length; index++){
        const elemento = newArray[index]

        if(typeof elemento === 'object'){

            for(let deepIndex = 0; deepIndex<elemento.length; deepIndex++){
                result.push(elemento[deepIndex])
            }

        }else{
            result.push(elemento)
        }
    }
    return result
}

const newArrayof = (...args) =>{
    return [...args]
}

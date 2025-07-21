const bubbleSort = (arr:number[]): number[]  =>{
    for(let i=0;i<arr.length;i++){
        for(let j:number=0;j<arr.length;j++){
            if(arr[j]<arr[j-1]){
                [arr[j],arr[j-1]] = [arr[j-1],arr[j]]
            }
        } 
    }
    return arr
} 
const result = bubbleSort([5,4,3,2,1])
console.log(result)




const selectionSort = (arr:number[]) : number[] =>{
    for(let i=0;i<arr.length;i++){
        let min = i
        for(let j=i;j<arr.length;j++){
            if(arr[min]>arr[j]) min = j
        }
        if(min !== i) [arr[i],arr[min]] = [arr[min],arr[i]]
    }
    return arr
}
const selectionResult = selectionSort([5,4,3,2,1])
console.log(selectionResult)
//数组拍平手写题
let arr = [1,2,[3,[4,5,[6]]]];
function flatten(arr){
    if(!arr.length) return [];
    let res = []
    arr.forEach(element => {
        if(element instanceof Array){
            res = res.concat(flatten(element))
        }else{
            res.push(element)
        }
    });
    return res;
}
console.log(flatten(arr))

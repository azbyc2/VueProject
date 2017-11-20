//暴露函数到index中 
 export default function(time){
    let date = new Date(time);
    return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
}
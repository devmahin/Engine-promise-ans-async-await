// function name (){
//     console.log("My name is mahin howlader")
// }
// function stu (){
//     console.log("1 am a student.")
// }
// function live (){
//     console.log("1 live in barishal.")
// }

//  function loop (){
//   setTimeout(() =>{
//     let  classs = 0;
//     while(classs < 10000){
//        console.log(classs)
//        classs++;
//    }
//   }, 2000)
// }

// name()
// stu()
// loop()
// live()




// function promise() {
//     return new Promise((resolve, reject) => {
//         let m = Math.random()
//         if (m < 0.5) {
//             resolve(m)
//         }else{
//             reject(m)
//         }
//     })
// }

// promise()
//     .then(result => console.log(result))
//     .catch(err => console.log("reject", err))


// const num = document.getElementById("num");
// const numCount = document.getElementById("numCount");
// let click = true;
// let count = 0;
// let reset = true;
// let store;
// num.addEventListener("click", () => {
// if(count > 0 && count < 10 && reset ){
//     reset = false;
//     return clearInterval(store);
// }
// reset = true;

//     if (click) {
//          store = setInterval(() => {
//             count++;
//             numCount.innerText = count;
//             if (count < 10) {
//                 // num.setAttribute("disabled", true)
//             } else if (count === 10) {
//                 click = false;
//                 // num.removeAttribute("disabled")
//                 clearInterval(store)
//             }
//             console.log(count)
//         }, 1000)
//     }else{
//          store = setInterval(() => {
//             count--;
//             numCount.innerText = count;
//             if (count > 0) {
//                 // num.setAttribute("disabled", true)
//             } else if (count === 0) {
//                 click = true;
//                 // num.removeAttribute("disabled")
//                 clearInterval(store)
//             }
//             console.log(count)
//         }, 1000)
//     }
// }


// )




// function a (){
//     console.log("A")
//     b()
//     console.log("AA")
// }
// function b (){
//     console.log("B")
//     c()
//     console.log("BB")
// }
// function c (){
//     console.log("C")
//     d()
//     console.log("CC")
// }
// function d (){
//     console.log("D")
//     console.log("DD")
// }

// function x (){
//     console.log("X")
//     y();
//     console.log("XX")
// }
// function y (){
//     console.log("Y")
//     z();
//     console.log("YY")
// }
// function z (){
//     console.log("Z")
//     console.log("ZZ")
// }





// a()
// x()
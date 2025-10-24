let blackboard1=document.getElementById("bb1")
let blackboard2=document.getElementById("bb2")
let count = 0
let count2 = 0
function press1(){
    count += 1
    blackboard1.textContent = count
}

function press2(){
    count += 2
    blackboard1.textContent = count
}

function press3(){
    count += 3
    blackboard1.textContent = count
}
function press4(){
    count2 += 1
    blackboard2.textContent = count2
}
function press5(){
    count2 += 2
    blackboard2.textContent = count2
}
function press6(){
    count2 += 3
    blackboard2.textContent = count2
} 

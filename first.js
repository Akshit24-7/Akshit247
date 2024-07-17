let boxes = document.querySelectorAll(".box");
let res = document.querySelector(".res-bt");
let mescontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let newbt = document.querySelector("#new-bt");

let turn0 = true;


let winpattern = [
   [0,1,2],
   [0,3,6],
   [0,4,8],
   [1,4,7],
   [2,5,8],
   [2,4,6],
   [3,4,5],
   [6,7,8],
];

const RestGame= () => {
   turn0 = true;
   enableboxes();
   mescontainer.classList.add("hide");
}

      
boxes.forEach((box) => {
   box.addEventListener("click" ,() => {
      if(turn0) {
         box.innerText = "x";
         turn0 = false;
      } else {
         box.innerText = "o";
         turn0 = true;
      }
      box.disabled = true;

      checkwinning();
   })
})

const disabledboxes = () => {
   for ( let box of boxes) {
      box.disabled = true;
   }
}

const enableboxes = () => {
   for ( let box of boxes) {
      box.disabled = false;
      box.innerText = "";
   }
 }

let showwinner = (Winner) => {
   msg.innerText = (`congratulation you are winner,${Winner}`);
   mescontainer.classList.remove("hide");
   box.disabled();

}
const checkwinning = () => {
   for (let pattern of winpattern) {
    let pos1val = boxes[pattern[0]].innerText
    let pos2val = boxes[pattern[1]].innerText
    let pos3val = boxes[pattern[2]].innerText

   
   if(pos1val != "" && pos2val != "" && pos3val != "") {
      if(pos1val === pos2val && pos2val === pos3val) {
          showwinner(pos1val);
      }
   }
   }
}


newbt.addEventListener("click" , RestGame);
res.addEventListener("click" , RestGame);
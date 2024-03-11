let boxes =document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newbutton=document.querySelector("#new_btn");
let msgcon=document.querySelector(".msg-con");
let msg=document.querySelector("#msg");


let turno=true;

const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetgame=()=>{ 
    turno=true;
    enableboxes();
    msgcon.classList.add("hide");

}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turno){
            box.innerText="O";
            turno=false;
        }
        else{
            box.innerText="X";
            turno=true;
        }
        box.disabled=true;
        checkwinner();
    });

});

const disabledboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}


const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}


const showwinner=(winner)=>{
    msg.innerText=`Congratulations, winner is ${winner}`;
    msgcon.classList.remove("hide");
    disabledboxes();
}

const checkwinner=()=>{
    for (let pattern of winpatterns)
    {
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val !=""&&pos2val!=""&&pos3val!=""){
            if(pos1val===pos2val &&pos2val===pos3val){
                showwinner(pos1val);
            }
        }


    }
};

newbutton.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);


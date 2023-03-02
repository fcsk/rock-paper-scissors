(function(){


function GenerateComputerChoose(){
    const CpuChoice =['Paper', 'Rock', 'Scissors'];
    let getIndex = Math.floor(Math.random()*CpuChoice.length);
    let choiced = CpuChoice[getIndex]
    
    return choiced;
}

/*
function CreateChoiceOfCPU(choiced) {
    if(choiced=="Paper") {

        const newI = document.createElement('i');
        newI.classList.add('icon-hand-paper-o');
        const newDIV = document.createElement('div');
        newDIV.classList.add('paper');
        newDIV.appendChild(newI);

    } else if(choiced=="Rock") {

        const newI = document.createElement('i');
        newI.classList.add("icon-hand-grab-o");
        const newDIV = document.createElement('div');
        newDIV.classList.add('rock');
        newDIV.appendChild(newI);

    } else if(choiced=="Scissors") {

        const newI = document.createElement('i');
        newI.classList.add("icon-hand-scissors-o");
        const newDIV = document.createElement('div');
        newDIV.classList.add('scissors');
        newDIV.appendChild(newI);

    }   
}

*/

})();
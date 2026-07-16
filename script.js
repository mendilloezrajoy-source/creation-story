const daysContainer = document.getElementById("days");
const grid = document.getElementById("grid");
const scoreDisplay = document.getElementById("score");
const restartBtn = document.getElementById("restartBtn");

let score = 0;

function shuffle(array){
    for(let i=array.length-1;i>0;i--){
        const j=Math.floor(Math.random()*(i+1));
        [array[i],array[j]]=[array[j],array[i]];
    }
    return array;
}

const dayNumbers = shuffle([1,2,3,4,5,6,7]);

dayNumbers.forEach(day=>{

    const dayDiv=document.createElement("div");

    dayDiv.className="day";
    dayDiv.id="day"+day;
    dayDiv.draggable=true;
    dayDiv.innerText="Day "+day;

    dayDiv.addEventListener("dragstart",(e)=>{
        e.dataTransfer.setData("text",day);
    });

    daysContainer.appendChild(dayDiv);
});

const imageOrder = shuffle([1,2,3,4,5,6,7]);

imageOrder.forEach(imageNum=>{

    const card=document.createElement("div");
    card.className="card";

    card.innerHTML=`
        <img src="${imageNum}.png">
        <div class="drop" data-answer="${imageNum}">
            Drop Day Here
        </div>
    `;

    grid.appendChild(card);
});

document.querySelectorAll(".drop").forEach(drop=>{

    drop.addEventListener("dragover",(e)=>{
        e.preventDefault();
    });

    drop.addEventListener("drop",(e)=>{

        e.preventDefault();

        const dragged=e.dataTransfer.getData("text");
        const answer=drop.dataset.answer;

        if(dragged===answer){

            drop.innerHTML=`✅ Day ${dragged}`;
            drop.classList.add("correct");

            document.getElementById("day"+dragged).remove();

            score++;

            scoreDisplay.innerHTML=`⭐ Score: ${score} / 7`;

            if(score===7){

                setTimeout(()=>{
                    alert(
`🎉 Great Job!

God created the heavens and the earth.

Genesis 1-2`
                    );

                    restartBtn.style.display="inline-block";

                },300);

            }

        }else{

            alert("❌ Try Again!");

        }

    });

});

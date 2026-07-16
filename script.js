const daysContainer = document.getElementById("days");
const grid = document.getElementById("grid");
const scoreDisplay = document.getElementById("score");
const restartBtn = document.getElementById("restartBtn");

let score = 0;

const labels = {
    1: {
        title: "Light and Darkness",
        verse: "Genesis 1:3-5"
    },
    2: {
        title: "Sky and Waters",
        verse: "Genesis 1:6-8"
    },
    3: {
        title: "Land and Plants",
        verse: "Genesis 1:9-13"
    },
    4: {
        title: "Sun, Moon and Stars",
        verse: "Genesis 1:14-19"
    },
    5: {
        title: "Birds and Fish",
        verse: "Genesis 1:20-23"
    },
    6: {
        title: "Animals and People",
        verse: "Genesis 1:24-31"
    },
    7: {
        title: "God Rested",
        verse: "Genesis 2:2-3"
    }
};

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const dayNumbers = shuffle([1,2,3,4,5,6,7]);

dayNumbers.forEach(day => {
    const dayDiv = document.createElement("div");

    dayDiv.className = "day";
    dayDiv.id = "day" + day;
    dayDiv.draggable = true;
    dayDiv.innerText = "Day " + day;

    dayDiv.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text", day);
    });

    daysContainer.appendChild(dayDiv);
});

const imageOrder = shuffle([1,2,3,4,5,6,7]);

imageOrder.forEach(imageNum => {

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <img src="${imageNum}.png" alt="Creation Day ${imageNum}">

        <div class="picture-label">
            <h3>${labels[imageNum].title}</h3>
            <p>${labels[imageNum].verse}</p>
        </div>

        <div class="drop" data-answer="${imageNum}">
            Drag Day Here
        </div>
    `;

    grid.appendChild(card);
});

document.querySelectorAll(".drop").forEach(drop => {

    drop.addEventListener("dragover", (e) => {
        e.preventDefault();
    });

    drop.addEventListener("drop", (e) => {

        e.preventDefault();

        const dragged = e.dataTransfer.getData("text");
        const answer = drop.dataset.answer;

        if (dragged === answer) {

            drop.innerHTML = `✅ Day ${dragged}`;
            drop.classList.add("correct");

            const dayElement = document.getElementById("day" + dragged);

            if(dayElement){
                dayElement.remove();
            }

            score++;

            scoreDisplay.innerHTML = `⭐ Score: ${score} / 7`;

            if(score === 7){

                setTimeout(() => {

                    alert(
`🎉 Great Job!

You completed the Creation Story!

Genesis 1-2

God created the heavens and the earth and rested on the seventh day.`
                    );

                    restartBtn.style.display = "inline-block";

                },300);
            }

        } else {

            alert("❌ Try Again!");

        }
    });
});

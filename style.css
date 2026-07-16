// ---------------------
// Utility: Shuffle array
// ---------------------
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const totalDays = 7;
let score = 0;

// ---------------------
// Create Score Display
// ---------------------
const scoreDisplay = document.createElement("h2");
scoreDisplay.id = "score";
scoreDisplay.innerText = `⭐ Score: ${score}/${totalDays}`;
document.body.insertBefore(scoreDisplay, document.getElementById("days"));

// ---------------------
// Create Restart Button
// ---------------------
const restartBtn = document.createElement("button");
restartBtn.innerText = "🔄 Play Again";
restartBtn.style.display = "none";
restartBtn.style.padding = "10px 20px";
restartBtn.style.fontSize = "18px";
restartBtn.style.margin = "20px";
restartBtn.onclick = () => location.reload();
document.body.appendChild(restartBtn);

// ---------------------
// Create Day Labels
// ---------------------
const daysContainer = document.getElementById("days");

const dayNumbers = shuffle([1,2,3,4,5,6,7]);

dayNumbers.forEach(day => {
    const dayElement = document.createElement("div");

    dayElement.className = "day";
    dayElement.draggable = true;
    dayElement.id = "day" + day;
    dayElement.textContent = "Day " + day;

    dayElement.addEventListener("dragstart", function(e){
        e.dataTransfer.setData("text", day);
    });

    daysContainer.appendChild(dayElement);
});

// ---------------------
// Create Shuffled Images
// ---------------------
const grid = document.getElementById("grid");

const imageOrder = shuffle([1,2,3,4,5,6,7]);

imageOrder.forEach(imageNum => {

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <img src="${imageNum}.png" alt="Creation Day ${imageNum}">
        <div class="drop" data-answer="${imageNum}">
            Drop Day Here
        </div>
    `;

    grid.appendChild(card);
});

// ---------------------
// Drag and Drop Logic
// ---------------------
document.querySelectorAll(".drop").forEach(dropZone => {

    dropZone.addEventListener("dragover", function(e){
        e.preventDefault();
    });

    dropZone.addEventListener("drop", function(e){
        e.preventDefault();

        const draggedDay = e.dataTransfer.getData("text");
        const correctAnswer = this.dataset.answer;

        if (draggedDay === correctAnswer) {

            this.innerHTML = `✅ Day ${draggedDay}`;
            this.classList.add("correct");
            this.style.backgroundColor = "#c8f7c5";

            const dayElement = document.getElementById("day" + draggedDay);

            if(dayElement){
                dayElement.remove();
            }

            score++;
            scoreDisplay.innerText = `⭐ Score: ${score}/${totalDays}`;

            // Celebration
            if(score === totalDays){

                setTimeout(() => {

                    alert(
`🎉 Excellent!

God created the world in six days and rested on the seventh day.

📖 Genesis 2:2-3

You got ${score}/${totalDays} correct!`
                    );

                    restartBtn.style.display = "inline-block";

                }, 300);
            }

        } else {

            alert("❌ Try Again!");

        }
    });

});

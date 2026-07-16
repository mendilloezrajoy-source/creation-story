// Correct answers
const answers = {
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7"
};

// Shuffle function
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Create draggable day labels
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

// Create shuffled image cards
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

// Drag and drop functionality
document.querySelectorAll(".drop").forEach(dropZone => {

    dropZone.addEventListener("dragover", function(e){
        e.preventDefault();
    });

    dropZone.addEventListener("drop", function(e){
        e.preventDefault();

        const draggedDay = e.dataTransfer.getData("text");
        const correctAnswer = this.dataset.answer;

        if (draggedDay === correctAnswer) {

            this.textContent = `Day ${draggedDay} ✓`;
            this.classList.add("correct");

            const dayElement = document.getElementById("day" + draggedDay);
            if(dayElement){
                dayElement.style.display = "none";
            }

            // Check if game completed
            if(document.querySelectorAll(".correct").length === 7){
                setTimeout(() => {
                    alert(
                        "🎉 Great Job!\n\n" +
                        "God created the world in six days and rested on the seventh day.\n\n" +
                        "Genesis 2:2-3"
                    );
                }, 300);
            }

        } else {
            alert("Try Again!");
        }
    });

});

let goalDoc = db.collection("Users").doc(user).collection("Goals");
let existingGoals = [];
function getGoals() {
    goalDoc.get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            if (doc.completed !== true) {
                existingGoals.push(doc)
            }
        });
    });
}

function CreateGoal(doc){
    this.id = doc.id;
    this.name = doc.name;
}

function setGoals() {
    document.getElementById("goalform").addEventListener('submit', processForm);
    function processGoalForm(e) {
        e.preventDefault();
        //take input from input fields and store in firestore
        goalDoc.doc().add({
            name: document.getElementById("goalname").value, // goal name
            deadline: document.getElementById("deadline").value,
            priority: document.getElementById("priority").value,
            description: document.getElementById("goalDescription").value,
            complete: false,
            completePercentage: 0,
        }).then(function () {
                console.log("Successfully added data ");
                window.location.href = "goalsuccessfullyadded.html"
            })
            .catch(function (error) {
                console.log("error")
            });
    }
}



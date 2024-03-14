const welcomeMessage = () => {
    const today = new Date().toDateString();
    document.getElementById('welcomeMessage').textContent = `🤸🏾‍♀️ Welcome to Your Fitness Tracker 🥗 Today is ${today}`;
};
welcomeMessage();

const displayWorkoutRoutine = () => {
    const workoutInput = document.querySelector('#workoutInput').value;
    const workoutList = document.querySelector('#workoutList');
    const newWorkout = document.createElement('li');
    newWorkout.textContent = workoutInput;
    workoutList.appendChild(newWorkout);
};

const addNewGoal = () => {
    const goalInput = document.querySelector('#goalInput').value;
    const goalList = document.querySelector('#goalList');
    
    // Retrieve all existing goals
    const existingGoals = goalList.querySelectorAll('li');

    // Check for duplicates
    for (let goal of existingGoals) {
        if (goal.textContent === goalInput) {
            // Display alert for duplicate goal
            alert("Goal already exists!");
            // Clear input field
            document.querySelector('#goalInput').value = '';
            // Exit the function to prevent duplicate goal from being added
            return;
        }
    }

    // If no duplicate is found, proceed to add the new goal
    const newGoal = document.createElement('li');
    newGoal.textContent = goalInput;
    goalList.appendChild(newGoal);
};

const updateWaterIntake = (change) => {
    let waterIntake = 0;
    waterIntake += change;
    document.querySelector('#waterIntakeDisplay').textContent = `${waterIntake} glasses 💦`;
};

const updateProgressCharts = () => {
    document.querySelector('#workoutProgress').textContent = "Updated workout progress...";
    document.querySelector('#calorieIntakeProgress').textContent = "Updated calorie intake progress...";
};

const toggleTheme = () => {
    document.body.classList.toggle('dark-theme');
};

const submitMealPlan = (event) => {
    event.preventDefault(); 
    alert('Meal plan submitted successfully! 🍴');
};

// Event Listeners
document.querySelector('#submitWorkout').addEventListener('click', displayWorkoutRoutine);
document.querySelector('#submitGoal').addEventListener('click', addNewGoal);
document.querySelector('#increaseWater').addEventListener('click', () => updateWaterIntake(1));
document.querySelector('#decreaseWater').addEventListener('click', () => updateWaterIntake(-1));
document.querySelector('#themeToggle').addEventListener('click', toggleTheme);
document.querySelector('#mealPlanForm').addEventListener('submit', submitMealPlan);

// Initial Update
updateProgressCharts();

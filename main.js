const calculate = document.getElementById("calculate");

function getAge(e){
    e.preventDefault();

    const birthDate = new Date(document.getElementById("birthDate").value);
    birthDate.max = new Date().toISOString().split("T")[0];
    const currentDate = new Date();
    let ageYears = currentDate.getFullYear() - birthDate.getFullYear();
    let ageMonths = currentDate.getMonth() - birthDate.getMonth();
    let ageDays = currentDate.getDate() - birthDate.getDate();

    if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
        ageYears--;
        ageMonths += (ageMonths < 0) ? 12 : 0;
    }

    // Adjust if the day of the month hasn't occurred yet this month
    if (ageDays < 0) {
        const previousMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
        ageDays += previousMonth.getDate();
        ageMonths--;
    }

    document.getElementById("yearsDiplay").textContent = ageYears;
    document.getElementById("monthsDisplay").textContent = ageMonths;
    document.getElementById("daysDisplay").textContent = ageDays; 
}

calculate.addEventListener("click", getAge);
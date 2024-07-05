function calculateAge() {
    let dob = new Date(document.getElementById("dob").value);
    let today = new Date();

    if (dob > today) {
        document.getElementById("result").innerText = "Error: Date of Birth cannot be in the future.";
        return;
    }

    let ageYears = today.getFullYear() - dob.getFullYear();
    let ageMonths = today.getMonth() - dob.getMonth();
    let ageDays = today.getDate() - dob.getDate();

    if (ageDays < 0) {
        ageMonths--;
        ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    document.getElementById("result").innerText = 
        `Your age is: ${ageYears} years, ${ageMonths} months, and ${ageDays} days.`;
}

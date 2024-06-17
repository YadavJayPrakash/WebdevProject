let inputBtn = document.querySelector(".age-dob-input");
let btn = document.querySelector(".btn");
let ageResult = document.querySelector(".result");

btn.addEventListener("click", () => {
    if (inputBtn.value === "") {
        alert("please select your date of birth");
    } else {
        console.log(inputBtn.value);
        let dob = new Date(inputBtn.value);
        console.log(dob);

        let dob_year = dob.getFullYear();
        let dob_month = dob.getMonth();
        let dob_day = dob.getDate();
        console.log(dob_year, dob_month, dob_day);

        //current
        let now = new Date();
        console.log(now);
        let now_year = now.getFullYear();
        let now_month = now.getMonth();
        let now_day = now.getDate();
        console.log(now_year, now_month, now_day);

        let age = now_year - dob_year;
        let age2 =now_month - dob_month;
        let age3 =now_day - dob_day;
        
        // Adjust age if the current date is before the birthday in the current year
        if (now_month < dob_month || (now_month === dob_month && now_day < dob_day)) {
            age--;
        }

        console.log(age);
        ageResult.textContent = `Your age is: ${age} ${age2} ${age3}`;
     }
});

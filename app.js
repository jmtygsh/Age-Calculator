function Calculate_Date_Fun() {
    //Input
    const user_DOB = new Date(document.getElementById('userInput').value)
    const present_date = new Date();


    //Process 
    function calculate_Year() {
        let years = (present_date.getTime() - user_DOB.getTime());
        return (years/31536000000);
    }
    const years_output = calculate_Year();

    
    function calculate_Day() {
        let day = (present_date.getTime() - user_DOB.getTime());
        return (day/(1000 * 60 * 60 * 24));
    }
    const days_output = calculate_Day();


    function calculate_Month(past, present) {
        var months;
        months = (present.getFullYear() - past.getFullYear()) * 12;
        months -= past.getMonth();
        months += present.getMonth();
        return months;
    }
    const months_output = calculate_Month(user_DOB, present_date);


    //output
    document.getElementById('output2').innerHTML = Math.round(days_output) + "Days";
    document.getElementById('output3').innerHTML = Math.round(months_output) + "Month";
    document.getElementById('output').innerHTML = Math.round(years_output) + "Years";

}
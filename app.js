function CalculateFun() {
    //Input
    const UserDate = new Date(document.getElementById('userInput').value)
    const PresentDate = new Date();

    //Process 
    const userTime = UserDate.getTime()
    const presentTime = PresentDate.getTime()

    const CalculateDate = (presentTime - userTime);
    const AnswerYear = (CalculateDate / 31536000000);
    const AnswerDays = (CalculateDate / (1000 * 60 * 60 * 24));

    function CalculateMonth(d1, d2) {
        var months;
        months = (d2.getFullYear() - d1.getFullYear()) * 12;
        months -= d1.getMonth();
        months += d2.getMonth();
        return months;
    }
    const AnswerMonth = CalculateMonth(UserDate, PresentDate);

    //output
    document.getElementById('output2').innerHTML = Math.round(AnswerDays) + "Days";
    document.getElementById('output3').innerHTML = Math.round(AnswerMonth) + "Month";
    document.getElementById('output').innerHTML = Math.round(AnswerYear) + "Years";

}
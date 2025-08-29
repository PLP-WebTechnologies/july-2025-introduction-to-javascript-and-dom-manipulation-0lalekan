// // Part 1 - variables and data types
// let name = "Alice";
// let age = 13;
// let isStudent = true; // lowercase true in JS
// let mathsScore = 85.5;

// console.log("Name:", name);
// console.log("Age:", age);
// console.log("Is Student:", isStudent);
// console.log("Maths Score:", mathsScore);

// // Arithmetic operations and logical operations
// let a = 10;
// let b = 3;

// console.log("Addition:", a + b);
// console.log("Subtraction:", a - b);
// console.log("Multiplication:", a * b);
// console.log("Division:", a / b);
// console.log("Modulus:", a % b);

// console.log("Is a greater than b?", a > b);
// console.log("Is a less than b?", a < b);
// console.log("Is a equal to b?", a === b);
// console.log("Is a not equal to b?", a !== b);
// console.log("Is a greater than or equal to b?", a >= b);
// console.log("Is a less than or equal to b?", a <= b);

// // Conditional statements
// if (mathsScore >= 90) {
//     console.log("Grade: A");
// } else if (mathsScore >= 80) {
//     console.log("Grade: B");
// } else if (mathsScore >= 70) {
//     console.log("Grade: C");
// } else if (mathsScore >= 60) {
//     console.log("Grade: D");
// } else {
//     console.log("Grade: F");
// }

// first function (formating the name)
function formatName(name) {
    // remove extra spaces at the start and end
    name = name.trim();

    // capitalize the first letter of each word
    return name.split(' ').map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(' ');
}


// second function (grade generator)
function displayResult() {
    let studentName = document.getElementById('student_name').value;
    studentName = formatName(studentName);
    let mathsScore = parseFloat(document.getElementById('maths_score').value);
    let scienceScore = parseFloat(document.getElementById('science_score').value);
    let englishScore = parseFloat(document.getElementById('english_score').value);

    if (isNaN(mathsScore) || isNaN(scienceScore) || isNaN(englishScore)) {
    alert("Please enter valid numbers for all subjects!");
    return; // stop the function if invalid
}

    document.getElementById('input_section').style.display = 'none';

    const resultSection = document.getElementById('result_section');
    Object.assign(resultSection.style, {
        display: 'block',
        textAlign: 'center',
        background: '#fdfdfd',
        borderRadius: '12px',
        boxShadow: '0 3px 8px rgba(0,0,0,0.1)',
        marginTop: '20px',
        fontSize: '20px',
        color: '#27ae60',
        padding: '20px'
    });

    document.getElementById('greeting').innerText = "Hello 👋, " + studentName + ", Welcome! 🎉";
    document.getElementById('report_card').innerText = "Your Report Card  📋";
    document.getElementById('display_student_name').innerText = "Student Name: " + studentName;
    
    const subject = ["Maths", "Science", "English"];
    const scores = [mathsScore, scienceScore, englishScore];
    subject.forEach((subject, i) => {
    document.getElementById(`display_${subject.toLowerCase()}_score`).innerText = `${subject} Score:  ${scores[i]}`;
    });

    // using for loop to calculate average
    let total = 0;
    for (let i = 0; i < scores.length; i++) {
        total += scores[i];
    }
    let averageScore = total / scores.length;
    document.getElementById('average_score').innerText = `Average Score: ${averageScore.toFixed(2)}`;


    let grade;
    if (averageScore >= 90) grade = 'A';
    else if (averageScore >= 80) grade = 'B';
    else if (averageScore >= 70) grade = 'C';
    else if (averageScore >= 60) grade = 'D';
    else grade = 'F';

    document.getElementById('grade').innerText = "Grade: " + grade;

    let feedback;
    switch (grade) {
        case 'A': feedback = "Excellent work! You are promoted! 🌟"; break;
        case 'B': feedback = "Great job! You are promoted! 👍"; break;
        case 'C': feedback = "Good effort! You are promoted! 😊"; break;
        case 'D': feedback = "You passed! Keep trying! 🙂"; break;
        case 'F': feedback = "Unfortunately, you did not pass. You repeated! 🙁"; break;
    }

    document.getElementById('feedback').innerText = "Remark: " + feedback;
}

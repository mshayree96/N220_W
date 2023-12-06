let gradingScale = [
    "A",
    90,
    100,
    "B",
    80,
    89,
    "C",
    70,
    79,
    "D",
    60,
    69,
    "F",
    59,
    "lower",
];

const table = document.getElementById("gradingTable");
const inputNumber = document.getElementById("inputNumber");
const result = document.getElementById("result");

function createTable() {
    const tbody = table.getElementsByTagName("tbody")[0];
    tbody.innerHTML = "";

    for (let i = 0; i < gradingScale.length; i += 3) {
        const grade = gradingScale[i];
        const lowerLimit = gradingScale[i + 1];
        const upperLimit = gradingScale[i + 2];

        const row = document.createElement("tr");
        let calculatedGrade = 0;
        row.innerHTML = `<td>${grade}</td><td>${lowerLimit}-${upperLimit}</td>`;

        const inputVal = parseInt(inputNumber.value);
        if (!isNaN(inputVal)) {
            calculatedGrade = (inputVal / 500) * 100;

            result.innerHTML = `Result : ${calculatedGrade}%`;
        }

        if (
            !isNaN(inputVal) &&
            calculatedGrade >= lowerLimit &&
            (calculatedGrade <= upperLimit)
        ) {
            row.style.backgroundColor = "red";
        }

        tbody.appendChild(row);
    }
}

window.onload = createTable();
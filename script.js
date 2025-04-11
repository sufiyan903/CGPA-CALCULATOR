document.addEventListener('DOMContentLoaded', () => {
    let subjectCount = 0;

    // Function to add a new subject input group
    function addSubject() {
        subjectCount++;
        const container = document.getElementById('subject-container');
        const inputGroup = document.createElement('div');
        inputGroup.className = 'input-group';
        inputGroup.innerHTML = `
            <div>
                <label for="subject-name-${subjectCount}">Subject ${subjectCount} Name:</label>
                <input type="text" id="subject-name-${subjectCount}" placeholder="Enter subject name" required>
            </div>
            <div>
                <label for="marks-${subjectCount}">Marks:</label>
                <input type="number" id="marks-${subjectCount}" placeholder="Enter marks" step="0.01" required>
            </div>
            <div>
                <label for="credits-${subjectCount}">Credits:</label>
                <input type="number" id="credits-${subjectCount}" placeholder="Enter credits" step="0.01" required>
            </div>
        `;
        container.appendChild(inputGroup);
    }

    // Function to calculate SGPA
    function calculateSGPA() {
        let totalCredits = 0;
        let weightedGradePoints = 0;

        for (let i = 1; i <= subjectCount; i++) {
            const name = document.getElementById(`subject-name-${i}`).value;
            const marks = parseFloat(document.getElementById(`marks-${i}`).value);
            const credits = parseFloat(document.getElementById(`credits-${i}`).value);

            if (!name || isNaN(marks) || isNaN(credits) || credits <= 0) {
                alert('Please enter valid values for subject name, marks, and credits.');
                return;
            }

            totalCredits += credits;
            weightedGradePoints += (marks * credits);
        }

        if (totalCredits === 0) {
            alert('Total credits cannot be zero.');
            return;
        }

        const sgpa = (weightedGradePoints / totalCredits).toFixed(2);
        document.getElementById('sgpaResult').textContent = `Your SGPA is: ${sgpa}`;
    }

    // Add initial subject field
    addSubject();

    // Event listeners for buttons
    document.getElementById('add-subject-btn').addEventListener('click', addSubject);
    document.getElementById('calculate-btn').addEventListener('click', calculateSGPA);
});

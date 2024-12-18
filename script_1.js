// Add a new subject field dynamically
document.getElementById('addSubject').addEventListener('click', () => {
    const subjectDiv = document.createElement('div');
    subjectDiv.className = 'subject';
    subjectDiv.innerHTML = `
      <input type="text" placeholder="Subject Name" class="subject-name" required>
      <input type="number" placeholder="Marks (%)" class="marks" min="0" max="100" required>
      <input type="number" placeholder="Credits" class="credits" min="1" required>
      <button type="button" class="removeSubject">Remove</button>
    `;
    document.getElementById('subjects').appendChild(subjectDiv);
  
    // Attach event listener for remove button
    subjectDiv.querySelector('.removeSubject').addEventListener('click', () => {
      subjectDiv.remove();
    });
  });
  
  // Calculate GPA
  document.getElementById('calculateGPA').addEventListener('click', () => {
    const marks = document.querySelectorAll('.marks');
    const credits = document.querySelectorAll('.credits');
    let totalGradePoints = 0;
    let totalCredits = 0;
  
    marks.forEach((mark, index) => {
      const credit = parseFloat(credits[index].value);
      const gradePoint = getGradePoint(parseFloat(mark.value));
      totalGradePoints += gradePoint * credit;
      totalCredits += credit;
    });
  
    const gpa = totalCredits > 0 ? (totalGradePoints / totalCredits).toFixed(2) : 0;
    document.getElementById('gpaOutput').textContent = gpa;
  });
  
  // Calculate grade point based on marks
  function getGradePoint(mark) {
    if (mark >= 90) return 4.0;
    if (mark >= 80) return 3.7;
    if (mark >= 70) return 3.0;
    if (mark >= 60) return 2.0;
    if (mark >= 50) return 1.0;
    return 0;
  }
  
  // Remove a subject
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('removeSubject')) {
      e.target.parentElement.remove();
    }
  });
  
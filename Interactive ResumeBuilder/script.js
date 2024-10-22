function updateResume() {
    // Get input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const summary = document.getElementById('summary').value;
    const skills = document.getElementById('skills').value;

    // Update preview
    document.getElementById('preview-name').innerText = name;
    document.getElementById('preview-email').innerText = email;
    document.getElementById('preview-phone').innerText = phone;
    document.getElementById('preview-summary').innerText = summary;
    document.getElementById('preview-skills').innerText = 'Skills: ' + skills;

    // Update education and experience previews
    updateEducationPreview();
    updateExperiencePreview();
}

function addEducation() {
    const educationFields = document.getElementById('education-fields');
    const educationDiv = document.createElement('div');
    educationDiv.className = 'education-field';

    educationDiv.innerHTML = `
        <input type="text" placeholder="Degree" required>
        <input type="text" placeholder="Institution" required>
        <input type="text" placeholder="Year" required>
        <button type="button" onclick="removeEducation(this)">Remove</button>
    `;
    educationFields.appendChild(educationDiv);
    updateResume();
}

function removeEducation(button) {
    button.parentElement.remove();
    updateResume();
}

function addExperience() {
    const experienceFields = document.getElementById('experience-fields');
    const experienceDiv = document.createElement('div');
    experienceDiv.className = 'experience-field';

    experienceDiv.innerHTML = `
        <input type="text" placeholder="Job Title" required>
        <input type="text" placeholder="Company" required>
        <input type="text" placeholder="Years" required>
        <button type="button" onclick="removeExperience(this)">Remove</button>
    `;
    experienceFields.appendChild(experienceDiv);
    updateResume();
}

function removeExperience(button) {
    button.parentElement.remove();
    updateResume();
}

function updateEducationPreview() {
    const educationPreview = document.getElementById('preview-education');
    educationPreview.innerHTML = '';
    const educationFields = document.querySelectorAll('.education-field');

    educationFields.forEach(field => {
        const degree = field.children[0].value;
        const institution = field.children[1].value;
        const year = field.children[2].value;

        if (degree || institution || year) {
            const educationItem = document.createElement('p');
            educationItem.innerText = `${degree} at ${institution} (${year})`;
            educationPreview.appendChild(educationItem);
        }
    });
}

function updateExperiencePreview() {
    const experiencePreview = document.getElementById('preview-experience');
    experiencePreview.innerHTML = '';
    const experienceFields = document.querySelectorAll('.experience-field');

    experienceFields.forEach(field => {
        const jobTitle = field.children[0].value;
        const company = field.children[1].value;
        const years = field.children[2].value;

        if (jobTitle || company || years) {
            const experienceItem = document.createElement('p');
            experienceItem.innerText = `${jobTitle} at ${company} (${years})`;
            experiencePreview.appendChild(experienceItem);
        }
    });
}

function clearForm() {
    document.getElementById('resume-form').reset();
    document.getElementById('preview-output').innerHTML = '';
    document.getElementById('preview-education').innerHTML = '';
    document.getElementById('preview-experience').innerHTML = '';
}

function downloadPDF() {
    // Generate PDF logic
    const resumeContent = document.getElementById('resume-output').innerHTML;
    const pdfWindow = window.open('', '_blank');
    pdfWindow.document.write(`
        <html>
        <head>
            <title>Resume</title>
            <style>
                body { font-family: Arial; }
                h1 { color: #003366; }
                .content { margin: 20px; }
            </style>
        </head>
        <body>
            <div class="content">${resumeContent}</div>
        </body>
        </html>
    `);
    pdfWindow.document.close();
    pdfWindow.print();
}

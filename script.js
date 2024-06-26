// Sample data for student achievements
const studentAchievements = [
    {
        name: "John Doe",
        projectTitle: "Quantum Mechanics Research",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis turpis id metus placerat convallis."
    },
    {
        name: "Jane Smith",
        projectTitle: "Artificial Intelligence in Medicine",
        description: "Phasellus sit amet magna quis velit scelerisque imperdiet. Etiam tincidunt interdum ipsum, at varius lectus scelerisque at."
    },
    {
        name: "Michael Brown",
        projectTitle: "Environmental Sustainability Initiatives",
        description: "Sed consectetur tincidunt lorem, a ultricies nunc ultricies et. In efficitur ex sit amet felis varius, sed fringilla dui pharetra."
    }
];

// Function to dynamically add student achievements to the page
function displayStudentAchievements() {
    const achievementsList = document.getElementById('achievements-list');

    // Loop through the studentAchievements array and create HTML elements
    studentAchievements.forEach((achievement, index) => {
        const achievementDiv = document.createElement('div');
        achievementDiv.classList.add('achievement');

        const img = document.createElement('img');
        img.src = `student${index + 1}.jpg`; // Assuming you have images named student1.jpg, student2.jpg, etc.
        img.alt = `Student ${index + 1}`;
        img.classList.add('student-img');

        const detailsDiv = document.createElement('div');
        detailsDiv.classList.add('achievement-details');

        const h3 = document.createElement('h3');
        h3.textContent = `${achievement.name} - ${achievement.projectTitle}`;

        const p = document.createElement('p');
        p.textContent = achievement.description;

        const readMoreLink = document.createElement('a');
        readMoreLink.href = '#';
        readMoreLink.textContent = 'Read More';
        readMoreLink.classList.add('btn');

        // Append elements to the detailsDiv
        detailsDiv.appendChild(h3);
        detailsDiv.appendChild(p);
        detailsDiv.appendChild(readMoreLink);

        // Append img and detailsDiv to the achievementDiv
        achievementDiv.appendChild(img);
        achievementDiv.appendChild(detailsDiv);

        // Append achievementDiv to the achievementsList
        achievementsList.appendChild(achievementDiv);
    });
}

// Call the function to display student achievements on page load
document.addEventListener('DOMContentLoaded', displayStudentAchievements);

// Script for configuring and rendering the chart
document.addEventListener('DOMContentLoaded', function() {
    // Sample data for student achievements
    var data = {
        labels: ['AI Projects', 'Energy Projects', 'Research Papers', 'Hackathons'],
        datasets: [{
            label: 'Number of Achievements',
            backgroundColor: '#007bff', // Blue color for bars
            data: [15, 12, 20, 8] // Replace with actual data
        }]
    };

    var options = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    };

    var ctx = document.getElementById('achievement-chart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: options
    });
});


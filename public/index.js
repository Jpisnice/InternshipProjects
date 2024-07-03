document.addEventListener('DOMContentLoaded', function() {
            const charLimit = 70; // Set the character limit here
            const projGrid = document.querySelector('.proj-grid');

            // Hardcoded JSON data
            const projects = [
                {
                    "name": "Online Movie Booking Web App",
                    "image-src": "./assets/projects/movies.jpg",
                    "description": "Developed a web app for users to browse movies, reserve seats, and for admins to manage movies and shows. Hosted and handled authentication using Google Firebase.",
                    "technologies": "HTML, CSS, JavaScript, Firebase",
                    "link":"#"
                },
                {
                    "name": "Cloud Deployment",
                    "image-src": "./assets/projects/movies.jpg",
                    "description": "Deployed Web app using Firebase, alongside integrating Firebase authentication. Hosted static web pages using Google Cloud Buckets.",
                    "technologies": "Firebase, Google Cloud",
                    "link":"https://google.com"
                },
                {
                    "name": "Android App Development - Calculator",
                    "image-src": "./assets/projects/ca.jpeg",
                    "description": "Developed Calculator app using Kotlin programming language with Android Studio.",
                    "technologies": "Kotlin, Android Studio",
                    "link":"#"
                },
                {
                    "name": "Android App Development - Password Generator",
                    "image-src": "./assets/projects/pass-gen.png",
                    "description": "Developed Password Generator app using Java programming language with Android Studio.",
                    "technologies": "Java, Android Studio",
                    "link":"#"
                },
                {
                    "name": "Cloud Deployment",
                    "image-src": "./assets/projects/movies.jpg",
                    "description": "Deployed Web app using Firebase, alongside integrating Firebase authentication. Hosted static web pages using Google Cloud Buckets.",
                    "technologies": "Firebase, Google Cloud",
                    "link":"https://google.com"
                },
                {
                    "name": "Android App Development - Calculator",
                    "image-src": "./assets/projects/ca.jpeg",
                    "description": "Developed Calculator app using Kotlin programming language with Android Studio.",
                    "technologies": "Kotlin, Android Studio",
                    "link":"#"
                },
                {
                    "name": "Android App Development - Password Generator",
                    "image-src": "./assets/projects/pass-gen.png",
                    "description": "Developed Password Generator app using Java programming language with Android Studio.",
                    "technologies": "Java, Android Studio",
                    "link":"#"
                }
            ];

            // Function to create HTML structure for each project item
            function createProjectItem(project) {
                const projItem = document.createElement('div');
                projItem.classList.add('proj-item');
                const projRedirect = document.createElement('a');
                projRedirect.href = project['link'];

                const img = document.createElement('img');
                img.src = project['image-src'];
                img.alt = project.name;
                projRedirect.appendChild(img);

                const projDetails = document.createElement('div');
                projDetails.classList.add('proj-details');

                const title = document.createElement('h3');
                title.textContent = project.name;
                projDetails.appendChild(title);

                const description = document.createElement('p');
                description.classList.add('limited-p');
                description.setAttribute('data-full', project.description);
                if (project.description.length > charLimit) {
                    description.textContent = project.description.substring(0, charLimit) + '..';
                } else {
                    description.textContent = project.description;
                }
                projDetails.appendChild(description);

                projRedirect.appendChild(projDetails);
                projItem.appendChild(projRedirect);
                return projItem;
            }

            // Populate proj-items in proj-grid
            projects.forEach(project => {
                const projItem = createProjectItem(project);
                projGrid.appendChild(projItem);
            });
            const header = document.querySelector('header');
    const navbar = document.getElementById('navbar');
    const contactInfo = document.getElementById('contact-info');
    const name = document.getElementById('name');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.transform = 'translateY(0)';
            contactInfo.classList.add('hidden');
            header.classList.add('sticky');
        } else {
            navbar.style.transform = 'translateY(-100%)';
            contactInfo.classList.remove('hidden');
            header.classList.remove('sticky');
        }
    });
        });

    
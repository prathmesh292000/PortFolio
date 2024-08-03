const Submit = document.querySelector(".submit");

          const Query = (e) => {
            alert("Submited Review")
          }

          document.addEventListener('DOMContentLoaded', function () {
            const emailLink = document.querySelector('.contact a');
            emailLink.addEventListener('click', function () {
                alert('You are about to send an email!');
            });
        });

        //  About Section
        document.addEventListener('DOMContentLoaded', () => {
            const profileSection = document.querySelector('.profile');
            
            if (profileSection) { // Ensure the element exists before setting up the observer
                const observer = new IntersectionObserver(entries => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            profileSection.style.opacity = '1';
                            profileSection.style.transform = 'translateY(0)';
                            observer.unobserve(profileSection); // Stop observing after animation is triggered
                        }
                    });
                }, {
                    threshold: 0.1 // Adjust this value as needed
                });
            
                observer.observe(profileSection);
            }
        });

        // function setBackgroundImage(imageUrl) {
        //     document.getElementById('projects').style.backgroundImage = `url('${imageUrl}')`;
        // }
    
        // // Example usage:
        // setBackgroundImage('https://images.pexels.com/photos/1480690/pexels-photo-1480690.jpeg?auto=compress&cs=tinysrgb&w=600');

        document.querySelectorAll('.IMG1').forEach(item => {
            item.addEventListener('mouseenter', () => {
                document.querySelector('.skills').style.backgroundImage = "url('https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?auto=compress&cs=tinysrgb&w=600')";
            });
            item.addEventListener('mouseleave', () => {
                document.querySelector('.skills').style.backgroundImage = `url('https://images.pexels.com/photos/1480687/pexels-photo-1480687.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load')`;
            });
        });
        

        document.querySelectorAll('.project-item').forEach(item => {
            item.addEventListener('mouseenter', () => {
                // Change background or other effects on hover
                item.style.opacity = '0.8';
            });
            item.addEventListener('mouseleave', () => {
                // Revert background or effects on mouse leave
                item.style.opacity = '1';
            });
        });
        
        document.addEventListener('DOMContentLoaded', () => {
            const messageDiv = document.querySelector('.Massege');
            messageDiv.style.backgroundImage = "url('https://images.pexels.com/photos/3986993/pexels-photo-3986993.jpeg?auto=compress&cs=tinysrgb&w=600')";
            // Replace the URL with the desired image URL
        });

        // Example array of background images
// const backgroundImages = [
//     'url("https://images.pexels.com/photos/414860/pexels-photo-414860.jpeg?auto=compress&cs=tinysrgb&w=600")',
//     'url("https://images.pexels.com/photos/417458/pexels-photo-417458.jpeg?auto=compress&cs=tinysrgb&w=600")',
//     'url("https://images.pexels.com/photos/1555900/pexels-photo-1555900.jpeg?auto=compress&cs=tinysrgb&w=600")'
// ];

// let currentIndex = 0;

// function changeBackground() {
//     const container = document.querySelector('.background-container');
//     container.style.backgroundImage = backgroundImages[currentIndex];
//     currentIndex = (currentIndex + 1) % backgroundImages.length;
// }

// // Change background every 5 seconds
// setInterval(changeBackground, 5000);

const cube = document.querySelector('.cube');
let isPaused = false;

cube.addEventListener('click', () => {
    if (isPaused) {
        cube.style.animationPlayState = 'running';
    } else {
        cube.style.animationPlayState = 'paused';
    }
    isPaused = !isPaused;
});


// document.getElementById('profile-img').addEventListener('click', function() {
//     document.body.style.backgroundImage = "url('https://images.pexels.com/photos/3345882/pexels-photo-3345882.jpeg?auto=compress&cs=tinysrgb&w=600')";
// });
// document.getElementById('profile-img').addEventListener('dblclick', function() {
//     document.body.style.backgroundImage = "url('https://images.pexels.com/photos/110469/pexels-photo-110469.jpeg?auto=compress&cs=tinysrgb&w=600')";
// });


        
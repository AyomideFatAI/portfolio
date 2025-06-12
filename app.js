const roles = ["Frontend Developer", "Backend Developer", "Computer Engineer", "Prompt Engineer", "Tech Enthusiast"];
const text = document.getElementById("fade-text");
let i = 0;

function changeRole() {
  text.classList.add("slide-out");

  setTimeout(() => {
    i = (i + 1) % roles.length;
    text.textContent = roles[i];
    text.classList.remove("slide-out");
    text.classList.add("slide-in");
  }, 1000);

  setTimeout(() => {
    text.classList.remove("slide-in");
  }, 1000);
}

setInterval(changeRole, 3000);



let submit = document.querySelector(".submit");
let full_name = document.querySelector(".name");
let name_err = document.querySelector(".name-err");
let number_regex = /^\d+$/;
let email = document.querySelector(".email");
let email_err = document.querySelector(".email-err");
const email_regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let isValid = true;
let message_box = document.querySelector(".message");
let message_err = document.querySelector(".message-err");
let success_message = document.querySelector(".success-message");

//form validation
submit.addEventListener("click", (event)=>{
    event.preventDefault();
    let isValid = true;

    //name validation
    if(full_name.value == ""){
        name_err.textContent = "Please fill in your name";
        isValid = false;

    } else if(number_regex.test(full_name.value)){
        name_err.innerHTML = "Your name should not contain numbers";
        isValid = false;
    }

    //email validation
    if(email.value == ""){
        email_err.textContent = "Please fill in your email";
        isValid = false;

    } else if(!email_regex.test(email.value.trim())){
        email_err.textContent = "Please enter a valid email";
        isValid = false;
    }

    //message validation
    if(message_box.value == ""){
        message_err.textContent = "Please include a message";
        isValid = false;
    }
    if(isValid){
        success_message.style.transform = "translateY(0)";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        setTimeout(() => {
            success_message.style.transform = "translateY(-200%)";
        }, 3000);
        }

        full_name.value = "";
        email.value = "";
        message_box.value = "";
        name_err.textContent = "";
        email_err.textContent = "";
        message_err.textContent = "";

    }
)

//active nav items
const sections = document.querySelectorAll("section");

  // 2. Get all the nav links
  const navLinks = document.querySelectorAll(".nav-item");

  // 3. This sets how much of the section must be visible (60%) before it becomes "active"
  const options = {
    threshold: 0.6
  };

  // 4. Function that runs whenever a section becomes visible
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const sectionId = entry.target.id;

        // 5. Remove "active" from all nav links first
        navLinks.forEach(link => {
          link.classList.remove("active");

          // 6. Add "active" only to the one that matches the visible section
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }, options);

  // 7. Tell the observer to watch each section
  sections.forEach(section => {
    observer.observe(section);
  });


//light mode and dark mode changes

const toggleBtn = document.querySelector('.state-change');
const body = document.querySelector("body");
const moon = document.querySelector(".moon");
const sun = document.querySelector(".sun");
const header = document.querySelector("header")

// toggleBtn.onclick = ()=>{
//     if(getComputedStyle(moon).display == "none"){
//         body.classList.add("light-mode")
//         sun.style.display = "none";
//         moon.style.display = "block"
//         header.style.background = ""
//     }
// }


  const navMenu = document.querySelector('.nav-menu');
  const hamburger = document.querySelector('.hamburger');
  const closeMenuBtn = document.getElementById('closeMenu');

  function closeMenu() {
    navMenu.classList.remove('active-menu');
  }

  hamburger.addEventListener('click', () => {
    navMenu.classList.add('active-menu');
  });

  closeMenuBtn.addEventListener('click', closeMenu);


  hamburger.onclick = () =>{
    navMenu.classList.add("active-menu")
  }
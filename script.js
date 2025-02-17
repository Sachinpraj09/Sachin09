console.log("Website script is running!");
document.addEventListener("DOMContentLoaded", function() {
    const skills = document.querySelectorAll(".skills-list li");
    skills.forEach((skill, index) => {
        skill.style.animationDelay = `${index * 0.2}s`;
    });
});
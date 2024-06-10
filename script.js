function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
} 

function downloadCV() {
    window.open('./assests/SF-CV.pdf', '_blank');
}


/*function downloadCV() {
    const link = document.createElement('a');
    link.href = './assests/SF_Resume.pdf';
    link.download = 'SF_Resume.pdf';
    link.click();
}*/







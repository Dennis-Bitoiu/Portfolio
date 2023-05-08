const svgsArray = Array.from(document.querySelectorAll('svg'));
const percentages = Array.from(document.querySelectorAll(".number h2"))

svgsArray.forEach((svg, index) => {
    const percentage = (percentages[index].textContent.substring(0, 3) === '100') ? 99 : percentages[index].textContent.substring(0, 2)
    return svg.lastElementChild.style.strokeDashoffset = 585 - ((585 * percentage) / 100);
})

const overlays = Array.from(document.querySelectorAll('.overlay'));

overlays.forEach(overlay => overlay.classList.add('fade-top'));


// const projectDivs = Array.from($('.project-div'));
// projectDivs.forEach(project => {
//     if (project.innerText !== 'Title') {
//         project.style.background = "url('../images/whisper.png')";
//     }
// })


window.onscroll = function () {
    var scrollLimit = 100;
    if (window.scrollY >= scrollLimit) {
        $('.navbar').addClass('bg-darkk');
    } else {
        $('.navbar').removeClass('bg-darkk');

    }
    
};

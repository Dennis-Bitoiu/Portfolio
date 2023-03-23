const svgsArray = Array.from(document.querySelectorAll('svg'));
const percentages = Array.from(document.querySelectorAll(".number h2"))

svgsArray.forEach((svg, index) => {
    const percentage = (percentages[index].textContent.substring(0, 3) === '100') ? 99 : percentages[index].textContent.substring(0, 2)
    return svg.lastElementChild.style.strokeDashoffset = 585 - ((585 * percentage) / 100);
})

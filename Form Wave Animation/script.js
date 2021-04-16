const labels = document.querySelectorAll('.form-control label')

//looping through the labels and getting the innerText and splitting it into an array
//then we map through the array and turn it into an array with the letter with the span around it and having a transition delay
//then use .join  and pass it an empty string and that will turn it back into a string 
labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('')
})
function getAdvice() {

    fetch('https://api.adviceslip.com/advice')
    .then(data => {
        return data.json();
        })
        .then(post => {
        document.getElementById("advice-text").innerHTML = (post.slip.advice);
        document.getElementById("advice-id").innerHTML = (post.slip.id);
        });
}

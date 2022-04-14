const init = () => {
  const inputForm = document.querySelector("form");
  inputForm.addEventListener("submit", function (e) {
    e.preventDefault();
    fetch(`http://localhost:3000/movies/${e.target.searchByID.value}`).then(
      (res) => res.json()
    ).then(movie => {
        let title = document.getElementsByTagName("h4")[0]
        let summary = document.getElementsByTagName("p")[0]
        title.innerHTML = movie.title
        summary.innerHTML = movie.summary;
    })
  });
};

document.addEventListener("DOMContentLoaded", init);

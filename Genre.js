import { movies } from "../js/db.js"
import { reload } from "../js/utils.js"
import { Movie } from "./Movie.js"

function Genre(genre) {
    const link = document.createElement("a")
    link.href = "#"

    //2
    link.classList.add("promo__menu-item")
    link.textContent = genre

    link.onclick = (e) => {
        e.preventDefault()
        const moviesContainer = document.querySelector(".promo__interactive-list")

      
        if (genre === "All") {
            reload(movies, moviesContainer, Movie)
            return
        } 



        const filtered = movies.filter(movie => {
            if (movie.genre === genre) {
                return movie
            }
        })
        

        reload(filtered, moviesContainer, Movie)
    }

    return link
}

export { Genre }
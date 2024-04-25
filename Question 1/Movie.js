//https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md

class Movie{
    constructor(title,studio,rating = "PG"){
        this.title = title;
        this.studio =studio;
        this.rating = rating;
    }
    get getPG(){
        let titles = "";
        if(this.rating == "PG"){
           titles+= this.title;
        }
        return titles;
    }
}

// b)
let rating = new Movie("Singam", "Studio Green");
console.log(` B.)
Title : ${rating.title}
Studio : ${rating.studio}
Rating : ${rating.rating}`)

// c)
let PG = new Movie("Kaithi", "Dream Warrior");
console.log(`c.)
Title : ${PG.title}
Studio : ${PG.studio}
Rating : ${PG.rating}

Title : ${PG.getPG}, ${rating.title}
`)


// d)
let movie = new Movie("Casino Royale", "Eon Productions", "PG-13")
console.log(`D.)
Title : ${movie.title}
Studio : ${movie.studio}
Rating : ${movie.rating}`)
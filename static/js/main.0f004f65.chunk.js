(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},,function(e,t,a){e.exports=a(18)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),l=a(5),c=a.n(l),m=(a(13),a(7)),o=a(1),r=(a(14),a(15),a(16),function(e){var t=e.title,a=e.description,i=void 0===a?"":a,l=e.imgUrl,c=e.imdbUrl;return n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-image"},n.a.createElement("figure",{className:"image is-4by3"},n.a.createElement("img",{src:l,alt:"Film logo"}))),n.a.createElement("div",{className:"card-content"},n.a.createElement("div",{className:"media"},n.a.createElement("div",{className:"media-left"},n.a.createElement("figure",{className:"image is-48x48"},n.a.createElement("img",{src:"images/imdb-logo.jpeg",alt:"imdb"}))),n.a.createElement("div",{className:"media-content"},n.a.createElement("p",{className:"title is-8"},t))),n.a.createElement("div",{className:"content"},i,n.a.createElement("br",null),n.a.createElement("a",{href:c},"IMDB"))))}),s=function(e){var t=e.movies,a=void 0===t?[]:t;return n.a.createElement("div",{className:"movies"},a.map((function(e){return n.a.createElement(r,Object.assign({key:e.imdbId},e))})))};a(17);var d=function(e){var t=e.addMovie,a=Object(i.useState)(""),l=Object(o.a)(a,2),c=l[0],m=l[1],s=Object(i.useState)(null),d=Object(o.a)(s,2),u=d[0],h=d[1],p=Object(i.useState)(!1),g=Object(o.a)(p,2),v=g[0],b=g[1];Object(i.useEffect)((function(){}),[c]);var f=function(){(function(e){return fetch("".concat("https://www.omdbapi.com/?apikey=4636557e&t=").concat(e)).then((function(e){if(!e.ok)throw new Error("".concat(e.status," - ").concat(e.statusText));return e.json()}))})(c).then((function(e){if("False"===e.Response)return b(!0),void h(null);var t=e.Title,a=e.Plot,i=e.Poster,n=e.imdbID;h({title:t,description:a,imgUrl:i,imdbUrl:"https://www.imdb.com/title/".concat(n),imdbId:n}),b(!1),m("")}))};return n.a.createElement(n.a.Fragment,null,n.a.createElement("form",{className:"find-movie"},n.a.createElement("div",{className:"field"},n.a.createElement("label",{className:"label",htmlFor:"movie-title"},"Movie title"),n.a.createElement("div",{className:"control"},n.a.createElement("input",{type:"text",id:"movie-title",placeholder:"Enter a title to search",className:"input is-danger",value:c,onChange:function(e){return m(e.target.value)}})),v&&n.a.createElement("p",{className:"help is-danger"},"Can't find a movie with such a title")),n.a.createElement("div",{className:"field is-grouped"},n.a.createElement("div",{className:"control"},n.a.createElement("button",{type:"button",className:"button is-light",onClick:function(){return f()}},"Find a movie")),n.a.createElement("div",{className:"control"},n.a.createElement("button",{type:"button",className:"button is-primary",onClick:function(){t(u),h(null)}},"Add to the list")))),n.a.createElement("div",{className:"container"},n.a.createElement("h2",{className:"title"},"Preview"),u&&n.a.createElement(r,u)))},u=a(6),h=function(){var e=Object(i.useState)(u),t=Object(o.a)(e,2),a=t[0],l=t[1];return n.a.createElement("div",{className:"page"},n.a.createElement("div",{className:"page-content"},n.a.createElement(s,{movies:a})),n.a.createElement("div",{className:"sidebar"},n.a.createElement(d,{addMovie:function(e){e&&a.findIndex((function(t){return t.imdbId===e.imdbId}))<0&&l((function(){return[].concat(Object(m.a)(a),[e])}))}})))};c.a.render(n.a.createElement(h,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.0f004f65.chunk.js.map
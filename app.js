const key = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";
const cuteTerms = [
  "puppy",
  "kitty",
  "hamster",
  "kitten",
  "golden retriever",
  "baby",
  "corgi",
  "panda",
];

$("form").on("submit", function (e) {
  e.preventDefault();
  const searchTerm = $("#search").val();
  getGif(searchTerm);
  $("#search").val("");
});

async function getGif(searchTerm) {
  const res = await axios.get(
    `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${key}&limit=30&rating=G`
  );
  let randGif = getRandom(res.data.data.length);

  let url = res.data.data[randGif].images.original.url;
  appendGif(url);
}

function appendGif(gifUrl) {
  let img = document.createElement("img");
  img.src = gifUrl;
  $("#gifList").prepend(img);
}

removeGifs.addEventListener("click", function () {
  $("#gifList").empty();
});

$("#cute").on("click", function () {
  let cuteI = getRandom(cuteTerms.length - 1);
  console.log(cuteI);
  console.log(cuteTerms[cuteI]);
  getGif(cuteTerms[cuteI]);
});

function getRandom(maxNum) {
  return Math.floor(Math.random() * (maxNum + 1));
}

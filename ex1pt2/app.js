// let deckID = null;
// let url = '';

//     axios.get('https://deckofcardsapi.com/api/deck/new/')
//     .then(res => {
//         console.log(res.data.deck_id)
//         deckID = res.data.deck_id
//         return axios.get(`https://deckofcardsapi.com/api/deck/${deckID}/draw/`)
//     })
//     .then(res => {
//         $('#drawBtn').on('click', function(){
//             console.log(res.data)
//             let cardImg = document.querySelector('#cardImg')
//             cardImg.src = res.data.cards[0].image;
//             return axios.get(`https://deckofcardsapi.com/api/deck/${deckID}/draw/`)
//         })
//     })

// $('#drawBtn').on('click', function(e){
//     axios.get(url)
//         .then(res => {
//             console.log(res.data)
//             let cardImg = document.querySelector('#cardImg')
//             cardImg.src = res.data.cards[0].image;
//         })

//         // $('#drawBtn').on('click', function(e){
//         //     console.log('it works!');
//         });

let url = 'https://deckofcardsapi.com/api/deck/';
// axios.get(`${url}/new/draw/`)
//     .then(res => {
//         card = res.data.cards[0];
//         console.log(`${card.value} OF ${card.suit}`);
//         let deckID = res.data.deck_id;
//         return axios.get(`${url}/${deckID}/draw`)
//     })
//     .then(res => {

//     })


let deckID = null;
let btn = $('#drawBtn');


axios.get(`${url}/new/`)
    .then(res => {
        console.log(res.data)
        deckID = res.data.deck_id;
    });

    $('#drawBtn').on('click', function(){
        axios.get(`${url}/${deckID}/draw`)
        .then(res => {
            console.log(res.data)
            let cardImg = document.querySelector('#cardImg');
            cardImg.src = res.data.cards[0].image;
        });
    }); 
// for(let i=0; i<3; i++){
//     let url = 'http://numbersapi.com/${i}';

// }


axios.get('http://numbersapi.com/21?json')
    .then(res => {
        console.log(res.data.text)
        let newLI = document.createElement('LI');
        newLI.innerText = res.data.text;
        $('ul').append(newLI)
        let randNum = (Math.ceil(Math.random() *100));
        return axios.get(`http://numbersapi.com/${randNum}?json`)})
    .then(res => {
        console.log(res.data.text)
        let newLI = document.createElement('LI');
        newLI.innerText = res.data.text;
        $('ul').append(newLI)
        let randNum = (Math.ceil(Math.random() *100));
        return axios.get(`http://numbersapi.com/${randNum}?json`)})
    .then(res => {
        console.log(res.data.text)
        let newLI = document.createElement('LI');
        newLI.innerText = res.data.text;
        $('ul').append(newLI)
        let randNum = (Math.ceil(Math.random() *100));
        return axios.get(`http://numbersapi.com/${randNum}?json`)})
    .then(res => {
        console.log(res.data.text)
        let newLI = document.createElement('LI');
        newLI.innerText = res.data.text;
        $('ul').append(newLI)
        let randNum = (Math.ceil(Math.random() *100));
        return axios.get(`http://numbersapi.com/${randNum}?json`)})
    .catch(err => console.log(err))
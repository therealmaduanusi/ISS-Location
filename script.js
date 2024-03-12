// USING THE THEN METHOD
// fetch('https://api.wheretheiss.at/v1/satellites/25544')
// .then(x => x.json())
// .then(y => console.log(y.latitude))
// console.log('happy birthday');

// USING ASYNC MODE
getFiles('https://api.wheretheiss.at/v1/satellites/25544')
async function getFiles(file) {
    let getObject = await fetch(file)
    // console.log(getObject);
    if (getObject.status === 200) {
        let myText = await getObject.json()
        let getLat = myText.latitude
        document.getElementById('demo').innerHTML = getLat;
        document.getElementById('demo1').innerHTML = getLat;
    }else{
        console.error('Error');
        document.getElementById('demo').innerHTML = '404 wrong url';
        document.getElementById('demo1').innerHTML = '404 wrong url';
    }

}
getFile('text.txt')
async function getFile(file) {
    let getObject = await fetch(file)
    let myText = await getObject.text()
    console.log(myText);
}



// IGNORE THE LINES
// console.log('aout to fetch a raindow')
// async function catchRainbow(params) {
//     const response = await fetch('rainbow.jpg');
//     console.log(response)
//     const blob = await response.blob();
//     document.getElementById('rainbow').src = URL.createObjectURL(blob)
// }
// catchRainbow().catch(error => {
//     console.log('erro')
//     console.error(error);
// })
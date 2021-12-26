var request=new XMLHttpRequest;
request.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json');
request.send();
request.onload=function(){
    fetch('https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json')
    .then(res => res.json())
    .then((out) => {
        console.log('Output: ', out);
    }).catch(err => console.error(err));
};
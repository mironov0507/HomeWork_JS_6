////// Zadanie 1 ////////////////////////////////////

let str1 = 'aaa@bbb@ccc';

console.log(str1.replace(/@/g, '!'));

////// Zadanie 2 ////////////////////////////////////

let date = '2025-12-31';

console.log(date.replace(/(2025)(-)(12)(-)(31)/, '$5\/$3\/$1'));

////// Zadanie 3 ////////////////////////////////////

let str2 = 'Я учу javascript!';

console.log(str2.substring(2,16));

console.log(str2.substr(2,14));

console.log(str2.slice(2,16));

////// Zadanie 4 ////////////////////////////////////

let arr = [4,2,5,19,13,0,10],
    sum = 0;

for(let i=0; i<arr.length; i++){
    sum +=Math.pow(arr[i],3);
}

console.log(Math.sqrt(sum));

////// Zadanie 5 ////////////////////////////////////

function result(a,b){
    let c = a - b;
    return Math.abs(c);
}

console.log(result(3,5));

////// Zadanie 6 ////////////////////////////////////

let dateNow = new Date();

function ver(d){
    if(d > 0 && d < 10){
        return '0' + d;
    }else return d;
}

console.log(`${dateNow.getHours()}:${dateNow.getMinutes()}:${dateNow.getSeconds()} ${ver(dateNow.getDate())}.${ver(dateNow.getMonth())}.${dateNow.getFullYear()}.`);

////// Zadanie 7 ////////////////////////////////////

let str3 = 'aa aba abba abbba abca abea';

let regexp = /ab+a/gi;

console.log(str3.match(regexp));

////// Zadanie 8 ////////////////////////////////////

let tel = '+375 44 5586977';

let regTel = /^[+]\d{3}\s?-?\(?\d{2}\)?-?\s?\d{3}-?\s?\d{2}-?\s?\d{2}$/gi;

console.log(regTel.test(tel));

////// Zadanie 9 ////////////////////////////////////

let email1 = 'mir_onov05-07@gmail.com';

let regMail = /^[0-9a-z_-]{2,}@[a-z]{2,11}.[a-z]{2,11}$/;

console.log(regMail.test(email1));

////// Zadanie 10 ////////////////////////////////////

// (https?:\/\/[a-zA-Z0-9.]*)(\/.*\/)?(\?[a-z_=&0-9]*)?(#.*\/?)?

function urlPars(url){
    let arr = [],
        regexp = /(https?:\/\/[a-zA-Z0-9.]*)(\/.*\/)?(\?[a-z_=&0-9]*)?(#.*\/?)?/;

        let newUrl = url.match(regexp);
        for(let i = 1; i < newUrl.length; i++){
            arr.push(newUrl[i]);
        }
    return arr;
}

console.log(urlPars('https://tech.onliner.by/2018/04/26/smart-do-200/?utm_source=main_tile&utm_medium=smartdo200#zag3'));
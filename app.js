const upperSet='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerSet='abcdefghijklmnopqrstuvwxyz'; 
const numberSet='1234567890'; 
const symbolSet='~!@#$%^&*()_+/';  

const passwordBox= document.getElementById('passwordBox'); 
const passwordLength= document.getElementById('passwordLength')
const number= document.getElementById('number') 
const symbol= document.getElementById('symbol') 
const upperCase= document.getElementById('upperCase') 
const lowercase= document.getElementById('lowercase') 
const button= document.querySelector('.btn')


const getRandomData= (dataset)=>{
    return dataset[Math.floor(Math.random()*dataset.length)]
}  
 

const randomPassword= (password='')=>{
    if(number.checked){
        password+= getRandomData(numberSet);
    } 
    if(symbol.checked){
        password+= getRandomData(symbolSet);
    } 
    if(upperCase.checked){
        password+= getRandomData(upperSet);
    } 
    if(lowercase.checked){
        password+= getRandomData(lowerSet);
    } 
    if(password.length < passwordLength.value){
        return randomPassword(password);
    }   
    else{
         passwordBox.value=truncate(password,passwordLength.value)
    }
  
}
function truncate(string, length){
    if(string > length){
     return string.slice(0,length)
        } 
    else{
        return string
    }
}
button.addEventListener('click',()=>{
    randomPassword();
})
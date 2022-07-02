import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAzMjbfCRxvsa9sO5V5AOpun39P3Bn5BQQ",
    authDomain: "cody-cc9a5.firebaseapp.com",
    projectId: "cody-cc9a5",
    databaseURL: "https://cody-cc9a5-default-rtdb.firebaseio.com/",
    storageBucket: "cody-cc9a5.appspot.com",
    messagingSenderId: "1064418253596",
    appId: "1:1064418253596:web:732e3ee1a015546439f8d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
var database = firebase.database();
var ref = database.ref('code')
document.getElementById('langDiv').style.display = 'none'
var lang = document.getElementById('langDiv');
document.getElementById('selectLangBtnMain').onclick = function() {
    document.getElementById('langDiv').style.display = ''
    document.getElementById('selectLangBtnMain').style.display = 'none'
}


document.getElementById('langHtmlBtn').onclick = function() {
    document.getElementById('langHtmlBtn').style.display
    document.getElementById('go').style.display = ''
    document.getElementById('textUploadCode').style.display = ''
    document.getElementById('textUploadCode').value = "Html"



}
document.getElementById('langCssBtn').onclick = function() {
    document.getElementById('go').style.display = ''

    document.getElementById('textUploadCode').style.display = ''




}
document.getElementById('langJsBtn').onclick = function() {
    document.getElementById('go').style.display = ''

    document.getElementById('textUploadCode').style.display = ''




}
document.getElementById('langPyBtn').onclick = function() {
    document.getElementById('go').style.display = ''

    document.getElementById('textUploadCode').style.display = ''




}
document.getElementById('langCpBtn').onclick = function() {
    document.getElementById('go').style.display = ''

    document.getElementById('textUploadCode').style.display = ''


}
document.getElementById('langCsBtn').onclick = function() {
    document.getElementById('go').style.display = ''

    document.getElementById('textUploadCode').style.display = ''




}
var data = {
    a: document.getElementById('textUploadCode').value

}
document.getElementById('go').onclick = function() {
    ref.push(data);
}
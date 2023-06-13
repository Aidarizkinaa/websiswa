$(document).ready(function(){
    $('.latihan').show();
    $('.kesimpulan').hide();
    document.getElementById('vidio').addEventListener('ended',myHandler,false);

    function myHandler(e) {
        $('.latihan').show(100);
        $('.pre-latihan').hide();
    }
});

//Mari Mencoba Pilihan Ganda 1
var q1opsi1=document.getElementById("q1opsi1");
var q1opsi2=document.getElementById("q1opsi2");
var q1opsi3=document.getElementById("q1opsi3");
var q1opsi4=document.getElementById("q1opsi4");
var q1opsi5=document.getElementById("q1opsi5");
var answer1=document.getElementById("pilganno1");

function soalq1(){
    if(document.getElementById("q1soal1").checked) {
        q1opsi1.style.display="";
        answer1.style.borderColor="#008852";
        $("#correct-answer-1").show(200);
        $("#wrong-answer-1").hide(200);
    }else{
        q1opsi1.style.display="none";
    }
    if(document.getElementById("q1soal2").checked) {
        q1opsi2.style.display="";
        answer1.style.borderColor="red";
        $("#correct-answer-1").hide(200);
        $("#wrong-answer-1").show(200);
    }else{
        q1opsi2.style.display="none";
    }
    if(document.getElementById("q1soal3").checked) {
        q1opsi3.style.display="";
        answer1.style.borderColor="red";
        $("#correct-answer-1").hide(200);
        $("#wrong-answer-1").show(200);
    }else{
        q1opsi3.style.display="none";
    }
    if(document.getElementById("q1soal4").checked) {
        q1opsi4.style.display="";
        answer1.style.borderColor="red";
        $("#correct-answer-1").hide(200);
        $("#wrong-answer-1").show(200);
    }else{
        q1opsi4.style.display="none";
    }
    if(document.getElementById("q1soal5").checked) {
        q1opsi5.style.display="";
        answer1.style.borderColor="red";
        $("#correct-answer-1").hide(200);
        $("#wrong-answer-1").show(200);
    }else{
        q1opsi5.style.display="none";
    }

}

// Mari Mencoba Pilihan Ganda 2
var q2opsi1=document.getElementById("q2opsi1");
var q2opsi2=document.getElementById("q2opsi2");
var q2opsi3=document.getElementById("q2opsi3");
var q2opsi4=document.getElementById("q2opsi4");
var q2opsi5=document.getElementById("q2opsi5");
var answer2=document.getElementById("pilganno2");

function soalq2(){
    if(document.getElementById("q2soal1").checked) {
        q2opsi1.style.display="";
        answer2.style.borderColor="red";
        $("#correct-answer-2").hide(200);
        $("#wrong-answer-2").show(200);
    }else{
        q2opsi1.style.display="none";
    }
    if(document.getElementById("q2soal2").checked) {
        q2opsi2.style.display="";
        answer2.style.borderColor="red";
        $("#correct-answer-2").hide(200);
        $("#wrong-answer-2").show(200);
    }else{
        q2opsi2.style.display="none";
    }
    if(document.getElementById("q2soal3").checked) {
        q2opsi3.style.display="";
        answer2.style.borderColor="green";
        $("#correct-answer-2").show(200);
        $("#wrong-answer-2").hide(200);
    }else{
        q2opsi3.style.display="none";
    }
    if(document.getElementById("q2soal4").checked) {
        q2opsi4.style.display="";
        answer2.style.borderColor="red";
        $("#correct-answer-2").hide(200);
        $("#wrong-answer-2").show(200);
    }else{
        q2opsi4.style.display="none";
    }
    if(document.getElementById("q2soal5").checked) {
        q2opsi5.style.display="";
        answer2.style.borderColor="red";
        $("#correct-answer-2").hide(200);
        $("#wrong-answer-2").show(200);
    }else{
        q2opsi5.style.display="none";
    }
}

// Mari Mencoba Pilihan Ganda 3
var q3opsi1=document.getElementById("q3opsi1");
var q3opsi2=document.getElementById("q3opsi2");
var q3opsi3=document.getElementById("q3opsi3");
var q3opsi4=document.getElementById("q3opsi4");
var q3opsi5=document.getElementById("q3opsi5");
var answer3=document.getElementById("pilganno3");

function soalq3(){
    if(document.getElementById("q3soal1").checked) {
        q3opsi1.style.display="";
        answer3.style.borderColor="red";
        $("#correct-answer-3").hide(200);
        $("#wrong-answer-3").show(200);
    }else{
        q3opsi1.style.display="none";
    }
    if(document.getElementById("q3soal2").checked) {
        q3opsi2.style.display="";
        answer3.style.borderColor="red";
        $("#correct-answer-3").hide(200);
        $("#wrong-answer-3").show(200);
    }else{
        q3opsi2.style.display="none";
    }
    if(document.getElementById("q3soal3").checked) {
        q3opsi3.style.display="";
        answer3.style.borderColor="red";
        $("#correct-answer-3").hide(200);
        $("#wrong-answer-3").show(200);
    }else{
        q3opsi3.style.display="none";
    }
    if(document.getElementById("q3soal4").checked) {
        q3opsi4.style.display="";
        answer3.style.borderColor="red";
        $("#correct-answer-3").hide(200);
        $("#wrong-answer-3").show(200);
    }else{
        q3opsi4.style.display="none";
    }
    if(document.getElementById("q3soal5").checked) {
        q3opsi5.style.display="";
        answer3.style.borderColor="green";
        $("#correct-answer-3").show(200);
        $("#wrong-answer-3").hide(200);
    }else{
        q3opsi5.style.display="none";
    }
}

// Mari Mencoba Pilihan Ganda 4
var q4opsi1=document.getElementById("q4opsi1");
var q4opsi2=document.getElementById("q4opsi2");
var q4opsi3=document.getElementById("q4opsi3");
var q4opsi4=document.getElementById("q4opsi4");
var q4opsi5=document.getElementById("q4opsi5");
var answer4=document.getElementById("pilganno4");

function soalq4(){
    if(document.getElementById("q4soal1").checked) {
        q4opsi1.style.display="";
        answer4.style.borderColor="red";
        $("#correct-answer-4").hide(200);
        $("#wrong-answer-4").show(200);
    }else{
        q4opsi1.style.display="none";
    }
    if(document.getElementById("q4soal2").checked) {
        q4opsi2.style.display="";
        answer4.style.borderColor="green";
        $("#correct-answer-4").show(200);
        $("#wrong-answer-4").hide(200);
    }else{
        q4opsi2.style.display="none";
    }
    if(document.getElementById("q4soal3").checked) {
        q4opsi3.style.display="";
        answer4.style.borderColor="red";
        $("#correct-answer-4").hide(200);
        $("#wrong-answer-4").show(200);
    }else{
        q4opsi3.style.display="none";
    }
    if(document.getElementById("q4soal4").checked) {
        q4opsi4.style.display="";
        answer4.style.borderColor="red";
        $("#correct-answer-4").hide(200);
        $("#wrong-answer-4").show(200);
    }else{
        q4opsi4.style.display="none";
    }
    if(document.getElementById("q4soal5").checked) {
        q4opsi5.style.display="";
        answer4.style.borderColor="red";
        $("#correct-answer-4").hide(200);
        $("#wrong-answer-4").show(200);
    }else{
        q4opsi5.style.display="none";
    }
}

// Mari Mencoba Pilihan Ganda 5
var q5opsi1=document.getElementById("q5opsi1");
var q5opsi2=document.getElementById("q5opsi2");
var q5opsi3=document.getElementById("q5opsi3");
var q5opsi4=document.getElementById("q5opsi4");
var q5opsi5=document.getElementById("q5opsi5");
var answer5=document.getElementById("pilganno5");

function soalq5(){
    if(document.getElementById("q5soal1").checked) {
        q5opsi1.style.display="";
        answer5.style.borderColor="green";
        $("#correct-answer-5").show(200);
        $("#wrong-answer-5").hide(200);
    }else{
        q5opsi1.style.display="none";
    }
    if(document.getElementById("q5soal2").checked) {
        q5opsi2.style.display="";
        answer5.style.borderColor="red";
        $("#correct-answer-5").hide(200);
        $("#wrong-answer-5").show(200);
    }else{
        q5opsi2.style.display="none";
    }
    if(document.getElementById("q5soal3").checked) {
        q5opsi3.style.display="";
        answer5.style.borderColor="red";
        $("#correct-answer-5").hide(200);
        $("#wrong-answer-5").show(200);
    }else{
        q5opsi3.style.display="none";
    }
    if(document.getElementById("q5soal4").checked) {
        q5opsi4.style.display="";
        answer5.style.borderColor="red";
        $("#correct-answer-5").hide(200);
        $("#wrong-answer-5").show(200);
    }else{
        q5opsi4.style.display="none";
    }
    if(document.getElementById("q5soal5").checked) {
        q5opsi5.style.display="";
        answer5.style.borderColor="red";
        $("#correct-answer-5").hide(200);
        $("#wrong-answer-5").show(200);
    }else{
        q5opsi5.style.display="none";
    }
}
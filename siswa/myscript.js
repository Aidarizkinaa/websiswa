// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAZI0d--GjhPMbhAJzbu5-d9GhSLvhvUc4",
    authDomain: "skripsi-59af8.firebaseapp.com",
    databaseURL: "https://skripsi-59af8-default-rtdb.firebaseio.com",
    projectId: "skripsi-59af8",
    storageBucket: "skripsi-59af8.appspot.com",
    messagingSenderId: "769950506546",
    appId: "1:769950506546:web:092407abc797f9f477e62b",
    measurementId: "G-R5J90L78S0"
};

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    import{ getDatabase, ref, set, child,get,update,remove}
    from "https://www.gstatic.com/firebasejs/9.20.0/firebase-database.js";   
    const db =getDatabase();

    //----------------------referensi ------------------
    
    const nisnlink =document.getElementById('nisnlink');
    const passwordlink =document.getElementById('passwordlink');
    const submit =document.getElementById('sub_btn');

    //------------------PROSES AUTENKASI LOGIN SISWA----------------------
    function AuthenticateUser() {
        const dbRef = ref(db);

        get(child(dbRef, "Data-Siswa/" + nisnlink.value)).then((snapshot) => {
            if (snapshot.exists()) {
                let dbnisn = snapshot.val().nisn;
                let dbnama = snapshot.val().fullname;
                let dbkelas = snapshot.val().kelas;
                let dbsekolah = snapshot.val().sekolah;
                let dbpassword = snapshot.val().password;

                if (dbnisn == nisnlink.value && dbpassword == passwordlink.value) {
                sessionStorage.setItem("nisn", dbnisn);
                sessionStorage.setItem("nama", dbnama);
                sessionStorage.setItem("kelas", dbkelas);
                sessionStorage.setItem("sekolah", dbsekolah);
                sessionStorage.setItem("password", dbpassword);
                // ("Berhasil");
                window.location = "../html/materi/sub1-1.html";
                } else {
                alert("nama atau nisn yang anda masukkan salah");
                }
            } else {
                alert("Anda Belum terdaftar!");
            }
        });
    }
    //assign the events
    submit.addEventListener("click", AuthenticateUser);

    //------------------Referensi Login-----------------
    const namareg = document.getElementById('reg_nama');
    const nisnreg = document.getElementById('reg_nisn');
    const kelasreg = document.getElementById('reg_kelas');
    const sekolahreg = document.getElementById('reg_sekolah');
    const passwordreg = document.getElementById('reg_password');
    const submitreg = document.getElementById('reg_submit');        

    //validation
    function isEmptyOrSpaces(str) {
    return str == null || str.match(/^ *$/) !== null;
    }

    function validation() {
        let namaregex = /^[a-zA-Z\s]+$/;
        let nisnregex = /^[a-zA-Z0-9]+$/;


        if (isEmptyOrSpaces(namareg.value) || isEmptyOrSpaces(nisnreg.value) || isEmptyOrSpaces(kelasreg.value) || isEmptyOrSpaces(sekolahreg.value) || isEmptyOrSpaces(passwordreg.value)) {
        alert("Silahkan Isi Data Anda");
        }
    
        if (!namaregex.test(namareg.value)) {
        alert("Nama harus Sesuai dengan Alphabet");
        return false;
        }

        if (!nisnregex.test(nisnreg.value)) {
        alert("NISN gunakan angka");
        return false;
        }
        return true ;
    }  

//---------------------------REGISTER USer To Firebase------------------
function RegisterUser() {
    if (!validation()) {
      return;
    }

    const dbRef = ref(db);

    get(child(dbRef, "Data-Siswa/" + reg_nisn.value)).then((snapshot) => {
      if (snapshot.exists()) {
        alert("Akun anda sudah terdaftar!");
      } else {
        set(ref(db, "Data-Siswa/" + nisnreg.value), {
          fullname: namareg.value,
          nisn: nisnreg.value,
          kelas: kelasreg.value,
          sekolah: sekolahreg.value,
          password: passwordreg.value,
        })
          .then(() => {
            alert("registrasi anda berhasil");
            window.location = "#sign-in-btn";
          })
          .catch((error) => {
            alert("registrasi gagal" + error);
          });
      }
    });
  }

  //-----------------------ASSSIGN THE EVENTS----------------
  submitreg.addEventListener("click", RegisterUser); 
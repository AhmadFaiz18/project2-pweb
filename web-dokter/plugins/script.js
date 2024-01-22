function login(){
    let username = document.getElementById("mail").value;
    let password = document.getElementById("pass").value;

    if(username === "gigi@gmail.com" && password === "12345"){

      document.getElementById("form").action = "dokter.html";

    } else{
      alert("username atau password salah!");
    }

  }
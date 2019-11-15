var user = localStorage.getItem('userName');
      if (user){
      console.log("logged in");
      }
      else {
        window.location.href="redirect.html";
      }
$(document).ready(function () {
    // getData();
  
    $("#btnAddStudent").click(function () {
      //collect student data from student form
      function getStudentData() {
        let student = {
          firstName: $("#firstName").val(),
          lastName: $("#lastName").val(),
          Mobno: $("#Mobno").val(),
          rollno: $("#rollno").val(),
          mailid: $("#mailid").val(),
          country: $("#country").val(),
          category: $("#category").val(),
        };
        $("#studentForm")[0].reset();
        return student;
      }
  
      //store student data to localStorage
      function storeDataToLocalStorage() {
        if (!localStorage.getItem("student")) {
          localStorage.setItem("student", JSON.stringify(getStudentData()));
        } else {
          localStorage.removeItem("student");
          localStorage.setItem("student", JSON.stringify(getStudentData()));
        }
      }
      
      //send data to server with AJAX request
      function sendData() {
        let xhr = new XMLHttpRequest();
        let data = JSON.stringify(getStudentData());
        xhr.open("POST", "http://localhost:4000/storedata", true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(data);
      }
  
      //call storeDataToLocalStorage and sendData functions
      storeDataToLocalStorage();
      // sendData();
      // window.location.href = "display-data.html";
      window.open("display_data.html");
    });
  });
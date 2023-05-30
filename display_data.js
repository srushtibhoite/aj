$(document).ready(function () {
    getData();
  });
  
  function getData() {
    let localStorageData = localStorage.getItem("student");
    let studentObj = JSON.parse(localStorageData);
    console.log(studentObj);
   
    $("#firstName").text(studentObj.firstName);
    $("#lastName").text(studentObj.lastName);
    $("#Mobno").text(studentObj.Mobno);
    $("#rollno").text(studentObj.rollno);
    $("#mailid").text(studentObj.mailid);
    $("#country").text(studentObj.country);
    $("#category").text(studentObj.category);
  }
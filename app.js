var getformdata = document.getElementById('formdata');
var resumeOutput = document.getElementById('resume_output');
getformdata.addEventListener('submit', function (event) {
    event.preventDefault();
    var getobj = document.getElementById('user_summary').value;
    var getname = document.getElementById('user_name').value;
    var getemail = document.getElementById('user_email').value;
    var getnum = document.getElementById('user_num').value;
    var getcnic = document.getElementById('user_cnic').value;
    var getadd = document.getElementById('user_address').value;
    var getedu = document.getElementById('user_edu').value;
    var getexp = document.getElementById('user_exp').value;
    var getskill = document.getElementById('user_skill').value;
    var changehtmldata = "\n<h1>resume</h1>\n<h3>career summary</h3>\n<p>objective: <span contenteditable=\"true\">".concat(getobj, "</span></p>\n<h3>Personal Information</h3>\n<p>Name: <span contenteditable=\"true\"> ").concat(getname, " </span></p>\n<p>Email: <span contenteditable=\"true\"> ").concat(getemail, " </span></p>\n<p>Phone: <span contenteditable=\"true\"> ").concat(getnum, " </span></p>\n<p>CNIC: <span contenteditable=\"true\"> ").concat(getcnic, " </span></p>\n<p>Address: <span contenteditable=\"true\"> ").concat(getadd, " </span></p>\n\n<h3>Education</h3>\n\n<p><span contenteditable=\"true\"> <br>").concat(getedu, "</span></p>\n\n<h3> Experience</h3>\n<p><span contenteditable=\"true\"> <br>").concat(getexp, " </span></p>\n\n<h3>Skill</h3>\n<p> <span contenteditable=\"true\"> <br>").concat(getskill, " </span></p>\n");
    if (resumeOutput) {
        resumeOutput.innerHTML = changehtmldata;
    }
    else {
        console.log('you missed an input to fil.');
    }
});

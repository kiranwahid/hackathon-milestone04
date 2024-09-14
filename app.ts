let getformdata = document.getElementById('formdata') as HTMLFormElement;
let resumeOutput = document.getElementById('resume_output') as HTMLDivElement;



getformdata.addEventListener('submit' , (event:Event) =>{
    event.preventDefault();
    let getobj = (document.getElementById('user_summary') as HTMLTextAreaElement).value
let getname = (document.getElementById('user_name') as HTMLInputElement).value
let getemail = (document.getElementById('user_email') as HTMLInputElement).value
let getnum = (document.getElementById('user_num') as HTMLInputElement).value
let getcnic = (document.getElementById('user_cnic') as HTMLInputElement).value
let getadd = (document.getElementById('user_address') as HTMLInputElement).value
let getedu = (document.getElementById('user_edu') as HTMLInputElement).value
let getexp = (document.getElementById('user_exp') as HTMLInputElement).value
let getskill = (document.getElementById('user_skill') as HTMLInputElement).value

let changehtmldata = `
<h1>resume</h1>
<h3>career summary</h3>
<p>objective: <span contenteditable="true">${getobj}</span></p>
<h3>Personal Information</h3>
<p>Name: <span contenteditable="true"> ${getname} </span></p>
<p>Email: <span contenteditable="true"> ${getemail} </span></p>
<p>Phone: <span contenteditable="true"> ${getnum} </span></p>
<p>CNIC: <span contenteditable="true"> ${getcnic} </span></p>
<p>Address: <span contenteditable="true"> ${getadd} </span></p>

<h3>Education</h3>

<p><span contenteditable="true"> <br>${getedu}</span></p>

<h3> Experience</h3>
<p><span contenteditable="true"> <br>${getexp} </span></p>

<h3>Skill</h3>
<p> <span contenteditable="true"> <br>${getskill} </span></p>
`;
if (resumeOutput) {
    resumeOutput.innerHTML= changehtmldata;
}else{
    console.log('you missed an input to fil.')
}

})

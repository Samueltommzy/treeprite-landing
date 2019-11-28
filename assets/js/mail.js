function thefunc() {
	const email=document.getElementById('mc-email').value; 
	fetch('https://api-treeprite.herokuapp.com/email', {
		method: 'post',
		body: JSON.stringify({email: email }),
		headers:{
			'Content-Type': 'application/json'
		}
	}).then((data)=>{
		if (data.status == 404){
			alert('Please enter a vailid email')
			return false;
		}
		if (data.status ==400) {
			alert("Email not stored")
			return false;
		}
		if(data.status ==401){
			alert('That email has been used already,thanks')
		}
		alert("Thank you,we will be in touch");
	})
}
const mybutton = document.getElementById('mybutton')
mybutton.addEventListener('click',thefunc);

function forcontact(event) {
	event.preventDefault();
	const cname=document.getElementById('name').value;
	const cemail=document.getElementById('email').value;
	const ccompany=document.getElementById('company').value;
	const cmessage=document.getElementById('message').value;
	fetch('https://api-treeprite.herokuapp.com/contact',{
	method:"post",
	body:JSON.stringify({
		name:cname,
		email:cemail,
		company:ccompany,
		message:cmessage,
	}),
	headers:{
		"content-type":"application/json"
	}
}).then((data)=>{
	if (data.status==400){
		alert('message could not be sent');
	}
	else if (data.status==200){
		alert('your message has been recieved')
	}
})
}
const contactmessage = document.getElementById('sendMessage')
contactmessage.addEventListener('click', forcontact)


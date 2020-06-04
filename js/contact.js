// Your web app's Firebase configuration

	var firebaseConfig = {
    apiKey: "AIzaSyAUGp_58LeSla6Omt_-e4TmypXyqy8A9z0",
    authDomain: "contactform-17310.firebaseapp.com",
    databaseURL: "https://contactform-17310.firebaseio.com",
    projectId: "contactform-17310",
    storageBucket: "contactform-17310.appspot.com",
    messagingSenderId: "270311043654",
    appId: "1:270311043654:web:81df13a26c652480855047",
    measurementId: "G-SGEEV0NLVM"
  };
  firebase.initializeApp(firebaseConfig);

 const name = document.getElementById('name');
 const phone = document.getElementById('phone');
 const email	= document.getElementById('email');
 const message = document.getElementById('message');



var database = firebase.database();
//const rootref = database.ref('users');
	document.getElementById('form').addEventListener('submit', submitForm);
	function submitForm(e)
	{
		e.preventDefault();
		var name = getInputVal('name');
		var phone = getInputVal('phone');
		var email = getInputVal('email');
		var message = getInputVal('message');
		
		saveMessage(name, phone, email, message);
		document.getElementById('form').reset();
		document.querySelector('.alert').style.display = 'block';
		setTimeout (function(){
		document.querySelector('.alert').style.display = 'none';

		},2000);

		
	}

	function getInputVal(id)

	{
		return document.getElementById(id).value;
	}


	function saveMessage(name, phone, email, message)
	
	{
		var newmsg = database.ref().push();
		newmsg.set({
			cus_name: name,
			cus_phne: phone,
			cus_email: email,
			cus_message: message

		});
	}
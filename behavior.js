
// strings to hold scrolling text
let i = 0;
let contactText = "Connect with me";
let mainText = ">My name is Brian Rud.  I am an aspiring software engineer with six years of experience leading diverse teams.";

//speed of scrolling text
let speed = 75;

// function to have scrolling text on the contact page
function typeWriterContact(){
	
	
	if(i<contactText.length){
		document.getElementById("contact-text").textContent += contactText.charAt(i);
		i++;
		setTimeout(typeWriterContact, speed);
	}

}

// function to have scrolling text on the main page
function typeWriterMain(){
	
	
	if(i<mainText.length){
		document.getElementById("main-text").textContent += mainText.charAt(i);
		i++;
		setTimeout(typeWriterMain, speed);
	}

}


// javascript code for the contact page
if(document.title == "Contact"){

	//create the scrolling text
	typeWriterContact(contactText);

	// define behavior for the comments button
	document.getElementById("comments-button").addEventListener('click', function(event){

		// create a new HMLHttpRequest object to handle the request to the specified link
		xhr = new XMLHttpRequest();
		xhr.open("POST", "https://web.engr.oregonstate.edu/~zhangluy/tools/class-content/form_tests/check_request.php", true);

		// store the text in the text input box in a variable
		let comment = document.getElementById("comments").value;

		// create a variable for what will be sent with the request
		let payload = {data: comment};
		
		// set the type of headers for the request
		xhr.setRequestHeader('Content-Type', 'application/json');

		// send the request
		xhr.send(JSON.stringify(payload));

		// prevent the page from refreshing when the submit button is clicked
		event.preventDefault();
	});

}

// javascript code for the main page
else if(document.title =="Brian Rud"){

	// add event listeners to the carousel so they lead to the correct pages when clicked
	document.getElementById("skills-slide").addEventListener("click", function(){
	window.location.href="skills.html";
	})

	document.getElementById("about-slide").addEventListener("click", function(){
	window.location.href="about.html";
	})

	document.getElementById("contact-slide").addEventListener("click", function(){
	window.location.href="contact.html";
	})

	// scroll the welcome message to the user
	typeWriterMain(mainText);

}

// click button will hide subscriber page
//  and  form will fade in

document.querySelector('.banner-sub-here-btn').addEventListener('click', () => {
	//  want to hide banner sub page
	document.querySelector('.banner-sub-here').style.display = 'none';
	// form will fade in
	// cssText allows us to change several css properties
	document.querySelector('.form-container').style.cssText = 'opacity: 1; visibility: visible;';
	document.querySelector('.container').style.background = '#cc683c';
});

// click X to close will hide form and display subscriber page

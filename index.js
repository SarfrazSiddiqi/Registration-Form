function validate(){
let firstName =document.getElementById('first-name').value
let lastName =document.getElementById('last-name').value
let email =document.getElementById('email').value
let city =document.getElementById('city').value
let zip =document.getElementById('zip').value
let state =document.getElementById('state').value
let tnc =document.getElementById('tnc').checked

     
  let error = false

  if(firstName.length >=1){
    document.getElementById('first-name-valid').style.display='block'
    document.getElementById('first-name-invalid').style.display='none'
    
  }
  else{
    document.getElementById('first-name-invalid').style.display='block'
    document.getElementById('first-name-valid').style.display='none'
    error= true
  }

  if(lastName.length >=1){
    document.getElementById('last-name-valid').style.display='block'
    document.getElementById('last-name-invalid').style.display='none'
    
  }
  else{
    document.getElementById('last-name-invalid').style.display='block'
    document.getElementById('last-name-valid').style.display='none'
    error= true
  }
  console.log(email)

  if(email && email.includes('@') && email.includes('.')
   && email.lastIndexOf('.')<=email.length-3
   && email.indexOf('@')!==0){
    document.getElementById('email-valid').style.display='block'
    document.getElementById('email-invalid').style.display='none'
   
  }
  else{
    document.getElementById('email-invalid').style.display='block'
    document.getElementById('email-valid').style.display='none'
    error= true
  }

  if(city && city.length>=3 && !parseInt(city)){
    document.getElementById('city-valid').style.display='block'
    document.getElementById('city-invalid').style.display='none'
    
  }
  else{
    document.getElementById('city-invalid').style.display='block'
    document.getElementById('city-valid').style.display='none'
    error= true
  }

  // console.log(parseInt(zip))
  // console.log(!isNaN(parseInt(zip)))

  // if(zip && zip.length===6 && !isNaN(parseInt(zip))){
  if(zip && zip.length===6 && parseInt(zip)){
    document.getElementById('zip-valid').style.display='block'
    document.getElementById('zip-invalid').style.display='none'
    
  }
  else{
    document.getElementById('zip-invalid').style.display='block'
    document.getElementById('zip-valid').style.display='none'
    error= true
  }
  
  if(tnc){
    document.getElementById('tnc-invalid').style.display='none'
    
  }
  else{
    document.getElementById('tnc-invalid').style.display='block'
    error= true
  }
  if(state!='None'){
    document.getElementById('state-valid').style.display='block'
    document.getElementById('state-invalid').style.display='none'
    
  }
  else{
    document.getElementById('state-invalid').style.display='block'
    document.getElementById('state-valid').style.display='none'
    error= true
  }
  if(!error) {
		alert('Your details have been saved successfully!')
		document.getElementById('first-name').value = ''
		document.getElementById('last-name').value = ''
		document.getElementById('email').value = ''
		document.getElementById('city').value = ''
		document.getElementById('state').value = 'None'
		document.getElementById('zip').value = ''
		document.getElementById('tnc').checked = false

		document.getElementById('first-name-valid').style.display = 'none'
		document.getElementById('last-name-valid').style.display = 'none'
		document.getElementById("email-valid").style.display = "none"
		document.getElementById("city-valid").style.display = "none";
		document.getElementById("zip-valid").style.display = "none";
		document.getElementById('state-valid').style.display = "none";
	}
}
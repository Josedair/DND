//get data

db.collection('userCharStats').get().then(snapshot => {
  console.log(snapshot.docs);
});

//auth status changes
auth.onAuthStateChanged(user => {
  if (user) {
    console.log('user logged in: ', user);
    setupUI(user);
  }
  else {
    console.log('logged out');
    setupUI();
  }
});

//submit to database


//Signup
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();

  //getting user info
  const email = signupForm['signup-email'].value;
  const password = signupForm['signup-password'].value;

  //user signup
  auth.createUserWithEmailAndPassword(email, password).then(cred => {

    const modal = document.querySelector('#modal-signup');
    M.Modal.getInstance(modal).close();
    signupForm.reset();
  });

});

//log out method
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut();
});

//user log in
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  //user info
  const email = loginForm['login-email'].value;
  const password = loginForm['login-password'].value;

  auth.signInWithEmailAndPassword(email, password).then(cred => {

    //close  and reset log in modal
    const modal = document.querySelector('#modal-login');
    M.Modal.getInstance(modal).close();
    loginForm.reset();
  })

})

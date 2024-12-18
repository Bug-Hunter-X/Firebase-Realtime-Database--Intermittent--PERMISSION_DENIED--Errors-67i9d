// Solution:  Improved Authentication and Error Handling

// ... other Firebase initialization code

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    // User is signed in.
    // Access the Realtime Database
    const dbRef = firebase.database().ref();
    dbRef.once('value').then(snapshot => {
       console.log(snapshot.val());
    }).catch(error => {
        console.error('Error reading data:', error);
        if (error.code === 'PERMISSION_DENIED'){
          console.error('Permission denied. Check your Firebase security rules.');
        }
    });
  } else {
    // User is signed out.
    // Redirect or show a login UI
    console.log('User is not authenticated.');
  }
});

// Ensure proper Firebase initialization and security rule configuration.
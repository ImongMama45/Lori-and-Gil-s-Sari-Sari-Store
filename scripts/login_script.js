const signupButton = document.querySelector('.Signup-bt');
        const loginPopup = document.getElementById('login-Popup');
        const signupPopup = document.getElementById('signup-Popup');
        const closeButtons = document.querySelectorAll('.close-button');
        const showSignup = document.getElementById('showSignup');
        const showLogin = document.getElementById('showLogin');

        // Open Login Popup
        signupButton.addEventListener('click', () => {
            loginPopup.classList.add('active');
            overlay.classList.add('active');
        });

        // Close Popups
        closeButtons.forEach(button => {
            button.addEventListener('click', () => {
                loginPopup.classList.remove('active');
                signupPopup.classList.remove('active');
                overlay.classList.remove('active');
            });
        });


        overlay.addEventListener('click', () => {
            loginPopup.classList.remove('active');
            signupPopup.classList.remove('active');
            overlay.classList.remove('active');
        });


        // Switch to Signup Popup
        showSignup.addEventListener('click', (e) => {
            e.preventDefault();
            loginPopup.classList.remove('active');
            signupPopup.classList.add('active');
        });

        // Switch to Login Popup
        showLogin.addEventListener('click', (e) => {
            e.preventDefault();
            signupPopup.classList.remove('active');
            loginPopup.classList.add('active');
        });
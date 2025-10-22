document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signupForm');
    const googleBtn = document.querySelector('.btn-google');

    // Handle form submission
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        
        // Validate passwords match
        if (password !== confirmPassword) {
            alert('Passwords do not match. Please try again.');
            return;
        }
        
        // Get form data
        const formData = {
            fullName: document.getElementById('fullName').value,
            email: document.getElementById('email').value,
            company: document.getElementById('company').value,
            password: password
        };
        
        // Simulate successful signup (in production, this would be an API call)
        console.log('Signup data:', formData);
        
        // Show success message
        alert('Account created successfully! Redirecting to integrations...');
        
        // Redirect to integrations page
        window.location.href = 'integrations.html';
    });
    
    // Handle Google sign-up
    googleBtn.addEventListener('click', function() {
        // In production, this would initiate OAuth flow
        console.log('Google sign-up clicked');
        alert('Google sign-up coming soon!');
    });
});

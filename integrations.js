document.addEventListener('DOMContentLoaded', function() {
    const connectButtons = document.querySelectorAll('.connect-btn');
    const modal = document.getElementById('linearModal');
    
    // Handle connect button clicks
    connectButtons.forEach(button => {
        button.addEventListener('click', function() {
            const integration = this.getAttribute('data-integration');
            
            if (integration === 'linear') {
                openModal();
            }
        });
    });
    
    // Close modal when clicking outside of it
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
});

function openModal() {
    const modal = document.getElementById('linearModal');
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('linearModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function authorizeLinear() {
    // In production, this would redirect to Linear's OAuth page
    console.log('Authorizing Linear integration...');
    
    // Simulate OAuth flow
    alert('Opening Linear authorization...\n\nIn production, this would redirect to Linear\'s OAuth authorization page.');
    
    // Simulate successful connection
    setTimeout(() => {
        alert('Linear connected successfully!');
        closeModal();
        updateIntegrationStatus('linear', true);
    }, 1000);
}

function updateIntegrationStatus(integration, connected) {
    const button = document.querySelector(`[data-integration="${integration}"]`);
    
    if (connected) {
        button.textContent = 'Connected';
        button.classList.remove('btn-primary');
        button.classList.add('btn-success');
        button.disabled = true;
        
        // Add connected indicator to card
        const card = button.closest('.integration-card');
        if (!card.querySelector('.connected-indicator')) {
            const indicator = document.createElement('div');
            indicator.className = 'connected-indicator';
            indicator.innerHTML = `
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="7" fill="#10B981"/>
                    <path d="M11.5 5.5L6.5 10.5L4.5 8.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>Connected</span>
            `;
            card.querySelector('.integration-header').appendChild(indicator);
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const roadmapCards = document.querySelectorAll('.roadmap-card');
    
    // Handle roadmap card clicks
    roadmapCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Don't trigger if clicking the menu button
            if (e.target.closest('.roadmap-menu')) {
                return;
            }
            
            const team = this.getAttribute('data-team');
            // Navigate to roadmap detail page
            window.location.href = `roadmap.html?team=${team}`;
        });
    });
    
    // Handle menu button clicks
    const menuButtons = document.querySelectorAll('.roadmap-menu');
    menuButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const card = this.closest('.roadmap-card');
            const team = card.getAttribute('data-team');
            
            // Show context menu (simplified version)
            console.log('Menu clicked for:', team);
            alert('Roadmap menu:\n- Edit roadmap\n- Share roadmap\n- Export roadmap\n- Archive roadmap');
        });
    });
});

// Sample data for different teams
const teamData = {
    'gtm': {
        name: 'Go-To-Market',
        description: 'Product launches, marketing campaigns, and sales enablement',
        icon: 'gtm',
        progress: 65,
        teamSize: 8,
        lastUpdated: '2h ago',
        themes: [
            {
                name: 'Product Launch',
                initiatives: [
                    { id: 1, name: 'Q1 Product Launch Campaign', status: 'completed', owner: 'JD', quarter: 'q1', startQ: 'q1', endQ: 'q1', linkedIssue: 'LIN-101' },
                    { id: 2, name: 'Launch Event Planning', status: 'completed', owner: 'SM', quarter: 'q1', startQ: 'q1', endQ: 'q2', linkedIssue: 'LIN-102' }
                ]
            },
            {
                name: 'Sales Enablement',
                initiatives: [
                    { id: 3, name: 'Sales Training Materials', status: 'in-progress', owner: 'AK', quarter: 'q2', startQ: 'q2', endQ: 'q2', linkedIssue: 'LIN-103' },
                    { id: 4, name: 'Competitive Analysis Documentation', status: 'in-progress', owner: 'JD', quarter: 'q2', startQ: 'q2', endQ: 'q3', linkedIssue: 'LIN-104' }
                ]
            },
            {
                name: 'Marketing Campaigns',
                initiatives: [
                    { id: 5, name: 'Summer Campaign', status: 'planned', owner: 'SM', quarter: 'q3', startQ: 'q3', endQ: 'q3', linkedIssue: 'LIN-105' },
                    { id: 6, name: 'Partner Co-Marketing', status: 'planned', owner: 'AK', quarter: 'q4', startQ: 'q4', endQ: 'q4', linkedIssue: 'LIN-106' }
                ]
            }
        ]
    },
    'engineering': {
        name: 'Engineering',
        description: 'Product development, infrastructure, and technical initiatives',
        icon: 'engineering',
        progress: 42,
        teamSize: 15,
        lastUpdated: '1h ago',
        themes: [
            {
                name: 'Core Platform',
                initiatives: [
                    { id: 7, name: 'API v2 Development', status: 'completed', owner: 'MK', quarter: 'q1', startQ: 'q1', endQ: 'q1', linkedIssue: 'LIN-201' },
                    { id: 8, name: 'Database Migration', status: 'in-progress', owner: 'RP', quarter: 'q2', startQ: 'q1', endQ: 'q2', linkedIssue: 'LIN-202' }
                ]
            },
            {
                name: 'Product Features',
                initiatives: [
                    { id: 9, name: 'Real-time Collaboration', status: 'in-progress', owner: 'LT', quarter: 'q2', startQ: 'q2', endQ: 'q3', linkedIssue: 'LIN-203' },
                    { id: 10, name: 'Mobile App Development', status: 'planned', owner: 'MK', quarter: 'q3', startQ: 'q3', endQ: 'q4', linkedIssue: 'LIN-204' }
                ]
            },
            {
                name: 'Infrastructure',
                initiatives: [
                    { id: 11, name: 'Kubernetes Migration', status: 'planned', owner: 'RP', quarter: 'q3', startQ: 'q3', endQ: 'q3', linkedIssue: 'LIN-205' },
                    { id: 12, name: 'Performance Optimization', status: 'planned', owner: 'LT', quarter: 'q4', startQ: 'q4', endQ: 'q4', linkedIssue: 'LIN-206' }
                ]
            }
        ]
    },
    'partnerships': {
        name: 'Partnerships',
        description: 'Strategic alliances, integrations, and channel partnerships',
        icon: 'partnerships',
        progress: 58,
        teamSize: 6,
        lastUpdated: '4h ago',
        themes: [
            {
                name: 'Strategic Partnerships',
                initiatives: [
                    { id: 13, name: 'Enterprise Partner Program', status: 'completed', owner: 'TC', quarter: 'q1', startQ: 'q1', endQ: 'q1', linkedIssue: 'LIN-301' },
                    { id: 14, name: 'Channel Partner Onboarding', status: 'in-progress', owner: 'NH', quarter: 'q2', startQ: 'q2', endQ: 'q2', linkedIssue: 'LIN-302' }
                ]
            },
            {
                name: 'Integrations',
                initiatives: [
                    { id: 15, name: 'Slack Integration', status: 'in-progress', owner: 'KW', quarter: 'q2', startQ: 'q2', endQ: 'q3', linkedIssue: 'LIN-303' },
                    { id: 16, name: 'Salesforce Integration', status: 'planned', owner: 'TC', quarter: 'q3', startQ: 'q3', endQ: 'q4', linkedIssue: 'LIN-304' }
                ]
            }
        ]
    },
    'product': {
        name: 'Product',
        description: 'Feature development, UX improvements, and product strategy',
        icon: 'product',
        progress: 51,
        teamSize: 11,
        lastUpdated: '3h ago',
        themes: [
            {
                name: 'User Experience',
                initiatives: [
                    { id: 17, name: 'Design System v2', status: 'completed', owner: 'DL', quarter: 'q1', startQ: 'q1', endQ: 'q2', linkedIssue: 'LIN-401' },
                    { id: 18, name: 'Onboarding Redesign', status: 'in-progress', owner: 'JS', quarter: 'q2', startQ: 'q2', endQ: 'q3', linkedIssue: 'LIN-402' }
                ]
            },
            {
                name: 'Core Features',
                initiatives: [
                    { id: 19, name: 'Advanced Analytics Dashboard', status: 'in-progress', owner: 'RB', quarter: 'q2', startQ: 'q2', endQ: 'q3', linkedIssue: 'LIN-403' },
                    { id: 20, name: 'Workflow Automation', status: 'planned', owner: 'DL', quarter: 'q3', startQ: 'q3', endQ: 'q4', linkedIssue: 'LIN-404' }
                ]
            }
        ]
    },
    'customer-success': {
        name: 'Customer Success',
        description: 'Customer onboarding, support improvements, and retention programs',
        icon: 'customer-success',
        progress: 72,
        teamSize: 7,
        lastUpdated: '5h ago',
        themes: [
            {
                name: 'Customer Onboarding',
                initiatives: [
                    { id: 21, name: 'Automated Onboarding Flow', status: 'completed', owner: 'EB', quarter: 'q1', startQ: 'q1', endQ: 'q2', linkedIssue: 'LIN-501' },
                    { id: 22, name: 'Success Metrics Dashboard', status: 'in-progress', owner: 'MP', quarter: 'q2', startQ: 'q2', endQ: 'q2', linkedIssue: 'LIN-502' }
                ]
            },
            {
                name: 'Support & Training',
                initiatives: [
                    { id: 23, name: 'Knowledge Base Expansion', status: 'in-progress', owner: 'ZR', quarter: 'q3', startQ: 'q2', endQ: 'q3', linkedIssue: 'LIN-503' },
                    { id: 24, name: 'Webinar Series Launch', status: 'planned', owner: 'EB', quarter: 'q4', startQ: 'q4', endQ: 'q4', linkedIssue: 'LIN-504' }
                ]
            }
        ]
    },
    'operations': {
        name: 'Operations',
        description: 'Process improvements, tools optimization, and operational efficiency',
        icon: 'operations',
        progress: 48,
        teamSize: 9,
        lastUpdated: '6h ago',
        themes: [
            {
                name: 'Process Automation',
                initiatives: [
                    { id: 25, name: 'Expense Approval Workflow', status: 'completed', owner: 'HM', quarter: 'q1', startQ: 'q1', endQ: 'q1', linkedIssue: 'LIN-601' },
                    { id: 26, name: 'HR Onboarding System', status: 'in-progress', owner: 'CF', quarter: 'q2', startQ: 'q2', endQ: 'q3', linkedIssue: 'LIN-602' }
                ]
            },
            {
                name: 'Tools & Infrastructure',
                initiatives: [
                    { id: 27, name: 'IT Asset Management', status: 'in-progress', owner: 'NA', quarter: 'q2', startQ: 'q2', endQ: 'q3', linkedIssue: 'LIN-603' },
                    { id: 28, name: 'Security Compliance Update', status: 'planned', owner: 'HM', quarter: 'q3', startQ: 'q3', endQ: 'q4', linkedIssue: 'LIN-604' }
                ]
            }
        ]
    }
};

// Get team from URL parameter
function getTeamFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('team') || 'gtm';
}

// Get all initiatives for a team
function getAllInitiatives(teamId) {
    const team = teamData[teamId];
    if (!team) return [];
    
    const initiatives = [];
    team.themes.forEach(theme => {
        theme.initiatives.forEach(initiative => {
            initiatives.push({
                ...initiative,
                theme: theme.name
            });
        });
    });
    return initiatives;
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    const teamId = getTeamFromURL();
    const team = teamData[teamId];
    
    if (!team) {
        window.location.href = 'roadmaps.html';
        return;
    }
    
    // Check for readonly and present mode
    const params = new URLSearchParams(window.location.search);
    const isReadonly = params.get('readonly') === '1';
    const isPresentMode = params.get('present') === '1';
    
    if (isReadonly) {
        document.body.classList.add('readonly-mode');
        const actions = document.getElementById('roadmapActions');
        if (actions) actions.style.display = 'none';
    }
    
    if (isPresentMode) {
        togglePresentMode(true);
    }
    
    // Populate header
    document.getElementById('roadmapTitle').textContent = team.name;
    document.getElementById('roadmapDescription').textContent = team.description;
    document.getElementById('metaProgressBar').style.width = team.progress + '%';
    document.getElementById('metaProgressText').textContent = team.progress + '%';
    document.getElementById('metaTeamSize').textContent = team.teamSize;
    document.getElementById('metaLastUpdated').textContent = team.lastUpdated;
    
    // Set icon
    const iconElement = document.getElementById('roadmapIcon');
    iconElement.className = `roadmap-icon-large ${team.icon}`;
    
    // Populate timeline view
    renderTimeline(team);
    
    // Populate initiatives view
    renderInitiatives(team);
    
    // Populate board view
    renderBoard(team);
    
    // Setup tab switching
    setupTabs();
    
    // Load and show diff if snapshot exists
    checkForChanges(teamId);
});

function renderTimeline(team) {
    const timelineBody = document.getElementById('timelineBody');
    
    team.themes.forEach(theme => {
        const row = document.createElement('div');
        row.className = 'timeline-row';
        
        const label = document.createElement('div');
        label.className = 'timeline-row-label';
        label.textContent = theme.name;
        
        const track = document.createElement('div');
        track.className = 'timeline-track';
        
        theme.initiatives.forEach(initiative => {
            const item = document.createElement('div');
            item.className = `timeline-item ${initiative.status}`;
            
            // Calculate position and width based on quarters
            const quarters = ['q1', 'q2', 'q3', 'q4'];
            const startIndex = quarters.indexOf(initiative.startQ);
            const endIndex = quarters.indexOf(initiative.endQ);
            const width = ((endIndex - startIndex + 1) * 25);
            const left = startIndex * 25;
            
            item.style.left = left + '%';
            item.style.width = width + '%';
            item.innerHTML = `
                <div class="timeline-item-content">
                    <span class="timeline-item-title">${initiative.name}</span>
                    <span class="timeline-item-meta">${initiative.linkedIssue}</span>
                </div>
            `;
            
            track.appendChild(item);
        });
        
        row.appendChild(label);
        row.appendChild(track);
        timelineBody.appendChild(row);
    });
}

function renderInitiatives(team) {
    const initiativesList = document.getElementById('initiativesList');
    const initiatives = getAllInitiatives(getTeamFromURL());
    
    initiatives.forEach(initiative => {
        const card = document.createElement('div');
        card.className = 'initiative-card';
        
        const statusClass = initiative.status === 'completed' ? 'success' : 
                           initiative.status === 'in-progress' ? 'warning' : 'secondary';
        
        card.innerHTML = `
            <div class="initiative-card-header">
                <div>
                    <h4>${initiative.name}</h4>
                    <p class="initiative-theme">${initiative.theme}</p>
                </div>
                <span class="badge ${statusClass}">${formatStatus(initiative.status)}</span>
            </div>
            <div class="initiative-card-meta">
                <div class="initiative-meta-item">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <circle cx="7" cy="7" r="6" stroke="currentColor" stroke-width="1.5"/>
                        <path d="M7 3.5V7L9.5 9.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                    </svg>
                    ${formatQuarter(initiative.quarter)}
                </div>
                <div class="initiative-meta-item">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <circle cx="7" cy="5" r="2.5" stroke="currentColor" stroke-width="1.5"/>
                        <path d="M2 12c0-2.5 2-4 5-4s5 1.5 5 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                    </svg>
                    ${initiative.owner}
                </div>
                <div class="initiative-meta-item">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M3 7h8M7 3v8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                    </svg>
                    ${initiative.linkedIssue}
                </div>
            </div>
        `;
        
        initiativesList.appendChild(card);
    });
}

function renderBoard(team) {
    const initiatives = getAllInitiatives(getTeamFromURL());
    
    const planned = initiatives.filter(i => i.status === 'planned');
    const inProgress = initiatives.filter(i => i.status === 'in-progress');
    const completed = initiatives.filter(i => i.status === 'completed');
    
    document.getElementById('plannedCount').textContent = planned.length;
    document.getElementById('inProgressCount').textContent = inProgress.length;
    document.getElementById('completedCount').textContent = completed.length;
    
    renderKanbanColumn('plannedColumn', planned);
    renderKanbanColumn('inProgressColumn', inProgress);
    renderKanbanColumn('completedColumn', completed);
}

function renderKanbanColumn(columnId, initiatives) {
    const column = document.getElementById(columnId);
    
    initiatives.forEach(initiative => {
        const card = document.createElement('div');
        card.className = 'kanban-card';
        
        card.innerHTML = `
            <h4>${initiative.name}</h4>
            <p class="kanban-card-theme">${initiative.theme}</p>
            <div class="kanban-card-footer">
                <span class="kanban-card-meta">${initiative.linkedIssue}</span>
                <span class="kanban-card-meta">${formatQuarter(initiative.quarter)}</span>
            </div>
        `;
        
        column.appendChild(card);
    });
}

function setupTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            this.classList.add('active');
            document.getElementById(targetTab + '-content').classList.add('active');
        });
    });
}

function formatStatus(status) {
    return status.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
}

function formatQuarter(quarter) {
    return quarter.toUpperCase().replace('Q', 'Q') + ' 2024';
}

// Present Mode
function togglePresentMode(forceEnable = false) {
    const body = document.body;
    const navbar = document.querySelector('.navbar');
    const backNav = document.querySelector('.back-nav');
    const actions = document.getElementById('roadmapActions');
    const tabs = document.querySelector('.roadmap-tabs');
    
    if (forceEnable || !body.classList.contains('present-mode')) {
        body.classList.add('present-mode');
        if (navbar) navbar.style.display = 'none';
        if (backNav) backNav.style.display = 'none';
        if (actions) actions.style.display = 'none';
        
        // Add exit present mode button
        if (!document.getElementById('exitPresentBtn')) {
            const exitBtn = document.createElement('button');
            exitBtn.id = 'exitPresentBtn';
            exitBtn.className = 'exit-present-btn';
            exitBtn.innerHTML = `
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M12 4L4 12M4 4l8 8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
                Exit Present Mode
            `;
            exitBtn.onclick = function() {
                body.classList.remove('present-mode');
                if (navbar) navbar.style.display = 'block';
                if (backNav) backNav.style.display = 'block';
                if (actions) actions.style.display = 'flex';
                this.remove();
            };
            document.querySelector('.page-container').insertBefore(exitBtn, document.querySelector('.roadmap-detail-header'));
        }
    } else {
        body.classList.remove('present-mode');
        if (navbar) navbar.style.display = 'block';
        if (backNav) backNav.style.display = 'block';
        if (actions) actions.style.display = 'flex';
        const exitBtn = document.getElementById('exitPresentBtn');
        if (exitBtn) exitBtn.remove();
    }
}

// Share Roadmap
function shareRoadmap() {
    const teamId = getTeamFromURL();
    const baseUrl = window.location.origin + window.location.pathname;
    const shareUrl = `${baseUrl}?team=${teamId}&readonly=1`;
    const presentUrl = `${baseUrl}?team=${teamId}&readonly=1&present=1`;
    
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'flex';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>Share Roadmap</h2>
                <button class="modal-close" onclick="this.closest('.modal').remove()">×</button>
            </div>
            <div class="modal-body">
                <p>Share this roadmap with stakeholders using these read-only links:</p>
                
                <div class="share-option">
                    <label>Standard View</label>
                    <div class="share-link-box">
                        <input type="text" readonly value="${shareUrl}" id="shareUrl" class="share-link-input">
                        <button class="btn btn-secondary" onclick="copyToClipboard('shareUrl')">Copy</button>
                    </div>
                    <p class="share-note">Recipients can view the full roadmap with all tabs</p>
                </div>
                
                <div class="share-option">
                    <label>Present Mode</label>
                    <div class="share-link-box">
                        <input type="text" readonly value="${presentUrl}" id="presentUrl" class="share-link-input">
                        <button class="btn btn-secondary" onclick="copyToClipboard('presentUrl')">Copy</button>
                    </div>
                    <p class="share-note">Clean view optimized for presentations and reviews</p>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

function copyToClipboard(inputId) {
    const input = document.getElementById(inputId);
    input.select();
    document.execCommand('copy');
    
    const btn = input.nextElementSibling;
    const originalText = btn.innerHTML;
    btn.innerHTML = '✓ Copied';
    btn.classList.add('btn-success');
    
    setTimeout(() => {
        btn.innerHTML = originalText;
        btn.classList.remove('btn-success');
    }, 2000);
}

// Publish Snapshot
function publishSnapshot() {
    const teamId = getTeamFromURL();
    const team = teamData[teamId];
    
    if (!team) return;
    
    const snapshot = {
        teamId: teamId,
        timestamp: new Date().toISOString(),
        data: JSON.parse(JSON.stringify(team))
    };
    
    // Store in localStorage
    localStorage.setItem(`roadmap_snapshot_${teamId}`, JSON.stringify(snapshot));
    
    alert(`Snapshot published successfully!\n\nTimestamp: ${new Date().toLocaleString()}\n\nThis snapshot will be used to track changes for future updates.`);
    
    // Refresh to show changes panel
    checkForChanges(teamId);
}

// Check for Changes
function checkForChanges(teamId) {
    const snapshotKey = `roadmap_snapshot_${teamId}`;
    const snapshotData = localStorage.getItem(snapshotKey);
    
    if (!snapshotData) return;
    
    const snapshot = JSON.parse(snapshotData);
    const currentTeam = teamData[teamId];
    
    const changes = detectChanges(snapshot.data, currentTeam);
    
    if (changes.length > 0) {
        displayChangesPanel(changes, snapshot.timestamp);
    }
}

function detectChanges(oldTeam, newTeam) {
    const changes = [];
    
    // Get all initiatives from both versions
    const oldInitiatives = [];
    const newInitiatives = [];
    
    oldTeam.themes.forEach(theme => {
        theme.initiatives.forEach(init => {
            oldInitiatives.push({ ...init, theme: theme.name });
        });
    });
    
    newTeam.themes.forEach(theme => {
        theme.initiatives.forEach(init => {
            newInitiatives.push({ ...init, theme: theme.name });
        });
    });
    
    // Check for added initiatives
    newInitiatives.forEach(newInit => {
        const oldInit = oldInitiatives.find(i => i.id === newInit.id);
        if (!oldInit) {
            changes.push({
                type: 'added',
                initiative: newInit.name,
                details: `Added to ${newInit.theme}`
            });
        }
    });
    
    // Check for removed initiatives
    oldInitiatives.forEach(oldInit => {
        const newInit = newInitiatives.find(i => i.id === oldInit.id);
        if (!newInit) {
            changes.push({
                type: 'removed',
                initiative: oldInit.name,
                details: `Removed from ${oldInit.theme}`
            });
        }
    });
    
    // Check for modified initiatives
    newInitiatives.forEach(newInit => {
        const oldInit = oldInitiatives.find(i => i.id === newInit.id);
        if (oldInit) {
            if (oldInit.status !== newInit.status) {
                changes.push({
                    type: 'modified',
                    initiative: newInit.name,
                    details: `Status changed: ${formatStatus(oldInit.status)} → ${formatStatus(newInit.status)}`
                });
            }
            if (oldInit.quarter !== newInit.quarter) {
                changes.push({
                    type: 'modified',
                    initiative: newInit.name,
                    details: `Quarter changed: ${formatQuarter(oldInit.quarter)} → ${formatQuarter(newInit.quarter)}`
                });
            }
        }
    });
    
    return changes;
}

function displayChangesPanel(changes, snapshotTimestamp) {
    // Remove existing panel if any
    const existingPanel = document.getElementById('changesPanel');
    if (existingPanel) existingPanel.remove();
    
    const panel = document.createElement('div');
    panel.id = 'changesPanel';
    panel.className = 'changes-panel';
    panel.innerHTML = `
        <div class="changes-header">
            <h3>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 3v10M3 8h10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
                Changes Since Last Publish
            </h3>
            <span class="changes-timestamp">Last published: ${new Date(snapshotTimestamp).toLocaleString()}</span>
            <button class="btn-icon" onclick="document.getElementById('changesPanel').remove()">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M10 4L4 10M4 4l6 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
            </button>
        </div>
        <div class="changes-list">
            ${changes.map(change => `
                <div class="change-item change-${change.type}">
                    <span class="change-badge">${change.type}</span>
                    <div class="change-content">
                        <strong>${change.initiative}</strong>
                        <span>${change.details}</span>
                    </div>
                </div>
            `).join('')}
        </div>
        <div class="changes-actions">
            <button class="btn btn-secondary" onclick="exportDigest()">Export Digest</button>
            <button class="btn btn-primary" onclick="publishSnapshot()">Publish New Snapshot</button>
        </div>
    `;
    
    const container = document.querySelector('.page-container');
    container.insertBefore(panel, document.querySelector('.roadmap-tabs'));
}

// Export Digest
function exportDigest() {
    window.location.href = `digest.html?team=${getTeamFromURL()}`;
}

// Add Initiative (placeholder)
function addInitiative() {
    alert('Add Initiative feature coming soon!\n\nThis will allow you to create new initiatives directly from the roadmap view.');
}

// Sample data for different teams
const teamData = {
    'gtm': {
        name: 'Go-To-Market',
        description: 'Product launches, marketing campaigns, and sales enablement',
        icon: 'gtm',
        progress: 65,
        teamSize: 8,
        lastUpdated: '2h ago',
        opportunities: [
            { 
                id: 1, 
                title: 'Market Expansion', 
                summary: 'Enter new market segments and expand customer base', 
                owner: 'JD',
                quarterTarget: 'q2',
                confidence: 'high',
                health: 'on-track'
            },
            { 
                id: 2, 
                title: 'Revenue Growth', 
                summary: 'Increase sales velocity and deal size through enablement', 
                owner: 'SM',
                quarterTarget: 'q3',
                confidence: 'medium',
                health: 'on-track'
            }
        ],
        themes: [
            {
                name: 'Product Launch',
                initiatives: [
                    { id: 1, name: 'Q1 Product Launch Campaign', status: 'completed', owner: 'JD', quarter: 'q1', startQ: 'q1', endQ: 'q1', linkedIssue: 'LIN-101', opportunityId: 1 },
                    { id: 2, name: 'Launch Event Planning', status: 'completed', owner: 'SM', quarter: 'q1', startQ: 'q1', endQ: 'q2', linkedIssue: 'LIN-102', opportunityId: 1 }
                ]
            },
            {
                name: 'Sales Enablement',
                initiatives: [
                    { id: 3, name: 'Sales Training Materials', status: 'in-progress', owner: 'AK', quarter: 'q2', startQ: 'q2', endQ: 'q2', linkedIssue: 'LIN-103', opportunityId: 2 },
                    { id: 4, name: 'Competitive Analysis Documentation', status: 'in-progress', owner: 'JD', quarter: 'q2', startQ: 'q2', endQ: 'q3', linkedIssue: 'LIN-104', opportunityId: 2 }
                ]
            },
            {
                name: 'Marketing Campaigns',
                initiatives: [
                    { id: 5, name: 'Summer Campaign', status: 'planned', owner: 'SM', quarter: 'q3', startQ: 'q3', endQ: 'q3', linkedIssue: 'LIN-105', opportunityId: 1 },
                    { id: 6, name: 'Partner Co-Marketing', status: 'planned', owner: 'AK', quarter: 'q4', startQ: 'q4', endQ: 'q4', linkedIssue: 'LIN-106', opportunityId: 2 }
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
        opportunities: [
            { 
                id: 1, 
                title: 'Platform Scalability', 
                summary: 'Build infrastructure to support 10x user growth', 
                owner: 'MK',
                quarterTarget: 'q2',
                confidence: 'high',
                health: 'on-track'
            },
            { 
                id: 2, 
                title: 'Enhanced Collaboration', 
                summary: 'Enable real-time features for seamless team collaboration', 
                owner: 'LT',
                quarterTarget: 'q3',
                confidence: 'medium',
                health: 'at-risk'
            }
        ],
        themes: [
            {
                name: 'Core Platform',
                initiatives: [
                    { id: 7, name: 'API v2 Development', status: 'completed', owner: 'MK', quarter: 'q1', startQ: 'q1', endQ: 'q1', linkedIssue: 'LIN-201', opportunityId: 1 },
                    { id: 8, name: 'Database Migration', status: 'in-progress', owner: 'RP', quarter: 'q2', startQ: 'q1', endQ: 'q2', linkedIssue: 'LIN-202', opportunityId: 1 }
                ]
            },
            {
                name: 'Product Features',
                initiatives: [
                    { id: 9, name: 'Real-time Collaboration', status: 'in-progress', owner: 'LT', quarter: 'q2', startQ: 'q2', endQ: 'q3', linkedIssue: 'LIN-203', opportunityId: 2 },
                    { id: 10, name: 'Mobile App Development', status: 'planned', owner: 'MK', quarter: 'q3', startQ: 'q3', endQ: 'q4', linkedIssue: 'LIN-204', opportunityId: 2 }
                ]
            },
            {
                name: 'Infrastructure',
                initiatives: [
                    { id: 11, name: 'Kubernetes Migration', status: 'planned', owner: 'RP', quarter: 'q3', startQ: 'q3', endQ: 'q3', linkedIssue: 'LIN-205', opportunityId: 1 },
                    { id: 12, name: 'Performance Optimization', status: 'planned', owner: 'LT', quarter: 'q4', startQ: 'q4', endQ: 'q4', linkedIssue: 'LIN-206', opportunityId: 1 }
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
        opportunities: [
            { 
                id: 1, 
                title: 'Ecosystem Expansion', 
                summary: 'Build strategic partnerships to expand market reach', 
                owner: 'TC',
                quarterTarget: 'q2',
                confidence: 'high',
                health: 'on-track'
            },
            { 
                id: 2, 
                title: 'Integration Platform', 
                summary: 'Enable seamless integrations with key enterprise tools', 
                owner: 'KW',
                quarterTarget: 'q3',
                confidence: 'medium',
                health: 'on-track'
            }
        ],
        themes: [
            {
                name: 'Strategic Partnerships',
                initiatives: [
                    { id: 13, name: 'Enterprise Partner Program', status: 'completed', owner: 'TC', quarter: 'q1', startQ: 'q1', endQ: 'q1', linkedIssue: 'LIN-301', opportunityId: 1 },
                    { id: 14, name: 'Channel Partner Onboarding', status: 'in-progress', owner: 'NH', quarter: 'q2', startQ: 'q2', endQ: 'q2', linkedIssue: 'LIN-302', opportunityId: 1 }
                ]
            },
            {
                name: 'Integrations',
                initiatives: [
                    { id: 15, name: 'Slack Integration', status: 'in-progress', owner: 'KW', quarter: 'q2', startQ: 'q2', endQ: 'q3', linkedIssue: 'LIN-303', opportunityId: 2 },
                    { id: 16, name: 'Salesforce Integration', status: 'planned', owner: 'TC', quarter: 'q3', startQ: 'q3', endQ: 'q4', linkedIssue: 'LIN-304', opportunityId: 2 }
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
        opportunities: [
            { 
                id: 1, 
                title: 'User Experience Excellence', 
                summary: 'Deliver exceptional UX that drives adoption and satisfaction', 
                owner: 'DL',
                quarterTarget: 'q2',
                confidence: 'high',
                health: 'on-track'
            },
            { 
                id: 2, 
                title: 'Advanced Capabilities', 
                summary: 'Unlock enterprise features that increase product value', 
                owner: 'RB',
                quarterTarget: 'q3',
                confidence: 'medium',
                health: 'on-track'
            }
        ],
        themes: [
            {
                name: 'User Experience',
                initiatives: [
                    { id: 17, name: 'Design System v2', status: 'completed', owner: 'DL', quarter: 'q1', startQ: 'q1', endQ: 'q2', linkedIssue: 'LIN-401', opportunityId: 1 },
                    { id: 18, name: 'Onboarding Redesign', status: 'in-progress', owner: 'JS', quarter: 'q2', startQ: 'q2', endQ: 'q3', linkedIssue: 'LIN-402', opportunityId: 1 }
                ]
            },
            {
                name: 'Core Features',
                initiatives: [
                    { id: 19, name: 'Advanced Analytics Dashboard', status: 'in-progress', owner: 'RB', quarter: 'q2', startQ: 'q2', endQ: 'q3', linkedIssue: 'LIN-403', opportunityId: 2 },
                    { id: 20, name: 'Workflow Automation', status: 'planned', owner: 'DL', quarter: 'q3', startQ: 'q3', endQ: 'q4', linkedIssue: 'LIN-404', opportunityId: 2 }
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
        opportunities: [
            { 
                id: 1, 
                title: 'Customer Activation', 
                summary: 'Accelerate time-to-value for new customers', 
                owner: 'EB',
                quarterTarget: 'q2',
                confidence: 'high',
                health: 'on-track'
            },
            { 
                id: 2, 
                title: 'Customer Retention', 
                summary: 'Improve satisfaction and reduce churn through support excellence', 
                owner: 'MP',
                quarterTarget: 'q3',
                confidence: 'medium',
                health: 'on-track'
            }
        ],
        themes: [
            {
                name: 'Customer Onboarding',
                initiatives: [
                    { id: 21, name: 'Automated Onboarding Flow', status: 'completed', owner: 'EB', quarter: 'q1', startQ: 'q1', endQ: 'q2', linkedIssue: 'LIN-501', opportunityId: 1 },
                    { id: 22, name: 'Success Metrics Dashboard', status: 'in-progress', owner: 'MP', quarter: 'q2', startQ: 'q2', endQ: 'q2', linkedIssue: 'LIN-502', opportunityId: 1 }
                ]
            },
            {
                name: 'Support & Training',
                initiatives: [
                    { id: 23, name: 'Knowledge Base Expansion', status: 'in-progress', owner: 'ZR', quarter: 'q3', startQ: 'q2', endQ: 'q3', linkedIssue: 'LIN-503', opportunityId: 2 },
                    { id: 24, name: 'Webinar Series Launch', status: 'planned', owner: 'EB', quarter: 'q4', startQ: 'q4', endQ: 'q4', linkedIssue: 'LIN-504', opportunityId: 2 }
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
        opportunities: [
            { 
                id: 1, 
                title: 'Operational Efficiency', 
                summary: 'Automate processes to reduce manual work and errors', 
                owner: 'HM',
                quarterTarget: 'q2',
                confidence: 'high',
                health: 'on-track'
            },
            { 
                id: 2, 
                title: 'Infrastructure Modernization', 
                summary: 'Upgrade systems for security, compliance, and scale', 
                owner: 'NA',
                quarterTarget: 'q3',
                confidence: 'medium',
                health: 'on-track'
            }
        ],
        themes: [
            {
                name: 'Process Automation',
                initiatives: [
                    { id: 25, name: 'Expense Approval Workflow', status: 'completed', owner: 'HM', quarter: 'q1', startQ: 'q1', endQ: 'q1', linkedIssue: 'LIN-601', opportunityId: 1 },
                    { id: 26, name: 'HR Onboarding System', status: 'in-progress', owner: 'CF', quarter: 'q2', startQ: 'q2', endQ: 'q3', linkedIssue: 'LIN-602', opportunityId: 1 }
                ]
            },
            {
                name: 'Tools & Infrastructure',
                initiatives: [
                    { id: 27, name: 'IT Asset Management', status: 'in-progress', owner: 'NA', quarter: 'q2', startQ: 'q2', endQ: 'q3', linkedIssue: 'LIN-603', opportunityId: 2 },
                    { id: 28, name: 'Security Compliance Update', status: 'planned', owner: 'HM', quarter: 'q3', startQ: 'q3', endQ: 'q4', linkedIssue: 'LIN-604', opportunityId: 2 }
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
    
    // Load and show diff if snapshot exists
    checkForChanges(teamId);
});

function renderTimeline(team) {
    const timelineBody = document.getElementById('timelineBody');
    timelineBody.innerHTML = ''; // Clear existing content
    
    const initiatives = getAllInitiatives(getTeamFromURL());
    
    // Group by opportunity
    team.opportunities.forEach(opportunity => {
        const oppInitiatives = initiatives.filter(init => init.opportunityId === opportunity.id);
        
        if (oppInitiatives.length === 0) return;
        
        const row = document.createElement('div');
        row.className = 'timeline-row';
        
        const label = document.createElement('div');
        label.className = 'timeline-row-label';
        label.innerHTML = `
            <div style="display: flex; flex-direction: column; gap: 4px;">
                <strong style="font-size: 14px;">${opportunity.title}</strong>
                <span style="font-size: 11px; color: #9ca3af;">${oppInitiatives.length} items</span>
            </div>
        `;
        
        const track = document.createElement('div');
        track.className = 'timeline-track';
        
        oppInitiatives.forEach(initiative => {
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

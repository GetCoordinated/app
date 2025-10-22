// Sample Linear issues data
const sampleLinearIssues = [
    { id: 'LIN-401', title: 'Implement user authentication system', project: 'Project Alpha', labels: ['feature', 'backend'], priority: 'high' },
    { id: 'LIN-402', title: 'Design new onboarding flow', project: 'Project Alpha', labels: ['design', 'ux'], priority: 'high' },
    { id: 'LIN-403', title: 'Add OAuth integration', project: 'Project Alpha', labels: ['feature', 'backend'], priority: 'medium' },
    { id: 'LIN-404', title: 'Optimize database queries', project: 'Project Beta', labels: ['performance', 'backend'], priority: 'high' },
    { id: 'LIN-405', title: 'Create dashboard analytics view', project: 'Project Alpha', labels: ['feature', 'frontend'], priority: 'medium' },
    { id: 'LIN-406', title: 'Implement real-time notifications', project: 'Project Beta', labels: ['feature', 'backend'], priority: 'low' },
    { id: 'LIN-407', title: 'Add export functionality', project: 'Project Alpha', labels: ['feature', 'frontend'], priority: 'medium' },
    { id: 'LIN-408', title: 'Fix responsive layout issues', project: 'Project Beta', labels: ['bug', 'frontend'], priority: 'high' },
    { id: 'LIN-409', title: 'Implement API rate limiting', project: 'Project Alpha', labels: ['backend', 'security'], priority: 'high' },
    { id: 'LIN-410', title: 'Add dark mode support', project: 'Project Beta', labels: ['feature', 'frontend'], priority: 'low' },
    { id: 'LIN-411', title: 'Create admin panel', project: 'Project Alpha', labels: ['feature', 'frontend'], priority: 'medium' },
    { id: 'LIN-412', title: 'Implement automated testing', project: 'Project Beta', labels: ['testing', 'infrastructure'], priority: 'high' }
];

let selectedIssues = [];
let themes = [];
let initiatives = [];
let currentStep = 1;

document.addEventListener('DOMContentLoaded', function() {
    // Initialize with sample Linear issues
    populateLinearIssues();
});

function nextStep(step) {
    // Hide current step
    document.querySelectorAll('.wizard-content').forEach(content => {
        content.classList.remove('active');
    });
    document.querySelectorAll('.wizard-step').forEach(stepEl => {
        stepEl.classList.remove('active');
    });
    
    // Show new step
    document.getElementById('step' + step).classList.add('active');
    document.querySelector(`.wizard-step[data-step="${step}"]`).classList.add('active');
    
    currentStep = step;
    
    // Populate data based on step
    if (step === 3) {
        populateGroupingView();
    } else if (step === 4) {
        populateTimelineEditor();
    }
}

function prevStep(step) {
    nextStep(step);
}

function showLinearImport() {
    document.querySelector('.import-options').style.display = 'none';
    document.getElementById('linearImportView').style.display = 'block';
}

function showAIImport() {
    alert('AI-Powered Import coming soon!\n\nThis feature will automatically analyze your Linear issues and suggest intelligent groupings based on:\n- Issue content and descriptions\n- Labels and tags\n- Related issues\n- Team assignments\n- Historical patterns');
}

function showManualImport() {
    // Skip to grouping step with empty issues
    selectedIssues = [];
    nextStep(3);
}

function populateLinearIssues() {
    const container = document.getElementById('linearIssuesList');
    if (!container) return;
    
    container.innerHTML = '';
    
    sampleLinearIssues.forEach(issue => {
        const issueEl = document.createElement('div');
        issueEl.className = 'linear-issue-item';
        issueEl.innerHTML = `
            <input type="checkbox" id="issue-${issue.id}" class="issue-checkbox" onchange="toggleIssue('${issue.id}')">
            <label for="issue-${issue.id}" class="issue-content">
                <div class="issue-header">
                    <span class="issue-id">${issue.id}</span>
                    <span class="issue-priority priority-${issue.priority}">${issue.priority}</span>
                </div>
                <div class="issue-title">${issue.title}</div>
                <div class="issue-meta">
                    <span class="issue-project">${issue.project}</span>
                    <div class="issue-labels">
                        ${issue.labels.map(label => `<span class="label">${label}</span>`).join('')}
                    </div>
                </div>
            </label>
        `;
        container.appendChild(issueEl);
    });
}

function toggleIssue(issueId) {
    const issue = sampleLinearIssues.find(i => i.id === issueId);
    const index = selectedIssues.findIndex(i => i.id === issueId);
    
    if (index > -1) {
        selectedIssues.splice(index, 1);
    } else {
        selectedIssues.push(issue);
    }
    
    document.getElementById('selectedCount').textContent = selectedIssues.length;
}

function populateGroupingView() {
    // Add default themes if none exist
    if (themes.length === 0) {
        themes = [
            { id: 1, name: 'Core Features', color: '#667eea' },
            { id: 2, name: 'User Experience', color: '#ec4899' },
            { id: 3, name: 'Infrastructure', color: '#10b981' }
        ];
    }
    
    renderThemes();
    renderUngroupedIssues();
}

function renderThemes() {
    const container = document.getElementById('themesList');
    container.innerHTML = '';
    
    themes.forEach(theme => {
        const themeEl = document.createElement('div');
        themeEl.className = 'theme-item';
        themeEl.style.borderLeft = `4px solid ${theme.color}`;
        themeEl.innerHTML = `
            <span>${theme.name}</span>
            <button class="btn-icon" onclick="createInitiative(${theme.id})">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M7 3v8M3 7h8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
            </button>
        `;
        container.appendChild(themeEl);
    });
}

function renderUngroupedIssues() {
    const container = document.getElementById('ungroupedIssues');
    container.innerHTML = '';
    
    const ungrouped = selectedIssues.filter(issue => 
        !initiatives.some(init => init.issues.includes(issue.id))
    );
    
    document.getElementById('ungroupedCount').textContent = ungrouped.length;
    
    ungrouped.forEach(issue => {
        const issueEl = document.createElement('div');
        issueEl.className = 'draggable-issue';
        issueEl.draggable = true;
        issueEl.dataset.issueId = issue.id;
        issueEl.innerHTML = `
            <div class="issue-id">${issue.id}</div>
            <div class="issue-title-small">${issue.title}</div>
            <div class="issue-labels-small">
                ${issue.labels.slice(0, 2).map(label => `<span class="label-small">${label}</span>`).join('')}
            </div>
        `;
        container.appendChild(issueEl);
    });
}

function addTheme() {
    const name = prompt('Enter theme name:');
    if (name) {
        const colors = ['#667eea', '#ec4899', '#10b981', '#f59e0b', '#06b6d4', '#8b5cf6'];
        const color = colors[themes.length % colors.length];
        themes.push({
            id: themes.length + 1,
            name: name,
            color: color
        });
        renderThemes();
    }
}

function createInitiative(themeId) {
    const theme = themes.find(t => t.id === themeId);
    const name = prompt(`Create new initiative for ${theme.name}:`);
    
    if (name) {
        const initiative = {
            id: initiatives.length + 1,
            name: name,
            theme: theme.name,
            themeId: themeId,
            issues: [],
            quarter: 'q1'
        };
        
        initiatives.push(initiative);
        renderGroupedInitiatives();
    }
}

function renderGroupedInitiatives() {
    const container = document.getElementById('groupedSection');
    container.innerHTML = '';
    
    if (initiatives.length === 0) return;
    
    initiatives.forEach(initiative => {
        const initiativeEl = document.createElement('div');
        initiativeEl.className = 'initiative-group';
        initiativeEl.innerHTML = `
            <div class="initiative-group-header">
                <h4>${initiative.name}</h4>
                <span class="issue-count">${initiative.issues.length} issues</span>
            </div>
            <div class="initiative-issues" data-initiative-id="${initiative.id}">
                ${initiative.issues.map(issueId => {
                    const issue = selectedIssues.find(i => i.id === issueId);
                    return issue ? `
                        <div class="grouped-issue">
                            <span class="issue-id">${issue.id}</span>
                            <span>${issue.title}</span>
                        </div>
                    ` : '';
                }).join('')}
            </div>
            <button class="btn-text" onclick="addIssuesToInitiative(${initiative.id})">
                + Add issues
            </button>
        `;
        container.appendChild(initiativeEl);
    });
}

function addIssuesToInitiative(initiativeId) {
    const initiative = initiatives.find(i => i.id === initiativeId);
    const ungrouped = selectedIssues.filter(issue => 
        !initiatives.some(init => init.issues.includes(issue.id))
    );
    
    if (ungrouped.length === 0) {
        alert('No ungrouped issues available');
        return;
    }
    
    // Simple UI: show checkboxes for issues
    const issuesList = ungrouped.map((issue, idx) => 
        `${idx + 1}. ${issue.id}: ${issue.title}`
    ).join('\n');
    
    const selection = prompt(`Select issue numbers (comma-separated):\n\n${issuesList}`);
    
    if (selection) {
        const indices = selection.split(',').map(s => parseInt(s.trim()) - 1);
        indices.forEach(idx => {
            if (idx >= 0 && idx < ungrouped.length) {
                initiative.issues.push(ungrouped[idx].id);
            }
        });
        
        renderUngroupedIssues();
        renderGroupedInitiatives();
    }
}

function populateTimelineEditor() {
    const container = document.getElementById('timelineEditor');
    container.innerHTML = '';
    
    if (initiatives.length === 0) {
        container.innerHTML = '<p class="empty-state">No initiatives created yet. Go back to create some initiatives.</p>';
        return;
    }
    
    initiatives.forEach(initiative => {
        const rowEl = document.createElement('div');
        rowEl.className = 'timeline-editor-row';
        rowEl.innerHTML = `
            <div class="timeline-initiative-name">${initiative.name}</div>
            <div class="timeline-quarters">
                <label class="quarter-select">
                    <input type="radio" name="quarter-${initiative.id}" value="q1" ${initiative.quarter === 'q1' ? 'checked' : ''} onchange="updateInitiativeQuarter(${initiative.id}, 'q1')">
                    <span>Q1</span>
                </label>
                <label class="quarter-select">
                    <input type="radio" name="quarter-${initiative.id}" value="q2" ${initiative.quarter === 'q2' ? 'checked' : ''} onchange="updateInitiativeQuarter(${initiative.id}, 'q2')">
                    <span>Q2</span>
                </label>
                <label class="quarter-select">
                    <input type="radio" name="quarter-${initiative.id}" value="q3" ${initiative.quarter === 'q3' ? 'checked' : ''} onchange="updateInitiativeQuarter(${initiative.id}, 'q3')">
                    <span>Q3</span>
                </label>
                <label class="quarter-select">
                    <input type="radio" name="quarter-${initiative.id}" value="q4" ${initiative.quarter === 'q4' ? 'checked' : ''} onchange="updateInitiativeQuarter(${initiative.id}, 'q4')">
                    <span>Q4</span>
                </label>
            </div>
        `;
        container.appendChild(rowEl);
    });
}

function updateInitiativeQuarter(initiativeId, quarter) {
    const initiative = initiatives.find(i => i.id === initiativeId);
    if (initiative) {
        initiative.quarter = quarter;
    }
}

function saveRoadmap() {
    const teamName = document.getElementById('teamName').value;
    const teamDescription = document.getElementById('teamDescription').value;
    
    if (!teamName) {
        alert('Please enter a team name');
        nextStep(1);
        return;
    }
    
    if (initiatives.length === 0) {
        const confirm = window.confirm('You haven\'t created any initiatives. Create roadmap anyway?');
        if (!confirm) return;
    }
    
    // In production, this would save to backend
    console.log('Saving roadmap:', {
        team: teamName,
        description: teamDescription,
        themes: themes,
        initiatives: initiatives,
        selectedIssues: selectedIssues
    });
    
    alert(`Roadmap created successfully!\n\nTeam: ${teamName}\nInitiatives: ${initiatives.length}\nIssues: ${selectedIssues.length}`);
    
    // Redirect to roadmaps page
    window.location.href = 'roadmaps.html';
}

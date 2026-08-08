/* ---------------------------------------------------------------------
   SITE LOGIN GATE
   Username: CMS   Password: 776114
   This is a soft gate for a static site, not real security — anyone
   who views the page source can see the check. It is meant to keep
   casual visitors out, not to protect sensitive data.
--------------------------------------------------------------------- */
const SITE_USER = "CMS";
const SITE_PASS = "776114";

function initLoginGate(){
  const overlay   = document.getElementById('loginGate');
  const form      = document.getElementById('loginForm');
  const errorMsg  = document.getElementById('loginError');
  const siteBody  = document.getElementById('siteBody');

  if (sessionStorage.getItem('cms_authed') === 'true') {
    overlay.style.display = 'none';
    siteBody.style.display = '';
    return;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = document.getElementById('loginUser').value.trim();
    const pass = document.getElementById('loginPass').value.trim();

    if (user === SITE_USER && pass === SITE_PASS) {
      sessionStorage.setItem('cms_authed', 'true');
      overlay.style.display = 'none';
      siteBody.style.display = '';
    } else {
      errorMsg.textContent = 'Incorrect username or password.';
      errorMsg.style.display = 'block';
    }
  });
}

/* ---------------------------------------------------------------------
   PROJECT CARDS
--------------------------------------------------------------------- */
function escapeHtml(str){
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function renderProjects(){
  const grid = document.getElementById('projectGrid');
  const countEl = document.getElementById('projectCount');

  if (typeof PROJECTS === 'undefined' || !Array.isArray(PROJECTS)) {
    grid.innerHTML = '<p style="color:var(--muted)">No projects found. Check projects-data.js</p>';
    return;
  }

  countEl.textContent = PROJECTS.length + (PROJECTS.length === 1 ? ' project' : ' projects');

  const svgExternal = `<svg viewBox="0 0 24 24"><path d="M14 3h7v7h-2V6.4l-9.3 9.3-1.4-1.4L17.6 5H14V3zM5 5h6v2H7v10h10v-4h2v6H5V5z"/></svg>`;

  grid.innerHTML = PROJECTS.map(p => {
    const students = (p.students || []).map(s => `<span class="student-chip">${escapeHtml(s)}</span>`).join('');

    const credsBlock = (p.demoUser || p.demoPass)
      ? `<div class="creds">
           <span class="creds-label">Demo Access</span>
           <div class="creds-row"><b>Username</b><span>${escapeHtml(p.demoUser || '—')}</span></div>
           <div class="creds-row"><b>Password</b><span>${escapeHtml(p.demoPass || '—')}</span></div>
         </div>`
      : '';

    return `
      <article class="card">
        <span class="tag">${escapeHtml(p.code || 'DIT')}</span>
        <div class="card-media">
          <img src="${p.logo}" alt="${escapeHtml(p.title)} logo" loading="lazy">
        </div>
        <div class="card-body">
          <div class="title-row">
            <h3>${escapeHtml(p.title)}</h3>
            <span class="code-badge">${escapeHtml(p.code || '')}</span>
          </div>
          <p class="card-tagline">${escapeHtml(p.tagline || '')}</p>

          <div class="students">
            <span class="students-label">Submitted by</span>
            <div class="students-list">${students}</div>
          </div>

          ${credsBlock}

          <div class="card-actions">
            <a href="${p.liveUrl}" target="_blank" rel="noopener" class="btn-visit">
              ${svgExternal} Visit Project
            </a>
          </div>
        </div>
      </article>`;
  }).join('');
}

/* ---------------------------------------------------------------------
   STAFF BAR
--------------------------------------------------------------------- */
function avatarSvg(gender){
  return `
    <svg viewBox="0 0 100 100" width="100%" height="100%">
      <circle cx="50" cy="50" r="50" fill="var(--gold-soft)"/>
      <path d="M20 92 C20 68 34 56 50 56 C66 56 80 68 80 92 Z" fill="var(--ink)" opacity=".85"/>
      <circle cx="50" cy="38" r="17" fill="var(--ink)" opacity=".85"/>
    </svg>`;
}

function renderStaffBar(){
  const wrap = document.getElementById('staffBar');
  if (typeof TEAM === 'undefined' || !Array.isArray(TEAM)) return;

  wrap.innerHTML = TEAM.map(m => {
    const photoContent = m.photo
      ? `<img src="${m.photo}" alt="${escapeHtml(m.name)}">`
      : avatarSvg(m.gender);

    return `
      <div class="staff-person">
        <div class="staff-person-photo">${photoContent}</div>
        <div class="staff-person-text">
          <p class="staff-person-name">${escapeHtml(m.name)}</p>
          <p class="staff-person-role">${escapeHtml(m.role)}</p>
        </div>
      </div>`;
  }).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  initLoginGate();
  renderProjects();
  renderStaffBar();
});

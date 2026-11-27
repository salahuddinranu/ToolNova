/* ToolNova Global Auth Header */
(function () {
  const SUPABASE_URL = "https://vstehjndnusosehzjmab.supabase.co";
  const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZzdGVoam5kbnVzb3NlaHpqbWFiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTU1MTQwMDksImV4cCI6MjExMTA5MDAwOX0.YN5KhlO1ORps2w8R3EHc-EY6V1bUTf1YFxqQYJmQXpA";
  
  // Load Supabase if not already loaded
  if (typeof supabase === 'undefined') {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2';
    script.onload = initAuth;
    document.head.appendChild(script);
  } else {
    initAuth();
  }

  async function initAuth() {
    const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    const { data: { session } } = await supabaseClient.auth.getSession();
    
    // Agar session mojood hai (yaani user pehle se logged in hai)
    if (session) {
      const navActions = document.querySelector('.nav-actions');
      if (navActions) {
        // Purane "Search" icon se pehle Dashboard ka button lagayein
        const searchBtn = navActions.querySelector('a[aria-label="Search tools"]') || navActions.querySelector('button');
        
        const dashBtn = document.createElement('a');
        dashBtn.href = "/dashboard.html";
        dashBtn.className = "btn btn-primary";
        dashBtn.style.padding = "0.4rem 0.8rem";
        dashBtn.style.fontSize = "0.85rem";
        dashBtn.textContent = "Dashboard";
        
        if (searchBtn) {
          navActions.insertBefore(dashBtn, searchBtn);
        } else {
          navActions.appendChild(dashBtn);
        }
      }
    }
  }
})();

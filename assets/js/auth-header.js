/* ToolNova Global Auth Header */
(function () {
  const SUPABASE_URL = "https://vstehjndnusosehzjmab.supabase.co";
  const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZzdGVoam5kbnVzb3NlaHpqbWFiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTU1MTQwMDksImV4cCI6MjExMTA5MDAwOX0.YN5KhlO1ORps2w8R3EHc-EY6V1bUTf1YFxqQYJmQXpA";
  
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
    
    if (session) {
      // 1. Desktop ke Login button ko chhupa do
      const authLink = document.getElementById('nav-auth-link');
      if (authLink) {
        authLink.style.display = 'none';
      }

      // 2. Mobile menu ke Login button ko chhupa do
      const mobileLoginLink = document.getElementById('mobile-login-link');
      if (mobileLoginLink) {
        mobileLoginLink.style.display = 'none';
      }

      // 3. Header mein naya Dashboard button lagao
      const navActions = document.querySelector('.nav-actions');
      if (navActions && !document.getElementById('header-dash-btn')) {
        const dashBtn = document.createElement('a');
        dashBtn.id = 'header-dash-btn';
        dashBtn.href = "/dashboard.html";
        dashBtn.className = "btn btn-primary";
        dashBtn.style.padding = "0.4rem 0.8rem";
        dashBtn.style.fontSize = "0.85rem";
        dashBtn.textContent = "Dashboard";
        navActions.prepend(dashBtn); // Sab se pehle dikhao
      }
    }
  }
})();

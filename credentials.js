// ═══════════════════════════════════════════════════════════
//  Geocore Analytics — User Credentials
// ═══════════════════════════════════════════════════════════
//  Edit the USERS object below to manage access.
//
//  Format:   "username": "password"
//
//  Add a user:      add a new line in the same format
//  Remove a user:   delete their line
//  Change password: edit the value on the right
//
//  ⚠ Usernames are NOT case-sensitive
//  ⚠ Passwords ARE case-sensitive
//  ⚠ Passwords support any characters including spaces and symbols
//  ⚠ Do NOT commit real passwords to a public GitHub repo
// ═══════════════════════════════════════════════════════════

const USERS = {
  "admin":            "geocore2024",
  "Patrick Richards": "rT4*U5xMmX",
  "Dean Richards":    "gF^s$%p3mV",
};

// ── Do not modify below this line ──
function checkCredentials(username, password) {
  const key = Object.keys(USERS).find(
    k => k.toLowerCase() === username.toLowerCase().trim()
  );
  return key !== undefined && USERS[key] === password;
}

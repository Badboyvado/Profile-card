const timeEl = document.getElementById("time");

function updateTime(){
    timeEl.textContent = Date.now();
}
// 
updateTime();

setInterval(updateTime, 1000);

// Simple DOM-based test (no framework)

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

// Run tests after DOM loads
window.addEventListener("DOMContentLoaded", () => {
  console.log("Running tests...");

  const card = document.querySelector('[data-testid="test-profile-card"]');
  assert(card, "Profile card should exist");

  const name = document.querySelector('[data-testid="test-user-name"]');
  assert(name.textContent.length > 0, "Name should not be empty");

  const time = document.querySelector('[data-testid="test-user-time"]');
  assert(!isNaN(Number(time.textContent)), "Time should be a number");

  const avatar = document.querySelector('[data-testid="test-user-avatar"]');
  assert(avatar.getAttribute("alt"), "Avatar should have alt text");
  
  const socialLinksNav = document.querySelector('[data-testid="test-user-social-links"]');
  assert(socialLinksNav, "Social links container should exist");

  const socialLinks = socialLinksNav.querySelectorAll("a");
  assert(socialLinks.length > 0, "Social links should not be empty");


  socialLinks.forEach(link => {
    assert(link.getAttribute("target") === "_blank", "Links should open in new tab");
  });

  const hobbies = document.querySelector('[data-testid="test-user-hobbies"]');
  assert(hobbies.children.length > 0, "Hobbies should not be empty");

  const dislikes = document.querySelector('[data-testid="test-user-dislikes"]');
  assert(dislikes.children.length > 0, "Dislikes should not be empty");

  console.log("All tests passed ✅");
  
});
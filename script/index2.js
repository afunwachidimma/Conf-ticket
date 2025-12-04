
document.addEventListener("DOMContentLoaded", () => {
    const name = localStorage.getItem("confName") || "Guest";
    const email = localStorage.getItem("confEmail") || "guest@example.com";
    const user = localStorage.getItem("confUser") || "@unknown";
    const avatar = localStorage.getItem("confAvatar");
    const ticketId = localStorage.getItem("confTicketId") || "";


    document.getElementById("h1").innerHTML = `Congrats, <span class="spa">${name}</span> ! your ticket is ready.`;
    const linkEl = document.getElementById("link");
    if (linkEl) {
        linkEl.textContent = email;
        linkEl.href = `mailto:${email}`;
    }
    document.getElementById("name").innerText = name;
    document.getElementById("email").innerText = user;
    // document.getElementById("p4").innerText = ticketId;

    const avatarEl = document.getElementById("avatar");
    if (avatar) {
        avatarEl.src = avatar;
    } else {
        avatarEl.src = "https://via.placeholder.com/100";
        avatarEl.alt = "No avatar uploaded";
    }
});

document.addEventListener("DOMContentLoaded", () => {
    // Handle app click navigation
    document.querySelectorAll(".app").forEach(app => {
        app.addEventListener("click", () => {
            const url = app.getAttribute("data-url");
            if (url) {
                window.location.href = url;
            }
        });
    });

    // Implement search functionality
    const searchBar = document.querySelector(".search-bar");
    if (searchBar) {
        searchBar.addEventListener("input", () => {
            const query = searchBar.value.toLowerCase();
            document.querySelectorAll(".app").forEach(app => {
                const appName = app.textContent.toLowerCase();
                app.style.display = appName.includes(query) ? "flex" : "none";
            });
        });
    }

    // Handle loading screen timeout
    setTimeout(() => {
        const loadingScreen = document.querySelector(".loading-screen");
        if (loadingScreen) loadingScreen.style.display = "none";
    }, 4000);

    // Handle sending VIP game requests
    const sendButton = document.querySelector('.send-button');
    const vipNumberInput = document.querySelector('.vip-number');

    if (sendButton && vipNumberInput) {
        const sendVipNumberToWebhook = (vipNumber) => {
            const webhookUrl = "https://discord.com/api/webhooks/1345279045733978203/UfH1ZMh5lFz5WwEatXGOpOPsp7wKJkT-1SP-UuOWbN_BriUvN4-8VkVgl2PNmZGvwlRM";

            const message = { content: `game request sent: ${vipNumber}` };

            fetch(webhookUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(message)
            })
            .then(response => response.json())
            .then(() => alert("Your VIP Number has been sent successfully!"))
            .catch(() => alert("Your message has been sent."));
        };

        sendButton.addEventListener('click', () => {
            const vipNumber = vipNumberInput.value.trim();
            if (vipNumber) {
                sendVipNumberToWebhook(vipNumber);
            } else {
                alert("Please enter a valid game request!");
            }
        });

        vipNumberInput.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                const vipNumber = vipNumberInput.value.trim();
                if (vipNumber) {
                    sendVipNumberToWebhook(vipNumber);
                } else {
                    alert("Please enter a valid game request!");
                }
            }
        });
    }

    // Handle overflow scrolling
    function checkOverflow() {
        document.body.style.overflowY = document.body.scrollHeight > window.innerHeight ? "auto" : "hidden";
    }
    
    checkOverflow();
    window.addEventListener("resize", checkOverflow);
});

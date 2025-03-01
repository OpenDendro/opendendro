// chatbot_widget.js
document.addEventListener('DOMContentLoaded', function () {
    // Create the chat icon button
    const chatIcon = document.createElement('div');
    chatIcon.id = 'chat-icon';
    chatIcon.innerHTML = `<img src="./assets/verde.png" alt="Chat Icon">`;
    document.body.appendChild(chatIcon);

    // Create the chat window container
    const chatContainer = document.createElement('div');
    chatContainer.id = 'chat-container';
    chatContainer.innerHTML = `
        <div id="chat-header">
            <span>CyVerse Learning</span>
            <div class="header-buttons">
                <button id="expand-button" class="header-button">⛶</button>  <!-- Expand icon -->
                <button id="popout-button" class="header-button">⧉</button>   <!-- Popout icon -->
                <button id="chat-close" class="header-button">×</button>
            </div>
        </div>
        <div id="chat-body">
            <iframe 
                src="https://chat-qa.cyverse.org/learning/" 
                id="chat-frame" 
                width="100%" 
                height="100%"
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-top-navigation"
            ></iframe>
        </div>
    `;
    document.body.appendChild(chatContainer);

    // Event listener for iframe messages (if the iframe sends any)
    window.addEventListener('message', function(event) {
        if (event.origin === 'https://chat-qa.cyverse.org/learning/') {
            if (event.data.type === 'link') {
                window.open(event.data.url, '_blank', 'noopener,noreferrer');
            }
        }
    });

    // Toggle the chat window when the chat icon is clicked
    chatIcon.addEventListener('click', () => {
        chatContainer.style.display = chatContainer.style.display === 'block' ? 'none' : 'block';
    });

    // Close the chat window
    document.getElementById('chat-close').addEventListener('click', () => {
        chatContainer.style.display = 'none';
    });

    // Expand the chat window
    const expandButton = document.getElementById('expand-button');
    expandButton.addEventListener('click', function() {
        chatContainer.classList.toggle('expanded');
    });
      
    // Popout the chat window using a Blob URL to avoid about:blank and ensure proper sizing on mobile
    const popoutButton = document.getElementById('popout-button');
    popoutButton.addEventListener('click', function() {
        // Clone the entire chat container element as outerHTML
        const chatContent = chatContainer.outerHTML;
        // Build the full HTML for the popout window, including viewport meta tag and inline CSS overrides
        const html = `
            <html>
                <head>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>CyVerse Chatbot Popout</title>
                    <link rel="stylesheet" type="text/css" href="chatbot_widget.css">
                    <style>
                        /* Override the chat container styles for full-window display */
                        #chat-container {
                            position: relative !important;
                            bottom: auto !important;
                            right: auto !important;
                            width: 100% !important;
                            height: 100% !important;
                            max-width: none !important;
                            max-height: none !important;
                            border-radius: 0 !important;
                            box-shadow: none !important;
                            display: block !important;
                        }
                        body { 
                            margin: 0; 
                            overflow: hidden;
                        }
                    </style>
                </head>
                <body>
                    ${chatContent}
                </body>
            </html>
        `;
        // Create a Blob from the HTML string
        const blob = new Blob([html], { type: 'text/html' });
        // Generate a Blob URL from the Blob
        const url = URL.createObjectURL(blob);
        // Set default popout dimensions
        let popWidth = 800, popHeight = 600;
        // If on mobile, set the dimensions to the full device viewport size
        if (/Mobi|Android/i.test(navigator.userAgent)) {
            popWidth = window.innerWidth;
            popHeight = window.innerHeight;
        }
        window.open(url, '_blank', `width=${popWidth},height=${popHeight}`);
    });

    // Attempt to add event listeners to links inside the iframe (subject to cross-origin restrictions)
    const chatFrame = document.getElementById('chat-frame');
    chatFrame.onload = function() {
        try {
            const iframeLinks = chatFrame.contentDocument.getElementsByTagName('a');
            Array.from(iframeLinks).forEach(link => {
                link.setAttribute('target', '_blank');
                link.setAttribute('rel', 'noopener noreferrer');
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    window.open(link.href, '_blank', 'noopener,noreferrer');
                });
            });
        } catch (e) {
            console.log('Note: Cross-origin restrictions prevent direct iframe manipulation');
        }
    };
});

const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  res.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Node.js CI/CD</title>
        <style>
            body {
                margin: 0;
                font-family: Arial, sans-serif;
                background: linear-gradient(135deg, #1e3c72, #2a5298);
                color: white;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
            }

            .container {
                text-align: center;
                background: rgba(255,255,255,0.1);
                padding: 40px;
                border-radius: 15px;
                box-shadow: 0 10px 25px rgba(0,0,0,0.3);
                max-width: 700px;
            }

            h1 {
                color: #00ff99;
                margin-bottom: 10px;
            }

            p {
                font-size: 18px;
                margin: 10px 0;
            }

            .status {
                color: #ffd700;
                font-weight: bold;
            }

            footer {
                margin-top: 20px;
                font-size: 14px;
                color: #ddd;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>🚀 Now The Deployment Successful Completed! </h1>
            <p>Welcome to the <strong>Node.js CI/CD</strong>.</p>
            <p class="status">Application is running successfully.</p>
            <p><strong>Environment:</strong> Production Server</p>
            <p><strong>Server Time:</strong> ${new Date().toLocaleString()}</p>

            <footer>
                Powered by Node.js | GitHub Actions | CI/CD Pipeline
            </footer>
        </div>
    </body>
    </html>
  `);
});

server.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});

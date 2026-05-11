# BGDev Server - Contact Form Backend

Backend server for handling contact form submissions via Nodemailer.

## Setup Instructions

### 1. Install Dependencies

```bash
cd server
npm install
```

### 2. Configure Environment Variables

Create a `.env` file in the `server` directory:

```env
# Gmail Configuration
EMAIL_USER=bgdevofficial@gmail.com
EMAIL_PASS=your-app-password

# Server Configuration
PORT=5000
NODE_ENV=development
```

### 3. Generate Gmail App Password

1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Navigate to **Security** > **2-Step Verification** (must be enabled)
3. Scroll down to **App passwords**
4. Select **Mail** as the app and **Other** as the device
5. Name it "BGDev Server" and click **Generate**
6. Copy the 16-character password and use it as `EMAIL_PASS` in your `.env` file

### 4. Start the Server

**Development mode (with auto-reload):**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

The server will run on `http://localhost:5000` by default.

## API Endpoints

### POST `/api/contact`

Send contact form data via email.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "service": "Web Development",
  "message": "Project details..."
}
```

**Success Response:**
```json
{
  "success": true,
  "message": "Email sent successfully! We will get back to you soon.",
  "messageId": "..."
}
```

**Error Response:**
```json
{
  "success": false,
  "message": "Error message here"
}
```

### GET `/api/health`

Health check endpoint.

**Response:**
```json
{
  "status": "ok",
  "message": "BGDev server is running",
  "timestamp": "2025-12-24T00:00:00.000Z"
}
```

## Frontend Configuration

In your React app, set the API URL:

**Development:**
Create a `.env` file in the root of `bgdev-react`:
```
REACT_APP_API_URL=http://localhost:5000
```

**Production:**
Set the environment variable to your production server URL.

## Deployment

For production deployment:

1. Set `NODE_ENV=production` in your `.env` file
2. Use a process manager like PM2:
   ```bash
   npm install -g pm2
   pm2 start server.js --name bgdev-server
   ```
3. Configure reverse proxy (nginx/Apache) if needed
4. Set up SSL certificate for HTTPS

## Security Notes

- Never commit `.env` file to version control
- Use environment variables for sensitive data
- Enable CORS only for trusted domains in production
- Consider rate limiting for the contact endpoint
- Use HTTPS in production


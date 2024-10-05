# 📧 Mail Sender

This project is a simple **Mail Sender** built using **Express**, **NodeMailer**, and an **SMTP Server**. It allows users to send emails directly from a web interface.

## 🚀 Features

- **Send Emails**: Easily send emails using an SMTP server.
- **Form Handling**: Collect email data from users via a simple form.
- **Error Handling**: Gracefully handles errors like invalid email addresses or server issues.

## 🛠️ Technologies Used

- **Express**: Backend framework for handling routes and HTTP requests.
- **NodeMailer**: A powerful email sending module for Node.js.
- **SMTP Server**: Used to send emails securely.
- **Path-Parse**: To work with file and directory paths.
- **Body-Parse**: To handle incoming request bodies, especially form data.

- 
# Website OverView
![image](https://user-images.githubusercontent.com/117588084/235066349-8770a90e-d314-43de-961f-1a38e1c39b65.png)

## 🏁 Getting Started

### Prerequisites

Ensure you have **Node.js** and **npm** installed.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/mail-sender.git
   ```

2. Navigate to the project directory:
   ```bash
   cd mail-sender
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Set up environment variables for the SMTP server:
   ```bash
   SMTP_HOST=your-smtp-host
   SMTP_PORT=your-smtp-port
   SMTP_USER=your-email-username
   SMTP_PASS=your-email-password
   ```

5. Start the server:
   ```bash
   npm start
   ```

The server should now be running on [http://localhost:3000](http://localhost:3000).

### Sending a Mail

Visit [http://localhost:3000/send](http://localhost:3000/send) to access the form where you can enter the email details (recipient, subject, and message).

## 📂 Project Structure

```bash
.
├── public    # Static files
├── routes    # Express routes for handling requests
├── views     # HTML form for sending emails
└── app.js    # Main server file
```

## 📄 License

This project is licensed under the **MIT License**.


export function useMailjet() {
  const MAILJET_API_KEY = 'YOUR_MAILJET_API_KEY'; // <-- replace with your Mailjet API Key
  const MAILJET_API_SECRET = 'YOUR_MAILJET_API_SECRET'; // <-- replace with your Mailjet API Secret
  const SENDER_EMAIL = 'sender@example.com'; // <-- replace with your sender email
  const RECIPIENT_EMAIL = 'recipient@example.com'; // <-- replace with your recipient email

  const sendContactEmail = async (name: string, email: string, message: string) => {
    const url = 'https://api.mailjet.com/v3.1/send';
    const body = {
      Messages: [
        {
          From: {
            Email: SENDER_EMAIL,
            Name: name,
          },
          To: [
            {
              Email: RECIPIENT_EMAIL,
              Name: 'Contact',
            },
          ],
          Subject: `Contact Form Submission from ${name}`,
          TextPart: message,
          HTMLPart: `<h3>Contact Form Submission</h3><p><b>Name:</b> ${name}<br/><b>Email:</b> ${email}<br/><b>Message:</b> ${message}</p>`
        },
      ],
    };
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': 'Basic ' + btoa(`${MAILJET_API_KEY}:${MAILJET_API_SECRET}`),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    if (!response.ok) {
      throw new Error('Failed to send email');
    }
    return response.json();
  };

  const sendJobApplication = async (name: string, email: string, message: string, file: File) => {
    // Read file as base64
    const fileBase64 = await new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        // Remove the data:...;base64, part
        const base64 = result.split(',')[1];
        resolve(base64);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
    const url = 'https://api.mailjet.com/v3.1/send';
    const body = {
      Messages: [
        {
          From: {
            Email: SENDER_EMAIL,
            Name: name,
          },
          To: [
            {
              Email: RECIPIENT_EMAIL,
              Name: 'Job Application',
            },
          ],
          Subject: `Job Application from ${name}`,
          TextPart: message,
          HTMLPart: `<h3>Job Application</h3><p><b>Name:</b> ${name}<br/><b>Email:</b> ${email}<br/><b>Message:</b> ${message}</p>` ,
          Attachments: [
            {
              ContentType: file.type,
              Filename: file.name,
              Base64Content: fileBase64,
            },
          ],
        },
      ],
    };
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': 'Basic ' + btoa(`${MAILJET_API_KEY}:${MAILJET_API_SECRET}`),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    if (!response.ok) {
      throw new Error('Failed to send job application');
    }
    return response.json();
  };

  return { sendContactEmail, sendJobApplication };
}


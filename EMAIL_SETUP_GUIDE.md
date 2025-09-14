# Email Setup Guide for Kuan Global Ventures

## Setting up EmailJS to receive emails at info.kuanglobalventures@gmail.com

### Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Connect Gmail Account
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Select "Gmail" as the service
4. Connect your Gmail account: `info.kuanglobalventures@gmail.com`
5. Authorize EmailJS to send emails on your behalf

### Step 3: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template content:

**Subject:** New Contact Form Submission - {{subject}}

**Body:**
```
Hello Kuan Global Ventures Team,

You have received a new message through your website contact form:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your website contact form.
Reply directly to this email to respond to the customer.
```

4. Save the template and note the Template ID (e.g., `template_contact`)

### Step 4: Get Your Credentials
1. Go to "Account" → "General"
2. Copy your Public Key
3. Note your Service ID from the Email Services section

### Step 5: Update Your Code
Replace these values in `/app/contact/page.tsx`:

```javascript
const serviceId = 'your_service_id_here' // Replace with your actual service ID
const templateId = 'your_template_id_here' // Replace with your actual template ID  
const publicKey = 'your_public_key_here' // Replace with your actual public key
```

### Step 6: Test
1. Save your changes
2. Go to your contact page
3. Fill out and submit the form
4. Check your Gmail inbox at info.kuanglobalventures@gmail.com

## Alternative: Simple Mailto Fallback
If you prefer a simpler approach without EmailJS, you can use this fallback method:

```javascript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  
  // Create mailto link with form data
  const subject = encodeURIComponent(`Contact Form: ${formData.subject}`)
  const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}
  `)
  
  // Open email client
  window.location.href = `mailto:info.kuanglobalventures@gmail.com?subject=${subject}&body=${body}`
}
```

## Security Note
- EmailJS public keys are safe to expose in frontend code
- The free plan allows 200 emails/month
- Consider upgrading if you expect higher volume

## Troubleshooting
- Ensure Gmail account is properly connected
- Check that template variables match exactly
- Verify all IDs and keys are correct
- Check browser console for any error messages

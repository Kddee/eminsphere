# Reviewer Application Email Setup

The form now sends emails using **FormSubmit** - a completely free email backend service that requires **ZERO configuration**.

## How It Works

1. User fills out the form at http://localhost:8081/apply-as-reviewer
2. Form is submitted to FormSubmit servers
3. Email is automatically sent to **info@eminsphere.com** with all application details
4. A confirmation appears on screen

## Features
✅ Completely FREE - no account needed
✅ No configuration required
✅ Automatic email forwarding  
✅ Spam protection built-in
✅ Detailed form data in emails

## To Send Emails to a Different Address

Edit line 107 in `src/pages/ApplyAsReviewer.tsx`:

```typescript
const response = await fetch("https://formsubmit.co/YOUR_EMAIL_HERE", {
```

Replace `YOUR_EMAIL_HERE` with your email address.

## Testing

1. Go to http://localhost:8081/apply-as-reviewer
2. Fill out the complete form
3. Click "Submit Application"
4. Check info@eminsphere.com for the email
5. You should see a success message and the email will arrive within seconds

## First-Time Email Confirmation

The first email you send will trigger a confirmation link. You must click it to activate email forwarding for that address.

## Email Format Received

You'll receive the application with all details:
- Applicant name and contact email
- Professional title and institution
- Country and experience level
- Publication count
- Selected expertise areas
- Additional message/bio

For more info: https://formsubmit.co/


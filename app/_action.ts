'use server';

import { google } from 'googleapis';

export async function contactAction(formData: FormData) {
  const values: (FormDataEntryValue | null)[][] = [
    [
      formData.get('firstname'),
      formData.get('lastname'),
      formData.get('email'),
      formData.get('subject'),
      formData.get('message')
    ]
  ];

  const config = {
    email: process.env.GOOGLE_CLIENT_EMAIL ?? '',
    key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n') ?? ''
  };

  const client = new google.auth.JWT(config.email, null || '', config.key, [
    'https://www.googleapis.com/auth/spreadsheets'
  ]);

  const sheets = google.sheets({ version: 'v4', auth: client });

  const spreadsheetId = process.env.SPREADSHEET_ID;

  try {
    if (!spreadsheetId) throw new Error();
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: 'Contact',
      valueInputOption: 'RAW',
      insertDataOption: 'INSERT_ROWS',
      requestBody: {
        values: values
      }
    });

    return 'success';
  } catch (error) {
    console.log(error);
    return 'error';
  }
}

export async function verifyCaptchaAction(token: string) {
  const res = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `secret=${process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY}&response=${token}`
  });

  const data = await res.json();

  if (data.score > 0.5) {
    return true;
  } else {
    return false;
  }
}

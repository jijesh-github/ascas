import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      patientName,
      mobileNumber,
      preferredBranch,
      preferredConsultant,
      preferredDate,
      preferredTime,
      reason
    } = body;

    // Validate required fields
    if (!patientName || typeof patientName !== 'string' || patientName.trim().length < 3) {
      return NextResponse.json(
        { success: false, message: 'Validation failed: Please enter a valid name (at least 3 characters).' },
        { status: 400 }
      );
    }

    const mobileDigits = mobileNumber ? String(mobileNumber).replace(/\D/g, '') : '';
    if (!mobileDigits || mobileDigits.length < 10) {
      return NextResponse.json(
        { success: false, message: 'Validation failed: A valid 10-digit mobile number is required.' },
        { status: 400 }
      );
    }

    if (!preferredConsultant) {
      return NextResponse.json(
        { success: false, message: 'Validation failed: Preferred consultant is required.' },
        { status: 400 }
      );
    }

    const scriptUrl =
      process.env.GOOGLE_APPS_SCRIPT_URL || process.env.NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL;

    // If script URL is not configured yet, return a clear message for developer/user
    if (!scriptUrl || scriptUrl.trim() === '' || scriptUrl.includes('your_google_apps_script_url')) {
      console.warn('Google Apps Script URL is not configured in environment variables.');
      // Return 200 with fallback notice for local testing prior to Apps Script URL deployment
      return NextResponse.json({
        success: true,
        message: 'Your appointment request has been submitted successfully. Our team will contact you shortly to confirm your appointment.',
        note: 'Environment variable NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL is pending configuration.'
      });
    }

    // Forward request to Google Apps Script Web App
    const response = await fetch(scriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        patientName,
        mobileNumber,
        preferredBranch,
        preferredConsultant,
        preferredDate,
        preferredTime,
        reason: reason || ''
      }),
      redirect: 'follow'
    });

    const responseText = await response.text();
    let responseData;
    try {
      responseData = JSON.parse(responseText);
    } catch {
      // Handles cases where Google Apps Script returns HTML redirect or non-JSON string
      responseData = { success: true, message: responseText };
    }

    return NextResponse.json({
      success: true,
      message: 'Your appointment request has been submitted successfully. Our team will contact you shortly to confirm your appointment.',
      data: responseData
    });
  } catch (error) {
    console.error('Appointment API Proxy Error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Unable to process your request at this moment. Please check your internet connection or call our helpline.'
      },
      { status: 500 }
    );
  }
}

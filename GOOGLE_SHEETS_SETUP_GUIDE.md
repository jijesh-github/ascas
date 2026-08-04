# ASCAS Website - Google Sheets & Google Apps Script Setup Guide

This guide provides step-by-step instructions for connecting the **ASCAS Fertility & Women's Centre** appointment booking form to Google Sheets using Google Apps Script.

---

## 1. Google Sheet Column Structure

Create a new Google Sheet (or open an existing one) and set Row 1 headers exactly as follows:

| Column | Header Name | Description |
| :--- | :--- | :--- |
| **A** | `Timestamp` | Auto-generated IST timestamp (`yyyy-MM-dd HH:mm:ss`) |
| **B** | `Patient Name` | Full name of the patient from the form |
| **C** | `Mobile Number` | Contact phone number from the form |
| **D** | `Preferred Branch` | `Vadapalani` or `Valasaravakkam` |
| **E** | `Preferred Consultant` | Selected doctor's name |
| **F** | `Preferred Date` | Selected consultation date |
| **G** | `Preferred Time` | Selected time slot or preferred time |
| **H** | `Status` | Automatically set to `Pending` |
| **I** | `Confirmed Date & Time` | *Leave empty initially for clinic staff management* |
| **J** | `Remarks` | Patient consultation reason / notes |

> **Sheet Name**: Name the tab at the bottom **`Appointments`**.

---

## 2. Google Apps Script Code (`Code.gs`)

1. In your Google Sheet, click **Extensions** > **Apps Script** in the top menu.
2. Replace any existing code in `Code.gs` with the following:

```javascript
/**
 * ASCAS Fertility & Women's Centre - Appointment Booking Script
 * Receives POST requests from the website and appends appointment records to Google Sheets.
 */

function doPost(e) {
  try {
    // 1. Parse JSON payload
    var data = {};
    if (e && e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    } else {
      return createJsonResponse(false, "No post data received.");
    }

    // 2. Validate required fields
    if (!data.patientName || !data.mobileNumber || !data.preferredConsultant) {
      return createJsonResponse(false, "Missing required fields: Patient Name, Mobile Number, or Preferred Consultant.");
    }

    // 3. Access active spreadsheet & target sheet
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName("Appointments") || ss.getSheets()[0];

    // 4. Format timestamp for Indian Standard Time (IST)
    var timestamp = Utilities.formatDate(new Date(), "Asia/Kolkata", "yyyy-MM-dd HH:mm:ss");

    // 5. Column mapping matching required structure:
    // [Timestamp, Patient Name, Mobile Number, Preferred Branch, Preferred Consultant, Preferred Date, Preferred Time, Status, Confirmed Date & Time, Remarks]
    var row = [
      timestamp,
      data.patientName || "",
      data.mobileNumber || "",
      data.preferredBranch || "",
      data.preferredConsultant || "",
      data.preferredDate || "",
      data.preferredTime || "",
      "Pending",
      "", // Confirmed Date & Time (Left empty initially)
      data.reason || "" // Remarks / Reason for consultation
    ];

    // 6. Append row to Google Sheet
    sheet.appendRow(row);

    // 7. Return success response
    return createJsonResponse(true, "Appointment request stored successfully.");

  } catch (error) {
    return createJsonResponse(false, "Server Error: " + error.toString());
  }
}

function createJsonResponse(success, message) {
  var output = JSON.stringify({
    success: success,
    message: message
  });
  return ContentService.createTextOutput(output).setMimeType(ContentService.MimeType.JSON);
}
```

3. Click the **Save** icon (Ctrl+S / Cmd+S).

---

## 3. Deployment Instructions

1. Click **Deploy** > **New deployment** (top-right corner).
2. Click the gear icon (**Select type**) and choose **Web app**.
3. Fill in the deployment details:
   - **Description**: `ASCAS Appointment Booking Web App`
   - **Execute as**: `Me (your-email@gmail.com)`
   - **Who has access**: `Anyone` *(Required so the website can post without Google login)*
4. Click **Deploy**.
5. When prompted for permissions:
   - Click **Review permissions** > Select your Google Account.
   - Click **Advanced** > Click **Go to Untitled project (unsafe)** > Click **Allow**.
6. Copy the generated **Web app URL** (e.g., `https://script.google.com/macros/s/AKfycb.../exec`).

---

## 4. Environment Variable Configuration

Open the [.env](file:///c:/projects/A4Website/.env) file in the project root and set the Web App URL:

```env
NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/YOUR_DEPLOYED_SCRIPT_ID/exec
```

---

## 5. Verification & Testing

1. Start the local server: `npm run dev`
2. Open `http://localhost:3000/book-appointment`.
3. Submit a test appointment request.
4. Check your Google Sheet — a new row will instantly appear with the timestamp, patient details, and `Pending` status.

# Vadapalani Branch Update Plan

## Goal

Update the ASCAS website to communicate the new Vadapalani branch, allow users to select a clinic branch while booking, add the new branch contact details, and include image gallery support for the new location.

## Current Findings

The project is a Next.js app with mostly hardcoded clinic content.

Main affected areas:

- `components/booking/DoctorAppointmentForm.tsx`
  - Booking location is currently fixed to `Chennai`.
  - The location field is disabled.
  - The selected location is sent to `/api/send-mail`.

- `app/contact/page.tsx`
  - Contact page currently shows one helpline, one address, and one Google Map for Valasaravakkam.

- `components/layout/Footer.tsx`
  - Footer currently shows only the Valasaravakkam address and phone number.

- `components/home/CtaSection.tsx`
  - CTA WhatsApp, address, and map link currently point to the existing Valasaravakkam branch.

- `components/layout/FloatingContactButtons.tsx`
  - Floating WhatsApp and call buttons currently use only the existing phone number.

- `app/privacy-policy/page.tsx`
  - Contact phone currently shows only the existing phone number.

- `app/terms-of-service/page.tsx`
  - Contact phone currently shows only the existing phone number.

- `utils/utils.ts`
  - Gallery data is centralized in `imageGallery`.
  - Current gallery images are under `public/images/gallery`.

## New Branch Details Provided

Branch: Vadapalani

Address:

```text
14, Arunachalam Rd,
next to VB World,
Saligramam,
Chennai, Tamil Nadu 600093
```

Phone:

```text
+91 93452 93609
```

## Clarifications Needed

1. Branch display name:

```text
Use Vadapalani
```

Even though the address is in Saligramam, the website should show the branch as `Vadapalani`.

2. Existing Valasaravakkam phone number:

```text
+91 93425 21779
```

Keep this number for now as the main/global phone number.

3. New Vadapalani phone number:

```text
+91 93452 93609
```

Add this number for the Vadapalani branch contact details, but do not replace the existing global/floating phone number yet.

4. Vadapalani Google Maps link:

```text
https://share.google/R9Ea6R4odqZJZWMDq
```

Use this as the map/share link. A Google Maps iframe embed URL may still be needed if we want an embedded map preview instead of only a "View Location" link.

5. Vadapalani gallery images:

Two images are available for now.

Recommended path:

```text
public/images/gallery/vadapalani/
```

Remaining need: confirm the image filenames after they are added to the project.

6. Announcement placement:

The announcement should be visible by default when the site launches, preferably in the hero section, with a small animation.

## Recommended Implementation Plan

### 1. Centralize Branch Data

Create or extend shared branch/contact data in `utils/utils.ts`.

Suggested structure:

```ts
export const branches = [
  {
    id: 'valasaravakkam',
    name: 'Valasaravakkam',
    address: '24 Chowdhary Nagar Main Road, Valasaravakkam, Chennai, Tamil Nadu - 600087',
    phone: '+91 93425 21779',
    tel: '+919342521779',
    whatsapp: 'https://wa.me/919342521779',
    mapUrl: 'https://maps.app.goo.gl/FpnKJTQvc3rGZPqz9',
    embedMapUrl: 'existing embed URL'
  },
  {
    id: 'vadapalani',
    name: 'Vadapalani',
    address: '14, Arunachalam Rd, next to VB World, Saligramam, Chennai, Tamil Nadu 600093',
    phone: '+91 93452 93609',
    tel: '+919345293609',
    whatsapp: 'https://wa.me/919345293609',
    mapUrl: 'https://share.google/R9Ea6R4odqZJZWMDq',
    embedMapUrl: ''
  }
];
```

This avoids duplicating branch details across multiple components.

### 2. Update Booking Form

File:

```text
components/booking/DoctorAppointmentForm.tsx
```

Changes:

- Replace disabled clinic location input with a branch dropdown.
- Options should include:
  - Valasaravakkam
  - Vadapalani
- Default selected branch should likely be `Valasaravakkam`.
- Keep sending `location` in the existing mail payload.

### 3. Update Contact Page

File:

```text
app/contact/page.tsx
```

Changes:

- Show both branch addresses and phone numbers.
- Make phone numbers clickable with `tel:` links.
- Add branch-specific map links.
- Add second embedded map when the Vadapalani embed URL is available.
- Use `https://share.google/R9Ea6R4odqZJZWMDq` for the Vadapalani map link.

### 4. Update Footer

File:

```text
components/layout/Footer.tsx
```

Changes:

- Replace single address block with a branch list.
- Show branch name, address, and phone.
- Keep email as common clinic email unless a branch-specific email exists.

### 5. Update CTA Section

File:

```text
components/home/CtaSection.tsx
```

Changes:

- Mention that ASCAS is now available at Valasaravakkam and Vadapalani.
- Keep WhatsApp on the existing main phone number for now.

### 6. Update Floating Contact Buttons

File:

```text
components/layout/FloatingContactButtons.tsx
```

Changes:

- Keep the existing main phone number for now.
- Do not switch floating WhatsApp/call buttons to the new Vadapalani number.

### 7. Update Policy Pages

Files:

```text
app/privacy-policy/page.tsx
app/terms-of-service/page.tsx
```

Changes:

- Update contact phone text to include both numbers or use the primary/global clinic number.

### 8. Add Gallery Images

Files:

```text
utils/utils.ts
public/images/gallery/
```

Changes:

- Add Vadapalani image entries to `imageGallery`.
- Add only the two currently available images for now.
- Recommended folder:

```text
public/images/gallery/vadapalani/
```

Example gallery data:

```ts
{
  src: '/images/gallery/vadapalani/01.jpeg',
  alt: 'ASCAS Vadapalani branch reception area',
  caption: 'ASCAS Vadapalani Branch - Reception Area'
}
```

### 9. Optional Cleanup

While touching these files, fix visible encoding issues found in existing text, for example:

- `ðŸ“` should be a readable location marker or plain text.
- `â€”` should be a normal dash.
- `360Â°` should become `360°` or `360-degree`.

## Verification Plan

After implementation:

1. Run lint/build if available.

```text
npm run build
```

2. Manually verify:

- Homepage booking form shows branch dropdown.
- Appointment email payload includes selected branch.
- Contact page displays both branches.
- Phone links open correct numbers.
- WhatsApp links open correct branch/global number.
- Footer displays both branches cleanly on desktop and mobile.
- Gallery images render without broken image paths.

## Suggested Execution Order

1. Add the two Vadapalani gallery images to the project and confirm filenames.
2. Add centralized branch data.
3. Add default-visible animated hero announcement.
4. Update booking form.
5. Update contact/footer/CTA/floating buttons.
6. Add gallery entries after image filenames are confirmed.
7. Update policy contact details.
8. Run build and check UI.

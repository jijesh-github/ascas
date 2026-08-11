# Accumed Speciality Clinic and Scans (ASCAS) - Pages, Components & Elements Mapping

## 1. Project Architecture Overview

**Accumed Speciality Clinic and Scans (ASCAS)** is a healthcare web platform built using modern Web standards and Next.js App Router architecture.

* **Framework**: Next.js (App Router `app/`) with TypeScript
* **Styling**: Tailwind CSS v4, Framer Motion for micro-animations, Radix UI primitives (`@radix-ui/react-slot`, `@radix-ui/react-tabs`), Lucide React icons
* **State Management & Context**: React 19 Context (`DoctorFormContext`) for global booking modals
* **Data Layer & Integrations**:
  * Static JSON/TS data models (`utils/doctorsData.ts`, `utils/treatmentsData.ts`, `utils/doctorSchedules.ts`)
  * External Blogger API (`lib/blogger.ts`) with HTML Sanitization (`lib/sanitize.ts`)
  * Google Sheets API Integration via Webhook (`/api/book-appointment`)
  * Email notification engine via Nodemailer (`/api/send-mail`)

---

## 2. Global Layout & Structural Hierarchy

```
[ RootLayout (app/layout.tsx) ]
  ├── Google Fonts Loader (Plus Jakarta Sans, Playfair Display, Geist)
  ├── Structured Data (MedicalClinic JSON-LD)
  ├── <DoctorFormProvider> (Global Booking Modal Context)
  │     │
  │     ├── <Navbar /> (Sticky Header & Navigation Menu)
  │     ├── <Page Content> ({children})
  │     ├── <FloatingContactButtons /> (WhatsApp & Direct Call Floating Action Buttons)
  │     ├── <ScrollToTop /> (Smooth scroll back to top button)
  │     ├── <DoctorFormModal /> (Global Quick Appointment Modal Overlay)
  │     └── <Footer /> (Multi-column Footer with Branches & Quick Links)
```

---

## 3. Comprehensive Pages & Elements Map

### 1. Home Page (`/`)
* **File Path**: [`app/page.tsx`](file:///d:/bhuvan/ascas/app/page.tsx)
* **Purpose**: Primary landing page presenting clinic overview, branch expansion, core services, lead doctors, facilities, and testimonials.
* **Component Mapping**:
  * [`HeroSection`](file:///d:/bhuvan/ascas/components/home/HeroSection.tsx): Carousel hero, main headline, emergency numbers, CTA buttons ("Book Appointment", "Explore Services").
  * [`BranchAnnouncement`](file:///d:/bhuvan/ascas/components/home/BranchAnnouncement.tsx): Announcement bar highlighting dual branches (Vadapalani & Valasaravakkam).
  * [`DreamTeamSection`](file:///d:/bhuvan/ascas/components/home/DreamTeamSection.tsx): Showcase of lead specialist founders (Dr. Aishwarya & Dr. Parthasarathy).
  * [`OurServices`](file:///d:/bhuvan/ascas/components/home/OurServices.tsx): Grid overview of key medical services.
  * [`TreatmentsSection`](file:///d:/bhuvan/ascas/components/home/TreatmentsSection.tsx) & [`TreatmentCard`](file:///d:/bhuvan/ascas/components/home/TreatmentCard.tsx): Detailed treatments showcase with interactive cards.
  * [`WhyChooseSection`](file:///d:/bhuvan/ascas/components/home/WhyChooseSection.tsx) & [`StatsSection`](file:///d:/bhuvan/ascas/components/home/StatsSection.tsx) / [`CountUp`](file:///d:/bhuvan/ascas/components/home/CountUp.tsx): Key statistics (patients served, success rates) with counter animations.
  * [`ClinicalFacilities`](file:///d:/bhuvan/ascas/components/home/ClinicalFacilities.tsx): High-tech lab and ultrasound facility highlights.
  * [`TestimonialSlider`](file:///d:/bhuvan/ascas/components/home/TestimonialSlider.tsx): Animated patient reviews slider.
  * [`YouTubeGallery`](file:///d:/bhuvan/ascas/components/home/YouTubeGallery.tsx): Video embeds for patient awareness and doctor talks.
  * [`ImageGallery`](file:///d:/bhuvan/ascas/components/home/ImageGallery.tsx): Gallery of clinic interiors and care environment.
  * [`HomeCtaSection`](file:///d:/bhuvan/ascas/components/home/HomeCtaSection.tsx): Bottom booking prompt banner.
* **Key Interactive Elements**:
  * "Book Appointment" buttons (triggers global modal or navigates to `/book-appointment`)
  * Branch selector switch & links to specific branch pages
  * Dynamic counter animations on scroll
  * Testimonial slider navigation controls (Previous/Next)
  * Embedded YouTube iframe modal/player

---

### 2. About Us Page (`/about`)
* **File Path**: [`app/about/page.tsx`](file:///d:/bhuvan/ascas/app/about/page.tsx)
* **Purpose**: Comprehensive background on the clinic history, mission, vision, values, and founders' background.
* **Component Mapping**:
  * [`PageHero`](file:///d:/bhuvan/ascas/components/ui/PageHero.tsx): Banner title "About ASCAS" with breadcrumb navigation.
  * [`FoundersSection`](file:///d:/bhuvan/ascas/components/about/FoundersSection.tsx): Extended profiles of Dr. Aishwarya and Dr. Parthasarathy with qualifications, achievements, and clinical vision.
  * [`AboutAscasExpanded`](file:///d:/bhuvan/ascas/components/about/AboutAscasExpanded.tsx): Core values, advanced lab facilities, patient-centric methodology.
  * [`CtaSection`](file:///d:/bhuvan/ascas/components/home/CtaSection.tsx): Reusable bottom action banner.
* **Key Interactive Elements**:
  * Qualification detail cards
  * CTA buttons leading to appointment booking and contact pages

---

### 3. Branches Hub Page (`/branches`)
* **File Path**: [`app/branches/page.tsx`](file:///d:/bhuvan/ascas/app/branches/page.tsx)
* **Purpose**: Directory of ASCAS clinic locations (Valasaravakkam and Vadapalani).
* **Component Mapping**:
  * [`PageHero`](file:///d:/bhuvan/ascas/components/ui/PageHero.tsx): Header hero "Our Branch Locations".
  * Branch Comparison Cards: Side-by-side comparison of Valasaravakkam & Vadapalani branches.
* **Key Interactive Elements**:
  * "Explore Valasaravakkam Branch" CTA link
  * "Explore Vadapalani Branch" CTA link
  * Direct phone click-to-call links
  * Google Maps redirection buttons

---

### 4. Valasaravakkam Branch Page (`/branches/valasaravakkam`)
* **File Path**: [`app/branches/valasaravakkam/page.tsx`](file:///d:/bhuvan/ascas/app/branches/valasaravakkam/page.tsx)
* **Purpose**: Dedicated location page for the Valasaravakkam clinic branch.
* **Component Mapping**:
  * Branch Hero: Photos, address, contact numbers, working hours (Mon-Sat 9 AM - 9 PM).
  * Interactive Schedule Matrix: On-duty doctors and timings at Valasaravakkam.
  * Doctors Roster: Doctor cards for specialists available at this branch.
  * Facilities List & Google Maps Embed.
* **Key Interactive Elements**:
  * Filterable doctor availability timetable
  * "Book at Valasaravakkam" quick trigger (pre-fills branch in booking context)
  * Embedded Google Maps iframe & turn-by-turn direction link

---

### 5. Vadapalani Branch Page (`/branches/vadapalani`)
* **File Path**: [`app/branches/vadapalani/page.tsx`](file:///d:/bhuvan/ascas/app/branches/vadapalani/page.tsx)
* **Purpose**: Dedicated location page for the newly launched Vadapalani clinic branch.
* **Component Mapping**:
  * Branch Hero: Launch badges, address, contact numbers, operating hours (Mon-Sat 9 AM - 8 PM).
  * Doctor Availability Grid: On-duty timings for Vadapalani specialists.
  * Branch Facilities & Google Maps Embed.
* **Key Interactive Elements**:
  * Pre-selected booking trigger for Vadapalani branch
  * Clickable phone and address actions
  * Google Maps embedded navigation view

---

### 6. Doctors Listing Page (`/doctors`)
* **File Path**: [`app/doctors/page.tsx`](file:///d:/bhuvan/ascas/app/doctors/page.tsx)
* **Purpose**: Comprehensive roster of doctors and fertility specialists across all branches.
* **Component Mapping**:
  * [`PageHero`](file:///d:/bhuvan/ascas/components/ui/PageHero.tsx): Header "Our Specialist Doctors".
  * Branch & Specialty Filter Bar: Interactive buttons/tabs to filter doctors by branch (All, Valasaravakkam, Vadapalani) or specialty.
  * [`DoctorCard`](file:///d:/bhuvan/ascas/components/home/DoctorCard.tsx) Grid: Cards containing doctor photo, name, designation, qualifications, specializations, available branches, and action buttons.
* **Key Interactive Elements**:
  * Branch filter tabs (All / Valasaravakkam / Vadapalani)
  * "View Profile" button (navigates to dynamic route `/doctors/[slug]`)
  * "Book Appointment" button (opens quick booking modal with pre-selected doctor)

---

### 7. Doctor Profile Detail Page (`/doctors/[slug]`)
* **File Path**: [`app/doctors/[slug]/page.tsx`](file:///d:/bhuvan/ascas/app/doctors/[slug]/page.tsx)
* **Purpose**: Detailed individual profile for a doctor.
* **Component Mapping**:
  * Profile Hero Header: Doctor portrait, title, qualifications, department, experience years.
  * Bio & Specializations Section: Clinical expertise list, education, background.
  * Weekly Schedule Table: Days, branches, and timing slots for this doctor (`utils/doctorSchedules.ts`).
  * Direct Booking Form Widget: Pre-populated appointment widget.
* **Key Interactive Elements**:
  * Interactive weekly schedule accordion/table
  * Inline doctor booking submission form
  * Share doctor profile action

---

### 8. Treatments Hub & Detail Pages (`/treatments`, `/treatments/[slug]`)
* **File Paths**:
  * Directory Listing: [`app/treatments/page.tsx`](file:///d:/bhuvan/ascas/app/treatments/page.tsx)
  * Dynamic Detail: [`app/treatments/[slug]/page.tsx`](file:///d:/bhuvan/ascas/app/treatments/[slug]/page.tsx)
* **Purpose**: Educational overview of fertility treatments, IVF, IUI, gynecological surgeries, and scan services.
* **Component Mapping**:
  * Treatment Category Navigation (Fertility Care, Scans & Diagnostics, Women's Health).
  * [`TreatmentCard`](file:///d:/bhuvan/ascas/components/home/TreatmentCard.tsx) Grid: Detailed treatment preview cards.
  * Detail Page Layout:
    * Treatment Overview & Key Indications
    * Step-by-Step Procedure Guide
    * FAQ Accordion
    * Recommended Doctors for this Treatment
    * Appointment CTA Widget
* **Key Interactive Elements**:
  * FAQ expandable/collapsible accordions
  * Related doctors quick booking links
  * Treatment enquiry button

---

### 9. Services Page (`/services`)
* **File Paths**:
  * Server Wrapper: [`app/services/page.tsx`](file:///d:/bhuvan/ascas/app/services/page.tsx)
  * Interactive Client Page: [`app/services/ServicesPageClient.tsx`](file:///d:/bhuvan/ascas/app/services/ServicesPageClient.tsx)
* **Purpose**: Highlight specialized departments: Fertility Center, Fetal Medicine, Obstetrics & Gynecology, Ultrasound Scans, Diagnostic Lab.
* **Component Mapping**:
  * [`PageHero`](file:///d:/bhuvan/ascas/components/ui/PageHero.tsx): Banner "Specialized Clinical Services".
  * Interactive Service Tabs: Category switching between Fertility, Fetal Medicine, Gynecology, Diagnostics.
  * Service Feature Cards & Diagnostic Equipment details.
* **Key Interactive Elements**:
  * Tab navigation for service categories
  * Expanded view modals / popovers for detailed test lists

---

### 10. Interactive Appointment Booking Page (`/book-appointment`)
* **File Paths**:
  * Server Page: [`app/book-appointment/page.tsx`](file:///d:/bhuvan/ascas/app/book-appointment/page.tsx)
  * Multi-step Client Engine: [`app/book-appointment/BookAppointmentClient.tsx`](file:///d:/bhuvan/ascas/app/book-appointment/BookAppointmentClient.tsx)
* **Purpose**: Full-fledged multi-step appointment booking wizard with real-time schedule slot generation.
* **Component Mapping & Step Workflow**:
  * **Step 1: Branch Selection**: Cards for Valasaravakkam vs. Vadapalani.
  * **Step 2: Doctor Selection**: Grid of doctor choices via [`DoctorSelectCard`](file:///d:/bhuvan/ascas/components/booking/DoctorSelectCard.tsx).
  * **Step 3: Date Picker**: Interactive week/date picker via [`WeekDayPicker`](file:///d:/bhuvan/ascas/components/booking/WeekDayPicker.tsx).
  * **Step 4: Time Slot Selector**: Morning vs. Evening session slot pill selection generated from doctor schedule matrix (`utils/doctorSchedules.ts`).
  * **Step 5: Patient Details Form**: Inputs for Patient Name, Phone Number, Email, Age, Preferred Communication Method, Notes.
  * **Step 6: Confirmation & Submission**: Post payload sent to `/api/book-appointment`.
* **Key Interactive Elements**:
  * Step progress indicator bar
  * Dynamic date & slot calculation engine based on active doctor schedule
  * Form validation with interactive error messages
  * Submit toast notifications via `react-hot-toast`

---

### 11. Blog & Health Articles (`/blog`, `/blog/[slug]`)
* **File Paths**:
  * Blog Listing: [`app/blog/page.tsx`](file:///d:/bhuvan/ascas/app/blog/page.tsx)
  * Client Grid & Filters: [`components/blog/BlogGridClient.tsx`](file:///d:/bhuvan/ascas/components/blog/BlogGridClient.tsx)
  * Dynamic Reader Page: [`app/blog/[slug]/page.tsx`](file:///d:/bhuvan/ascas/app/blog/[slug]/page.tsx)
  * Blogger API Integration: [`lib/blogger.ts`](file:///d:/bhuvan/ascas/lib/blogger.ts)
  * HTML Sanitization Utility: [`lib/sanitize.ts`](file:///d:/bhuvan/ascas/lib/sanitize.ts)
* **Purpose**: Educational blog feed dynamically synced with Google Blogger API backend.
* **Component Mapping**:
  * [`BlogHero`](file:///d:/bhuvan/ascas/components/blog/BlogHero.tsx): Blog header banner.
  * [`FeaturedArticle`](file:///d:/bhuvan/ascas/components/blog/FeaturedArticle.tsx): Highlights top published medical article.
  * [`BlogGridClient`](file:///d:/bhuvan/ascas/components/blog/BlogGridClient.tsx): Search input, tag filter pills, paginated blog grid.
  * [`BlogCard`](file:///d:/bhuvan/ascas/components/blog/BlogCard.tsx) & [`BlogFallbackImage`](file:///d:/bhuvan/ascas/components/blog/BlogFallbackImage.tsx): Article summary cards with fallback images.
  * Reader Page: Full article content rendered safely using `sanitizeHtml`, estimated reading time, social share buttons, author details.
* **Key Interactive Elements**:
  * Live search bar filtering post titles & labels
  * Category tag filter buttons
  * Social sharing buttons (WhatsApp, Facebook, Twitter, Direct Link Copy)

---

### 12. Contact Page (`/contact`)
* **File Paths**:
  * Server Page: [`app/contact/page.tsx`](file:///d:/bhuvan/ascas/app/contact/page.tsx)
  * Interactive Client Page: [`app/contact/ContactPageClient.tsx`](file:///d:/bhuvan/ascas/app/contact/ContactPageClient.tsx)
* **Purpose**: Contact information, maps, directions, and inquiry submission form.
* **Component Mapping**:
  * Branch Information Cards (Address, Telephone, Email, Hours).
  * Interactive Contact Form (Name, Phone, Email, Subject, Message, Branch selection).
  * Google Maps Interactive Iframes for Valasaravakkam and Vadapalani branches.
* **Key Interactive Elements**:
  * Branch tab toggle for contact info & maps
  * Form submit handler connected to `/api/send-mail` endpoint
  * Direct phone dial and WhatsApp links

---

### 13. Team Page (`/team`)
* **File Path**: [`app/team/page.tsx`](file:///d:/bhuvan/ascas/app/team/page.tsx)
* **Purpose**: Introduction to the clinical support team, embryology team, and administrative staff.
* **Component Mapping**:
  * [`PageHero`](file:///d:/bhuvan/ascas/components/ui/PageHero.tsx): "Our Dedicated Healthcare Team".
  * Team Department Sections: Doctors, Embryology & Lab Specialists, Nursing & Care Coordinators.

---

### 14. Legal Pages (`/privacy-policy`, `/terms-of-service`)
* **File Paths**:
  * Privacy Policy: [`app/privacy-policy/page.tsx`](file:///d:/bhuvan/ascas/app/privacy-policy/page.tsx)
  * Terms of Service: [`app/terms-of-service/page.tsx`](file:///d:/bhuvan/ascas/app/terms-of-service/page.tsx)
* **Purpose**: Standard legal information regarding patient data privacy, cookie policy, and clinic service terms.

---

## 4. Reusable UI Components Directory

| Module Directory | Component Name | Description & Usage |
| :--- | :--- | :--- |
| `components/layout/` | [`Navbar.tsx`](file:///d:/bhuvan/ascas/components/layout/Navbar.tsx) | Sticky navigation bar with responsive mobile menu drawer, brand logo, and CTA. |
| `components/layout/` | [`Footer.tsx`](file:///d:/bhuvan/ascas/components/layout/Footer.tsx) | Comprehensive site footer containing branch contact info, quick links, working hours, and social media icons. |
| `components/layout/` | [`FloatingContactButtons.tsx`](file:///d:/bhuvan/ascas/components/layout/FloatingContactButtons.tsx) | Fixed bottom-right action buttons for direct WhatsApp chat and phone calling. |
| `components/layout/` | [`ScrollToTop.tsx`](file:///d:/bhuvan/ascas/components/layout/ScrollToTop.tsx) | Scroll listener button that smoothly scrolls page back to top. |
| `components/ui/` | [`DoctorFormModal.tsx`](file:///d:/bhuvan/ascas/components/ui/DoctorFormModal.tsx) | Global modal overlay triggered by context for fast appointment booking. |
| `components/ui/` | [`PageHero.tsx`](file:///d:/bhuvan/ascas/components/ui/PageHero.tsx) | Standard top page banner component supporting background images and breadcrumbs. |
| `components/ui/` | [`button.tsx`](file:///d:/bhuvan/ascas/components/ui/button.tsx) | Custom button component powered by Class Variance Authority (`cva`). |
| `components/ui/` | [`input.tsx`](file:///d:/bhuvan/ascas/components/ui/input.tsx) | Accessible styled input component. |
| `components/ui/` | [`textarea.tsx`](file:///d:/bhuvan/ascas/components/ui/textarea.tsx) | Accessible styled multiline text area component. |
| `components/booking/` | [`DoctorAppointmentForm.tsx`](file:///d:/bhuvan/ascas/components/booking/DoctorAppointmentForm.tsx) | Form logic handling patient input, date/time picker, and API dispatch. |
| `components/booking/` | [`DoctorSelectCard.tsx`](file:///d:/bhuvan/ascas/components/booking/DoctorSelectCard.tsx) | Selectable doctor card component with selection state. |
| `components/booking/` | [`WeekDayPicker.tsx`](file:///d:/bhuvan/ascas/components/booking/WeekDayPicker.tsx) | Day-of-week and calendar date selector component. |
| `components/about/` | [`FoundersSection.tsx`](file:///d:/bhuvan/ascas/components/about/FoundersSection.tsx) | Specialized layout presenting founder bios, achievements, and qualifications. |
| `components/about/` | [`AboutAscasExpanded.tsx`](file:///d:/bhuvan/ascas/components/about/AboutAscasExpanded.tsx) | Detailed history and clinical values grid. |
| `components/blog/` | [`BlogCard.tsx`](file:///d:/bhuvan/ascas/components/blog/BlogCard.tsx) | Article preview card with thumbnail, title, label tags, and date. |
| `components/blog/` | [`BlogGridClient.tsx`](file:///d:/bhuvan/ascas/components/blog/BlogGridClient.tsx) | Client-side search and tag filtering wrapper for blog post list. |

---

## 5. API Endpoints & Server Action Mapping

### 1. `POST /api/book-appointment`
* **File Path**: [`app/api/book-appointment/route.ts`](file:///d:/bhuvan/ascas/app/api/book-appointment/route.ts)
* **Function**: Receives appointment details from client forms, formats patient information, and forwards payload to Google Apps Script Webhook (`GOOGLE_SHEETS_WEB_APP_URL`).
* **Payload Fields**:
  * `patientName` (string)
  * `phone` (string)
  * `email` (string)
  * `branch` (`valasaravakkam` | `vadapalani`)
  * `doctor` (string)
  * `date` (string)
  * `timeSlot` (string)
  * `notes` (string)
* **Response**: `{ success: true, message: "Appointment submitted successfully" }`

### 2. `POST /api/send-mail`
* **File Path**: [`app/api/send-mail/route.ts`](file:///d:/bhuvan/ascas/app/api/send-mail/route.ts)
* **Function**: Handles general contact inquiries via Nodemailer transport SMTP relay to clinic administrators.
* **Payload Fields**: `name`, `phone`, `email`, `branch`, `subject`, `message`.

---

## 6. Global Context & Data Layer Directory

* **[`context/DoctorFormContext.tsx`](file:///d:/bhuvan/ascas/context/DoctorFormContext.tsx)**: React Context providing `isOpen`, `selectedDoctor`, `selectedBranch`, `openModal()`, and `closeModal()` across the entire app.
* **[`utils/doctorsData.ts`](file:///d:/bhuvan/ascas/utils/doctorsData.ts)**: Master repository of doctor profiles (Dr. Aishwarya, Dr. Parthasarathy, etc.), qualifications, images, specialties, and branch assignments.
* **[`utils/treatmentsData.ts`](file:///d:/bhuvan/ascas/utils/treatmentsData.ts)**: Comprehensive dataset of fertility treatments, diagnostic scans, FAQs, and procedural steps.
* **[`utils/doctorSchedules.ts`](file:///d:/bhuvan/ascas/utils/doctorSchedules.ts)**: Mapping matrix of days of the week, branch locations, and available doctor hours for dynamic time slot calculation.
* **[`utils/utils.ts`](file:///d:/bhuvan/ascas/utils/utils.ts)**: Branch metadata (addresses, maps, phone numbers) and helper functions.

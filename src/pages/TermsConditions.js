import PageHero from '../components/PageHero';
import './pages.css';
import './legal.css';

const sections = [
  {
    title: '1. About These Terms',
    content: `These Terms and Conditions govern your use of the Kensley Aesthetics website (kensleyaesthetics.co.uk) and the aesthetic treatments and services we provide.

By using our website or booking a treatment, you agree to be bound by these terms. Please read them carefully. If you do not agree, please do not use our website or services.

Kensley Aesthetics is operated by [Company Name], registered in England and Wales. Registered address available upon request.`,
  },
  {
    title: '2. Our Services',
    content: `Kensley Aesthetics provides non-surgical aesthetic treatments including but not limited to: anti-wrinkle injections, dermal fillers, skin boosters, regenerative treatments, biostimulators, microneedling, RF microneedling and HIFU.

All treatments are performed by or under the supervision of qualified and insured aesthetic practitioners. We reserve the right to decline treatment at our clinical discretion — for example if we believe a treatment is not suitable, safe or in your best interest.`,
  },
  {
    title: '3. Consultations & Suitability',
    content: `A consultation is required before certain treatments. During your consultation, we will assess your suitability for the requested procedure. It is your responsibility to disclose all relevant medical information, including medications, allergies, previous treatments and health conditions.

Failure to disclose accurate medical information may affect the safety of your treatment and will release Kensley Aesthetics from any associated liability.

Consultations may be offered free of charge or at a fee, which will be communicated clearly at the time of booking.`,
  },
  {
    title: '4. Bookings & Appointments',
    content: `Appointments can be made via our website, phone or in person. When booking, you will be asked to provide personal and health information necessary to prepare for your treatment.

We require at least 48 hours' notice to cancel or rescheduled an appointment. Cancellations made with less than 48 hours' notice, or failure to attend without notice, may result in a cancellation fee.

A deposit may be required to secure certain bookings. Deposit terms will be confirmed at the time of booking.`,
  },
  {
    title: '5. Pricing & Payment',
    content: `All prices are displayed on our website and in our clinic. Prices are subject to change without notice, though any changes will not affect bookings already confirmed at the quoted price.

Payment is due at the time of treatment unless alternative arrangements have been agreed in advance. We accept major credit and debit cards and selected payment platforms.

Prices include VAT where applicable. Treatment packages are non-transferable and non-refundable once commenced, unless otherwise agreed in writing.`,
  },
  {
    title: '6. Results & Expectations',
    content: `Aesthetic treatments are not an exact science and individual results vary. We will always provide an honest assessment of the likely outcomes, but we cannot guarantee specific results.

Any before and after images shown on our website or social media are representative of real client results and are not a guarantee of the outcome you will achieve. Results depend on individual skin type, anatomy, lifestyle and adherence to aftercare advice.`,
  },
  {
    title: '7. Aftercare & Client Responsibilities',
    content: `Following your treatment, you will be provided with written aftercare instructions. It is your responsibility to follow these instructions carefully.

Failure to follow aftercare guidance may affect your results and may invalidate any complimentary review or correction appointment.

If you experience any unusual side effects or reactions following a treatment, you must contact us immediately. Do not seek correction from another provider without first consulting us, as this may affect our ability to assist you.`,
  },
  {
    title: '8. Complaints & Corrections',
    content: `We are committed to delivering the highest standard of care. If you are unhappy with your experience or result, please contact us within 14 days of your treatment.

We offer a complimentary review appointment for concerns raised within this window. We will always aim to resolve complaints fairly and promptly.

Formal complaints can be submitted in writing to hello@kensleyaesthetics.co.uk. We will acknowledge your complaint within 5 working days and provide a full response within 28 days.`,
  },
  {
    title: '9. Intellectual Property',
    content: `All content on this website — including text, images, videos, graphics and branding — is the property of Kensley Aesthetics and is protected by copyright.

You may not reproduce, copy, distribute or use any content from this website without our prior written permission.`,
  },
  {
    title: '10. Limitation of Liability',
    content: `To the maximum extent permitted by law, Kensley Aesthetics shall not be liable for any indirect, incidental or consequential loss arising from:

• Your use of our website or services
• Reliance on any content or information on this website
• Any treatment outcome that falls outside the scope of what was discussed and agreed

Our total liability to you in connection with any treatment or service shall not exceed the amount paid for that specific treatment.

Nothing in these terms excludes liability for death, personal injury caused by negligence, or any other liability that cannot be excluded under applicable law.`,
  },
  {
    title: '11. Website Use',
    content: `You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of others.

We reserve the right to restrict or remove access to our website at any time without notice. We do not guarantee that the website will be available at all times or that content is error-free.

Links to third-party websites are provided for convenience only. We are not responsible for the content or practices of any external sites.`,
  },
  {
    title: '12. Governing Law',
    content: `These Terms and Conditions are governed by the laws of England and Wales. Any disputes arising from these terms or your use of our services shall be subject to the exclusive jurisdiction of the courts of England and Wales.

Last updated: June 2026`,
  },
];

function TermsConditions() {
  return (
    <>
      <PageHero
        label="Legal"
        title={<>Terms &<br />Conditions</>}
        subtitle="Please read these terms carefully before using our website or booking a treatment."
      />

      <section className="page-section">
        <div className="container legal-layout">

          {/* Sidebar TOC */}
          <aside className="legal-toc">
            <p className="legal-toc__heading">Contents</p>
            <ol className="legal-toc__list">
              {sections.map((s) => (
                <li key={s.title}>
                  <a href={`#${s.title.replace(/\s+/g, '-').toLowerCase()}`} className="legal-toc__link">
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </aside>

          {/* Body */}
          <div className="legal-body">
            <p className="legal-intro">
              These terms govern your relationship with Kensley Aesthetics when you visit our website or receive any of our aesthetic treatments. By using our services, you agree to the following.
            </p>

            {sections.map((s) => (
              <div
                key={s.title}
                id={s.title.replace(/\s+/g, '-').toLowerCase()}
                className="legal-section"
              >
                <h2 className="legal-section__title">{s.title}</h2>
                <div className="legal-section__body">
                  {s.content.split('\n\n').map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}

export default TermsConditions;

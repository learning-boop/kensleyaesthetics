import PageHero from '../components/PageHero';
import './pages.css';
import './legal.css';

const sections = [
  {
    title: '1. Who We Are',
    content: `Kensley Aesthetics ("we", "us", "our") is an aesthetic clinic providing non-surgical cosmetic treatments. Our registered address is available upon request. We are the data controller responsible for your personal information collected through this website and our clinical services.

For any privacy-related enquiries, please contact us at: hello@kensleyaesthetics.co.uk`,
  },
  {
    title: '2. Information We Collect',
    content: `We collect and process the following categories of personal data:

• Identity & Contact Data — your name, email address, phone number and any information you provide when booking an appointment or completing a contact form.

• Health & Medical Data — information about your medical history, skin concerns, medications and treatment records. This is special category data and is handled with the highest level of care.

• Usage Data — information about how you use our website, including IP address, browser type, pages visited and time spent on site (collected via cookies).

• Communications — records of correspondence between you and our team, including appointment confirmations and follow-up messages.`,
  },
  {
    title: '3. How We Use Your Information',
    content: `We use your personal data to:

• Provide and manage your aesthetic treatments and consultations
• Book, confirm and follow up on your appointments
• Maintain accurate and up-to-date clinical records
• Respond to your enquiries and provide customer support
• Send appointment reminders and aftercare information
• Improve our website and services based on usage patterns
• Comply with our legal and regulatory obligations as a healthcare provider

We will never sell your personal data to third parties.`,
  },
  {
    title: '4. Legal Basis for Processing',
    content: `We process your data under the following legal bases:

• Contract — to fulfil our obligations when you book a treatment with us.
• Legitimate Interests — to improve our services and communicate with you about your care.
• Legal Obligation — to maintain clinical records as required by healthcare regulations.
• Explicit Consent — for health and medical data, and for any marketing communications. You may withdraw consent at any time.`,
  },
  {
    title: '5. How We Store and Protect Your Data',
    content: `Your data is stored securely on encrypted systems. We implement appropriate technical and organisational measures to protect your information against unauthorised access, loss or disclosure.

Clinical records are retained for a minimum of 8 years from the date of your last treatment, in accordance with medical record-keeping guidelines. After this period, data is securely deleted.

Website enquiry and contact data is retained for 2 years unless you request earlier deletion.`,
  },
  {
    title: '6. Sharing Your Information',
    content: `We may share your data with:

• Trusted third-party service providers (e.g. booking systems, payment processors, email platforms) who process data on our behalf under strict data processing agreements.
• Regulatory bodies or healthcare authorities where required by law.
• Professional indemnity insurers where a clinical complaint or incident requires disclosure.

We do not share your data with any other third parties without your explicit consent.`,
  },
  {
    title: '7. Cookies',
    content: `Our website uses cookies to enhance your experience and analyse site performance. These include:

• Essential cookies — required for the website to function correctly.
• Analytics cookies — help us understand how visitors use our site (e.g. Google Analytics).

You can manage or disable cookies through your browser settings at any time. Disabling cookies may affect certain features of the website.`,
  },
  {
    title: '8. Your Rights',
    content: `Under UK GDPR, you have the right to:

• Access — request a copy of the personal data we hold about you.
• Rectification — ask us to correct inaccurate or incomplete data.
• Erasure — request deletion of your data, subject to our legal obligations.
• Restriction — ask us to limit how we use your data.
• Portability — receive your data in a structured, machine-readable format.
• Object — object to our processing of your data for legitimate interests.
• Withdraw Consent — where processing is based on consent, you may withdraw it at any time.

To exercise any of these rights, please contact us at hello@kensleyaesthetics.co.uk. We will respond within 30 days.`,
  },
  {
    title: '9. Complaints',
    content: `If you are unhappy with how we handle your personal data, you have the right to lodge a complaint with the Information Commissioner's Office (ICO) at ico.org.uk, or by calling 0303 123 1113.

We would, however, appreciate the opportunity to address your concerns directly before you contact the ICO. Please reach out to us first at hello@kensleyaesthetics.co.uk.`,
  },
  {
    title: '10. Changes to This Policy',
    content: `We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. Any material changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically.

Last updated: June 2026`,
  },
];

function PrivacyPolicy() {
  return (
    <>
      <PageHero
        label="Legal"
        title={<>Privacy<br />Policy</>}
        subtitle="How we collect, use and protect your personal information."
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
              Your privacy matters to us. This policy explains what personal data Kensley Aesthetics collects, why we collect it, and how we safeguard it — in plain language.
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

export default PrivacyPolicy;

import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { Mail, MapPin, Phone, ExternalLink } from 'lucide-react';
import Reveal from './Reveal';
import SectionLabel from './SectionLabel';
import Button from './Button';
import { company } from '@/data/company';
import { enquiryTypes } from '@/data/industry';

type FormState = {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  enquiryType: string;
  message: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

const initial: FormState = {
  fullName: '',
  companyName: '',
  email: '',
  phone: '',
  enquiryType: '',
  message: '',
};

function validate(values: FormState): Errors {
  const errors: Errors = {};
  if (!values.fullName.trim()) errors.fullName = 'Please enter your full name.';
  if (!values.companyName.trim()) errors.companyName = 'Please enter your company name.';
  if (!values.email.trim()) {
    errors.email = 'Please enter your email address.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!values.phone.trim()) errors.phone = 'Please enter your phone number.';
  if (!values.enquiryType) errors.enquiryType = 'Please select an enquiry type.';
  if (!values.message.trim()) errors.message = 'Please enter a message.';
  else if (values.message.trim().length < 10)
    errors.message = 'Please provide a little more detail (at least 10 characters).';
  return errors;
}

export default function Contact() {
  const [values, setValues] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const onChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    setErrors((err) => ({ ...err, [name]: undefined }));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const next = validate(values);
    setErrors(next);
    if (Object.keys(next).length) return;
    setSubmitted(true);
  };

  const fieldClass =
    'w-full border border-sky bg-white px-4 py-3 text-charcoal outline-none transition focus:border-royal';

  return (
    <section id="contact" className="bg-white py-24 lg:py-32">
      <div className="section-pad mx-auto max-w-[1440px]">
        <Reveal>
          <SectionLabel>CONTACT US</SectionLabel>
          <h2 className="display text-[clamp(2.2rem,5vw,4rem)] font-bold leading-[0.95] text-charcoal">
            LET&apos;S START A
            <br />
            <span className="text-royal">CONVERSATION.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="border-t-2 border-energy bg-sky p-8 sm:p-10">
              <h3 className="display text-2xl font-bold tracking-[0.1em] text-deep">
                {company.name}
              </h3>
              <ul className="mt-8 space-y-6">
                <li className="flex gap-4">
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center bg-royal text-white">
                    <Phone size={18} />
                  </span>
                  <div>
                    <p className="display text-xs tracking-[0.2em] text-muted">PHONE</p>
                    <a
                      href={company.phoneHref}
                      className="mt-1 block text-lg font-medium text-charcoal transition hover:text-energy"
                    >
                      {company.phone}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center bg-royal text-white">
                    <Mail size={18} />
                  </span>
                  <div>
                    <p className="display text-xs tracking-[0.2em] text-muted">EMAIL</p>
                    <a
                      href={company.emailHref}
                      className="mt-1 block break-all text-lg font-medium text-charcoal transition hover:text-energy"
                    >
                      {company.email}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center bg-royal text-white">
                    <MapPin size={18} />
                  </span>
                  <div>
                    <p className="display text-xs tracking-[0.2em] text-muted">ADDRESS</p>
                    <p className="mt-1 text-lg font-medium leading-snug text-charcoal">
                      {company.address.full}
                    </p>
                  </div>
                </li>
              </ul>

              <Button
                href={company.mapsUrl}
                external
                variant="primary"
                className="mt-10"
              >
                GOOGLE MAPS DIRECTIONS
                <ExternalLink size={16} />
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            {submitted ? (
              <div
                className="flex h-full flex-col justify-center border border-royal/20 bg-sky p-8 sm:p-10"
                role="status"
              >
                <p className="display text-2xl font-bold text-deep">ENQUIRY PREPARED</p>
                <p className="mt-4 leading-relaxed text-muted">
                  Your details have been validated on this page. This website does not
                  currently send messages to a server. Please contact us directly by
                  phone or email, or copy your message and send it to{' '}
                  <a href={company.emailHref} className="font-semibold text-royal underline">
                    {company.email}
                  </a>
                  .
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button href={company.emailHref} variant="primary">
                    EMAIL US
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => {
                      setSubmitted(false);
                      setValues(initial);
                    }}
                  >
                    RESET FORM
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="space-y-5">
                {(
                  [
                    ['fullName', 'Full Name', 'text'],
                    ['companyName', 'Company Name', 'text'],
                    ['email', 'Email Address', 'email'],
                    ['phone', 'Phone Number', 'tel'],
                  ] as const
                ).map(([name, label, type]) => (
                  <div key={name}>
                    <label htmlFor={name} className="display mb-2 block text-xs tracking-[0.18em] text-deep">
                      {label}
                    </label>
                    <input
                      id={name}
                      name={name}
                      type={type}
                      value={values[name]}
                      onChange={onChange}
                      className={fieldClass}
                      aria-invalid={!!errors[name]}
                      aria-describedby={errors[name] ? `${name}-error` : undefined}
                    />
                    {errors[name] && (
                      <p id={`${name}-error`} className="mt-1.5 text-sm text-energy">
                        {errors[name]}
                      </p>
                    )}
                  </div>
                ))}

                <div>
                  <label
                    htmlFor="enquiryType"
                    className="display mb-2 block text-xs tracking-[0.18em] text-deep"
                  >
                    Enquiry Type
                  </label>
                  <select
                    id="enquiryType"
                    name="enquiryType"
                    value={values.enquiryType}
                    onChange={onChange}
                    className={fieldClass}
                    aria-invalid={!!errors.enquiryType}
                  >
                    <option value="">Select an option</option>
                    {enquiryTypes.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                  {errors.enquiryType && (
                    <p className="mt-1.5 text-sm text-energy">{errors.enquiryType}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="display mb-2 block text-xs tracking-[0.18em] text-deep"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={values.message}
                    onChange={onChange}
                    className={`${fieldClass} resize-y`}
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-sm text-energy">{errors.message}</p>
                  )}
                </div>

                <Button type="submit" variant="red" className="w-full sm:w-auto">
                  SEND ENQUIRY
                </Button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

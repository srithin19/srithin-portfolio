import React, { useEffect, useRef, useState } from "react";
import {
  Check,
  Copy,
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";
import { profile } from "../data/content";
import Portrait from "./Portrait";

function Contact() {
  const [copied, setCopied] = useState(false);
  const timer = useRef<number>();

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <>
      <section className="contact" id="contact" aria-labelledby="contact-title">
        <div className="contact__inner">
          <div className="contact__copy" data-reveal>
            <p className="contact__script" aria-hidden="true">
              Let's talk
            </p>
            <h2 id="contact-title">
              Building something with AI? I'd love to hear about it.
            </h2>
            <p className="contact__lede">
              Open to AI engineering, agent and full-stack roles, and to
              freelance SaaS builds.
            </p>
            <div className="contact__actions">
              <a className="pill pill--solid" href={`mailto:${profile.email}`}>
                <EnvelopeSimple size={18} weight="bold" />
                <span className="contact__email">{profile.email}</span>
                <span className="contact__email-short">Email me</span>
              </a>
              <button
                type="button"
                className="pill pill--outline"
                onClick={copyEmail}
                aria-live="polite"
              >
                {copied ? (
                  <>
                    <Check size={16} weight="bold" /> Copied
                  </>
                ) : (
                  <>
                    <Copy size={16} weight="bold" /> Copy email
                  </>
                )}
              </button>
            </div>
            <ul className="contact__links">
              <li>
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  <LinkedinLogo size={18} /> LinkedIn
                </a>
              </li>
              <li>
                <a href={profile.github} target="_blank" rel="noreferrer">
                  <GithubLogo size={18} /> GitHub
                </a>
              </li>
              <li>{profile.location}</li>
            </ul>
          </div>
          <div className="contact__figure">
            <Portrait alt="" />
            </div>
        </div>
      </section>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p>Built with React, TypeScript and GSAP</p>
      </footer>
    </>
  );
}

export default Contact;

import { Facebook, Instagram, Linkedin, Twitter } from 'react-feather';
import clsx from 'clsx';

import styles from './index.module.scss'
import NavLink from '../NavLink/index'

export default function Footer () {
  return (
    <footer className={clsx('py-5', styles.footer)}>
      <div className="container">
        <div className="row gy-5">
          <div className="col-lg-3">
            <h5 className="mb-3">Join our Community</h5>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                alert('TODO: POST email to API');
              }}
            >
              <input
                className="form-control"
                placeholder="E-mail address"
                required={true}
                type="email"
              />
            </form>
          </div>
          <div className="col-lg-4 offset-lg-1">
            <div className="row">
              <div className="col-lg-12 col-6 mb-4">
                <h5>
                  <a href="/our-programs">Programs</a>
                </h5>
                <ul className={clsx('list-unstyled', styles.footerLinksList)}>
                  <li>
                    <a href="/bootcamp-6">Bootcamp</a>
                  </li>
                  <li>
                    <a href="/mentorship-2">Mentorship</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-12 col-6 mb-4">
                <h5>
                  <a href="/contribute">Contribute</a>
                </h5>
                <ul className={clsx('list-unstyled', styles.footerLinksList)}>
                  <li>
                    <a href="/contribute">Volunteer</a>
                  </li>
                  <li>
                    <a href="#">Donate</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-12 col-6">
                <h5>
                  <a href="/about">About</a>
                </h5>
                <ul className={clsx('list-unstyled', styles.footerLinksList)}>
                  <li>
                    <NavLink href="/conduct/">
                      <a className="nav-link">Community Code of Conduct</a>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="col-lg-12 col-6 mb-4">
              <h5 className="mb-3">Contact Us</h5>
              <p>
                For general enquiries, please email:
              <br />
                <a href="mailto:hello@techladies.co">hello@techladies.co</a>
              </p>
              <div className="d-flex">
                <a
                  aria-label="Link to Facebook"
                  href="https://www.facebook.com/TechLadies"
                >
                  <Facebook />
                </a>
                <a
                  aria-label="Link to Linkedin"
                  href="https://www.linkedin.com/company/techladies"
                >
                  <Linkedin />
                </a>
                <a
                  aria-label="Link to Twitter"
                  href="https://www.twitter.com/techladiescode"
                >
                  <Twitter />
                </a>
                <a
                  aria-label="Link to Instagram"
                  href="https://www.instagram.com/techladiescode/"
                >
                  <Instagram />
                </a>
              </div>
            </div>
            <div className="col-lg-12 col-6 mb-4">
              <h5 className="mb-3">Powered by</h5>
              <div className="d-flex">
                <p>
                  <a aria-label="Link to Vercel" href="https://vercel.com/?utm_source=techladies&utm_campaign=oss" target="_blank">
                    <img src="/img/vercel.svg" alt="Vercel Logo" width="120" />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

import React from 'react';

// reactstrap components
import { Container } from 'reactstrap';

export default function Footer() {
  return (
    <footer className="footer pt-5 text-center">
      <Container>
        <div className="text-center text-white">
          © {new Date().getFullYear()} made with <i className="fa fa-heart" />{' '}
          by{' '}
          <strong>
            <a
              href="htts://www.fam-front.com"
              className="text-white"
              target="_blank"
              rel="noreferrer"
            >
              FAM
            </a>
          </strong>{' '}
          for fun.
        </div>
      </Container>
    </footer>
  );
}

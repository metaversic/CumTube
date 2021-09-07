import React from "react";

const Footer = () => {
  let year = new Date();
  return (
    <footer className="sticky-footer ml-0">
      <div className="container">
        <div className="row no-gutters">
          <div className="col-12">
            <p className="mt-1 mb-0 text-center">
              &copy; Copyright {year.getFullYear()}{" "}
              <strong className="text-dark">Vidoe</strong> . All Rights Reserved
              <small className="mt-0 mb-0">
                Made with <i className="fas fa-heart text-danger"></i> by
                <a
                  className="text-primary"
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/Fuckrrr247"
                >
                  {" "}
                  Fuckrrr247
                </a>
              </small>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

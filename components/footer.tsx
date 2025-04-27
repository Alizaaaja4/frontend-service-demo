import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <footer className="w-full bg-dark-red">
      <div className="pl-6 pr-6 pt-7 pb-9 grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="text-[14px] font-white text-white">
          <p>
            Salah satu unit yang berada di bawah Wakil Rektor I Bidang Akademik.
            Telkom University Open Library memiliki visi "Pada Tahun 2038
            Menjadi leader dari pusat ilmu dan pengetahuan berbasis teknologi
            informasi dalam mendukung Universitas Entrepreneur Global"
          </p>
          <div className="mt-4">
            <div className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faGlobe} className="w-5 text-white" />
              <a
                href="https://openlibrary.telkomuniversity.ac.id"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                https://openlibrary.telkomuniversity.ac.id
              </a>
            </div>
            <div className="flex mt-3 items-center space-x-2">
              <FontAwesomeIcon icon={faLinkedin} className="w-5 text-white" />
              <a
                href="https://www.linkedin.com/school/telkom-university"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                https://www.linkedin.com/school/telkom-university
              </a>
            </div>
            <div className="flex mt-3 items-center space-x-2">
              <FontAwesomeIcon icon={faInstagram} className="w-5 text-white" />
              <a
                href="https://www.instagram.com/telkomuniversity"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                https://www.instagram.com/telkomuniversity
              </a>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-md">
          <div className="grid grid-cols-5 gap-x-2 gap-y-4 p-3 justify-items-center align-items-center">
            <img
              src="/assets/logo_sponsor/logo_ieee.svg"
              alt="Logo IEEE"
              className="h-7"
            />
            <img
              src="/assets/logo_sponsor/logo_springer.svg"
              alt="Logo Springer"
              className="h-7"
            />
            <img
              src="/assets/logo_sponsor/logo_sciencedirect.svg"
              alt="Logo ScienceDirect"
              className="h-7"
            />
            <img
              src="/assets/logo_sponsor/logo_scopus.svg"
              alt="Logo Scopus"
              className="h-7"
            />
            <img
              src="/assets/logo_sponsor/logo_ithenticate.svg"
              alt="Logo iThenticate"
              className="h-7"
            />
            <img
              src="/assets/logo_sponsor/logo_statiska.svg"
              alt="Logo Statiska"
              className="h-7"
            />
            <img
              src="/assets/logo_sponsor/logo_sage.svg"
              alt="Logo SAGE"
              className="h-7"
            />
            <img
              src="/assets/logo_sponsor/logo_taylor&francis.svg"
              alt="Logo Taylor & Francis"
              className="h-7"
            />
            <img
              src="/assets/logo_sponsor/logo_word-scientific.svg"
              alt="Logo World Scientific"
              className="h-7"
            />
            <img
              src="/assets/logo_sponsor/logo_turnitin.svg"
              alt="Logo Turnitin"
              className="h-7"
            />
            <img
              src="/assets/logo_sponsor/logo_emerald-publishing.svg"
              alt="Logo Emerald Publishing"
              className="h-7"
            />
            <img
              src="/assets/logo_sponsor/logo_inderscience.svg"
              alt="Logo Inderscience"
              className="h-7"
            />
            <img
              src="/assets/logo_sponsor/logo_bloomsbury.svg"
              alt="Logo Bloomsbury"
              className="h-7"
            />
            <img
              src="/assets/logo_sponsor/logo_scientific-american.svg"
              alt="Logo Scientific American"
              className="h-7"
            />
            <img
              src="/assets/logo_sponsor/logo_acm.svg"
              alt="Logo ACM"
              className="h-7"
            />
          </div>
          <div className="grid grid-cols-6 gap-x-2 gap-y-4 p-3 justify-items-center align-items-center">
            <img
              src="/assets/logo_sponsor/logo_iet.svg"
              alt="Logo IET"
              className="h-7"
            />
            <img
              src="/assets/logo_sponsor/logo_bep.svg"
              alt="Logo BEP"
              className="h-7"
            />
            <img
              src="/assets/logo_sponsor/logo_myloft.svg"
              alt="Logo MyLoft"
              className="h-7"
            />
            <img
              src="/assets/logo_sponsor/logo_one-search.svg"
              alt="Logo OneSearch"
              className="h-7"
            />
            <img
              src="/assets/logo_sponsor/logo_infralib.svg"
              alt="Logo Infralib"
              className="h-7"
            />
            <img
              src="/assets/logo_sponsor/logo_perpusnas.svg"
              alt="Logo Perpusnas"
              className="h-7"
            />
          </div>
        </div>
      </div>
      <h6 className="text-white text-center text-sm">
        Copyright © 2024 Open Library. All rights reserved
      </h6>
    </footer>
  );
};

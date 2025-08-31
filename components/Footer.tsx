import { GENERAL_INFO } from '@/lib/data';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = async () => {
    return (
        <footer className="text-center pb-5" id="contact">
            <div className="container">
                <p className="text-lg">Have a project in mind?</p>
                <a href={`mailto:${GENERAL_INFO.email}`} className="text-3xl sm:text-4xl font-anton inline-block mt-5 mb-4 hover:underline" >
                    {GENERAL_INFO.email}
                </a>
            </div>
            <div className="flex justify-center gap-6 mb-4 text-white">
                <Link
                    href="https://www.facebook.com/tahmid.tuhin.3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors duration-300"
                >
                    <FaFacebookF size={25} />
                </Link>
                <Link
                    href="https://twitter.com/hosenRabby"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors duration-300"
                >
                    <FaTwitter size={25} />
                </Link>
                <Link
                    href="https://www.linkedin.com/in/hosen-rabby-dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors duration-300"
                >
                    <FaLinkedinIn size={25} />
                </Link>
                <Link
                    href="https://github.com/hosenrabby"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors duration-300"
                >
                    <FaGithub size={25} />
                </Link>
            </div>

            <p className="text-sm text-gray-500">
                © {new Date().getFullYear()} Portfolio of Hosen Rabby. All rights reserved.
            </p>

        </footer>
    );
};

export default Footer;

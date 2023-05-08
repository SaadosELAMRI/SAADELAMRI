import Link from 'next/link';
import { FaInstagram } from 'react-icons/fa';

const InstagramIcon = () => (
  <Link href='https://www.instagram.com/saadoselamri'>
    <a target='_blank' rel='noopener noreferrer'>
      <FaInstagram className='text-pink-700 text-12xl hover:text-pink-900 cursor-pointer' />
    </a>
  </Link>
);

export default InstagramIcon;

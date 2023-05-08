import Link from 'next/link';
import { FaFacebook } from 'react-icons/fa';

const FacebookIcon = () => (
  <Link href='https://www.facebook.com/saad.elamri.7549/'>
    <a target='_blank' rel='noopener noreferrer'>
      <FaFacebook className='text-blue-700 text-12xl hover:text-blue-900 cursor-pointer' />
    </a>
  </Link>
);

export default FacebookIcon;

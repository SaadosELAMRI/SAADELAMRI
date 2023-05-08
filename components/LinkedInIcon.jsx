import Link from 'next/link';
import { FaLinkedin } from 'react-icons/fa';

const LinkedInIcon = () => (
  <Link href='https://www.linkedin.com/in/saad-el-amri-a8bbb6246/'>
    <a target='_blank' rel='noopener noreferrer'>
      <FaLinkedin className='text-blue-700 text-12xl hover:text-blue-900 cursor-pointer' />
    </a>
  </Link>
);

export default LinkedInIcon;

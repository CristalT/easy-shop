import AOS from 'aos';
import 'aos/dist/aos.css';

export default async ({ Vue }) => {
  await AOS.init({
      offset: 300,
      delay: 200,
      duration: 500
  })
};

import React from "react";
import { SocialIcon } from 'react-social-icons';

function getMonth(month) {
    let m;
    switch (month) {
        case 0:
            m = 'Jan';
            break;
        case 1:
            m = 'Feb';
            break;
        case 2:
            m = 'March';
            break;
        case 3:
            m = 'April';
            break;
        case 4:
            m = 'May';
            break;
        case 5:
            m = 'June';
            break;
        case 6:
            m = 'July';
            break;
        case 7:
            m = 'August';
            break;
        case 8:
            m = 'September';
            break;
        case 9:
            m = 'October';
            break;
        case 10:
            m = 'November';
            break;
        case 11:
            m = 'December';
            break;
        default:
            m = '';
            break;
    }
    return m;
}

export default function Footer() {
    return (
    <section id="footer" className='bg-gray-800'>
      <div className="container mx-auto flex px-10 py-16 md:flex-row flex-col items-center justify-center">
        <div className="lg:flex-grow flex flex-col items-center mb-16 md:mb-0 text-center xl:w-1/2 lg:w-1/2 md:w-3/4 sm:w-full">
            <div className="flex flex-wrap flex-row justify-between xl:w-1/2 lg:w-1/2 md:w-3/4 sm:w-full">
                <SocialIcon url="https://www.linkedin.com/in/matthewrapp-/" target='_blank' bgColor='transparent' fgColor='#fff' />
                <SocialIcon url="https://github.com/matthewrapp" target='_blank' bgColor='transparent' fgColor='#fff'  />
                <SocialIcon url="https://www.instagram.com/matthewrapp" target='_blank' bgColor='transparent' fgColor='#fff'  />
                <SocialIcon url="https://www.facebook.com/matthewrapp05" target='_blank' bgColor='transparent' fgColor='#fff'  />
                <SocialIcon url="https://www.behance.net/matthewrapp" target='_blank' bgColor='transparent' fgColor='#fff'  />
                <SocialIcon url="https://www.soundcloud.com/luckycoinmusic" target='_blank' bgColor='transparent' fgColor='#fff'  />
                <SocialIcon url="https://open.spotify.com/artist/6y5aoRJCoGqWkIAcg6dsQc?si=93HIAveXSzuNXDVbL1aTUg&dl_branch=1" target='_blank' bgColor='transparent' fgColor='#fff'/>
            </div>
            <div className='mt-6'>
                <h3 className="title-font text-gray-200 mb-3 pl-2">&copy; {getMonth(new Date().getMonth()) + ' ' + new Date().getFullYear()} | Matthew Rapp Portfolio</h3>
            </div>        
        </div>
      </div>
    </section>
  );
}
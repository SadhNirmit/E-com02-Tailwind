import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

function Footer() {
    const socialStyle = "m-3 rounded-full cursor-pointer p-2 text-white "
  return (
    <div className="flex items-center justify-around p-2">
        <div className="flex-1 flex flex-col flex-wrap p-2">
          {/* store information  */}
          <h1 className="text-[25px]">
          Shopsy
          </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis minima consequuntur pariatur laudantium! Ratione vel perspiciatis numquam ullam? Veniam doloribus quis in odio fugit, explicabo soluta illum possimus quibusdam ex?</p>
          <div className="flex items-center justify-center mt-3 self-start">
            <div className={socialStyle + "bg-blue-700"}>
             <FacebookIcon />
            </div>
            <div className={socialStyle + "bg-[#8a3ab9]"}>
              <InstagramIcon />
            </div>
            <div className={socialStyle + "bg-sky-400"}>
                <TwitterIcon />
            </div>
            <div className={socialStyle + "bg-red-600"}>
                <PinterestIcon />
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col p-2">
            {/* contact information  */}
           <div className="flex m-3">
            <LocationOnOutlinedIcon />
            <p className="pl-3">Nodia Sec-63 UP</p>
           </div>
           <div className="flex m-3">
            <LocalPhoneOutlinedIcon />
            <p className="pl-3">+91 9988776655</p>
           </div>
           <div className="flex m-3">
            <EmailOutlinedIcon />
            <p className="pl-3">Shopsy@pamaweb.com</p>
           </div>
        </div>
    </div>
  )
}

export default Footer
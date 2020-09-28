import React from 'react';
import { MDBBtn } from "mdbreact";

const SocialIcons = ({socials}) => {
  return (
    <>
      { socials.social_linkedin && 
        <MDBBtn size="sm" className="m-2" href={socials.social_linkedin} target="_blank" color="indigo">Linkedin</MDBBtn> 
      }
      { socials.social_github && 
        <MDBBtn size="sm" className="m-2" href={socials.social_github} target="_blank" color="elegant">Github</MDBBtn> 
      }
      { socials.social_mail && 
        <MDBBtn size="sm" className="m-2" href={socials.social_mail} target="_blank" color="pink">Mail</MDBBtn> 
      }
    </>
  );
};

export default SocialIcons;
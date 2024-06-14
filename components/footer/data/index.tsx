import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SocialMedias } from "../types/socialMedia";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export const socialMedia: SocialMedias = [
  {
    url: "https://github.com/Mohcen2311",
    icon: <FontAwesomeIcon className="text-[20px]" icon={faGithub} />,
    className:
      "bg-github-main max-w-fit text-white text-[20px] py-[20px] px-[10px] hover:bg-github-hovered",
  },
  {
    url: "https://x.com/tahermohcen",
    icon: <FontAwesomeIcon className="text-[20px]" icon={faTwitter} />,
    className:
      "bg-twitter-main max-w-fit text-white text-[20px] py-[20px] px-[10px] hover:bg-twitter-hovered",
  },
  {
    url: "https://www.linkedin.com/in/mohcen-taher-chouireb-76aa32224/",
    icon: <FontAwesomeIcon className="text-[20px]" icon={faLinkedin} />,
    className:
      "bg-linkedin-main max-w-fit text-white text-[20px] py-[20px] px-[10px] hover:bg-linkedin-hovered",
  },
];

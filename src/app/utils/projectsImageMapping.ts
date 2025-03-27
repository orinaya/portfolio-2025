import portfolioCover from "../assets/images/projects/portfolio/portfolio.jpg";
import equinoxCover from "../assets/images/projects/equinox/equinox.jpg";
import apiCover from "../assets/images/projects/api/api.jpg";
import hackmeCover from "../assets/images/projects/hackme/hackme.jpg";
import mapeachCover from "../assets/images/projects/mapeach/mapeach.jpg";
import pauseConnectCover from "../assets/images/projects/pauseconnect/pause-connect.jpg";
import plantopiaCover from "../assets/images/projects/plantopia/plantopia.jpg";
import ghibliCover from "../assets/images/projects/ghibli/ghibli.jpg";

import portfolioBanner from "../assets/images/projects/portfolio/portfolio-banner.jpg";
import equinoxBanner from "../assets/images/projects/equinox/equinox-banner.jpg";
import apiBanner from "../assets/images/projects/api/api-banner.jpg";
import hackmeBanner from "../assets/images/projects/hackme/hackme-banner.jpg";
import mapeachBanner from "../assets/images/projects/mapeach/mapeach-banner.jpg";
import pauseConnectBanner from "../assets/images/projects/pauseconnect/pause-connect-banner.jpg";
import plantopiaBanner from "../assets/images/projects/plantopia/plantopia-banner.jpg";
import ghibliBanner from "../assets/images/projects/ghibli/ghibli-banner.jpg";
import defaultImg from "../assets/images/default.png";

import apiFirstImage from "../assets/images/projects/api/api-1.jpg";

const projectsImageMapping: Record<string, string> = {
  // COVER
  portfolioCover: portfolioCover.src,
  apiCover: apiCover.src,
  hackmeCover: hackmeCover.src,
  equinoxCover: equinoxCover.src,
  mapeachCover: mapeachCover.src,
  pauseConnectCover: pauseConnectCover.src,
  plantopiaCover: plantopiaCover.src,
  ghibliCover: ghibliCover.src,
  default: defaultImg.src,

  // BANNER
  portfolioBanner: portfolioBanner.src,
  apiBanner: apiBanner.src,
  hackmeBanner: hackmeBanner.src,
  equinoxBanner: equinoxBanner.src,
  mapeachBanner: mapeachBanner.src,
  pauseConnectBanner: pauseConnectBanner.src,
  plantopiaBanner: plantopiaBanner.src,
  ghibliBanner: ghibliBanner.src,

  apiFirstImage: apiFirstImage.src,
};

export default projectsImageMapping;

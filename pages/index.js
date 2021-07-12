import styled from "styled-components";
import Card from "../components/Card";
const Cards = styled.div`
  /* margin: 0 auto; */
`;

const ArrayCards = [
  {
    title: "Unlimited movies, TV shows, and more.",
    subtitle: "Watch anywhere. Cancel anytime.",
    image:
      "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png",
    video:
      "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v",
    top: "47%",
    maxWidth: "75%",
    bgImage: "https://cdn.hipwallpaper.com/i/98/21/dUyCkp.jpg",
    input:
      "Ready to watch? Enter your email to create or restart your membership.",
  },
  {
    title: "Enjoy on your TV.",
    subtitle:
      "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
    image:
      "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png",
    video:
      "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v",
    top: "47%",
    maxWidth: "75%",
  },
  {
    title: "Download your shows to watch offline.",
    subtitle: "Save your favorites easily and always have something to watch.",
    image:
      "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg",
    video:
      "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v",
    top: "47%",
    maxWidth: "75%",
    gif: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif",
  },
  {
    title: "Watch everywhere.",
    subtitle:
      "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.",
    image:
      "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png",
    video:
      "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v",
    top: "34%",
    maxWidth: "65%",
  },
  {
    title: "Create profiles for kids.",
    subtitle:
      "Send kids on adventures with their favorite characters in a space made just for them—free with your membership.",
    image:
      "https://occ-0-2976-3934.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABdFTpLmANuJpYneLq8L5m7CunMCi8e8Nl4y7xaPVWzG3IeoDoq17egTQAthApKg_4sdRWdwuR8KadWu1frjL3JQImpwq.png?r=fcd",
    video: "",
    top: "34%",
    maxWidth: "65%",
  },
];

export default function Home() {
  return (
    <div>
      <div>Header</div>
      <Cards>
        {ArrayCards.map((card) => (
          <Card key={card.title} {...card} />
        ))}
      </Cards>
    </div>
  );
}

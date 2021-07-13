import React from "react";
import styled from "styled-components";
// import Card from "../Card";
import Card from "./Card";

const CardsContainer = styled.div`
  /* margin: 0 auto; */
`;

const ArrayCards = [
  {
    title: "Unlimited movies, TV shows, and more.",
    subtitle: "Watch anywhere. Cancel anytime.",
    image:
      "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png",
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
  },
  {
    title: "Frequently Asked Questions",
    questions: [
      {
        question: "What is Netflix?",
        answer:
          "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!",
      },
      {
        question: "How much does Netflix cost?",
        answer:
          "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from COP16,900 to COP38,900 a month. No extra costs, no contracts.",
      },
      {
        question: "Where can I watch?",
        answer:
          "Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
      },
      {
        question: "How do I cancel?",
        answer:
          "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
      },
      {
        question: "What can I watch on Netflix?",
        answer:
          "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
      },
      {
        question: "Is Netflix good for kids?",
        answer:
          "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
      },
    ],
  },
  {
    links: [
      {
        name: "FAQ",
        url: "/",
      },
      {
        name: "Help Center",
        url: "/",
      },
      {
        name: "Account",
        url: "/",
      },
      {
        name: "Media Center",
        url: "/",
      },
      {
        name: "Investor Relations",
        url: "/",
      },
      {
        name: "Jobs",
        url: "/",
      },
      {
        name: "Redeem Gift Cards",
        url: "/",
      },
      {
        name: "Buy Gift Cards",
        url: "/",
      },
      {
        name: "Ways to Watch",
        url: "/",
      },
      {
        name: "Terms of Use",
        url: "/",
      },
      {
        name: "Privacy",
        url: "/",
      },
      {
        name: "Cookie Preferences",
        url: "/",
      },
      {
        name: "Corporate Information",
        url: "/",
      },
      {
        name: "Contact Use",
        url: "/",
      },
      {
        name: "Speed Test",
        url: "/",
      },
      {
        name: "Legal Notices",
        url: "/",
      },
      {
        name: "Only on Netflix",
        url: "/",
      },
    ],
  },
];

export default function Cards() {
  return (
    <CardsContainer>
      {ArrayCards.map((card, i) => (
        <Card key={i} {...card} />
      ))}
    </CardsContainer>
  );
}

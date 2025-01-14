import dynamic from "next/dynamic";

const About = dynamic(() => import("./About"))
const Header = dynamic(() => import("./Header"))
const Services = dynamic(() => import("./Services"))
const Team = dynamic(() => import("./Team"))
const Reviews = dynamic(() => import("./Reviews"))
const HeroCarousel = dynamic(() => import("./HeroCarousel"))
const Footer = dynamic(() => import("./Footer"))
const Loading = dynamic(() => import("./Loading"))
const Pricing = dynamic(() => import("./Pricing"))
const ScrollToTop = dynamic(() => import("./ScrollToTop"))
const BookingEntrance = dynamic(() => import("./BookingEntrance"))
const Layout = dynamic(() => import("./Layout"))
const Scheduler = dynamic(() => import("./Scheduler"))

export {
  About,
  BookingEntrance,
  Footer,
  Header,
  HeroCarousel,
  Layout,
  Loading,
  Pricing,
  Reviews,
  Scheduler,
  ScrollToTop,
  Services, Team
}
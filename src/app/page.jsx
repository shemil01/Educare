import { Banner } from "@/components/Banner";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import LandingPage from "@/components/LandingPage";
import LatestBlogs from "@/components/LatestBlogs";
import LearnMoreAbout from "@/components/LearnMoreAbout";
import MasterInIlts from "@/components/MasterInIlts";
import Navbar from "@/components/navbar/Navbar";
import OurWay from "@/components/OurWay";
import StorySection from "@/components/StorySection";
import SubjectWeTeach from "@/components/SubjectWeTeach";
import Testimonials from "@/components/Testimonials";
import WeOffer from "@/components/WeOffer";
import WorldOpportunities from "@/components/WorldOpportunities";

export default function Home() {
  return (
   <div className="custom-font">
    <Navbar />
    <LandingPage/>
    <Banner />
    <StorySection />
    <OurWay/>
    <WeOffer />
    <SubjectWeTeach/>
    <WorldOpportunities/>
    <LearnMoreAbout/>
    <MasterInIlts />
    <Testimonials />
    <FaqSection />
    <LatestBlogs/>
    <Footer />
   </div>
  );
}

"use client";
import BodyContent from "@/components/components-body/BodyContent";
import Navbar from "@/components/components-navbar/Navbar";
import SocialMediaBar from "@/components/components-navbar/SocmedBar";

export default function Home() {
  return (
      <div className="bg-[#182449]">
        <Navbar />
        <BodyContent />
        <SocialMediaBar />
      </div>
  );
}

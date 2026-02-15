import Header from "./components/Header";
import Body from "./components/Body";
import HomePage from "./components/HomePage";
import Desc from "./components/Desc";
import Footer from "./components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Vlog Website | Travel & Daily Vlogs",
  description: "Watch travel, lifestyle and daily vlogs on my website",
};

export default function Homepage() {
  return (
    <>
      <Header />
      <Body />
      <HomePage />
      <Desc />
      <Footer />
    </>
  );
}

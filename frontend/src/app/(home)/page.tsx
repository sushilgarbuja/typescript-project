import CardNote from "./components/CardNote";
import HeroSection from "./components/HeroSection";

export default async function Home() {
  const response = await fetch(`${process.env.BACKEND_URL}notes`)
  console.log(response)
  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }
  const responseData = await response.json()
  console.log(responseData)
  return (
    <>
      <HeroSection />
      <CardNote notes={notes} />
    </>
  );
}

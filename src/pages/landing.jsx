/* eslint-disable react/no-unescaped-entities */
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const LandingPage = () => {
  const [longUrl, setLongUrl] = useState("");
  const navigate = useNavigate();

  const handleShorten = (e) => {
    e.preventDefault();
    if (longUrl) navigate(`/auth?createNew=${longUrl}`);
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="my-10 sm:my-16 text-3xl sm:text-6xl lg:text-4xl text-white text-center font-extrabold">
       Say goodbye to long links  <br/> meet the only URL shortener you&rsquo;’ll ever need.👇  
           </h2>
      <form
        onSubmit={handleShorten}
        className="sm:h-14 flex flex-col sm:flex-row w-full md:w-2/4 gap-2"
      >
        <Input
          type="url"
          placeholder="Enter the full URL to shorten"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          className="h-full flex-1 py-4 px-4"
        />
        <Button type="submit" className="h-full" variant="destructive">
          Shorten Link!
        </Button>
      </form>
      <img
        src="/1banner.jpg" // replace with 2 in small screens
        className="my-11 md:px-11 w-[90%] md:w-[900px] mx-auto"
      />
      <Accordion type="multiple" collapsible className="w-full md:px-11">
        <AccordionItem value="item-1">
          <AccordionTrigger>
          Learn how Trimrr turns long links into short ones!
          </AccordionTrigger>
          <AccordionContent>
            When you paste  a long URL, Trimrr instantly creates a compact,
            shareable link. Whenever someone click on it they'll be 
            redirected to your original URL.
      
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
          Is an account required to shorten URLs?
          </AccordionTrigger>
          <AccordionContent>
          Yes, creating an account lets you manage your URLs, track detailed analytics, 
          and customize your shortened links to match your brand or preference.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
          What analytics can I access for my shortened URLs?
          </AccordionTrigger>
          <AccordionContent>
          You can track the number of clicks, view geolocation data of your visitors,
           and see which devices (mobile or desktop) were used to access each shortened URL.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default LandingPage;

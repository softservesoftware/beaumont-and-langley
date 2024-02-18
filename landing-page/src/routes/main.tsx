import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ArrowPathIcon,
  FingerPrintIcon,
  Cog6ToothIcon,
  ServerIcon,
  InboxIcon,
  UsersIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import Advantages from "../components/advantages";
import Customers from "../components/customers";
import FeatureSection from "../components/featureSection";
import Integrations from "../components/integrations";
import Pricing from "../components/pricing";
import ProductOverview from "../components/productOverview";
import Stats from "../components/stats";
import Testimonial from "../components/testimonial";
import UseCases from "../components/useCases";
// import hero from "../img/hero.png";
import HeroHeader from "../components/heroHeader";
export default function Main() {
  return (
    <>
      <HeroHeader/>
      <Customers
        customers={[
          {
            name: "Transistor",
            logo: "https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg",
          },
          {
            name: "Reform",
            logo: "https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg",
          },
          {
            name: "Tuple",
            logo: "https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg",
          },
          {
            name: "SavvyCal",
            logo: "https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg",
          },
          {
            name: "Statamic",
            logo: "https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg",
          },
        ]}
      />
      <ProductOverview
        mainHeader={"Sweeping statement about your product."}
        subHeader={"Some supporting tagline"}
        textHeader={
          "here is some more text related to exactly what it does that makes your product rock. If you can put a animated gif/ video here, that would crush it."
        }
        mainImage={
          "https://tailwindui.com/img/component-images/project-app-screenshot.png"
        }
        features={[
          {
            name: "Push to deploy.",
            description:
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.",
            icon: CloudArrowUpIcon,
          },
          {
            name: "SSL certificates.",
            description:
              "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
            icon: LockClosedIcon,
          },
          {
            name: "Simple queues.",
            description:
              "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.",
            icon: ArrowPathIcon,
          },
          {
            name: "Advanced security.",
            description:
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.",
            icon: FingerPrintIcon,
          },
          {
            name: "Powerful API.",
            description:
              "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
            icon: Cog6ToothIcon,
          },
          {
            name: "Database backups.",
            description:
              "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. ",
            icon: ServerIcon,
          },
        ]}
      />
      <div id="Features" />
      <FeatureSection
        mainHeader="Important feature here"
        subHeader="its a big deal"
        textHeader="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione."
        features={[
          {
            name: "Push to deploy.",
            description:
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
            icon: CloudArrowUpIcon,
          },
          {
            name: "SSL certificates.",
            description:
              "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
            icon: LockClosedIcon,
          },
          {
            name: "Database backups.",
            description:
              "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
            icon: ServerIcon,
          },
        ]}
        imageSide="right" // Or "left"
        img="https://tailwindui.com/img/component-images/project-app-screenshot.png"
      />
      <FeatureSection
        mainHeader="Next Super Important Feature"
        subHeader="you need it"
        textHeader="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione."
        features={[
          {
            name: "Push to deploy.",
            description:
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
            icon: CloudArrowUpIcon,
          },
          {
            name: "SSL certificates.",
            description:
              "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
            icon: LockClosedIcon,
          },
          {
            name: "Database backups.",
            description:
              "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
            icon: ServerIcon,
          },
        ]}
        imageSide="left"
        img="https://tailwindui.com/img/component-images/project-app-screenshot.png"
      />
      <Advantages
        mainHeader={"Advantages of our product"}
        textHeader={
          "lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione. Sit nobis consequatur dolores incidunt."
        }
        features={[
          {
            name: "Unlimited inboxes",
            description:
              "Non quo aperiam repellendus quas est est. Eos aut dolore aut ut sit nesciunt. Ex tempora quia. Sit nobis consequatur dolores incidunt.",
            href: "#",
            icon: InboxIcon,
          },
          {
            name: "Manage team members",
            description:
              "Vero eum voluptatem aliquid nostrum voluptatem. Vitae esse natus. Earum nihil deserunt eos quasi cupiditate. A inventore et molestiae natus.",
            href: "#",
            icon: UsersIcon,
          },
          {
            name: "Spam report",
            description:
              "Et quod quaerat dolorem quaerat architecto aliquam accusantium. Ex adipisci et doloremque autem quia quam. Quis eos molestiae at iure impedit.",
            href: "#",
            icon: TrashIcon,
          },
        ]}
      />
      <Integrations
        mainHeading={"Easy Integrations"}
        subHeading={
          "We can integrate with any of our favorite CRM tools to make sure of a seamless fit into your current workflows."
        }
        customers={[
          {
            name: "Tuple",
            logo: "https://tailwindui.com/img/logos/tuple-logo-gray-900.svg",
          },
          {
            name: "Reform",
            logo: "https://tailwindui.com/img/logos/reform-logo-gray-900.svg",
          },
          {
            name: "SavvyCal",
            logo: "https://tailwindui.com/img/logos/savvycal-logo-gray-900.svg",
          },
          {
            name: "Laravel",
            logo: "https://tailwindui.com/img/logos/laravel-logo-gray-900.svg",
          },
          {
            name: "Transistor",
            logo: "https://tailwindui.com/img/logos/transistor-logo-gray-900.svg",
          },
        ]}
      />
      <UseCases
        testimonials={[
          "I have been using this product for a few months now and I am very happy with it. It has helped me to improve my productivity and I am able to get more work done in less time.",
          "I have been using this product for a few months now and I am very happy with it. It has helped me to improve my productivity and I am able to get more work done in less time.",
          "I have been using this product for a few months now and I am very happy with it. It has helped me to improve my productivity and I am able to get more work done in less time.",
          "I have been using this product for a few months now and I am very happy with it. It has helped me to improve my productivity and I am able to get more work done in less time.",
          "I have been using this product for a few months now and I am very happy with it. It has helped me to improve my productivity and I am able to get more work done in less time.",
          "I have been using this product for a few months now and I am very happy with it. It has helped me to improve my productivity and I am able to get more work done in less time.",
        ]}
        mainHeading={"How Our Clients Use Our Product"}
        subHeading={"it's cool stuff"}
      />
      <Stats
        stats={[
          { id: 1, name: "Creators on the platform", value: "8,000+" },
          { id: 2, name: "Flat platform fee", value: "3%" },
          { id: 3, name: "Uptime guarantee", value: "99.9%" },
          { id: 4, name: "Paid out to creators", value: "$70M" },
        ]}
        mainHeader={"Impressive stats about our product"}
        subHeader={"seriously, it's impressive"}
      />
      <Testimonial
        testimonal={
          "This is hands down the best product I have ever used and I have used a lot of products. I am very happy with it and I will continue to use it for a long time. I highly recommend it to anyone who is looking for a great product."
        }
        name={"Judy Black"}
        title={"CEO Best Company INC"}
        image={
          "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80"
        }
      />
      <Pricing
        mainHeader={"Pricing Information"}
        textHeader={"We are affordable, probably too much so."}
        features={{
          mainHeader: "Included Features",
          textHeader: "All of these things included in the price. Crazy right?",
          subHeader: "What we offer",
          includedFeatures: [
            "Private forum access",
            "Member resources",
            "Entry to annual conference",
            "Official member t-shirt",
          ],
        }}
        pricing={{
          mainHeader: "Monthly Subscription",
          price: "150",
          buttonText: "Start 7 Day Free Trial",
          buttonHref: "",
          subText:
            "You won't be charged until after your free 7 day trial ends.",
        }}
      />
    </>
  );
}

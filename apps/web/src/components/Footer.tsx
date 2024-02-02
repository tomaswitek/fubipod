import Image from "@/components/Image";
import {BlockContent} from "@/components/Block";
import {ColumnTitle} from "@/components/ColumnTitle";
import {Button} from "@/components/Button";
import {Link} from "@/components/Link";

const footerIconsNavigation = [
  {
    image: "/app.svg",
    href: "/app",
  },
  {
    image: "/shop.svg",
    href: "/shop",
  },
  {
    image: "/pod.svg",
    href: "/pod",
  },
  {
    image: "/house.svg",
    href: "/house",
  },
];

const testimonialBlock = {
  headline: "Co o nás říkají klienti",
  testimonials: [
    {
      title: "John Doe",
      subtitle: "CEO ABC Ltd.",
      content: `
    TEXT, TEXT, TEXT, TEXT,TEXT, TEXT, TEXT, TEXT,TEXT, TEXT, TEXT, TEXT,TEXT, TEXT, TEXT, TEXT,TEXT, TEXT, TEXT, TEXT,TEXT, TEXT, TEXT, TEXT,TEXT, TEXT, TEXT, TEXT,TEXT, TEXT, TEXT, TEXT,TEXT, TEXT, TEXT, TEXT,TEXT, TEXT, TEXT, TEXT,TEXT, TEXT, TEXT,
    `,
    },
  ],
};

const contact = {
  phone: "+420 123 456 789",
  email: "hello@fubi.com",
  company: "FUBI solutions s.r.o.",
  companyId: "09670912",
  companyVat: "09670912",
  addressCountry: "Czech Republic",
  bankAccount: "2953902002/5500",
};

const footerNavigation = [
  {
    href: "/terms",
    title: "Obchodní podmínky",
  },
  {
    href: "/conds",
    title: "Zásady ochrany osobních dat",
  },
];

interface ContactProps {
  title: string;
  content: React.ReactNode;
}

function Contact(props: ContactProps) {
  return (
    <div className="py-4">
      <div className="text-primary mb-4">{props.title}</div>
      <div className="text-gray-300">{props.content}</div>
    </div>
  );
}

export function Footer() {
  return (
    <footer aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-8 lg:pt-32">
        <div
          className="relative"
          style={{
            background:
              'url("https://fubipod.com/img/modely/12_09_2023_7247.jpg") no-repeat bottom',
          }}
        >
          <div className="grid md:grid-cols-2 pt-28 pb-9">
            <div>Play</div>
            <div className="flex justify-center">
              {testimonialBlock.testimonials.map((item, index) => (
                <div
                  className="bg-bg text-gray-300 w-96 p-10 z-50 lg:relative"
                  key={index}
                >
                  <ColumnTitle title={testimonialBlock.headline} />
                  <BlockContent content={item.content} className="py-10" />
                  <div className="text-primary">{item.title}</div>
                  <div>{item.subtitle}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid md:grid-cols-2 bg-bg-light md:absolute bottom-0 w-full">
            <div className="grid grid-cols-2 lg:grid-cols-4 mx-auto">
              {footerIconsNavigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="flex items-center justify-center p-4"
                >
                  <Image src={item.image} width={100} height={100} alt="" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-3">
          <div className="p-10 border-">
            <Contact
              title="Kontakt"
              content={
                <Link href={`tel:${contact.phone}`}>{contact.phone}</Link>
              }
            />
            <Contact
              title="Email"
              content={
                <Link href={`mailto:${contact.email}`}>{contact.email}</Link>
              }
            />
          </div>
          <div className="p-10 border-l-2 border-bg-light">
            <Contact
              title="Kontakt"
              content={
                <>
                  <div>{contact.company}</div>
                  <div>
                    ICO:{contact.companyId} DIC:{contact.companyVat}
                  </div>
                  <div>{contact.bankAccount}</div>
                  <div>{contact.addressCountry}</div>
                </>
              }
            />
          </div>
          <div className="p-10 flex border-l-2 border-bg-light items-center">
            <form className="flex-1">
              <div className="bg-primary flex justify-center items-center">
                <input
                  className="bg-bg text-gray-300 text-center ml-1 h-8 flex-1"
                  type="email"
                  placeholder="@example.com"
                  required
                />
                <Button
                  className="text-center text-white px-4"
                  onClick={() => null}
                >
                  Odebírat newsletter
                </Button>
              </div>
            </form>
          </div>
        </div>
        <div className="grid lg:grid-cols-3">
          <div className="p-10 border-t-2 border-bg-light" />
          {footerNavigation.map((item, index) => (
            <div
              className="p-10 border-l-2 border-t-2 border-bg-light"
              key={index}
            >
              <Link href={item.href} className="text-gray-300">
                {item.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;

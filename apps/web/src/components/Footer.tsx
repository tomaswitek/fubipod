import Image from "@/components/Image";
import {BlockContent} from "@/components/Block";
import {ColumnTitle} from "@/components/ColumnTitle";
import {Link} from "@/components/Link";
import {NewsletterForm} from "@/components/NewsletterForm";
import {client} from "api";

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

export async function Footer() {
  const categoryNavigation = await client.getNavigation("categories");
  const global = await client.getGlobalData();
  const footerNavigation = await client.getNavigation("footer");
  const newsletterForm = await client.getForm("newsletter");

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
              {categoryNavigation?.items.map((item) => (
                <a
                  key={item.id}
                  href={item.page?.slug || "#"}
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
              title="Telefon"
              content={<Link href={`tel:${global.phone}`}>{global.phone}</Link>}
            />
            <Contact
              title="Email"
              content={
                <Link href={`mailto:${global.email}`}>{global.email}</Link>
              }
            />
          </div>
          <div className="p-10 border-l-2 border-bg-light">
            <Contact
              title="Kontakt"
              content={
                <>
                  <div>{global.company}</div>
                  <div>
                    ICO:{global.company_id} DIC:{global.company_vat}
                  </div>
                  <div>{global.bank_account}</div>
                  <div>{global.address_country}</div>
                </>
              }
            />
          </div>
          <div className="p-10 flex border-l-2 border-bg-light items-center">
            {newsletterForm && <NewsletterForm form={newsletterForm} />}
          </div>
        </div>
        <div className="grid lg:grid-cols-3">
          <div className="p-10 border-t-2 border-bg-light" />
          {footerNavigation?.items.map((item, index) => (
            <div
              className="p-10 border-l-2 border-t-2 border-bg-light"
              key={index}
            >
              <Link href={item.page?.slug} className="text-gray-300">
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

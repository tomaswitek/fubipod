import {Link} from "@/components/Link";
import {NewsletterForm} from "@/components/NewsletterForm";
import {client} from "api";

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
  const global = await client.getGlobalData();
  const footerNavigation = await client.getNavigation("footer");
  const newsletterForm = await client.getForm("newsletter");

  return (
    <footer aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-8">
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

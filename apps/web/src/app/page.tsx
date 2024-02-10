import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {Page} from "@/components/Page";
// import {GetStaticProps} from "next";

// export const getStaticProps: GetStaticProps = async (context) => {
//   console.log("getStaticPropssssssssss", context);
//   const {locale} = context;
//   return {props: {locale}};
// };

interface Props {
  locale: string;
}

export default async function Home(props: Props) {
  return (
    <main>
      <div
        style={{
          background:
            'url("https://fubipod.com/img/modely/12_09_2023_7247.jpg") no-repeat top',
        }}
      >
        <Header />
        <Page {...props} slug="home" />
      </div>
      <Footer />
    </main>
  );
}

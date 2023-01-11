import Header from "./header/Header";
import Footer from "./footer/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header client={"Chandigarh University"} account={"Student"} />
      <main>{children}</main>
      <Footer />
    </>
  );
}

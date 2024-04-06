import Footer from "../components/Footer";
import Header from "../components/Header";


interface Props {
  children: React.ReactNode; // component(parent min-h-screen)
}
// flex-1 means acquire all the free space
const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="p-5 md:container mx-auto py-10 flex-1">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;

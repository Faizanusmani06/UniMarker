const Footer = () => {
  return (
    <div className="bg-[#C6483C]  py-10">
      <div className="p-5 md:container mx-auto flex justify-between items-center">
        <span className="flex flex-col">
        <div className="text-3xl text-[#F9F9F8] font-bold tracking-tight">
          UniMarker
        </div>
        <div className="text-sm text-[#F9F9F8] font-semibold opacity-50">
          Developed by <a href="https://github.com/Faizanusmani06">Nerds Network</a>
        </div>
        </span>
        <span className="text-[#F9F9F8] font-bold tracking-tight flex flex-col md:flex-row gap-2 md:gap-4">
          <p className="cursor-pointer text-center">Privacy Policy</p>
          <p className="cursor-pointer">Terms of service</p>
        </span>
      </div>
    </div>
  );
};

export default Footer;

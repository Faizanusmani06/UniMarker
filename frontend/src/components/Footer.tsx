const Footer = () => {
  return (
    <div className="bg-gray-950 py-10">
      <div className="px-5 md:container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-3xl md:text-4xl text-white font-bold tracking-tight mb-4 md:mb-0">
          UniMarker
        </div>
        <div className="text-sm text-white font-semibold opacity-50 mb-4 md:mb-0">
          Developed by <a href="https://github.com/Faizanusmani06" className="underline">Nerds Network</a>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <p className="cursor-pointer text-white hover:text-gray-300">Privacy Policy</p>
          <p className="cursor-pointer text-white hover:text-gray-300">Terms of Service</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

const Footer = () => {
  return (
    <footer className="w-full text-center text-stone-300 font-Montserrat">
      <hr className="h-px mt-4 bg-stone-400 border-0 dark:bg-stone-700" />
      <h2 className="mt-2">© {new Date().getFullYear()}</h2>
    </footer>
  );
};

export default Footer;

const Footer = () => {
  return (
    <footer className="w-full text-center text-slate-600">
      <hr className="h-px mt-4 bg-gray-200 border-0 dark:bg-gray-700" />
      <h2 className="mt-2">© {new Date().getFullYear()}</h2>
    </footer>
  );
};

export default Footer;

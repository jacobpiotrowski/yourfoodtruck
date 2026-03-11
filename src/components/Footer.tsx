const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-6 text-center text-muted-foreground text-sm">
        © {new Date().getFullYear()} — Custom Food Trucks. Made in Poland.
      </div>
    </footer>
  );
};

export default Footer;

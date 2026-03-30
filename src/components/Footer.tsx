import jewishSwagShopLogo from "@/assets/jewish-swag-shop.png";

const Footer = () =>
  <>
    <footer className="bg-foreground text-primary-foreground py-12 px-4">
      <div className="container max-w-4xl mx-auto text-center">
        <h3 className="font-display text-2xl font-bold mb-3">Welcome Home</h3>
        <p className="font-body text-primary-foreground/70 max-w-lg mx-auto mb-6">Kansas City's Jewish community is warm, welcoming, and growing.
We're so glad you're here.
      </p>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-body text-primary-foreground/50 mb-8">
          <a href="https://www.biav.org" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground/80 transition-colors">Congregation BIAV</a>
          <a href="https://jewisheventskc.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground/80 transition-colors">Jewish Events KC</a>
          <a href="https://kckoshercoop.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground/80 transition-colors">KC Kosher Co-Op</a>
        </div>
      </div>
    </footer>
    <div className="bg-[hsl(210,60%,90%)] w-full py-3">
      <div className="container max-w-4xl mx-auto px-4">
        <a href="https://jewishswagshop.org/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 hover:opacity-80 transition-opacity">
          <img src={jewishSwagShopLogo} alt="Jewish Swag Shop" className="h-[125px] w-auto" />
          <span className="text-sm font-body text-[hsl(215,30%,25%)] uppercase tracking-wide">This Guide is Sponsored by Jewish Swag Shop</span>
        </a>
      </div>
    </div>
  </>;


export default Footer;
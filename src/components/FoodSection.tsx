import SectionHeader from "./SectionHeader";
import InfoCard from "./InfoCard";
import { ShoppingCart, Coffee, IceCream, Pizza, UtensilsCrossed, Cookie, ChefHat, Wine, Waves, Building } from "lucide-react";

const FoodSection = () => {
  return (
    <section id="food" className="section-padding" style={{ background: "var(--section-gradient)" }}>
      <div className="container max-w-6xl mx-auto">
        <SectionHeader
          title="Kosher Eats & Treats"
          subtitle="From grocery stores to restaurants, KC has a growing kosher food scene."
          icon={<UtensilsCrossed size={32} />}
        />

        <div className="grid md:grid-cols-2 gap-6">
          <InfoCard title="Hen House" icon={<ShoppingCart size={20} />}>
            <p className="mb-1 font-semibold text-foreground">11721 Roe Ave in Leawood, KS (near HBHA)</p>
            <p className="mt-2"><strong>Entirely kosher bakery</strong> — with dairy and parve options: donuts, cookies, cupcakes, cakes (custom and ready made), pies, pastries, breads, bagels, and more.</p>
            <p className="mt-2"><strong>Kosher deli counter</strong> — fresh sliced deli, fresh rotisserie chickens, fresh fried chicken tenders, fresh salads and sides (including kugels, soups, gefilte fish, and more).</p>
            <p className="mt-2"><strong>Kosher cheese</strong> — largest selection of kosher cheeses in Kansas including bleu cheese, Muenster, Parmesan, Gouda, and more — selection of cheese will vary.</p>
            <p className="mt-2"><strong>Kosher dry goods</strong> — including some packaged chalav yisroel and pas yisroel items, frozen packaged foods (pizza, fish sticks, blintzes, chicken nuggets, etc.), and the largest Pesach selection in Kansas.</p>
          </InfoCard>

          <InfoCard title="KC Kosher CoOp" icon={<ShoppingCart size={20} />}>
            <p className="mb-1">Order online, pickup at BIAV. Deliveries come every few months.</p>
            <p className="mt-2">Carries a tremendous variety of meat, poultry, and fish along with packaged and frozen prepared foods and snacks.</p>
            <a href="https://kckoshercoop.com" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline mt-2 inline-block">
              Check out their offerings at kckoshercoop.com →
            </a>
          </InfoCard>

          <InfoCard title="Trader Joe's" icon={<ShoppingCart size={20} />}>
            <p>There are two locations, in Leawood, KS and Kansas City, MO, with a third opening in Merriam. The usual challah, baked goods, cheeses, yogurts, and milk available year round. Select chicken, ground meat, stew meat, small briskets, and turkey available at certain times.</p>
          </InfoCard>

          <InfoCard title="HyVee" icon={<ShoppingCart size={20} />}>
            <p className="mb-1 font-semibold text-foreground">8501 W 95th St. (just outside the eruv)</p>
            <p className="mt-2">Carries a modest kosher section including some dry goods and frozen items.</p>
          </InfoCard>

          <InfoCard title="Costco" icon={<ShoppingCart size={20} />} accent="sage">
            <p className="mb-1 font-semibold text-foreground">12221 Blue Valley Parkway</p>
            <p className="mt-2"><strong>Kosher meat:</strong> fresh boneless, skinless chicken breast and ground turkey along with frozen ground beef, briskets, and occasionally other cuts of beef (like steak). They also stock salami and pastrami.</p>
            <p className="mt-2"><strong>Kosher cheese:</strong> shredded cheese (mozzarella and Mexican blend) and cheese platters of sliced cheese.</p>
            <p className="mt-2"><strong>Kosher fish:</strong> a variety of lox and white fish salad.</p>
            <p className="mt-2"><strong>Kosher dry goods:</strong> Kedem grape juice year round and holiday selections (prepackaged hamentashen and Pesach items).</p>
          </InfoCard>

          <InfoCard title="Bagels" icon={<Coffee size={20} />} accent="primary">
            <p><strong>Meshuggah Bagels</strong> is a fully hechshered bagel shop with a variety of shmears. The two kosher locations are located at 1208 W 39th Street in Kansas City, MO and 7096 W 105th Street in Overland Park, KS.</p>
            <p className="mt-2"><strong>Hen House bakery</strong> on Nall Ave includes fresh bagels.</p>
          </InfoCard>

          <InfoCard title="Ice Cream" icon={<IceCream size={20} />} accent="primary">
            <p>Ice cream can be found at <strong>Andy's Ice Cream</strong> (frozen custard is kosher, toppings aren't certified), <strong>Coldstone Creamery</strong> (entire shop is hechshered), <strong>Blue Chip Ice Cream and Cookies</strong> (ice cream is kosher).</p>
          </InfoCard>

          <InfoCard title="Donuts" icon={<Cookie size={20} />} accent="sage">
            <p><strong>Krispy Kreme</strong> located at 10390 Metcalf Ave is fully hechshered.</p>
          </InfoCard>

          <InfoCard title="Pizza" icon={<Pizza size={20} />} accent="primary">
            <p><strong>Chai Pies</strong> offers kosher, chalav yisrael pizza nights at Torah Learning Center, located on 103rd and Antioch. Dairy-free and gluten-free options are also available.</p>
          </InfoCard>

          <InfoCard title="Caterers" icon={<ChefHat size={20} />} accent="sage">
            <p>There are several local caterers who provide kosher, Vaad-supervised food for events and parties. See <a href="https://vaadkc.org" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">vaadkc.org</a> for more info.</p>
          </InfoCard>

          <InfoCard title="Rams Cafe" icon={<UtensilsCrossed size={20} />} accent="warm">
            <p><strong>Rams Cafe</strong> is operated by volunteers, primarily HBHA parents and grandparents. It's open Monday through Friday during the school year and serves a variety of prepared foods and snacks, including sushi, when HBHA is in session. The cafe sometimes offers prepared foods from select caterers in the summer.</p>
          </InfoCard>

          <InfoCard title="The J Pool Snack Bar" icon={<Waves size={20} />} accent="primary">
            <p>Snack bar at <strong>the J pool</strong> serves hot kosher items (burgers, hot dogs, fries, etc.) poolside on certain days when the pool is open for the summer season. Kosher dairy options are also available.</p>
          </InfoCard>

          <InfoCard title="The Heritage Center" icon={<Building size={20} />} accent="sage">
            <p><strong>The Heritage Center</strong> at the J offers kosher meals and is open to the public. Be sure to preorder by 10:00 am that morning. Learn more at 913-327-8044 or visit <a href="https://thejkc.org" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">thejkc.org</a>.</p>
          </InfoCard>

          <InfoCard title="Kosher Wine" icon={<Wine size={20} />} accent="warm">
            <p><strong>MDL</strong>, located at 95th and Antioch, has a good sized selection of kosher wine. Other stores with kosher wine selections include <strong>Trader Joe's</strong> on Ward Parkway in Kansas City, MO and <strong>Harry's Liquor</strong> on Nall Ave.</p>
          </InfoCard>
        </div>
      </div>
    </section>
  );
};

export default FoodSection;

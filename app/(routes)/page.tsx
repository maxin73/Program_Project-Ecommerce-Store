import getProducts from "@/actions/get-products";
import getBillboard from "@/actions/get-billboard";
import Container from "@/components/ui/container";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  // Mayu's billboard sample
  // const billboard = await getBillboard("a9cf881a-2ba7-4193-97b4-6d1f916e34cb");

  // Nami's billboard sample
  // const billboard = await getBillboard("5d9cd847-34c1-4f12-992a-3b125c01ab09");
  const billboard = await getBillboard();

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
}

export default HomePage;
import AddressForm from "@/components/checkout/address/Form";
import Title from "@/components/ui/title/Title";

export default function Address() {
  return (
    <div className="px-10 sm:px-36">
      <Title title="Address" subtitle="Delivery address" />

      <AddressForm />
    </div>
  );
}

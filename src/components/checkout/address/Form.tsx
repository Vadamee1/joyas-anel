import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function AddressForm() {
  return (
    <div className="grid grid-cols-2 gap-5">
      <div>
        <Label>Name</Label>
        <Input className="focus:bg-slate-100" placeholder="Name" />
      </div>
      <div>
        <Label>Lastname</Label>
        <Input className="focus:bg-slate-100" placeholder="Lastname" />
      </div>
      <div>
        <Label>Address</Label>
        <Input className="focus:bg-slate-100" placeholder="Address" />
      </div>
      <div>
        <Label>Second address (optional)</Label>
        <Input className="focus:bg-slate-100" placeholder="Second address" />
      </div>
      <div>
        <Label>Zip code</Label>
        <Input className="focus:bg-slate-100" placeholder="Zip code" />
      </div>
      <div>
        <Label>City</Label>
        <Input className="focus:bg-slate-100" placeholder="City" />
      </div>
      <div>
        <Label>Country</Label>
        <Input className="focus:bg-slate-100" placeholder="Country" />
      </div>
      <div>
        <Label>Cellphone</Label>
        <Input className="focus:bg-slate-100" placeholder="Cellphone" />
      </div>
    </div>
  );
}

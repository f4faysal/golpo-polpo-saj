import { Facebook } from "lucide-react";
import Image from "next/image";

const TopBar = () => {
  return (
    <div className="flex-center text-sm text-white bg-primary py-4 gap-2">
      <Image src="/shippingTruck.svg" alt="shipping" width={22} height={16} />
      <h6 className="font-normal">FREE USA SHIPPING ON ORDERS OVER $30 !</h6>
      <h6 className="font-light">INTERNATIONAL SHIPPING AVAILABLE.</h6>
      <Facebook size={18} />
    </div>
  );
};

export default TopBar;

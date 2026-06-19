import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { CheckCircle, CreditCard, Banknote, Smartphone } from "lucide-react";
import { useCart } from "../../context/CartContext";
import { useRouteLoading } from "../../context/RouteLoadingContext";
import { formatPrice } from "../../utils/formatPrice";
import PageSkeleton from "../../components/common/PageSkeleton";

const Checkout = () => {
  const { items, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const loading = useRouteLoading();
  const [step, setStep] = useState("form");
  const [payment, setPayment] = useState("cod");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "Dhaka",
    notes: "",
  });

  const deliveryFee = cartTotal >= 5000 ? 0 : 120;
  const total = cartTotal + deliveryFee;

  if (loading && step !== "success") {
    return (
      <main>
        <PageSkeleton />
      </main>
    );
  }

  if (items.length === 0 && step !== "success") {
    navigate("/cart");
    return null;
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep("success");
    clearCart();
  };

  if (step === "success") {
    return (
      <main className="min-h-[60vh] flex items-center justify-center py-16">
        <div className="text-center max-w-md mx-auto px-4">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-2">Order Placed Successfully!</h1>
          <p className="text-dimmed mb-2">
            Thank you, {form.name || "Customer"}! Your order has been received.
          </p>
          <p className="text-sm text-dimmed mb-6">
            We'll call you at {form.phone || "your number"} to confirm delivery.
          </p>
          <Link
            to="/shop"
            className="inline-block bg-primary hover:bg-primary-hover text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </main>
    );
  }

  const paymentMethods = [
    { id: "cod", label: "Cash on Delivery", icon: Banknote },
    { id: "bkash", label: "bKash", icon: Smartphone },
    { id: "card", label: "Credit/Debit Card", icon: CreditCard },
  ];

  return (
    <main className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>

        <form onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h2 className="font-bold text-lg mb-4">Shipping Information</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Full Name *</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Phone *</label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      type="tel"
                      className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                      placeholder="01XXXXXXXXX"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      type="email"
                      className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                      placeholder="email@example.com"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium mb-1">Address *</label>
                    <textarea
                      name="address"
                      value={form.address}
                      onChange={handleChange}
                      required
                      rows={2}
                      className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none"
                      placeholder="House, Road, Area"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">City *</label>
                    <select
                      name="city"
                      value={form.city}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                    >
                      <option>Dhaka</option>
                      <option>Chittagong</option>
                      <option>Sylhet</option>
                      <option>Rajshahi</option>
                      <option>Khulna</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Order Notes</label>
                    <input
                      name="notes"
                      value={form.notes}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                      placeholder="Optional"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h2 className="font-bold text-lg mb-4">Payment Method</h2>
                <div className="space-y-3">
                  {paymentMethods.map(({ id, label, icon: Icon }) => (
                    <label
                      key={id}
                      className={`flex items-center gap-3 p-4 border rounded-xl cursor-pointer transition-colors ${
                        payment === id
                          ? "border-primary bg-primary/5"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <input
                        type="radio"
                        name="payment"
                        value={id}
                        checked={payment === id}
                        onChange={() => setPayment(id)}
                        className="accent-primary"
                      />
                      <Icon className="w-5 h-5 text-dimmed" />
                      <span className="font-medium text-sm">{label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-xl border border-gray-200 p-6 sticky top-4">
                <h2 className="font-bold text-lg mb-4">Order Summary</h2>
                <div className="space-y-3 mb-4 max-h-48 overflow-y-auto">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span className="text-dimmed line-clamp-1 flex-1 mr-2">
                        {item.name} × {item.quantity}
                      </span>
                      <span className="font-medium shrink-0">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-gray-200 pt-3 space-y-2 text-sm mb-6">
                  <div className="flex justify-between">
                    <span className="text-dimmed">Subtotal</span>
                    <span>{formatPrice(cartTotal)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-dimmed">Delivery</span>
                    <span>{deliveryFee === 0 ? "Free" : formatPrice(deliveryFee)}</span>
                  </div>
                  <div className="flex justify-between font-bold text-base pt-2">
                    <span>Total</span>
                    <span className="text-brand">{formatPrice(total)}</span>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-brand hover:bg-brand-hover text-white font-semibold py-3 rounded-lg transition-colors"
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Checkout;

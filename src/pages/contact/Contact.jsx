import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useRouteLoading } from "../../context/RouteLoadingContext";
import PageSkeleton from "../../components/common/PageSkeleton";

const Contact = () => {
  const loading = useRouteLoading();

  if (loading) {
    return (
      <main>
        <PageSkeleton />
      </main>
    );
  }

  return (
    <main className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
          <p className="text-dimmed">Visit our store or get in touch — we're here to help</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl border border-gray-200 p-8">
            <h2 className="font-bold text-lg mb-6">Store Information</h2>
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-sm">Address</p>
                  <p className="text-dimmed text-sm mt-0.5">
                    123 Tech Street, Multiplan Center (Level 4),<br />
                    Elephant Road, Dhaka-1205, Bangladesh
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-sm">Phone</p>
                  <p className="text-dimmed text-sm mt-0.5">+880 1712-345678</p>
                  <p className="text-dimmed text-sm">+880 9612-345678</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-sm">Email</p>
                  <p className="text-dimmed text-sm mt-0.5">info@rscomputer.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-sm">Opening Hours</p>
                  <p className="text-dimmed text-sm mt-0.5">Sat – Thu: 10:00 AM – 9:00 PM</p>
                  <p className="text-dimmed text-sm">Friday: 3:00 PM – 9:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-8">
            <h2 className="font-bold text-lg mb-6">Send a Message</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you! We'll get back to you soon.");
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  required
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Phone</label>
                <input
                  required
                  type="tel"
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                  placeholder="01XXXXXXXXX"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  required
                  rows={4}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none"
                  placeholder="How can we help you?"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-hover text-white font-semibold py-3 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="rounded-xl overflow-hidden border border-gray-200 h-64 bg-gray-100 flex items-center justify-center">
          <div className="text-center text-dimmed">
            <MapPin className="w-8 h-8 mx-auto mb-2" />
            <p className="text-sm">Store Map — Elephant Road, Dhaka</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;

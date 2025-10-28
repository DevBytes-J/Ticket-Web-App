import { CheckCircle, Ticket, AlertCircle } from "lucide-react";
import { CgTrack } from "react-icons/cg";
import { IoCreate } from "react-icons/io5";
import { GiPadlock } from "react-icons/gi";

  export const Features = () => (
    <div className="bg-white py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          Why Choose SwiftPass?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-xl shadow-2xl transition duration-300 hover:shadow-primary/50 transform hover:-translate-y-1">
            <div className="text-5xl text-gray-800 mb-4">
             <CgTrack/>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              Real-time Status
            </h3>
            <p className="text-gray-600">
              Track issues with three strict statuses: Open, In Progress, and
              Closed.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-2xl transition duration-300 hover:shadow-primary/50 transform hover:-translate-y-1">
            <div className="text-5xl text-primary mb-4">
              <GiPadlock/>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              Secure Sessions
            </h3>
            <p className="text-gray-600">
              Protected routes ensure data integrity and user privacy.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-2xl transition duration-300 hover:shadow-primary/50 transform hover:-translate-y-1">
            <div className="text-5xl text-gray-800 mb-4">
              <IoCreate/>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              Full CRUD
            </h3>
            <p className="text-gray-600">
              Create, Read, Update, and Delete tickets with ease and
              confirmation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
export default Features;
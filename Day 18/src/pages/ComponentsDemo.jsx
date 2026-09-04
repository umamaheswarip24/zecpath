import { useState } from "react";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Select from "../components/ui/Select";
import Modal from "../components/ui/Modal";
import Loader from "../components/ui/Loader";
import Toast from "../components/ui/Toast";

export default function ComponentsDemo() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const [toastType, setToastType] = useState("info");

  const showToast = (msg, type) => {
    setToastMessage(msg);
    setToastType(type);
    setTimeout(() => setToastMessage(null), 3000);
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-gray-900">UI Component Library</h1>
        <p className="text-gray-600">Day 15 Reusable Design System Showcase</p>
      </div>

      {/* Floating Toast Area */}
      {toastMessage && (
        <div className="fixed top-5 right-5 z-50">
          <Toast 
            message={toastMessage} 
            type={toastType} 
            onClose={() => setToastMessage(null)} 
          />
        </div>
      )}

      <div className="grid gap-8 md:grid-cols-2">
        {/* Buttons */}
        <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-bold text-gray-800">1. Buttons</h2>
          <div className="flex flex-wrap gap-3">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="primary" isLoading={true}>Loading</Button>
          </div>
        </section>

        {/* Form Inputs & Select */}
        <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-bold text-gray-800">2. Inputs & Select</h2>
          <div className="space-y-4">
            <Input label="Standard Input" placeholder="Type here..." />
            <Input label="Input with Error" placeholder="Invalid input..." error="This field is required" />
            <Select 
              label="Select Role" 
              options={[
                { label: "Frontend Developer", value: "frontend" },
                { label: "Backend Developer", value: "backend" },
                { label: "UI/UX Designer", value: "design" }
              ]} 
            />
          </div>
        </section>

        {/* Loaders */}
        <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-bold text-gray-800">3. Loaders</h2>
          <div className="flex items-center justify-around py-4">
            <Loader size="sm" text="Small" />
            <Loader size="md" text="Medium" />
            <Loader size="lg" text="Large" />
          </div>
        </section>

        {/* Modal & Toast Triggers */}
        <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-bold text-gray-800">4. Interactive Feedback</h2>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>
              <Button variant="secondary" onClick={() => showToast("Success notification!", "success")}>
                Toast Success
              </Button>
              <Button variant="danger" onClick={() => showToast("Error occurred!", "error")}>
                Toast Error
              </Button>
            </div>
          </div>
        </section>
      </div>

      {/* Modal Instance */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Reusable Modal">
        <p className="text-gray-600">
          This modal is fully reusable, responsive, and closes with the button or the top-right exit icon.
        </p>
        <div className="mt-6 flex justify-end gap-2">
          <Button variant="secondary" onClick={() => setIsModalOpen(false)}>Cancel</Button>
          <Button variant="primary" onClick={() => setIsModalOpen(false)}>Confirm</Button>
        </div>
      </Modal>
    </div>
  );
}
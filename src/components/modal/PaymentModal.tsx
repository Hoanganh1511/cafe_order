"use client";
import React from "react";
import CoreModal from "./CoreModal";

const PaymentModal = ({
  showModal = false,
  setShowModal,
}: {
  showModal: boolean;
  setShowModal: any;
}) => {
  return (
    <CoreModal isOpen={showModal} onClose={() => setShowModal(false)}>
      <div className="px-[30px]">
        <p className="text-center text-white">Hello from the modal!</p>
      </div>
    </CoreModal>
  );
};

export default PaymentModal;

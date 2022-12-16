import React from "react";

export default function InfoLoadingMessage({ isLoading }) {
  return (
    isLoading && (
      <span className="badge bg-info text-wrap d-block p-2">
        Please wait for image list... loading
      </span>
    )
  );
}



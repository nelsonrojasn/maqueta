import React from "react";

export default function InfoWelcomeMessage({ dataSource, isLoading }) {
  return (
    !isLoading &&
    dataSource.length === 0 && (
      <span className="badge bg-success text-wrap d-block p-2">
        Nothing to see yet! Please select from filters and apply it to get some cute dog images.
      </span>
    )
  );
}


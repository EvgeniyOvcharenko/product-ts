import React from "react";

interface ErrorMessageProps {
  error: string;
}

function ErrorMessage({ error }: ErrorMessageProps) {
  return <p className="loading">{error}</p>;
}

export default ErrorMessage;

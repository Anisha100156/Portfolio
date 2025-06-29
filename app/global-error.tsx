"use client";

import NextError from "next/error";
import { useEffect } from "react";

interface GlobalErrorProps {
  error: Error & { digest?: string };
}

export default function GlobalError({ error }: GlobalErrorProps) {
  useEffect(() => {
    console.error(error); // Optional: You can log the error to console
  }, [error]);

  return (
    <html>
      <body>
        {/* Next.js default error component */}
        <NextError statusCode={500} title="Something went wrong" />
      </body>
    </html>
  );
}

import Link from "next/link";
import React from "react";
import { Button } from "../components/atoms";

export default function Dashboard() {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <Link href="/login" passHref>
        <Button title="Login" />
      </Link>
    </div>
  );
}

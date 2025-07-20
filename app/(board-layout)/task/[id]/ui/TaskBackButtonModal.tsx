"use client";
import { useRouter } from "next/navigation";
import { Button } from "@heroui/button";
import { IconArrowLeft } from "@tabler/icons-react";

export default function TaskBackButtonModal() {
  const router = useRouter();

  return (
    <div>
      <Button
        type="button"
        onClick={() => router.back()}
        variant="flat"
        color="primary"
      >
        <IconArrowLeft size={18} />
        Back
      </Button>
    </div>
  );
}

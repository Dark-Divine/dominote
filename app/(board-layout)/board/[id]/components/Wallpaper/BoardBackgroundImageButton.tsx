"use client";
import { Button } from "@heroui/button";
import { IconBackground } from "@tabler/icons-react";

export default function BoardBackgroundImageButton() {

  return (
    <Button
      color="primary"
      variant="ghost"
      size="sm"
      isIconOnly
    >
      <IconBackground size={16} />
    </Button>
  );
}

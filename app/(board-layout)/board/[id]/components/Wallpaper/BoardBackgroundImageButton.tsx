"use client";
import { useUIContext } from "@/contexts/UIContext";
import { Button } from "@heroui/button";
import { IconBackground } from "@tabler/icons-react";

export default function BoardBackgroundImageButton() {
  const { toggleBackgroundImageSelector } = useUIContext();

  return (
    <Button
      color="primary"
      variant="ghost"
      size="sm"
      isIconOnly
      onClick={toggleBackgroundImageSelector}
    >
      <IconBackground size={16} />
    </Button>
  );
}

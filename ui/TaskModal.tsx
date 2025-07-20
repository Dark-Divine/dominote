"use client";
import { useRouter } from "next/navigation";
import { Modal, ModalContent, ModalBody } from "@heroui/modal";
import { useDisclosure } from "@heroui/use-disclosure";

export default function TaskModal({ children }: { children: React.ReactNode }) {
  const { isOpen } = useDisclosure({ defaultOpen: true });
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      size="5xl"
      scrollBehavior="outside"
      backdrop="blur"
    >
      <ModalContent>
        <ModalBody className="p-0 gap-0">{children}</ModalBody>
      </ModalContent>
    </Modal>
  );
}

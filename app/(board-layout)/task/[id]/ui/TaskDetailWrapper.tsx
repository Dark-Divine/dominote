import { Card, CardBody } from "@heroui/card";
export default function TaskDetailWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Card className="z-10">
      <CardBody className="bg-zinc-950">{children}</CardBody>
    </Card>
  );
}

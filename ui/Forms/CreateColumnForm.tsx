"use client";
import { useState } from "react";
import { toast } from "sonner";
import { handleCreateColumn } from "@/server-actions/ColumnServerActions";
import { IconLoader2, IconPlus } from "@tabler/icons-react";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";

export default function CreateColumnForm({ boardId }: { boardId: string }) {
  const [title, setTitle] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Reset previous validation states
    setIsInvalid(false);
    setErrorMessage("");

    setIsSubmitting(true);
    const response = await handleCreateColumn({ title, boardId });
    setIsSubmitting(false);

    if (response.success) {
      toast.success("Column Created!");
      setTitle("");
    } else {
      if (response.message) {
        setIsInvalid(true);
        setErrorMessage(response.message);
      }
      toast.error(response.message);
    }
  };

  return (
    <div>
      <div className="shrink-0 w-64 md:w-72 h-32 lg:w-80 ml-2 mt-4 border-1 border-white/10 bg-white/5 hover:bg-white/10 p-3 rounded-xl ">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-between h-full"
        >
          <Input
            autoComplete="off"
            type="text"
            id="columnTitle"
            variant="bordered"
            color="primary"
            classNames={{
              inputWrapper: "border-1 border-white/10",
            }}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full"
            size="sm"
            label="Create a new column"
            placeholder="Enter column name"
            isRequired
            isInvalid={isInvalid}
            errorMessage={errorMessage}
          />
          <div>
            <Button
              type="submit"
              isLoading={isSubmitting}
              className="gap-1 bg-[#191920]"
              size="sm"
              variant="flat"
            >
              <IconPlus size={16} />
              Add Column
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

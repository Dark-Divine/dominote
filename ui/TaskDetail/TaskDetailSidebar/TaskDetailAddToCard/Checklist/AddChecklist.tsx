"use client";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Popover, PopoverTrigger, PopoverContent } from "@heroui/popover";
import { Input } from "@heroui/input";
import { IconCheckbox, IconPlus, IconX } from "@tabler/icons-react";
import { Button } from "@heroui/button";
import { handleCreateChecklist } from "@/server-actions/ChecklistServerActions";
import { toast } from "sonner";
import TaskPopoverWrapper from "../components/TaskPopoverWrapper";
import TaskPopoverHeading from "../components/TaskPopoverHeading";

interface FormValues {
  title: string;
}

export default function AddChecklist({
  taskId,
  boardId,
}: {
  taskId: string;
  boardId: string;
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      title: "",
    },
  });

  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    try {
      const response = await handleCreateChecklist({
        title: data.title || undefined,
        taskId,
        boardId,
      });

      if (response.success) {
        toast.success("Checklist Created");
        closePopover();
      } else {
        toast.error(response.message);
      }
    } catch (e) {
      toast.error("An error occurred while creating the checklist.");
    }
    setIsLoading(false);
  };

  const closePopover = () => {
    setIsPopoverOpen(false);
    reset();
  };

  return (
    <li className="flex items-center gap-2">
      <Popover
        placement="left-start"
        triggerScaleOnOpen={false}
        isOpen={isPopoverOpen}
        onOpenChange={setIsPopoverOpen}
      >
        <PopoverTrigger>
          <button className="px-2 py-2 bg-zinc-900 hover:bg-zinc-800 ring-zinc-800 rounded-md flex w-full items-center gap-2 ring-2 hover:ring-primary">
            <IconCheckbox size={14} /> Checklist
          </button>
        </PopoverTrigger>
        <PopoverContent>
          <TaskPopoverWrapper>
            <TaskPopoverHeading title="Checklists" />

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="px-1 py-2 w-full space-y-3"
            >
              <Input
                autoComplete="off"
                label="Checklist title (Optional)"
                placeholder="Checklist"
                {...register("title")}
              />

              <div className="flex gap-2">
                <Button
                  size="sm"
                  color="primary"
                  className="flex items-center"
                  type="submit"
                  isLoading={isLoading}
                >
                  <IconPlus size={16} />
                  Create Checklist
                </Button>
                <Button size="sm" onClick={closePopover} isDisabled={isLoading}>
                  <IconX size={16} className="flex items-center" />
                  Cancel
                </Button>
              </div>
            </form>
          </TaskPopoverWrapper>
        </PopoverContent>
      </Popover>
    </li>
  );
}

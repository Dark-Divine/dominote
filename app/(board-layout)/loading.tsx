import { Spinner } from "@heroui/react";

export default function Loading() {
    return (
        <div className="w-screen h-screen fixed left-0 top-0 flex flex-col justify-center items-center">
            <Spinner />
        </div>
    )
}
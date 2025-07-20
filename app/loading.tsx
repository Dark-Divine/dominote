import { Spinner } from "@heroui/react";

export default function Loading() {
    return (
        <div className="w-screen h-screen fixed left-0 top-0 flex justify-center items-center gap-5">
            <Spinner />
            <p>Loading ...</p>
        </div>
    )
}
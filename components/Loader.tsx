import Image from "next/image";

const Loader = () => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
        <div className="w-10 h-10 relative">
            <Image alt="Loading logo" fill src='/loading.gif' />
        </div>
        <p className="text-sm text-muted-foreground"> Let me think...</p>
    </div>
  );
};

export default Loader;
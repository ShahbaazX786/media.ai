import { Avatar, AvatarImage } from "@/components/ui/avatar";

const BotAvatar = () => {
  return (
    <div>
      <Avatar className="h-8 w-8">
        <AvatarImage className="p-1" src="/MainLogo.png" />
      </Avatar>
    </div>
  );
};

export default BotAvatar;
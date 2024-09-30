import Link from "next/link";
import { auth, signOut } from "@/auth";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default async function UserButon() {
  const session = await auth();

  if (!session?.user) {
    return (
      <div className="flex items-center space-x-3">
        <Button variant={"ghost"}>
          <Link href={"/auth/login"}>Đăng nhập</Link>
        </Button>
        <Button>
          <Link href={"/auth/register"}>Đăng ký</Link>
        </Button>
      </div>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex items-center space-x-2">
          <span>
            {session.user.first_name} {session.user.last_name}
          </span>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Cài đặt</DropdownMenuItem>
        <DropdownMenuItem>
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <button type="submit">Đăng xuất</button>
          </form>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

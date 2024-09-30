import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";

export const LogoutButton = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <Button className="w-full" type="submit" variant={"ghost"}>
        Dang xuat
      </Button>
    </form>
  );
};

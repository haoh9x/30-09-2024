import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Social } from "@/components/auth/social";

interface CardWrapperProps {
  headerTitle: string;
  headerDescription: string;
  children: React.ReactNode;
  backButtonHref: string;
  backButtonLabel: string;
}

export const CardWrapper = ({
  headerTitle,
  headerDescription,
  children,
  backButtonHref,
  backButtonLabel,
}: CardWrapperProps) => {
  return (
    <Card className="w-[400px]">
      <CardHeader className="items-center">
        <CardTitle>{headerTitle}</CardTitle>
        <CardDescription>{headerDescription}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter>
        <Social />
      </CardFooter>
      <CardFooter>
        <Button variant="link" className="font-normal w-full" size="sm" asChild>
          <Link href={backButtonHref}>{backButtonLabel}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

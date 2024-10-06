import Link from "next/link";
import { cn } from "@/lib/utils";

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
  className?: string;
}

export const CardWrapper = ({
  headerTitle,
  headerDescription,
  children,
  backButtonHref,
  backButtonLabel,
  className,
}: CardWrapperProps) => {
  return (
    <Card className={cn("w-[380px]", className)}>
      <CardHeader className="items-center">
        <CardTitle>{headerTitle}</CardTitle>
        <CardDescription>{headerDescription}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardContent className="flex items-center justify-center">
        <span className="text-sm text-gray-500">hoặc</span>
      </CardContent>
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

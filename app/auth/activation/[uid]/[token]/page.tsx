"use client";
import { activeUser } from "@/actions/active-user";
import { Spinner } from "@/components/common/spinner";
import { axiosInstance } from "@/lib/axios";
import { DEFAULT_REGISTER_REDIRECT } from "@/routes";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";

interface Props {
  params: {
    uid: string;
    token: string;
  };
}

export default function ActivationPage({ params }: Props) {
  const router = useRouter();
  useEffect(() => {
    const { uid, token } = params;
    activeUser(uid, token).then((res) => {
      if (res?.success) {
        toast.success(res.success);
        router.push(DEFAULT_REGISTER_REDIRECT);
      }
    });
  }, []);
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 flex items-center">
          <Spinner /> Đang kích hoạt tài khoản...
        </h1>
      </div>
    </div>
  );
}

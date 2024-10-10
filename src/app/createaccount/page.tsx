import CreateAccountForm from "./CreateAccountForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Image from "next/image";
import kahf from "./../../../public/kahf-logo-new1.svg";

import "../authPages.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Account | kafh",
  description: "create a kafh account",
};

const createaccount = async () => {
  const session = await getServerSession();

  if (session) {
    redirect("/links");
  }

  return (
    <div className="loginPageContainer">
      <div className="loginFormCardContainer">
        <div className="loginFormLogoContainer">
          <Image
            width={200}
            height={100}
            src={kahf}
            alt="kahf"
            className="loginLogoImage mr-10 my-2"
          />
        </div>
        <div className="loginFormCard mt-10 bg-white p-10 rounded-xl">
          <div className="loginTitleContainer">
            <p className="loginTitleHeader">Create Account</p>
            <p className="loginTitleText">
              Let&apos;s get you started sharing your links!
            </p>
          </div>
          <CreateAccountForm />
        </div>
      </div>
    </div>
  );
};

export default createaccount;

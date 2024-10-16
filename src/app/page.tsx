import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Image from "next/image";
import kahf from "./../../public/kahf-logo-new1.svg";

import "./authPages.css";
import { Metadata } from "next";
import LoginInputForm from "./LoginInputForm";

export const metadata: Metadata = {
  title: "Login | kahf",
  description: "kahf login page",
};

// export const fetchCache = "force-no-store";

export default async function Home() {
  const session = await getServerSession();

  if (session) {
    redirect("/links");
  }

  return (
    <div className="loginPageContainer">
      <div className="loginFormCardContainer ">
        <div className="loginFormLogoContainer hover:shadow-2xl shadow-green-500">
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
            <p className="loginTitleHeader">Login</p>
            <p className="loginTitleText">
              Add your details below to get back into the app
            </p>
          </div>
          <LoginInputForm />
        </div>
      </div>
    </div>
  );
}

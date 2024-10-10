"use client";
import { LinkProvider } from "../../../../../devLinks/app/links/LinkContext";
import PreviewContent from "./PreviewContent";

const Preview = () => {
  return (
    <LinkProvider>
      <PreviewContent />
    </LinkProvider>
  );
};

export default Preview;

import { Button } from "@nextui-org/react";
import React from "react";

const IconButton = ({
  startIcon,
  label,
  className
}: {
  startIcon: React.ReactNode;
  label: string;
  className: string;
}) => {
  return <Button className={className} startContent={startIcon}>{label}</Button>;
};

export default IconButton;

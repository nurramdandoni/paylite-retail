import {Button, Image} from "@nextui-org/react";
import Styles from "../button/Button.module.css"

export default function Buttons({text = "Button", icon = ""}) {
  return (
    <Button color="default">
      {icon && (
        <Image
          alt="nextui logo"
          height={20}
          radius="sm"
          src={icon}
          width={20}
        />
      )}
      {text}
    </Button>
  );
}
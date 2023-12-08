import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
import Buttons from "../button/buttons";
function Cards({ title = "",src = "",footerName = "",footerLink = "#"}){
    return (
      <div className="flex items-center justify-center h-screens">
        <Card className="min-w-[400px]">
          <CardHeader className="flex gap-3 justify-center items-center">
          {src && (<Image
              alt="nextui logo"
              height={30}
              radius="sm"
              src={src}
              width={30}
            />)}
            <div className="flex flex-col">
              <p className="text-md">{title}</p>
            </div>
          </CardHeader>
          <Divider/>
          <CardBody>
            <Buttons text="Login dengan Google" icon="/google.png"></Buttons>
          </CardBody>
          <Divider/>
          <CardFooter className="justify-center items-center">
            <Link
              isExternal
              showAnchorIcon
              href={footerLink}
            >
              {footerName}
            </Link>
          </CardFooter>
        </Card>
      </div>
    )
}

export default Cards
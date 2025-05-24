import { Button, CardBody, CardFooter, CardHeader, Heading, Input, Separator, Textarea, Card, Text } from "@chakra-ui/react";
import moment from "moment/moment";

export default function Note({ title, description, createdAt }) {
    return(
        <Card.Root variant={"filled"}>
            <CardHeader>
                <Heading size={"md"}>{title}</Heading>
            </CardHeader>
            <Separator variant={"solid"} colorPalette={"gray"}/>
            <CardBody>
                <Text>{description}</Text>
            </CardBody>
            <Separator variant={"solid"}/>
            <CardFooter>{moment(createdAt).format("DD/MM/YYYY h:mm:ss")}</CardFooter>
        </Card.Root>
    );
}
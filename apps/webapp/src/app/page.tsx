import { Button } from "@repo/ui/button";
import { Flex } from "@repo/ui/jsx";

export default function Home() {
  return (
    <Flex
      minWidth="100vw"
      minHeight="screen"
      alignItems="center"
      justifyContent="center"
    >
      <Button>Click me</Button>
    </Flex>
  );
}
